import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarClock, Compass, MapPin } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import Button from "@/components/site/Button";
import EnquiryCta from "@/components/site/EnquiryCta";
import Faqs from "@/components/site/Faqs";
import JsonLd from "@/components/site/JsonLd";
import PackageCard from "@/components/site/PackageCard";
import { Section, SectionHeading } from "@/components/site/Section";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { getDestinationBySlug, getDestinationParams } from "@/lib/data/destinations";
import { formatINR } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import { breadcrumbSchema, faqSchema, touristDestinationSchema } from "@/lib/seo/schema";

export const revalidate = 600;

/**
 * Destination detail page.
 *
 * These replace the dead tiles on the legacy site. Each is a
 * genuine landing page for a high-intent search — the intro, why-visit,
 * best-time and attraction copy is the content that makes it rank, and the
 * packages strip is what turns the visit into an enquiry.
 */
export async function generateStaticParams() {
  return getDestinationParams();
}

export async function generateMetadata({ params }) {
  const { region, slug } = await params;
  const destination = await getDestinationBySlug(slug, region);
  if (!destination) return {};

  return {
    title: destination.metaTitle || `${destination.name} Tour Packages`,
    description: destination.metaDescription || destination.tagline,
    alternates: { canonical: `/destinations/${region}/${slug}/` },
    openGraph: {
      title: destination.metaTitle || `${destination.name} Tour Packages`,
      description: destination.metaDescription || destination.tagline,
      images: destination.heroImage?.url ? [{ url: destination.heroImage.url }] : undefined,
    },
  };
}

export default async function DestinationPage({ params }) {
  const { region, slug } = await params;
  const destination = await getDestinationBySlug(slug, region);
  if (!destination) notFound();

  const {
    name,
    tagline,
    heroImage,
    intro,
    whyVisit,
    bestTimeToVisit,
    topAttractions = [],
    faqs = [],
    packages = [],
    priceFrom,
    country,
  } = destination;

  const regionLabel = region === "international" ? "International" : "Domestic";

  // The same trail the visible breadcrumb renders, so markup and page agree.
  const crumbs = [
    { label: "Destinations", href: "/destinations/" },
    { label: regionLabel, href: `/destinations/${region}/` },
    { label: name },
  ];
  const cheapest = packages.length
    ? Math.min(...packages.map((p) => p.priceFrom))
    : priceFrom || null;

  return (
    <>
      <JsonLd
        schema={[
          touristDestinationSchema(destination),
          breadcrumbSchema(crumbs),
          // Only emitted when the accordion below actually renders these.
          faqSchema(faqs),
        ]}
      />

      {/* ------------------------------- Hero -------------------------------- */}
      <section className="relative isolate overflow-hidden bg-brand-900">
        <Image
          src={heroImage.url}
          alt={heroImage.alt || name}
          fill
          // The LCP element on a destination page. See Hero.js on why this is
          // `preload` and not the deprecated `priority`.
          preload
          fetchPriority="high"
          // See Hero.js on why the hero art uses the 60 rung.
          quality={60}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-900/92 via-brand-900/55 to-brand-900/35"
          aria-hidden="true"
        />

        <div className="relative container-page pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pb-20">
          <Breadcrumbs invert items={crumbs} />

          <div className="mt-10 max-w-3xl sm:mt-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
              <MapPin className="size-3.5" aria-hidden="true" />
              {regionLabel}
              {country && country !== name ? ` · ${country}` : ""}
            </p>

            <h1 className="mt-5 text-5xl leading-[1.02] font-bold tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
              {name}
            </h1>

            {tagline ? (
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">{tagline}</p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact/" size="lg" variant="white">
                Plan a {name} trip
              </Button>
              <Button
                href={whatsappLink({ destinationName: name })}
                size="lg"
                variant="whatsapp"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp us
              </Button>
              {packages.length ? (
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  {packages.length} {packages.length === 1 ? "package" : "packages"}
                  {cheapest ? ` from ${formatINR(cheapest)}` : ""}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ Content ------------------------------ */}
      {/*
        TRIMMED, at the client's instruction: "when opening a place just show
        this and some details to the right", then the packages, then the FAQs,
        then the CTA. What came out of this band was a "Why go" section with its
        own heading and a numbered "What's worth your time" list of five
        attractions with a paragraph each — around 700px of prose before a
        visitor reached a single price.

        The content is not deleted, it is condensed. whyVisit still runs as a
        second paragraph without a heading of its own, and the attractions are
        now a row of chips carrying their titles. Their descriptions are the
        only thing that no longer renders anywhere on this page; they are still
        in the Destination document and still editable in /admin/, so a future
        "full guide" treatment can pick them up again.

        The gallery band that used to sit between the packages and the FAQs is
        gone for the same reason — it was a second grid of photographs directly
        under the hero photograph. /gallery/ still carries all of them.
      */}
      <Section className="py-6 sm:py-7">
        <div className="container-page grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div>
            {intro ? (
              <p className="text-lg leading-relaxed text-ink-soft">{intro}</p>
            ) : null}

            {whyVisit ? (
              <p className="mt-5 text-base leading-relaxed text-ink-soft">{whyVisit}</p>
            ) : null}

            {topAttractions.length ? (
              <div className="mt-7">
                <h2 className="flex items-center gap-2 font-sans text-sm font-semibold text-ink">
                  <Compass className="size-4 text-brand-500" aria-hidden="true" />
                  Worth your time
                </h2>
                {/* Titles only. The descriptions were what made this a wall. */}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {topAttractions.map((attraction) => (
                    <li
                      key={attraction.title}
                      className="rounded-full bg-brand-50 px-3.5 py-1.5 text-[0.8125rem] font-semibold text-brand-800 ring-1 ring-brand-100"
                    >
                      {attraction.title}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* The practical answers, to the right of the prose rather than under
              it — the "details to the right" the client asked for. */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-line bg-mist-50 p-6 sm:p-7">
              {cheapest ? (
                <div className="border-b border-line pb-5">
                  <p className="text-[0.6875rem] tracking-wide text-ink-muted uppercase">
                    Packages start from
                  </p>
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-ink">
                    {formatINR(cheapest)}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">per person, twin sharing</p>
                </div>
              ) : null}

              {bestTimeToVisit ? (
                <div className="pt-5">
                  <h2 className="flex items-center gap-2 font-sans text-sm font-semibold text-ink">
                    <CalendarClock className="size-4 text-brand-500" aria-hidden="true" />
                    Best time to visit
                  </h2>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {bestTimeToVisit}
                  </p>
                </div>
              ) : null}

              <div className="mt-6 grid gap-2.5">
                <Button href="/contact/" className="w-full">
                  Get a free quote
                </Button>
                <Button
                  href={whatsappLink({ destinationName: name })}
                  variant="whatsapp"
                  className="w-full"
                >
                  <WhatsAppIcon className="size-5" />
                  Ask on WhatsApp
                </Button>
              </div>

              <p className="mt-4 text-center text-xs leading-relaxed text-ink-muted">
                One named coordinator, from your first question to your last boarding pass.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* ------------------------------ Packages ----------------------------- */}
      {packages.length ? (
        <Section id="packages" tone="mist" className="py-6 sm:py-7">
          <div className="container-page">
            <SectionHeading
              title={`Ready-made ${name} trips`}
              link="/packages/"
              linkLabel="All packages"
            />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <li key={pkg.slug}>
                  <PackageCard pkg={{ ...pkg, destination: { name, region, slug } }} />
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      {/* -------------------------------- FAQs ------------------------------- */}
      {faqs.length ? (
        <Section tone="mist" className="py-6 sm:py-7">
          <div className="container-prose px-0">
            <Faqs faqs={faqs} id="faqs" title={`${name} — questions we get asked`} />
          </div>
        </Section>
      ) : null}

      {/* -------------------------------- CTA -------------------------------- */}
      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <EnquiryCta
            destinationName={name}
            destinationSlug={slug}
            source={`/destinations/${region}/${slug}/`}
            title={`Planning ${name}?`}
          />

          <p className="mt-10 text-center text-sm text-ink-muted">
            <Link
              href={`/destinations/${region}/`}
              className="font-medium text-brand-700 underline-offset-4 hover:underline"
            >
              ← All {regionLabel.toLowerCase()} destinations
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
