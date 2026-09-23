import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import EnquiryDialog from "@/components/site/EnquiryDialog";
import JsonLd from "@/components/site/JsonLd";
import { Section } from "@/components/site/Section";
import CountryBoard from "@/components/site/visa/CountryBoard";
import { FlagStack } from "@/components/site/visa/Flag";
import {
  Assurances,
  ProcessSteps,
  Situations,
  VisaClosing,
  VisaHeading,
  VisaHero,
  WhyBand,
} from "@/components/site/visa/VisaKit";
import { HUB, VISA_PAGES } from "@/lib/content/visa";
import { getServices } from "@/lib/data/content";
import { getDestinations } from "@/lib/data/destinations";
import { visaServiceSchema } from "@/lib/seo/visa";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * /services/global-visa/: the hub for the three visa pages.
 *
 * A static route, so it takes precedence over app/(site)/services/[slug]/ for
 * this one URL. The copy is in lib/content/visa.js.
 */

export const revalidate = 600;

export const metadata = {
  title: HUB.meta.title,
  description: HUB.meta.description,
  alternates: { canonical: VISA_PAGES.hub.href },
  openGraph: { title: HUB.meta.title, description: HUB.meta.description },
};

export default async function GlobalVisaPage() {
  const [services, destinations] = await Promise.all([getServices(), getDestinations()]);

  const crumbs = [{ label: "Services", href: "/services/" }, { label: "Global visa" }];
  const whatsappHref = whatsappLink({ serviceTitle: "a visa application" });
  const enquiry = {
    services,
    destinations,
    source: VISA_PAGES.hub.href,
    sourceLabel: "Global visa services",
    title: "Tell us who's travelling.",
    lead: "Where, when, who is travelling, and any visa you've had or been refused before.",
    initialMessage: "I'd like help with a visa application.",
  };

  return (
    <>
      <JsonLd
        schema={[
          visaServiceSchema({
            href: VISA_PAGES.hub.href,
            name: "Global visa services",
            description: HUB.meta.description,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />

      <VisaHero
        crumbs={crumbs}
        {...HUB.hero}
        primaryLabel={HUB.hero.primary}
        whatsappHref={whatsappHref}
        enquiry={enquiry}
        file={{
          heading: "Your visa file",
          subheading: "One person, first call to passport back",
          flags: ["gb", "fr", "ie", "us"],
          rows: [
            { label: "Trip and travellers noted", state: "done" },
            { label: "Embassy document list sent", state: "done" },
            { label: "Every page checked line by line", state: "done" },
            { label: "Appointment booked", state: "active" },
            { label: "Passport and decision back", state: "todo" },
          ],
        }}
      />

      <Assurances items={HUB.assurances} />

      <Section tone="mist" className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={HUB.chooser.title} lead={HUB.chooser.lead} />
          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {HUB.chooser.cards.map((card, index) => (
              <li key={card.key}>
                <VisaTypeCard card={card} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <Situations
            {...HUB.situations}
            action={
              <EnquiryDialog label="Start an enquiry" variant="outline" size="md" {...enquiry} />
            }
          />
        </div>
      </Section>

      <Section tone="tint" className="py-10 sm:py-12">
        <div className="container-page">
          <VisaHeading title={HUB.countries.title} lead={HUB.countries.lead} />
          <div className="mt-8">
            <CountryBoard groups={HUB.countries.groups} footnote={HUB.situations.footnote} />
          </div>
        </div>
      </Section>

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <ProcessSteps {...HUB.process} />
        </div>
      </Section>

      <WhyBand
        title={HUB.honesty.title}
        paragraphs={HUB.honesty.paragraphs}
        quote={HUB.honesty.pullQuote}
      />

      <Section className="py-10 sm:py-12">
        <div className="container-page">
          <VisaClosing
            {...HUB.closing}
            primaryLabel={HUB.closing.primary}
            whatsappHref={whatsappHref}
            enquiry={enquiry}
          />
        </div>
      </Section>
    </>
  );
}

/**
 * One of the three visa types. The whole card is the link (the stretched
 * ::after on the CTA), so the target is the card, not a line of text at the
 * bottom of it.
 */
function VisaTypeCard({ card, index }) {
  const page = VISA_PAGES[card.key];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_28px_60px_-34px_rgba(10,68,87,0.6)]">
      <div className="relative flex items-center justify-between gap-4 bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [mask-image:linear-gradient(to_left,black,transparent_75%)] [background-size:18px_18px]"
        />
        <div className="relative">
          <p className="text-xs font-semibold text-sun">{card.tag}</p>
          <p aria-hidden="true" className="mt-0.5 font-display text-3xl text-white/40 italic">
            0{index + 1}
          </p>
        </div>
        <FlagStack codes={card.flags} className="relative" flagClassName="size-9 ring-brand-800" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl leading-snug font-bold text-ink">{card.title}</h3>
        <p className="mt-2 text-[0.9375rem] leading-snug font-medium text-ink">{card.strap}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{card.text}</p>

        <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
          {card.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              {point}
            </li>
          ))}
        </ul>

        <Link
          href={page.href}
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 text-sm font-semibold text-white transition-colors after:absolute after:inset-0 group-hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {card.cta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
