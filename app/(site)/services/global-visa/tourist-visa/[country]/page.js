import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarCheck,
  CalendarClock,
  Clock3,
  HelpCircle,
  Hourglass,
  IndianRupee,
  MapPinned,
  Plane,
  Route,
  ShieldAlert,
  Star,
} from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import Button from "@/components/site/Button";
import EnquiryDialog from "@/components/site/EnquiryDialog";
import JsonLd from "@/components/site/JsonLd";
import { Section } from "@/components/site/Section";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import Reveal from "@/components/site/category-guide/Reveal";
import Stepper from "@/components/site/category-guide/Stepper";
import DocKit from "@/components/site/visa/country/DocKit";
import PitfallCards from "@/components/site/visa/country/PitfallCards";
import SectionNav from "@/components/site/visa/country/SectionNav";
import Flag from "@/components/site/visa/Flag";
import { VisaClosing } from "@/components/site/visa/VisaKit";
import { COUNTRIES, getCountry } from "@/lib/content/visa-countries";
import { COUNTRY_PAGES, countryVisaHref } from "@/lib/content/visa-country-pages";
import { TOURIST } from "@/lib/content/tourist-visa";
import { VISA_PAGES } from "@/lib/content/visa-pages";
import { getServices } from "@/lib/data/content";
import { getDestinations } from "@/lib/data/destinations";
import { visaServiceSchema } from "@/lib/seo/visa";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { SITE, SOCIAL } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * /services/global-visa/tourist-visa/<country>/ — one page per country the
 * agency files most often. Copy: lib/content/visa-countries.js, transcribed
 * word for word from the client's own pages; only the layout is new.
 *
 * Reached from the country board and the destination finder on the tourist
 * visa page, which link any country listed in lib/content/visa-country-pages.
 */

export const revalidate = 600;
export const dynamicParams = false;

export function generateStaticParams() {
  if (process.env.NODE_ENV !== "production") {
    const indexed = new Set(Object.values(COUNTRY_PAGES));
    for (const { slug, code } of COUNTRIES) {
      if (COUNTRY_PAGES[code] !== slug || !indexed.has(slug)) {
        console.warn(`visa-country-pages.js is out of step with visa-countries.js for "${slug}"`);
      }
    }
  }
  return COUNTRIES.map(({ slug }) => ({ country: slug }));
}

export async function generateMetadata({ params }) {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  const href = `${VISA_PAGES.tourist.href}${country.slug}/`;
  return {
    title: country.metaTitle,
    description: country.metaDescription,
    alternates: { canonical: href },
    openGraph: { title: country.metaTitle, description: country.metaDescription },
  };
}

/** Tile labels differ by country, so each known label gets its own icon. */
const FACT_ICONS = {
  route: Route,
  stay: CalendarClock,
  processing: Hourglass,
  start: Clock3,
  validity: CalendarCheck,
  "valid for": CalendarCheck,
  "visa fee": IndianRupee,
  "often paired with": MapPinned,
};

export default async function CountryVisaPage({ params }) {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const [services, destinations] = await Promise.all([getServices(), getDestinations()]);
  const href = `${VISA_PAGES.tourist.href}${country.slug}/`;

  const crumbs = [
    { label: "Services", href: "/services/" },
    { label: VISA_PAGES.hub.label, href: VISA_PAGES.hub.href },
    { label: VISA_PAGES.tourist.label, href: VISA_PAGES.tourist.href },
    { label: country.name },
  ];
  const whatsappHref = whatsappLink({ serviceTitle: `a ${country.title}` });
  const enquiry = {
    services,
    destinations,
    source: href,
    sourceLabel: country.title,
    title: `Tell us when you're going to ${country.name}.`,
    lead: "Your dates and who's going is enough to start. Passport details can wait.",
    initialMessage: `I'd like the document list for a ${country.title}.`,
  };

  const nav = [
    country.intro && { id: "overview", label: "Overview" },
    { id: "documents", label: "Documents" },
    country.pitfalls && { id: "pitfalls", label: "Common mistakes" },
    country.process && { id: "process", label: "How it works" },
  ].filter(Boolean);

  const alongside = (country.alongside || []).map((name) => {
    const code = codeForName(name);
    return { name, code, href: code ? countryVisaHref(code) : null };
  });
  const others = COUNTRIES.filter((c) => c.slug !== country.slug);

  return (
    <>
      <JsonLd
        schema={[
          visaServiceSchema({ href, name: country.title, description: country.metaDescription }),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* ------------------------------ Hero ------------------------------ */}
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [mask-image:linear-gradient(to_left,black,transparent_75%)] [background-size:22px_22px]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 -z-10 size-[28rem] rounded-full bg-brand-400/25 blur-3xl"
        />

        <div className="container-page py-6 sm:py-8 lg:py-12">
          <Breadcrumbs items={crumbs} className="mb-6 [&_*]:text-brand-100 [&_a:hover]:text-white" />

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2.5 rounded-full bg-white/10 py-1 pr-3.5 pl-1 text-xs font-semibold tracking-wide text-brand-100 ring-1 ring-white/15">
                <Flag code={country.code} className="size-6 ring-2 ring-white/30" />
                Tourist visa · {country.region}
              </p>
              <h1 className="mt-4 text-[2.25rem] leading-[1.05] font-extrabold tracking-[-0.025em] sm:text-[3rem] lg:text-[3.5rem]">
                {country.title}
              </h1>
              {country.heroHeading ? (
                <p className="mt-4 max-w-2xl text-lg leading-snug font-semibold text-sun sm:text-xl">
                  {country.heroHeading}
                </p>
              ) : null}
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
                {country.heroLead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <EnquiryDialog label={`Get the ${country.name} document list`} variant="white" size="lg" {...enquiry} />
                <Button href={whatsappHref} variant="whatsapp" size="lg">
                  <WhatsAppIcon className="size-5" />
                  WhatsApp us
                </Button>
              </div>

              <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem] text-brand-100">
                <li className="inline-flex items-center gap-1.5">
                  <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
                  <a href={SOCIAL.google} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                    {SITE.rating.value} on Google
                  </a>
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
                  {SITE.rating.justDial} on JustDial
                </li>
                <li>IATA accredited · Since {SITE.founded}</li>
              </ul>
            </div>

            <BoardingPass country={country} />
          </div>
        </div>
      </header>

      <SectionNav items={nav} />

      {/* ---------------------------- Overview ---------------------------- */}
      {country.intro ? (
        <Section id="overview" className="scroll-mt-36 py-12 sm:py-16">
          <div className="container-page">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-14">
                <div>
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <HelpCircle className="size-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-balance-heading text-3xl leading-tight font-bold tracking-[-0.02em] text-ink sm:text-4xl">
                    {country.intro.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {paragraphs(country.intro.body).map((paragraph, index) => (
                    <p
                      key={index}
                      className={cn(
                        index === 0
                          ? "rounded-3xl bg-gradient-to-br from-brand-50 to-white p-6 text-lg leading-relaxed font-medium text-ink ring-1 ring-brand-100 sm:p-7"
                          : "px-1 text-base leading-relaxed text-ink-soft sm:px-2"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {(country.extra || []).map((block) => (
                    <div key={block.title} className="px-1 sm:px-2">
                      <h3 className="text-lg font-bold text-ink">{block.title}</h3>
                      {paragraphs(block.body).map((paragraph, index) => (
                        <p key={index} className="mt-2 text-base leading-relaxed text-ink-soft">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ---------------------------- Documents --------------------------- */}
      <Section id="documents" tone="mist" className="scroll-mt-36 py-12 sm:py-16">
        <div className="container-page">
          <Reveal>
            <SceneHeading eyebrow="Your document kit" title={country.documents.title} lead={country.documents.lead} />
            <div className="mt-8">
              <DocKit country={country.name} groups={country.documents.groups} note={country.documents.note} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------------------- Pitfalls ---------------------------- */}
      {country.pitfalls ? (
        <Section id="pitfalls" className="scroll-mt-36 py-12 sm:py-16">
          <div className="container-page">
            <Reveal>
              <SceneHeading eyebrow="Before you file" title={country.pitfalls.title} lead={country.pitfalls.lead} />
              <div className="mt-8">
                <PitfallCards items={country.pitfalls.items} />
              </div>
              {country.pitfalls.refused ? (
                <div className="mt-5 flex flex-col gap-5 rounded-3xl bg-sun/10 p-6 ring-1 ring-sun/30 sm:flex-row sm:items-center sm:p-7">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sun text-ink">
                    <ShieldAlert className="size-6" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-ink">{country.pitfalls.refused.title}</h3>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{country.pitfalls.refused.text}</p>
                  </div>
                  <Button href={whatsappLink({ serviceTitle: `a refused ${country.title}` })} variant="whatsapp">
                    <WhatsAppIcon className="size-4" />
                    Send the letter
                  </Button>
                </div>
              ) : null}
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ----------------------------- Process ---------------------------- */}
      {country.process ? (
        <Section id="process" tone="mist" className="scroll-mt-36 py-12 sm:py-16">
          <div className="container-page">
            <Reveal>
              <SceneHeading eyebrow="How it works" title={country.process.title} lead={country.process.lead} />
              <Stepper items={country.process.steps} />
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* ---------------------- Where to next / related -------------------- */}
      <Section className="py-12 sm:py-16">
        <div className="container-page">
          <Reveal>
            {alongside.length ? (
              <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white p-6 ring-1 ring-brand-100 sm:p-8">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Plane className="size-4 text-brand-600" aria-hidden="true" />
                  Often travelled alongside {country.name}:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {alongside.map((item) => {
                    const body = (
                      <>
                        {item.code ? <Flag code={item.code} className="size-6" /> : null}
                        {item.name}
                        {item.href ? <ArrowRight className="size-3.5" aria-hidden="true" /> : null}
                      </>
                    );
                    const base = "inline-flex items-center gap-2 rounded-full py-1 pr-4 pl-1 text-sm font-medium transition-all duration-200";
                    return (
                      <li key={item.name}>
                        {item.href ? (
                          <Link
                            href={item.href}
                            className={cn(base, "bg-white text-brand-800 ring-1 ring-brand-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:text-white hover:shadow-md")}
                          >
                            {body}
                          </Link>
                        ) : (
                          <span className={cn(base, "bg-white text-ink-soft ring-1 ring-line", !item.code && "pl-4")}>{body}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}

            <div className={cn(alongside.length && "mt-12")}>
              <SceneHeading
                eyebrow="Same desk, same care"
                title="Other countries we file most often"
                lead="Each has its own page and document list."
              />
              <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`${VISA_PAGES.tourist.href}${other.slug}/`}
                      className="group flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-200"
                    >
                      <Flag code={other.code} className="size-8" />
                      <span className="min-w-0 flex-1 truncate text-sm font-semibold text-ink group-hover:text-brand-800">
                        {other.name}
                      </span>
                      <ArrowRight className="size-3.5 shrink-0 text-mist-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`${VISA_PAGES.tourist.href}#every-destination`}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
              >
                All 197 tourist visa destinations
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0 pb-12 sm:pb-16">
        <div className="container-page">
          <VisaClosing
            title={country.closing}
            text="Your dates and who's going is enough to start. Passport details can wait."
            primaryLabel="Get a document list"
            whatsappHref={whatsappHref}
            enquiry={enquiry}
          />
        </div>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

/** The four key facts as a boarding pass — India to the destination. */
function BoardingPass({ country }) {
  return (
    <div className="relative rounded-[1.75rem] bg-white text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between gap-3 rounded-t-[1.75rem] border-b border-dashed border-line px-6 py-4">
        <div>
          <p className="text-[0.625rem] font-bold tracking-[0.18em] text-ink-muted uppercase">From</p>
          <p className="flex items-center gap-2 text-lg font-extrabold">
            <Flag code="in" className="size-5" /> India
          </p>
        </div>
        <Plane className="size-5 text-brand-500" aria-hidden="true" />
        <div className="text-right">
          <p className="text-[0.625rem] font-bold tracking-[0.18em] text-ink-muted uppercase">To</p>
          <p className="flex items-center justify-end gap-2 text-lg font-extrabold">
            {country.name} <Flag code={country.code} className="size-5" />
          </p>
        </div>
      </div>

      {/* the perforation notches */}
      <span aria-hidden="true" className="absolute top-[4.4rem] -left-3 size-6 rounded-full bg-brand-800" />
      <span aria-hidden="true" className="absolute top-[4.4rem] -right-3 size-6 rounded-full bg-brand-700" />

      <dl className="grid grid-cols-2">
        {country.facts.map((fact, index) => {
          const Icon = FACT_ICONS[fact.label.toLowerCase()] || Route;
          return (
            <div
              key={fact.label}
              className={cn(
                "group p-5 transition-colors hover:bg-brand-50/60 sm:p-6",
                index % 2 === 1 && "border-l border-line",
                index > 1 && "border-t border-line",
                index === country.facts.length - 1 && "rounded-br-[1.75rem]",
                index === country.facts.length - 2 && index % 2 === 0 && "rounded-bl-[1.75rem]"
              )}
            >
              <dt className="flex items-center gap-1.5 text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                <Icon className="size-3.5 transition-transform group-hover:scale-125" aria-hidden="true" />
                {fact.label}
              </dt>
              <dd className="mt-2 text-base leading-snug font-bold text-ink sm:text-lg">{fact.value}</dd>
              {fact.note ? <dd className="mt-1 text-xs leading-relaxed text-ink-muted">{fact.note}</dd> : null}
            </div>
          );
        })}
      </dl>
    </div>
  );
}

function SceneHeading({ eyebrow, title, lead }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[2rem]">
        {title}
      </h2>
      {lead ? <p className="mt-3 text-base leading-relaxed text-ink-soft">{lead}</p> : null}
    </div>
  );
}

function paragraphs(value) {
  return String(value || "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** ISO code for a country name as the tourist visa table spells it. */
function codeForName(name) {
  const clean = name.replace(/\s*\(.*\)\s*$/, "").trim().toLowerCase();
  for (const region of TOURIST.regions) {
    for (const [code, regionName] of region.countries) {
      if (regionName.toLowerCase() === clean) return code;
    }
  }
  const own = COUNTRIES.find((c) => c.name.toLowerCase() === clean);
  return own ? own.code : null;
}
