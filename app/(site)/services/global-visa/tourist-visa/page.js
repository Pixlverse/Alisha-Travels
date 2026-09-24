import { Globe } from "lucide-react";

import EnquiryDialog from "@/components/site/EnquiryDialog";
import JsonLd from "@/components/site/JsonLd";
import { Section } from "@/components/site/Section";
import CountryBoard from "@/components/site/visa/CountryBoard";
import DestinationFinder from "@/components/site/visa/DestinationFinder";
import DocReadiness from "@/components/site/visa/DocReadiness";
import {
  Assurances,
  OtherVisas,
  ProcessSteps,
  Situations,
  VisaClosing,
  VisaCta,
  VisaHeading,
  VisaHero,
  WhyBand,
} from "@/components/site/visa/VisaKit";
import { TOURIST } from "@/lib/content/tourist-visa";
import { VISA_PAGES } from "@/lib/content/visa-pages";
import { getServices } from "@/lib/data/content";
import { getDestinations } from "@/lib/data/destinations";
import { visaServiceSchema } from "@/lib/seo/visa";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { whatsappLink } from "@/lib/whatsapp";

/** /services/global-visa/tourist-visa/. Copy: lib/content/tourist-visa.js. */

export const revalidate = 600;

const PAGE = VISA_PAGES.tourist;

export const metadata = {
  title: TOURIST.meta.title,
  description: TOURIST.meta.description,
  alternates: { canonical: PAGE.href },
  openGraph: { title: TOURIST.meta.title, description: TOURIST.meta.description },
};

export default async function TouristVisaPage() {
  const [services, destinations] = await Promise.all([getServices(), getDestinations()]);

  const crumbs = [
    { label: "Services", href: "/services/" },
    { label: VISA_PAGES.hub.label, href: VISA_PAGES.hub.href },
    { label: PAGE.label },
  ];
  const whatsappHref = whatsappLink({ serviceTitle: "a tourist visa" });
  const enquiry = {
    services,
    destinations,
    source: PAGE.href,
    sourceLabel: PAGE.label,
    title: "Tell us where you're going.",
    lead: "The destination, your dates and who's going is enough to start. Passport details can wait.",
    initialMessage: "I'd like a document list for a tourist visa.",
  };
  const { banner, finder, file } = TOURIST;

  return (
    <>
      <JsonLd
        schema={[
          visaServiceSchema({
            href: PAGE.href,
            name: PAGE.label,
            description: TOURIST.meta.description,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <VisaHero
        crumbs={crumbs}
        {...TOURIST.hero}
        primaryLabel={TOURIST.hero.primary}
        whatsappHref={whatsappHref}
        enquiry={enquiry}
        file={{
          heading: "Tourist visa file",
          subheading: "In the order the consulate reads it",
          flags: ["fr", "jp", "ae"],
          rows: [
            { label: "Itinerary matched to bookings", state: "done" },
            { label: "Bank statements in order", state: "done" },
            { label: "Leave letter matches the dates", state: "done" },
            { label: "Appointment booked", state: "active" },
            { label: "Passport back", state: "todo" },
          ],
        }}
      />

      <Assurances items={TOURIST.assurances} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <Situations
            {...TOURIST.situations}
            action={
              <EnquiryDialog label="Start an enquiry" variant="outline" size="md" {...enquiry} />
            }
          />
          <VisaCta
            {...TOURIST.ctas.situations}
            primaryLabel={TOURIST.ctas.situations.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
            className="mt-10"
          />
        </div>
      </Section>

      {/* The promise the finder below keeps. */}
      <section className="border-y border-line bg-white py-5">
        <p className="container-page flex items-center justify-center gap-3 text-center text-sm text-ink-soft sm:text-base">
          <Globe className="hidden size-5 shrink-0 text-brand-500 sm:block" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-ink">{banner.strong}</strong> {banner.text}
          </span>
        </p>
      </section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={TOURIST.countries.title} lead={TOURIST.countries.lead} />
          <div className="mt-8">
            <CountryBoard
              groups={TOURIST.countries.groups}
              footnote={`${banner.strong} ${banner.text}`}
            />
          </div>
        </div>
      </Section>

      <Section tone="tint" id="every-destination" className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={finder.title} lead={finder.lead} />
          <div className="mt-8">
            <DestinationFinder
              regions={TOURIST.regions}
              legend={finder.legend}
              asterisk={finder.asterisk}
            />
          </div>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={file.title} />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <DocReadiness title={file.documents.title} items={file.documents.items} />

            <section className="rounded-[1.5rem] border border-sun/40 bg-sun/[0.05] p-6 sm:p-7">
              <h3 className="text-lg font-bold text-ink">{file.before.title}</h3>
              <ol className="mt-5 space-y-3">
                {file.before.items.map(([lead, rest], index) => (
                  <li
                    key={lead}
                    className="flex gap-4 rounded-2xl bg-white/80 px-4 py-3.5 ring-1 ring-sun/20"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sun text-xs font-bold text-ink tabular-nums">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                      <strong className="font-semibold text-ink">{lead}</strong> {rest}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <VisaCta
            {...TOURIST.ctas.docs}
            primaryLabel={TOURIST.ctas.docs.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
            className="mt-10"
          />
        </div>
      </Section>

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <ProcessSteps {...TOURIST.process} />
        </div>
      </Section>

      <WhyBand {...TOURIST.why} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <OtherVisas current="tourist" />
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <VisaClosing
            {...TOURIST.closing}
            primaryLabel={TOURIST.closing.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
          />
        </div>
      </Section>
    </>
  );
}
