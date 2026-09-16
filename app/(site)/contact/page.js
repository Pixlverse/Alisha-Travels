import { Mail, Phone } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import EnquiryForm from "@/components/site/EnquiryForm";
import JsonLd from "@/components/site/JsonLd";
import OfficeCard from "@/components/site/OfficeCard";
import { Section } from "@/components/site/Section";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { getDestinations } from "@/lib/data/destinations";
import { getOffices, getServices } from "@/lib/data/content";
import { EMAILS, OFFICES, PRIMARY_PHONE, SECONDARY_PHONE, SITE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { breadcrumbSchema, officeSchema } from "@/lib/seo/schema";

export const revalidate = 600;

export const metadata = {
  title: "Contact Us — Kottayam, Kerala",
  description:
    "Talk to Alisha Tours & Travels. Our office is in Ettumanoor, Kottayam. Phone, WhatsApp, e-mail and a general enquiry form.",
  alternates: { canonical: "/contact/" },
};

export default async function ContactPage() {
  const [offices, destinations, services] = await Promise.all([
    getOffices(),
    getDestinations(),
    getServices(),
  ]);

  // Fall back to the constants in lib/site.js if the database is unreachable —
  // the contact page is the last page that should ever render empty.
  const officeList = offices.length
    ? offices
    : OFFICES.map((office) => ({ ...office, phones: [], isHeadOffice: office.slug === "kottayam" }));

  return (
    <>
      {/*
        A LocalBusiness node per physical office, each pointing at the
        organisation as its parent. Declared here rather than sitewide because
        this is the page that actually shows the address, the phone numbers and
        the map. One office today, so one node — mapped rather than hardcoded so
        a second one would need no change here.
      */}
      <JsonLd
        schema={[
          ...officeList.map((office) => officeSchema(office)),
          breadcrumbSchema([{ label: "Contact" }]),
        ]}
      />

      <header className="border-b border-line bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page py-5 sm:py-6">
          <Breadcrumbs items={[{ label: "Contact" }]} className="mb-8" />

          <h1 className="max-w-3xl text-[2.25rem] leading-[1.06] font-extrabold tracking-[-0.025em] text-ink sm:text-[3rem]">
            Talk to a person.
            <span className="mt-1.5 block font-display text-[1.75rem] font-semibold tracking-normal text-brand-600 italic sm:text-[2.5rem]">
              Not a booking reference.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            One office in Ettumanoor, Kottayam, and every number below reaches somebody who can
            actually answer. Tell us roughly what you have in mind and we will come back with a
            real itinerary and a real price.
          </p>

          {/* Direct channels, above the form — plenty of visitors would rather
              not fill anything in. */}
          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            <QuickCard
              href={`tel:${PRIMARY_PHONE.tel}`}
              icon={<Phone className="size-5" aria-hidden="true" />}
              label="Call us"
              value={PRIMARY_PHONE.display}
              note={PRIMARY_PHONE.label}
            />
            <QuickCard
              href={whatsappLink()}
              external
              icon={<WhatsAppIcon className="size-5" />}
              label="WhatsApp"
              value="Message us"
              note="Usually replied within the hour"
            />
            <QuickCard
              href={`mailto:${EMAILS.primary}`}
              icon={<Mail className="size-5" aria-hidden="true" />}
              label="Email"
              value={EMAILS.primary}
              note="A written quote you can keep"
            />
          </ul>
        </div>
      </header>

      {/* ------------------------------- Form -------------------------------- */}
      <Section id="enquiry" className="py-6 sm:py-7">
        <div className="container-page grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">General enquiry</p>
            <h2 className="mt-3 text-2xl leading-tight font-semibold text-ink sm:text-3xl">
              Tell us where you want to go.
            </h2>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
              Fill in as much or as little as you know. Dates and budget can be approximate — they
              help us quote something realistic rather than a number that changes later.
            </p>

            <div className="mt-8 rounded-3xl border border-line bg-white p-6 sm:p-8">
              <EnquiryForm
                destinations={destinations}
                services={services}
                source="/contact/"
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-mist-50 p-6 sm:p-7">
              <h2 className="text-lg font-semibold text-ink">
                Would rather just talk?
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                Nothing on this page is a form you have to fill in to reach us. Ring either number
                and you get a person, not a queue.
              </p>

              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {[PRIMARY_PHONE, SECONDARY_PHONE].map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="group flex items-center gap-3 text-[0.9375rem]"
                    >
                      <Phone className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                      <span>
                        <span className="block font-semibold text-ink group-hover:text-brand-700">
                          {phone.display}
                        </span>
                        <span className="block text-xs text-ink-muted">{phone.label}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 space-y-3 border-t border-line pt-5">
                {[
                  { email: EMAILS.primary, label: "General enquiries" },
                  { email: EMAILS.sales, label: "Sales" },
                ].map((item) => (
                  <li key={item.email}>
                    <a href={`mailto:${item.email}`} className="group flex items-center gap-3 text-[0.9375rem]">
                      <Mail className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                      <span>
                        <span className="block font-medium text-ink group-hover:text-brand-700">
                          {item.email}
                        </span>
                        <span className="block text-xs text-ink-muted">{item.label}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* ------------------------------ Offices ------------------------------ */}
      <Section tone="mist" className="py-6 sm:py-7">
        <div className="container-page">
          <p className="eyebrow">Our office</p>
          <h2 className="mt-3 text-2xl leading-tight font-semibold text-ink sm:text-3xl">
            One desk in Ettumanoor, {new Date().getFullYear() - SITE.founded} years on from where
            we started.
          </h2>
          <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft">
            Walk in during working hours, or call ahead and we will have your file open before you
            sit down.
          </p>

          {/* Two columns only once there is a second office to fill them —
              a single card in a two-column grid renders half-width against an
              empty half. */}
          <div className="mt-9 grid gap-6 lg:grid-cols-2 lg:[&:has(>:only-child)]:grid-cols-1">
            {officeList.map((office, index) => (
              <OfficeCard
                key={office.slug}
                office={office}
                mapLoading={index === 0 ? "lazy" : "lazy"}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function QuickCard({ href, icon, label, value, note, external }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-300"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-500 group-hover:text-white">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
            {label}
          </span>
          <span className="mt-0.5 block truncate font-sans text-[0.9375rem] font-semibold text-ink group-hover:text-brand-700">
            {value}
          </span>
          <span className="mt-0.5 block text-xs text-ink-muted">{note}</span>
        </span>
      </a>
    </li>
  );
}
