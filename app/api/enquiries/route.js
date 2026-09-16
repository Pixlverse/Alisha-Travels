import { NextResponse } from "next/server";
import { z } from "zod";

import { connectToDatabase } from "@/lib/db";
import { Destination, Enquiry, Package, Service } from "@/models";
import { enquiryToWhatsAppText } from "@/lib/enquiry";
import { sendEnquiryConfirmation, sendEnquiryNotification } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * POST /api/enquiries
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  THE ORDER OF OPERATIONS IN THIS HANDLER IS THE WHOLE POINT.
 * ─────────────────────────────────────────────────────────────────────────
 *
 *   1. Validate.
 *   2. Write the Enquiry to MongoDB.
 *   3. Only then send e-mail, or hand back a WhatsApp URL for the client to
 *      open.
 *
 * The lead is recorded *before* the visitor is handed off, and regardless of
 * which channel they picked. That means a lead exists in the dashboard even if
 * they never actually send the WhatsApp message, and staff never have to check
 * a phone or an inbox to discover that somebody got in touch. On the legacy
 * site submissions went to e-mail only, with no database record at all — the
 * audit could not even establish whether the form could be replied to.
 *
 * A failure to send e-mail never fails the request. The lead is already saved;
 * the reason is stored on `emailError` so it is visible in the dashboard
 * rather than silently lost.
 */

export const runtime = "nodejs";
// Never cached, and never prerendered.
export const dynamic = "force-dynamic";

const payloadSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(120),
  // Optional so a visitor who only wants a phone call is not blocked by it,
  // but required by the form's own UI where it is genuinely useful.
  email: z.string().trim().toLowerCase().email("That does not look like an e-mail address").max(160).or(z.literal("")).optional(),
  phone: z.string().trim().min(6, "Please give us a number we can reach you on").max(32),

  channel: z.enum(["whatsapp", "email"]),
  enquiryType: z.enum(["tours", "other-services"]).default("tours"),
  tourType: z.enum(["customized", "fixed", ""]).default(""),

  destinationSlug: z.string().trim().max(120).optional().default(""),
  packageSlug: z.string().trim().max(160).optional().default(""),
  serviceType: z.string().trim().max(160).optional().default(""),

  travelDates: z
    .object({
      from: z.string().trim().max(40).optional().default(""),
      to: z.string().trim().max(40).optional().default(""),
    })
    .optional()
    .default({ from: "", to: "" }),

  adults: z.coerce.number().int().min(0).max(500).optional().default(0),
  children: z.coerce.number().int().min(0).max(500).optional().default(0),
  budgetRange: z.string().trim().max(40).optional().default(""),

  message: z.string().trim().max(4000).optional().default(""),
  source: z.string().trim().max(200).optional().default(""),
  sourceLabel: z.string().trim().max(120).optional().default(""),

  /**
   * Honeypot. A real person never sees this field, so anything in it came from
   * a bot. We answer 200 with a plausible body so the bot believes it worked
   * and does not go looking for a different way in — but nothing is stored.
   */
  website: z.string().max(200).optional().default(""),
});

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function toDate(value) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request" }, { status: 400 });
  }

  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Some details need checking",
        // Field-level messages so the form can point at the right input.
        fields: Object.fromEntries(
          parsed.error.issues.map((issue) => [issue.path.join("."), issue.message])
        ),
      },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Silently discard bot submissions.
  if (data.website) {
    return NextResponse.json({ ok: true, id: null, whatsappUrl: whatsappUrl() });
  }

  const { allowed, retryAfter } = checkRateLimit(`enquiry:${clientIp(request)}`);
  if (!allowed) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "That is a few enquiries in a short time. Give it a few minutes, or call us on +91 95629 21818.",
      },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  try {
    await connectToDatabase();

    // Resolve slugs to real documents so the enquiry is linked, and capture the
    // names as text too — the admin list must still read correctly if the
    // referenced package is later renamed or deleted.
    const [destination, pkg, service] = await Promise.all([
      data.destinationSlug
        ? Destination.findOne({ slug: data.destinationSlug }).select("_id name").lean()
        : null,
      data.packageSlug
        ? Package.findOne({ slug: data.packageSlug }).select("_id title destination").lean()
        : null,
      data.serviceType
        ? Service.findOne({ title: data.serviceType }).select("_id title").lean()
        : null,
    ]);

    const doc = {
      name: data.name,
      email: data.email || "",
      phone: data.phone,
      channel: data.channel,
      enquiryType: data.enquiryType,
      tourType: data.enquiryType === "tours" ? data.tourType : "",

      destination: destination?._id,
      package: pkg?._id,
      service: service?._id,
      destinationName: destination?.name || "",
      packageTitle: pkg?.title || "",
      serviceType: data.serviceType || "",

      travelDates: {
        from: toDate(data.travelDates?.from),
        to: toDate(data.travelDates?.to),
      },
      adults: data.adults,
      children: data.children,
      budgetRange: data.budgetRange,

      message: data.message,
      status: "new",
      source: data.source,
      sourceLabel: data.sourceLabel,
      referrer: request.headers.get("referer") || "",
    };

    // ── 1. The lead is saved here, before anything else can go wrong. ──
    const enquiry = await Enquiry.create(doc);

    // ── 2. Channel hand-off. ──
    const response = {
      ok: true,
      id: String(enquiry._id),
      whatsappUrl: whatsappUrl(enquiryToWhatsAppText(enquiry.toObject())),
      emailSent: false,
    };

    if (data.channel === "email") {
      const notification = await sendEnquiryNotification(enquiry.toObject());

      if (notification.sent) {
        enquiry.emailSentAt = new Date();
        enquiry.emailError = "";
        response.emailSent = true;
        // Best-effort acknowledgement; its failure is not worth recording
        // against the lead.
        sendEnquiryConfirmation(enquiry.toObject()).catch(() => {});
      } else {
        enquiry.emailError = notification.error || "Unknown e-mail failure";
        console.error("[enquiries] e-mail failed:", enquiry.emailError);
      }
      await enquiry.save();
    }

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("[enquiries] failed to save:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not record that just now. Please call us on +91 95629 21818 or message us on WhatsApp.",
      },
      { status: 500 }
    );
  }
}

/** Anything other than POST is a mistake worth reporting clearly. */
export function GET() {
  return NextResponse.json(
    { ok: false, error: "Send enquiries with POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
