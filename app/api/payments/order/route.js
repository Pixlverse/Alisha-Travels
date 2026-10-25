import { NextResponse } from "next/server";
import { z } from "zod";

import { connectToDatabase } from "@/lib/db";
import { createOrder, isRazorpayConfigured, razorpayKeyId } from "@/lib/razorpay";
import { checkRateLimit } from "@/lib/rateLimit";
import { PRIMARY_PHONE } from "@/lib/site";
import { Payment } from "@/models";
import { PAYMENT_PURPOSE_VALUES } from "@/models/Payment";

/**
 * POST /api/payments/order
 *
 * Step one of a payment from /pay/: validate the form, create the Razorpay
 * order SERVER-SIDE (so the amount the checkout charges is the amount on our
 * record, not whatever the browser sends later), save the Payment as
 * "created", and hand the checkout what it needs to open.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Online limit per payment; anything larger is better done by bank transfer. */
const MAX_RUPEES = 1000000;

const payloadSchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name").max(120),
  phone: z.string().trim().min(6, "Please give us a number we can reach you on").max(32),
  email: z.string().trim().toLowerCase().email("That does not look like an e-mail address").max(160).or(z.literal("")).optional().default(""),
  bookingRef: z.string().trim().max(120).optional().default(""),
  purpose: z.enum(PAYMENT_PURPOSE_VALUES).default("advance"),
  amount: z.coerce
    .number({ message: "Enter the amount to pay" })
    .min(1, "Enter the amount to pay")
    .max(MAX_RUPEES, "For amounts over ₹10,00,000 please pay by bank transfer - call us for the details"),
  note: z.string().trim().max(500).optional().default(""),
  website: z.string().max(200).optional().default(""),
});

/** Razorpay's checkout only pre-fills a number with its country code. */
function checkoutContact(phone) {
  const digits = phone.replace(/[^\d+]/g, "");
  if (/^\d{10}$/.test(digits)) return `+91${digits}`;
  if (/^91\d{10}$/.test(digits)) return `+${digits}`;
  return digits;
}

function clientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request) {
  if (!isRazorpayConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error: `Online payment is not switched on yet. Please call us on ${PRIMARY_PHONE.display} to pay.`,
      },
      { status: 503 }
    );
  }

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
        fields: Object.fromEntries(
          parsed.error.issues.map((issue) => [issue.path.join("."), issue.message])
        ),
      },
      { status: 422 }
    );
  }
  const data = parsed.data;

  // Honeypot: a bot gets a refusal that looks like any other.
  if (data.website) {
    return NextResponse.json({ ok: false, error: "Please try again." }, { status: 400 });
  }

  const { allowed, retryAfter } = checkRateLimit(`payment:${clientIp(request)}`, { max: 10 });
  if (!allowed) {
    return NextResponse.json(
      { ok: false, error: `Too many attempts. Give it a few minutes, or call us on ${PRIMARY_PHONE.display}.` },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  // Paise, as an integer: ₹1,234.50 is 123450.
  const amount = Math.round(data.amount * 100);

  try {
    await connectToDatabase();

    const order = await createOrder({
      amount,
      receipt: `web-${Date.now().toString(36)}`,
      notes: {
        name: data.name,
        phone: data.phone,
        booking: data.bookingRef,
        purpose: data.purpose,
      },
    });

    await Payment.create({
      name: data.name,
      phone: data.phone,
      email: data.email,
      bookingRef: data.bookingRef,
      purpose: data.purpose,
      note: data.note,
      amount,
      razorpayOrderId: order.id,
      source: request.headers.get("referer") || "",
    });

    return NextResponse.json(
      {
        ok: true,
        keyId: razorpayKeyId(),
        orderId: order.id,
        amount,
        currency: "INR",
        prefill: { name: data.name, email: data.email, contact: checkoutContact(data.phone) },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[payments] could not create order:", error);
    return NextResponse.json(
      {
        ok: false,
        error: `We could not start the payment just now. Please try again, or call us on ${PRIMARY_PHONE.display}.`,
      },
      { status: 502 }
    );
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Use POST." }, { status: 405, headers: { Allow: "POST" } });
}
