import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Mail, Phone, Star } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import Button from "@/components/site/Button";
import EnquiryCta from "@/components/site/EnquiryCta";
import Faqs from "@/components/site/Faqs";
import JsonLd from "@/components/site/JsonLd";
import { HeaderMotif } from "@/components/site/PageHeader";
import ContentBlock from "@/components/site/ContentBlocks";
import RichText from "@/components/site/RichText";
import { Section } from "@/components/site/Section";
import ServiceIcon from "@/components/site/ServiceIcon";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { getServiceBySlug, getServices, getServiceSlugs } from "@/lib/data/content";
import { EMAILS, PRIMARY_PHONE, SITE, SOCIAL } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

export const revalidate = 600;

export async function generateStaticParams() {
  return getServiceSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  const title = service.metaTitle || service.title;
  const description = service.metaDescription || service.shortDescription;

  return {
    // metaTitle normally holds the page-specific part and the root template
    // appends the brand. Two of the client's title tags are supplied whole,
    // brand included — appending it again would print the name twice, so a
    // stored title that already carries it is passed through as absolute.
    title: title.includes(SITE.name) ? { absolute: title } : title,
    description,
    alternates: { canonical: `/services/${slug}/` },
    openGraph: { title, description },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([getServiceBySlug(slug), getServices()]);
  if (!service) notFound();

  const others = allServices.filter((item) => item.slug !== slug);
  const crumbs = [{ label: "Services", href: "/services/" }, { label: service.title }];

  // A service with content blocks is one of the long-form pages the client has
  // written in full; everything else renders the original description-and-
  // bullets layout. Both come out of the same Service document.
  const longForm = Boolean(service.blocks?.length);

  return (
    <>
      <JsonLd
        schema={[serviceSchema(service), breadcrumbSchema(crumbs), faqSchema(service.faqs)]}
      />

      {/* Same band as PageHeader, including the flight-path motif in the
          right-hand half — this header is hand-built because of the icon chip
          and the credentials line, and without the motif it was a wide empty
          band with the copy pinned to one side. */}
      <header className="relative isolate overflow-hidden border-b border-line bg-gradient-to-b from-brand-50/70 to-white">
        <HeaderMotif />

        <div className="relative z-10 container-page py-5 sm:py-6">
          <Breadcrumbs items={crumbs} className="mb-8" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <ServiceIcon name={service.icon} className="size-6" />
            </span>

            <div className="max-w-4xl">
              <h1 className="text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] text-ink sm:text-4xl lg:text-[3rem]">
                {service.heroHeading || service.title}
              </h1>

              {service.heroLead ? (
                <RichText text={service.heroLead} className="mt-5 max-w-3xl sm:text-lg" />
              ) : (
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {service.shortDescription}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton
                  type={service.ctaType}
                  label={service.ctaLabel || "Enquire now"}
                  service={service}
                  size="lg"
                  primary
                />
                <CtaButton
                  type={service.secondaryCtaType || "whatsapp"}
                  label={service.secondaryCtaLabel || "Ask on WhatsApp"}
                  service={service}
                  size="lg"
                />
              </div>

              {longForm ? <TrustStrip /> : null}
            </div>
          </div>
        </div>
      </header>

      {longForm ? (
        <LongFormBody service={service} others={others} slug={slug} />
      ) : (
        <StandardBody service={service} others={others} slug={slug} />
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  The long-form pages                                                        */
/* -------------------------------------------------------------------------- */

function LongFormBody({ service, others, slug }) {
  return (
    <>
      {service.assurances?.length ? (
        <Section className="py-6 sm:py-7">
          <div className="container-page">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.assurances.map((card) => (
                <li
                  key={card.title}
                  className="flex h-full flex-col rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-base font-semibold text-ink">{card.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{card.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {/* Bands alternate tone so a page of eight blocks still reads as eight
          blocks rather than one continuous column. */}
      {service.blocks.map((block, index) => (
        <Section
          key={`${block.kind}-${index}`}
          tone={index % 2 === 0 ? "mist" : "default"}
          className="py-6 sm:py-7"
        >
          <div className="container-page">
            <ContentBlock block={block} />
          </div>
        </Section>
      ))}

      {service.faqs?.length ? (
        <Section className="py-6 sm:py-7">
          <div className="container-page max-w-3xl">
            <Faqs faqs={service.faqs} id="service-faqs" />
          </div>
        </Section>
      ) : null}

      {service.closingTitle ? (
        <Section className="py-6 sm:py-7">
          <div className="container-page">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-12 text-center sm:px-14 sm:py-16">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.22),transparent_55%)]"
                aria-hidden="true"
              />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-balance-heading text-3xl leading-tight font-semibold text-white sm:text-4xl">
                  {service.closingTitle}
                </h2>
                {service.closingText ? (
                  <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                    {service.closingText}
                  </p>
                ) : null}
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  {service.closingPrimaryLabel ? (
                    <CtaButton
                      type={service.closingPrimaryType}
                      label={service.closingPrimaryLabel}
                      service={service}
                      size="lg"
                      onDark
                      primary
                    />
                  ) : null}
                  {service.closingSecondaryLabel ? (
                    <CtaButton
                      type={service.closingSecondaryType}
                      label={service.closingSecondaryLabel}
                      service={service}
                      size="lg"
                      onDark
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : (
        <Section className="py-6 sm:py-7">
          <div className="container-page">
            <EnquiryCta serviceTitle={service.title} source={`/services/${slug}/`} />
          </div>
        </Section>
      )}

      {service.disclaimer ? (
        <Section className="py-4 sm:py-5">
          <div className="container-page">
            {/* Small print, set as small print: a rule above it and muted
                copy, so it reads as the regulatory line it is rather than as
                another paragraph of the page. */}
            <p className="max-w-4xl border-t border-line pt-5 text-xs leading-relaxed text-ink-muted">
              {service.disclaimer}
            </p>
          </div>
        </Section>
      ) : null}

      {others.length ? (
        <Section tone="mist" className="py-6 sm:py-7">
          <div className="container-page">
            <h2 className="eyebrow">Other services</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 text-sm text-ink-soft ring-1 ring-line transition-colors hover:text-brand-800 hover:ring-brand-300"
                  >
                    <ServiceIcon name={item.icon} className="size-4 shrink-0 text-brand-500" />
                    <span className="flex-1">{item.title}</span>
                    <ArrowRight
                      className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}
    </>
  );
}

/** One content block. `kind` decides the shape; see models/Service.js. */
/** The credentials line under the hero buttons. Figures come from lib/site.js. */
function TrustStrip() {
  const items = [
    { star: true, label: `${SITE.rating.value} on Google`, href: SOCIAL.google },
    { star: true, label: `${SITE.rating.justDial} on JustDial` },
    { label: "IATA accredited" },
    { label: `Since ${SITE.founded}` },
  ];

  return (
    <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem] text-ink-muted">
      {items.map((item, index) => (
        <li key={item.label} className="flex items-center gap-4">
          {index ? (
            <span aria-hidden="true" className="size-1 rounded-full bg-mist-300" />
          ) : null}
          {/* The Google rating is a link to Google; the rest are statements
              of fact with nowhere to go. */}
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-brand-700 hover:underline focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
            >
              <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
              {item.label}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              {item.star ? (
                <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
              ) : null}
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * A button whose action is chosen in the dashboard: the enquiry form, a phone
 * call, WhatsApp or an email to the sales address.
 */
function CtaButton({ type, label, service, size = "md", primary = false, onDark = false, className }) {
  const config = {
    phone: { href: `tel:${PRIMARY_PHONE.tel}`, icon: <Phone className="size-4" aria-hidden="true" /> },
    whatsapp: {
      href: whatsappLink({ serviceTitle: service.title }),
      icon: <WhatsAppIcon className="size-5" />,
      variant: "whatsapp",
    },
    email: {
      href: `mailto:${EMAILS.sales}?subject=${encodeURIComponent(service.title)}`,
      icon: <Mail className="size-4" aria-hidden="true" />,
    },
    enquiry: { href: "/contact/", icon: null },
  }[type || "enquiry"];

  // On the dark closing band the brand fills disappear, so the pair becomes a
  // white button and an outlined one — except WhatsApp, which keeps its green
  // everywhere because that colour is the affordance.
  const variant = onDark
    ? config.variant === "whatsapp"
      ? "whatsapp"
      : primary
        ? "white"
        : "outline"
    : primary
      ? config.variant || "primary"
      : config.variant || "outline";

  return (
    <Button
      href={config.href}
      variant={variant}
      size={size}
      className={
        onDark && variant === "outline"
          ? `border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10 ${className || ""}`
          : className
      }
    >
      {config.icon}
      {label}
    </Button>
  );
}

/* -------------------------------------------------------------------------- */
/*  The original layout, for services without content blocks                   */
/* -------------------------------------------------------------------------- */

function StandardBody({ service, others, slug }) {
  return (
    <>
      <Section className="py-6 sm:py-7">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <RichText text={service.longDescription} size="lg" />

            {service.points?.length ? (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                  What that covers
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 rounded-2xl border border-line bg-mist-50 p-4"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                      <span className="text-[0.9375rem] leading-snug text-ink-soft">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {service.faqs?.length ? (
              <div className="mt-14">
                <Faqs faqs={service.faqs} id="service-faqs" />
              </div>
            ) : null}
          </div>

          {/* Sidebar: talk to someone, then the rest of the services. */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-white p-6">
              <h2 className="text-lg font-semibold text-ink">
                Talk to someone about this
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                You get a named person, not a ticket number. Ask the awkward questions - what it
                really costs, how long it really takes, and whether you need it at all.
              </p>

              <div className="mt-5 grid gap-2.5">
                <Button href={`tel:${PRIMARY_PHONE.tel}`} className="w-full">
                  <Phone className="size-4" aria-hidden="true" />
                  {PRIMARY_PHONE.display}
                </Button>
                <Button
                  href={whatsappLink({ serviceTitle: service.title })}
                  variant="whatsapp"
                  className="w-full"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp us
                </Button>
                <Button href="/contact/" variant="outline" className="w-full">
                  Send an enquiry
                </Button>
              </div>
            </div>

            {others.length ? (
              <nav aria-label="Other services" className="mt-5 rounded-3xl border border-line bg-mist-50 p-6">
                <h2 className="eyebrow">Other services</h2>
                <ul className="mt-3 space-y-0.5">
                  {others.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm text-ink-soft transition-colors hover:bg-white hover:text-brand-800"
                      >
                        <ServiceIcon name={item.icon} className="size-4 shrink-0 text-brand-500" />
                        <span className="flex-1">{item.title}</span>
                        <ArrowRight
                          className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/fixed-departures/"
                      className="group flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm text-ink-soft transition-colors hover:bg-white hover:text-brand-800"
                    >
                      <ServiceIcon name="Ticket" className="size-4 shrink-0 text-brand-500" />
                      <span className="flex-1">Fixed departure tours</span>
                      <ArrowRight
                        className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
            ) : null}
          </aside>
        </div>
      </Section>

      <Section tone="mist" className="pt-0 pb-16 sm:pb-20">
        <div className="container-page">
          <EnquiryCta serviceTitle={service.title} source={`/services/${slug}/`} />
        </div>
      </Section>
    </>
  );
}
