import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";

import NotesEditor from "@/components/admin/NotesEditor";
import StatusSelect from "@/components/admin/StatusSelect";
import EnquiryRowActions from "../EnquiryRowActions";
import { Button } from "@/components/ui/button";
import { requireSession } from "@/lib/auth";
import { getEnquiryById } from "@/lib/data/enquiries";
import { enquiryFields, enquiryToWhatsAppText } from "@/lib/enquiry";
import { whatsappUrl } from "@/lib/whatsapp";
import { telHref } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const enquiry = await getEnquiryById(id);
  return { title: enquiry ? `Enquiry — ${enquiry.name}` : "Enquiry" };
}

export default async function EnquiryDetailPage({ params }) {
  await requireSession();
  const { id } = await params;
  const enquiry = await getEnquiryById(id);
  if (!enquiry) notFound();

  const fields = enquiryFields(enquiry);
  // Prefills a reply in the sales team's own WhatsApp, addressed to the lead.
  const replyOnWhatsApp = `https://wa.me/${String(enquiry.phone).replace(/[^0-9]/g, "")}`;

  return (
    <div className="space-y-6">
      <div>
        <Button asChild variant="ghost" size="sm" className="-ml-2">
          <Link href="/admin/enquiries/">
            <ArrowLeft className="size-4" aria-hidden="true" />
            All enquiries
          </Link>
        </Button>
      </div>

      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink">{enquiry.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Received{" "}
            {new Date(enquiry.createdAt).toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
            {enquiry.source ? ` from ${enquiry.source}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <StatusSelect id={enquiry._id} status={enquiry.status} />
          {/* Delete sits beside the status control, because the two are the
              same decision made two ways — and Lost is almost always the right
              one, which the dialog says. Admin only; the action refuses staff. */}
          <EnquiryRowActions id={enquiry._id} name={enquiry.name} onDeleted />
        </div>
      </header>

      {/* Act on it */}
      <div className="flex flex-wrap gap-2">
        <Button asChild>
          <a href={telHref(enquiry.phone)}>
            <Phone className="size-4" aria-hidden="true" />
            Call {enquiry.phone}
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={replyOnWhatsApp} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="size-4" aria-hidden="true" />
            WhatsApp them
          </a>
        </Button>
        {enquiry.email ? (
          <Button asChild variant="outline">
            <a href={`mailto:${enquiry.email}?subject=${encodeURIComponent("Your enquiry — Alisha Tours & Travels")}`}>
              <Mail className="size-4" aria-hidden="true" />
              Reply by e-mail
            </a>
          </Button>
        ) : null}
      </div>

      {enquiry.emailError ? (
        <p className="flex gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-ink">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <span>
            <strong className="font-semibold">The notification e-mail did not send.</strong> The
            lead was still recorded — that is why you can see it here. Reason:{" "}
            <code className="rounded bg-mist-100 px-1">{enquiry.emailError}</code>
          </span>
        </p>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-xl border border-line bg-white p-5">
            <h2 className="text-sm font-bold text-ink">What they sent</h2>
            <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {fields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-muted-foreground">{label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            {enquiry.message ? (
              <div className="mt-5 border-t border-line pt-5">
                <h3 className="text-xs text-muted-foreground">Their message</h3>
                <p className="mt-1.5 text-sm leading-relaxed whitespace-pre-wrap text-ink">
                  {enquiry.message}
                </p>
              </div>
            ) : null}
          </section>

          <section className="rounded-xl border border-line bg-white p-5">
            <h2 className="text-sm font-bold text-ink">Internal notes</h2>
            <p className="mt-1 mb-4 text-xs text-muted-foreground">
              Only visible here. Never sent to the traveller.
            </p>
            <NotesEditor id={enquiry._id} initial={enquiry.adminNotes || ""} />
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-xl border border-line bg-white p-5">
            <h2 className="text-sm font-bold text-ink">Attribution</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <Row label="Channel chosen" value={enquiry.channel} />
              <Row label="Page" value={enquiry.source || "—"} />
              <Row label="Context" value={enquiry.sourceLabel || "—"} />
              <Row label="Referrer" value={enquiry.referrer || "—"} truncate />
              <Row
                label="Notification e-mail"
                value={
                  enquiry.emailSentAt
                    ? `Sent ${new Date(enquiry.emailSentAt).toLocaleString("en-IN")}`
                    : enquiry.channel === "email"
                      ? "Not sent"
                      : "Not applicable (WhatsApp)"
                }
              />
              <Row label="Reference" value={String(enquiry._id).slice(-6).toUpperCase()} />
            </dl>
          </section>

          {enquiry.package || enquiry.destination ? (
            <section className="rounded-xl border border-line bg-white p-5">
              <h2 className="text-sm font-bold text-ink">Linked content</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {enquiry.packageTitle ? (
                  <li className="flex items-center gap-2">
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {enquiry.packageTitle}
                  </li>
                ) : null}
                {enquiry.destinationName ? (
                  <li className="flex items-center gap-2">
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {enquiry.destinationName}
                  </li>
                ) : null}
              </ul>
            </section>
          ) : null}

          <section className="rounded-xl border border-line bg-white p-5">
            <h2 className="text-sm font-bold text-ink">Copy for WhatsApp</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              The summary the traveller would have sent — useful when forwarding to a colleague.
            </p>
            <pre className="mt-3 max-h-56 overflow-auto rounded-lg bg-mist-50 p-3 text-xs leading-relaxed whitespace-pre-wrap text-ink-soft">
              {enquiryToWhatsAppText(enquiry)}
            </pre>
            <Button asChild variant="outline" size="sm" className="mt-3 w-full">
              <a
                href={whatsappUrl(enquiryToWhatsAppText(enquiry))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in WhatsApp
              </a>
            </Button>
          </section>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, truncate }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="shrink-0 text-xs text-muted-foreground">{label}</dt>
      <dd
        className={`text-right text-xs font-medium text-ink ${truncate ? "max-w-[12rem] truncate" : ""}`}
        title={truncate ? String(value) : undefined}
      >
        {value}
      </dd>
    </div>
  );
}
