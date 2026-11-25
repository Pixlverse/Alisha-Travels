import Link from "next/link";

import JsonLd from "@/components/site/JsonLd";
import PageHeader from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { EMAILS, OFFICES, PRIMARY_PHONE, SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/seo/schema";

import { pageMetadata } from "@/lib/seo/metadata";
export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    `How ${SITE.name} collects, uses and protects the personal information you share with us.`,
  path: "/privacy-policy/",
});

/** Last reviewed - update this when the policy text changes. */
const UPDATED = "November 2026";

/**
 * /privacy-policy/ - written from what this site actually does: the enquiry
 * and payment forms, Razorpay for card/UPI payments, Resend for e-mail,
 * Cloudinary for images, and Google Tag Manager loaded only after the cookie
 * banner is accepted (components/site/CookieConsent.js). If any of those
 * change, change the matching section here.
 */
const SECTIONS = [
  {
    title: "Who we are",
    body: [
      `${SITE.legalName} is a travel agency based at ${OFFICES[0].address}. In this policy "we" and "us" means ${SITE.name}, and "you" means anyone who uses this website or books travel with us.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "When you send an enquiry, request a quote or call us: your name, phone number, e-mail address, and the details of the trip you are planning - destination, dates, number of travellers and any message you write.",
      "When you book: the details needed to arrange your travel, which can include the full names, dates of birth, passport details and photographs of every traveller, and any visa documents, as airlines, hotels and visa authorities require them.",
      "When you pay online: your name, phone, e-mail, booking reference and the amount. Card, UPI and bank details are entered on Razorpay's secure payment window and go directly to Razorpay - they never reach our servers, and we never see or store your full card number.",
      "When you browse: if you accept cookies, Google Analytics (through Google Tag Manager) records how the site is used - pages visited, device and approximate location. If you decline, these are not loaded at all.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "To answer your enquiry, prepare quotes and itineraries, make and manage your bookings, apply for visas, take payments and send receipts, and contact you about your trip - including changes and emergencies while you are travelling.",
      "To keep the records that tax and accounting law requires.",
      "To understand how the website is used, so we can improve it (only with your consent).",
      "We do not sell your personal information, and we do not send marketing messages unless you have asked to hear from us.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "Only those who need it to deliver your trip or run this service: airlines, hotels, transport and tour operators, visa authorities and embassies, and insurers you choose to buy cover from.",
      "Service providers who process data for us: Razorpay (online payments), Resend (e-mail), Cloudinary (website images), our website hosting and database providers, and Google (analytics, only with your consent).",
      "Government or law-enforcement authorities where the law requires it.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "Enquiry details are kept for as long as they are useful for your trip planning, and booking and payment records for as long as Indian tax and accounting law requires. Passport and visa documents are kept only as long as needed for the booking they were provided for.",
    ],
  },
  {
    title: "Keeping it safe",
    body: [
      "The website runs over HTTPS, online payments are handled entirely by Razorpay, and access to booking records is limited to our staff who need it. No system is perfectly secure, but we take reasonable care to protect your information.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      "You can ask to see the personal information we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it. You can withdraw consent to analytics cookies at any time by clearing this site's data in your browser.",
      "Under India's Digital Personal Data Protection Act, 2023, you may also raise a grievance with us using the contact details below.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top shows when it was last changed.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ label: "Privacy Policy" }])} />

      <PageHeader
        eyebrow={`Last updated ${UPDATED}`}
        title="Privacy Policy"
        lead="What we collect when you enquire, book or pay, why we need it, and who it is shared with."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Section className="py-6 sm:py-7">
        <div className="container-page max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
              {section.body.map((text) => (
                <p key={text} className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {text}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-3xl bg-mist-50 p-6 ring-1 ring-line sm:p-7">
            <h2 className="text-xl font-semibold text-ink">Contact us</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
              For any question or request about your personal information, write to{" "}
              <a href={`mailto:${EMAILS.primary}`} className="font-semibold text-brand-700">
                {EMAILS.primary}
              </a>
              , call{" "}
              <a href={`tel:${PRIMARY_PHONE.tel}`} className="font-semibold text-brand-700">
                {PRIMARY_PHONE.display}
              </a>{" "}
              or visit us at {OFFICES[0].address}. See also our{" "}
              <Link href="/terms-and-conditions/" className="font-semibold text-brand-700 underline underline-offset-4">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
