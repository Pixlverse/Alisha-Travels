import { Check } from "lucide-react";

import EnquiryDialog from "@/components/site/EnquiryDialog";
import JsonLd from "@/components/site/JsonLd";
import { Section } from "@/components/site/Section";
import Flag from "@/components/site/visa/Flag";
import {
  Assurances,
  Callout,
  CheckList,
  DocChecklist,
  Explainer,
  OtherVisas,
  ProcessSteps,
  RuleRows,
  Situations,
  VisaClosing,
  VisaCta,
  VisaHeading,
  VisaHero,
  WhyBand,
} from "@/components/site/visa/VisaKit";
import { SETTLEMENT, VISA_PAGES } from "@/lib/content/visa";
import { getServices } from "@/lib/data/content";
import { getDestinations } from "@/lib/data/destinations";
import { visaServiceSchema } from "@/lib/seo/visa";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/** /services/global-visa/uk-settlement-visa/. Copy: lib/content/visa.js. */

export const revalidate = 600;

const PAGE = VISA_PAGES.settlement;

export const metadata = {
  title: SETTLEMENT.meta.title,
  description: SETTLEMENT.meta.description,
  alternates: { canonical: PAGE.href },
  openGraph: { title: SETTLEMENT.meta.title, description: SETTLEMENT.meta.description },
};

export default async function SettlementVisaPage() {
  const [services, destinations] = await Promise.all([getServices(), getDestinations()]);

  const crumbs = [
    { label: "Services", href: "/services/" },
    { label: VISA_PAGES.hub.label, href: VISA_PAGES.hub.href },
    { label: PAGE.label },
  ];
  const whatsappHref = whatsappLink({ serviceTitle: "a UK settlement visa" });
  const enquiry = {
    services,
    destinations,
    source: PAGE.href,
    sourceLabel: PAGE.label,
    title: "Tell us about your partner's status.",
    lead: "Your partner's status in the UK, their income and when you married is enough to start.",
    initialMessage: "I'd like help with a UK settlement visa.",
  };
  const { docs, money, ilr } = SETTLEMENT;

  return (
    <>
      <JsonLd
        schema={[
          visaServiceSchema({
            href: PAGE.href,
            name: PAGE.label,
            description: SETTLEMENT.meta.description,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <VisaHero
        crumbs={crumbs}
        {...SETTLEMENT.hero}
        primaryLabel={SETTLEMENT.hero.primary}
        whatsappHref={whatsappHref}
        enquiry={enquiry}
        file={{
          heading: "Settlement file",
          subheading: "Sponsor in the UK, applicant in India",
          flags: ["gb", "in"],
          rows: [
            { label: "Income checked against the rules", state: "done" },
            { label: "Relationship record in order", state: "done" },
            { label: "English and TB test booked", state: "done" },
            { label: "Both halves matched line by line", state: "active" },
            { label: "Decision back", state: "todo" },
          ],
        }}
      />

      <Assurances items={SETTLEMENT.assurances} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <Explainer {...SETTLEMENT.whatIs} />
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <Situations
            {...SETTLEMENT.situations}
            action={
              <EnquiryDialog label="Start an enquiry" variant="outline" size="md" {...enquiry} />
            }
          />
          <VisaCta
            {...SETTLEMENT.ctas.situations}
            primaryLabel={SETTLEMENT.ctas.situations.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
            className="mt-10"
          />
        </div>
      </Section>

      <Section tone="tint" className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={SETTLEMENT.road.title} lead={SETTLEMENT.road.lead} />
          <ol className="mt-8 grid gap-5 lg:grid-cols-2">
            {SETTLEMENT.road.routes.map((route, index) => (
              <li
                key={route.title}
                className="flex flex-col rounded-[1.5rem] border border-line bg-white p-6 sm:p-7"
              >
                <p className="font-display text-sm text-brand-700 italic">Route {index + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-ink">{route.title}</h3>
                <RouteLine stops={route.stops} />
                <p className="mt-6 text-[0.9375rem] leading-relaxed text-ink-soft">{route.text}</p>
                <p className="mt-4 flex gap-2.5 border-t border-line pt-4 text-sm leading-relaxed text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {route.note}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <DocChecklist {...docs}>
            <section className="mt-5 rounded-[1.5rem] border border-brand-100 bg-brand-50/60 p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-ink">{docs.employerLetter.label}</h3>
              <ol className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {docs.employerLetter.items.map((item, index) => (
                  <li key={item} className="flex gap-3 text-sm leading-snug text-ink-soft">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-white text-xs font-bold text-brand-800 tabular-nums ring-1 ring-brand-100">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            </section>
          </DocChecklist>
          <VisaCta
            {...SETTLEMENT.ctas.docs}
            primaryLabel={SETTLEMENT.ctas.docs.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
            className="mt-10"
          />
        </div>
      </Section>

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={money.title} lead={money.lead} />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <section className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-7">
              <h3 className="text-lg font-bold text-ink">{money.financial.title}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {money.financial.stats.map((stat) => (
                  <div key={stat.value} className="rounded-2xl bg-brand-800 p-5 text-white">
                    <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-brand-100/90">{stat.label}</p>
                  </div>
                ))}
              </div>
              <RuleRows rows={money.financial.rows} className="mt-6" />
            </section>

            <section className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-7">
              <h3 className="text-lg font-bold text-ink">{money.english.title}</h3>
              <EnglishLadder steps={money.english.ladder} />
              <RuleRows rows={money.english.rows} className="mt-6" />
            </section>
          </div>
          <Callout tone="info" className="mt-5">
            {money.note}
          </Callout>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <div className="flex items-center gap-4">
            <Flag code="gb" className="size-10 shadow ring-2 ring-white" />
            <VisaHeading title={ilr.title} />
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <section className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-7">
              <h3 className="mb-5 text-lg font-bold text-ink">{ilr.covers.title}</h3>
              <CheckList items={ilr.covers.items} />
            </section>
            <section className="rounded-[1.5rem] border border-sun/40 bg-sun/[0.05] p-6 sm:p-7">
              <h3 className="mb-5 text-lg font-bold text-ink">{ilr.before.title}</h3>
              <CheckList items={ilr.before.items} tone="warn" />
            </section>
          </div>
          <Callout tone="time" title={ilr.changing.title} className="mt-5">
            {ilr.changing.text}
          </Callout>
        </div>
      </Section>

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <ProcessSteps {...SETTLEMENT.process} />
        </div>
      </Section>

      <WhyBand {...SETTLEMENT.why} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <OtherVisas current="settlement" />
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <VisaClosing
            {...SETTLEMENT.closing}
            primaryLabel={SETTLEMENT.closing.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
          />
        </div>
      </Section>
    </>
  );
}

/** A route as three stops on a line, the last one the destination. */
function RouteLine({ stops }) {
  return (
    <ol className="relative mt-6 grid grid-cols-3 gap-3">
      <span
        aria-hidden="true"
        className="absolute top-3 right-[16%] left-[16%] border-t-2 border-dashed border-brand-200"
      />
      {stops.map((stop) => (
        <li key={stop.label} className="relative flex flex-col items-center text-center">
          <span
            className={cn(
              "relative z-10 flex size-6 items-center justify-center rounded-full ring-4 ring-white",
              stop.goal ? "bg-sun" : "bg-brand-700"
            )}
          >
            {stop.goal ? (
              <Check className="size-3.5 text-ink" strokeWidth={3} aria-hidden="true" />
            ) : (
              <span className="size-2 rounded-full bg-white" />
            )}
          </span>
          <span className="mt-3 text-[0.6875rem] font-semibold text-ink-muted">{stop.when}</span>
          <span className="mt-0.5 text-sm leading-snug font-semibold text-ink">{stop.label}</span>
          <span className="mt-0.5 text-xs text-ink-muted">{stop.detail}</span>
        </li>
      ))}
    </ol>
  );
}

/** A1, then A2, then the higher ILR level, drawn as steps going up. */
function EnglishLadder({ steps }) {
  // Bars and captions are separate rows so the bars share a baseline however
  // long each caption runs. The list is the captions; the bars are drawing.
  const bars = ["h-16 bg-brand-100 text-brand-900", "h-22 bg-brand-200 text-brand-900", "h-28 bg-brand-800 text-white"];
  return (
    <div className="mt-5">
      <div aria-hidden="true" className="grid grid-cols-3 items-end gap-3">
        {steps.map((step, index) => (
          <div
            key={step.level}
            className={cn("flex flex-col justify-between rounded-xl px-3 py-2.5", bars[index])}
          >
            <span className="text-[0.6875rem] font-semibold opacity-80">{step.when}</span>
            <span className="text-xl font-extrabold">{step.level}</span>
          </div>
        ))}
      </div>
      <ol className="mt-3 grid grid-cols-3 gap-3">
        {steps.map((step) => (
          <li key={step.level} className="text-xs leading-relaxed text-ink-soft">
            <span className="sr-only">
              {step.when}, {step.level}:{" "}
            </span>
            {step.text}
          </li>
        ))}
      </ol>
    </div>
  );
}
