import Link from "next/link";

import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { PACKAGE_TERMS } from "@/lib/content/package-policies";
import { EMAILS, PRIMARY_PHONE, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

import { pageMetadata } from "@/lib/seo/metadata";
export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    `The booking, payment, cancellation and refund terms for travel booked with ${SITE.name}.`,
  path: "/terms-and-conditions/",
});

/**
 * /terms-and-conditions/ - the same clauses every package page shows under
 * "Terms & conditions" (PACKAGE_TERMS in lib/content/package-policies.js), so
 * there is one copy of the terms and the two can never disagree. Change the
 * terms there.
 */
export default function TermsPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Terms & Conditions" }])} />

      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        lead={`These terms apply to every booking made with ${SITE.name}, whether by phone, at our office, on this website or through an online payment.`}
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page max-w-3xl">
          <ol className="space-y-8">
            {PACKAGE_TERMS.map((clause, index) => (
              <li key={clause.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="pt-1 font-sans text-xs font-bold text-brand-400 tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold text-ink">{clause.title}</h2>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {clause.title === "Privacy Policy" ? (
                      <>
                        We respect your privacy and are committed to protecting your personal data.
                        Please refer to our{" "}
                        <Link href="/privacy-policy/" className="font-semibold text-brand-700 underline underline-offset-4">
                          Privacy Policy
                        </Link>{" "}
                        for details on how we collect, use and protect your information.
                      </>
                    ) : (
                      clause.body
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-3xl bg-mist-50 p-6 text-[0.9375rem] leading-relaxed text-ink-soft ring-1 ring-line sm:p-7">
            <h2 className="text-lg font-semibold text-ink">Questions about these terms</h2>
            <p className="mt-2">
              Call us on{" "}
              <a href={`tel:${PRIMARY_PHONE.tel}`} className="font-semibold text-brand-700">
                {PRIMARY_PHONE.display}
              </a>{" "}
              or write to{" "}
              <a href={`mailto:${EMAILS.primary}`} className="font-semibold text-brand-700">
                {EMAILS.primary}
              </a>
              . Your booking confirmation states the payment schedule and cancellation charges
              that apply to your trip.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
