import EnquiryDialog from "@/components/site/EnquiryDialog";
import JsonLd from "@/components/site/JsonLd";
import { Section } from "@/components/site/Section";
import Flag from "@/components/site/visa/Flag";
import {
  Assurances,
  Callout,
  DocChecklist,
  Explainer,
  OtherVisas,
  ProcessSteps,
  RuleRows,
  Situations,
  VisaClosing,
  VisaHeading,
  VisaHero,
  WhyBand,
} from "@/components/site/visa/VisaKit";
import { DEPENDANT, VISA_PAGES } from "@/lib/content/visa";
import { getServices } from "@/lib/data/content";
import { getDestinations } from "@/lib/data/destinations";
import { visaServiceSchema } from "@/lib/seo/visa";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { whatsappLink } from "@/lib/whatsapp";

/** /services/global-visa/uk-ireland-dependant-visa/. Copy: lib/content/visa.js. */

export const revalidate = 600;

const PAGE = VISA_PAGES.dependant;

export const metadata = {
  title: DEPENDANT.meta.title,
  description: DEPENDANT.meta.description,
  alternates: { canonical: PAGE.href },
  openGraph: { title: DEPENDANT.meta.title, description: DEPENDANT.meta.description },
};

export default async function DependantVisaPage() {
  const [services, destinations] = await Promise.all([getServices(), getDestinations()]);

  const crumbs = [
    { label: "Services", href: "/services/" },
    { label: VISA_PAGES.hub.label, href: VISA_PAGES.hub.href },
    { label: PAGE.label },
  ];
  const whatsappHref = whatsappLink({ serviceTitle: "a UK & Ireland dependant visa" });
  const enquiry = {
    services,
    destinations,
    source: PAGE.href,
    sourceLabel: PAGE.label,
    title: "Tell us the sponsor's visa.",
    lead: "The main visa holder's visa type, their employer and who's joining them is enough to start.",
    initialMessage: "I'd like to check eligibility for a UK & Ireland dependant visa.",
  };

  return (
    <>
      <JsonLd
        schema={[
          visaServiceSchema({
            href: PAGE.href,
            name: PAGE.label,
            description: DEPENDANT.meta.description,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <VisaHero
        crumbs={crumbs}
        {...DEPENDANT.hero}
        primaryLabel={DEPENDANT.hero.primary}
        whatsappHref={whatsappHref}
        enquiry={enquiry}
        file={{
          heading: "Family file",
          subheading: "Matched to the sponsor's paperwork",
          flags: ["gb", "ie"],
          rows: [
            { label: "Sponsor's visa: route open", state: "done" },
            { label: "Spouse: passport and marriage certificate", state: "done" },
            { label: "Child: birth certificate", state: "done" },
            { label: "TB test and biometrics", state: "active" },
            { label: "Every passport back", state: "todo" },
          ],
        }}
      />

      <Assurances items={DEPENDANT.assurances} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <Explainer {...DEPENDANT.whatIs} noteFlag="ie" />
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <Situations
            {...DEPENDANT.situations}
            action={
              <EnquiryDialog label="Start an enquiry" variant="outline" size="md" {...enquiry} />
            }
          />
        </div>
      </Section>

      <Section tone="tint" className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={DEPENDANT.requirements.title} lead={DEPENDANT.requirements.lead} />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {DEPENDANT.requirements.countries.map((country) => (
              <section
                key={country.name}
                className="overflow-hidden rounded-[1.5rem] border border-line bg-white"
              >
                <h3 className="flex items-center gap-3 border-b border-line bg-mist-50 px-6 py-4 text-lg font-bold text-ink">
                  <Flag code={country.flag} className="size-8" />
                  {country.name}
                </h3>
                <RuleRows rows={country.rows} className="p-6" />
              </section>
            ))}
          </div>
          <Callout tone="warn" title={DEPENDANT.requirements.closed.title} className="mt-5">
            {DEPENDANT.requirements.closed.text}
          </Callout>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <DocChecklist {...DEPENDANT.ukDocs} />
        </div>
      </Section>

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <DocChecklist {...DEPENDANT.ieDocs} />
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <ProcessSteps {...DEPENDANT.process} />
        </div>
      </Section>

      <WhyBand {...DEPENDANT.why} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <OtherVisas current="dependant" />
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <VisaClosing
            {...DEPENDANT.closing}
            primaryLabel={DEPENDANT.closing.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
          />
        </div>
      </Section>
    </>
  );
}
