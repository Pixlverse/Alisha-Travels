import { Building2, Phone, ShieldCheck } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import PaymentForm from "@/components/site/PaymentForm";
import { Section } from "@/components/site/Section";
import { isTestMode } from "@/lib/razorpay";
import { PRIMARY_PHONE } from "@/lib/site";

// Test mode is read from the environment per request.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Pay Online",
  description:
    "Pay your Alisha Tours & Travels booking advance or balance online by UPI, card or net banking, processed securely by Razorpay.",
  alternates: { canonical: "/pay/" },
  // A utility page for people who have already booked, not a landing page.
  robots: { index: false, follow: true },
};

/**
 * /pay/ - online payment for a booking already agreed with the office.
 *
 * Reads ?ref=, ?amount=, ?purpose=, ?name=, ?phone= and ?email= so staff can
 * send a traveller a link that opens with everything filled in.
 */
export default async function PayPage({ searchParams }) {
  const params = (await searchParams) || {};
  const pick = (key, max) => (typeof params[key] === "string" ? params[key].slice(0, max) : "");
  const initial = {
    ref: pick("ref", 120),
    amount: pick("amount", 12).replace(/[^\d.]/g, ""),
    purpose: pick("purpose", 12),
    name: pick("name", 120),
    phone: pick("phone", 32),
    email: pick("email", 160),
  };

  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-5 sm:py-6">
          <Breadcrumbs
            items={[{ label: "Contact", href: "/contact/" }, { label: "Pay online" }]}
            className="mb-8"
          />
          <h1 className="max-w-3xl text-[2.25rem] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[3rem]">
            Pay for your booking.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Pay your advance or balance online via UPI, card or net banking.
          </p>
        </div>
      </header>

      <Section className="py-6 sm:py-7">
        {isTestMode() ? (
          <div className="container-page mb-6">
            <p
              role="note"
              className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3.5 text-sm text-amber-900"
            >
              <strong>Test mode.</strong> Payments on this site are simulated - no real money is
              taken. Use Razorpay&apos;s test card or UPI details.
            </p>
          </div>
        ) : null}
        <div className="container-page grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
            <PaymentForm initial={initial} />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <Note icon={<ShieldCheck className="size-5" aria-hidden="true" />} title="Processed by Razorpay">
              The payment window is Razorpay&apos;s, one of India&apos;s largest payment gateways.
              Card and bank details go straight to them - we never see or store them.
            </Note>
            <Note icon={<Building2 className="size-5" aria-hidden="true" />} title="Pay the amount we quoted">
              Enter the advance or balance from your quote or invoice, and your booking reference
              so we can match it to your file.
            </Note>
            <Note icon={<Phone className="size-5" aria-hidden="true" />} title="Not sure how much?">
              Call us on{" "}
              <a href={`tel:${PRIMARY_PHONE.tel}`} className="font-semibold text-brand-700 hover:underline">
                {PRIMARY_PHONE.display}
              </a>{" "}
              before you pay, and we will confirm the figure.
            </Note>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Note({ icon, title, children }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-mist-50 p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-700">
        {icon}
      </span>
      <div>
        <h2 className="text-[0.9375rem] font-semibold text-ink">{title}</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{children}</p>
      </div>
    </div>
  );
}
