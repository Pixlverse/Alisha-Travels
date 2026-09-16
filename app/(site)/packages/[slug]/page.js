import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Check,
  Clock,
  MapPin,
  Sparkles,
  Users,
  X as XIcon,
} from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import Button from "@/components/site/Button";
import CallbackForm from "@/components/site/CallbackForm";
import EnquiryCta from "@/components/site/EnquiryCta";
import EnquiryDialog from "@/components/site/EnquiryDialog";
import Faqs from "@/components/site/Faqs";
import Itinerary from "@/components/site/Itinerary";
import JsonLd from "@/components/site/JsonLd";
import PackageActions from "@/components/site/PackageActions";
import PackageCard from "@/components/site/PackageCard";
import { Section, SectionHeading } from "@/components/site/Section";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { getPackageBySlug, getPackageSlugs, getPackages } from "@/lib/data/packages";
import { getDestinations } from "@/lib/data/destinations";
import { getServices } from "@/lib/data/content";
import { durationLabel, formatDate, formatDateRange, formatINR } from "@/lib/format";
import { PACKAGE_CATEGORIES } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";
import { breadcrumbSchema, faqSchema, touristTripSchema } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

export const revalidate = 600;

const CATEGORY_LABEL = Object.fromEntries(PACKAGE_CATEGORIES.map((c) => [c.slug, c.label]));

export async function generateStaticParams() {
  return getPackageSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return {};

  return {
    title: pkg.metaTitle || pkg.title,
    description: pkg.metaDescription || pkg.summary,
    alternates: { canonical: `/packages/${slug}/` },
    openGraph: {
      title: pkg.metaTitle || pkg.title,
      description: pkg.metaDescription || pkg.summary,
      images: pkg.heroImage?.url ? [{ url: pkg.heroImage.url }] : undefined,
    },
  };
}

/**
 * Package detail page.
 *
 * Laid out on the reference tour-page pattern the client picked: breadcrumbs,
 * a sticky sidebar carrying the starting price and the primary CTA, the
 * Share / Download / Email row, and highlights and inclusions as icon-labelled
 * lists. The reference's payment and availability machinery is replaced by the
 * enquiry route, since this phase has no payment module.
 *
 * The itinerary is rendered as HTML rather than locked inside a PDF. That is
 * the single biggest content fix on the site.
 */
export default async function PackagePage({ params }) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) notFound();

  const {
    title,
    summary,
    heroImage,
    gallery = [],
    destination,
    category,
    type,
    durationDays,
    durationNights,
    priceFrom,
    priceNote,
    highlights = [],
    inclusions = [],
    exclusions = [],
    itinerary = [],
    faqs = [],
    departures = [],
    pdfUrl,
  } = pkg;

  const [related, destinations, services] = await Promise.all([
    destination?._id
      ? getPackages({ destinationId: destination._id, exclude: slug, limit: 3 })
      : Promise.resolve([]),
    getDestinations(),
    getServices(),
  ]);

  const crumbs = [
    { label: "Packages", href: "/packages/" },
    ...(CATEGORY_LABEL[category]
      ? [{ label: CATEGORY_LABEL[category], href: `/packages/${category}/` }]
      : []),
    { label: title },
  ];

  const upcoming = departures.filter((d) => d.availability !== "expired");
  const past = departures.filter((d) => d.availability === "expired");

  return (
    <>
      <JsonLd schema={[touristTripSchema(pkg), breadcrumbSchema(crumbs), faqSchema(faqs)]} />

      {/* ------------------------------- Hero -------------------------------- */}
      <section className="relative isolate overflow-hidden bg-brand-900">
        <Image
          src={heroImage.url}
          alt={heroImage.alt || title}
          fill
          // The LCP element on a package page. See Hero.js.
          preload
          fetchPriority="high"
          // See Hero.js on why the hero art uses the 60 rung.
          quality={60}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-900/94 via-brand-900/60 to-brand-900/35"
          aria-hidden="true"
        />

        <div className="relative container-page pt-8 pb-12 sm:pt-10 sm:pb-16">
          <Breadcrumbs invert items={crumbs} />

          <div className="mt-10 max-w-3xl sm:mt-14">
            <div className="flex flex-wrap items-center gap-2">
              {type === "fixed-departure" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sun px-3 py-1 text-[0.6875rem] font-bold tracking-wide text-brand-900 uppercase">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  Fixed departure
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Customisable
                </span>
              )}
              {destination ? (
                <Link
                  href={destination.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {destination.name}
                </Link>
              ) : null}
            </div>

            <h1 className="mt-5 text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            {summary ? (
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{summary}</p>
            ) : null}

            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/85">
              <li className="inline-flex items-center gap-2">
                <Clock className="size-4 text-brand-200" aria-hidden="true" />
                {durationLabel(durationDays, durationNights)}
              </li>
              {itinerary.length ? (
                <li className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-brand-200" aria-hidden="true" />
                  {itinerary.length}-day itinerary
                </li>
              ) : null}
              {CATEGORY_LABEL[category] ? (
                <li className="inline-flex items-center gap-2">
                  <Users className="size-4 text-brand-200" aria-hidden="true" />
                  {CATEGORY_LABEL[category]}
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------- Content + sidebar -------------------------- */}
      <Section className="py-6 sm:py-7">
        <div className="container-page grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <PackageActions title={title} pdfUrl={pdfUrl} className="mb-10" />

            {highlights.length ? (
              <div>
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Tour highlights</h2>
                {/* Was a --mist-50 box with a hairline border and --ink-soft
                    copy, five of them in a row — grey on grey, which is most of
                    why this page read as soft. White cards on a --brand-100
                    ring, each with a filled icon chip and --ink copy. */}
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3.5 rounded-2xl bg-white p-4 ring-1 ring-brand-100 shadow-[0_14px_34px_-30px_rgba(16,32,42,0.5)]"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600"
                      >
                        <Sparkles className="size-4" />
                      </span>
                      <span className="text-[0.9375rem] leading-snug font-medium text-ink">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {itinerary.length ? (
              <div className="mt-14">
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                  Day-by-day itinerary
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Every day is here on the page — no PDF to download before you can read it.
                </p>
                <div className="mt-8">
                  <Itinerary days={itinerary} />
                </div>
              </div>
            ) : null}

            {/* Inclusions and exclusions, side by side, as icon-labelled lists. */}
            {/* Two cards rather than two bare lists side by side: included on a
                brand wash, not-included on a neutral one, each with its ticks in
                a filled chip. Same content, but the page now shows at a glance
                which column is which. */}
            {inclusions.length || exclusions.length ? (
              <div className="mt-14 grid gap-4 sm:grid-cols-2">
                {inclusions.length ? (
                  <div className="rounded-3xl bg-gradient-to-b from-brand-50 to-white p-6 ring-1 ring-brand-100">
                    <h2 className="text-xl font-semibold text-ink">What&rsquo;s included</h2>
                    <ul className="mt-4 space-y-3">
                      {inclusions.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"
                          >
                            <Check className="size-3" strokeWidth={3} />
                          </span>
                          <span className="text-[0.9375rem] leading-snug text-ink-soft">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {exclusions.length ? (
                  <div className="rounded-3xl bg-mist-50 p-6 ring-1 ring-line">
                    <h2 className="text-xl font-semibold text-ink">What&rsquo;s not</h2>
                    <ul className="mt-4 space-y-3">
                      {exclusions.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-mist-300 text-ink-soft"
                          >
                            <XIcon className="size-3" strokeWidth={3} />
                          </span>
                          <span className="text-[0.9375rem] leading-snug text-ink-soft">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Departures. Past dates are shown, never hidden — see the note in
                models/Departure.js. */}
            {departures.length ? (
              <div className="mt-14">
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Departure dates</h2>

                {upcoming.length ? (
                  <ul className="mt-6 space-y-3">
                    {upcoming.map((departure) => (
                      <DepartureRow key={departure._id} departure={departure} price={priceFrom} />
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 rounded-2xl border border-dashed border-line p-6 text-[0.9375rem] text-ink-soft">
                    No dates are on sale for this tour right now. Tell us when you would like to
                    travel and we will either open a group or build it privately.
                  </p>
                )}

                {past.length ? (
                  <details className="group mt-6">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
                      Show {past.length} past {past.length === 1 ? "departure" : "departures"}
                    </summary>
                    <ul className="mt-4 space-y-3">
                      {past.map((departure) => (
                        <DepartureRow
                          key={departure._id}
                          departure={departure}
                          price={priceFrom}
                        />
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>
            ) : null}

            {gallery.length ? (
              <div className="mt-14">
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Photos</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {gallery.map((image, index) => (
                    <li
                      key={`${image.url}-${index}`}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-100"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt || `${title} — photograph ${index + 1}`}
                        fill
                        loading="lazy"
                        sizes="(min-width: 640px) 24rem, 90vw"
                        className="object-cover"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {faqs.length ? (
              <div className="mt-14">
                <Faqs faqs={faqs} id="package-faqs" title="Questions about this tour" />
              </div>
            ) : null}
          </div>

          {/* ------------------------------ Sidebar ---------------------------- */}
          <aside className="lg:sticky lg:top-28 lg:self-start" data-print-hide>
            {/*
              The price and the two ways to act on it, on a --brand-800 panel.
              This was a white card with a hairline border, sitting on a white
              page beside white content — the client's note was that the page
              looked soft and weak, and this is the element that most needed to
              stop blending in. It is also the conversion card, so it should be
              the loudest thing on the page.

              The callback form stays on its own WHITE card below rather than
              moving onto the dark panel: it is a form with labelled inputs and
              CallbackForm has no dark treatment, so putting it on --brand-800
              would have meant either unreadable fields or teaching that
              component a second colour scheme for one page.

              "Starting from" is --sun, which the palette reserves for ratings,
              price bands and urgency. This is a price band, and it is the one
              warm mark on an otherwise all-blue page.
            */}
            <div className="relative isolate overflow-hidden rounded-3xl bg-brand-800 p-6 shadow-[0_24px_60px_-30px_rgba(0,92,117,0.65)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.18),transparent_55%)]"
              />

              <div className="relative z-10">
                <p className="text-[0.6875rem] font-semibold tracking-wide text-sun uppercase">
                  Starting from
                </p>
                <p className="mt-1 text-4xl font-extrabold tracking-tight text-white">
                  {formatINR(priceFrom)}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-100/90">
                  {priceNote || "per person on twin sharing"} ·{" "}
                  {durationLabel(durationDays, durationNights)}
                </p>

                <div className="mt-6 grid gap-2.5">
                  <EnquiryDialog
                    label="Enquire now"
                    variant="white"
                    className="w-full"
                    destinations={destinations}
                    services={services}
                    packageTitle={title}
                    packageSlug={slug}
                    destinationSlug={destination?.slug}
                    source={`/packages/${slug}/`}
                    sourceLabel={title}
                    title={`Enquire about ${title}`}
                  />
                  <Button
                    href={whatsappLink({
                      packageTitle: title,
                      destinationName: destination?.name,
                    })}
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                  >
                    <WhatsAppIcon className="size-5" />
                    Ask on WhatsApp
                  </Button>
                </div>

                {/* /90, not /75 — see the contrast note in EnquiryCta. */}
                <p className="mt-4 text-center text-xs leading-relaxed text-brand-100/90">
                  No payment is taken online. You get a written quote and a person to talk to.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-3xl bg-white p-6 ring-1 ring-line shadow-[0_20px_50px_-40px_rgba(16,32,42,0.45)]">
              <CallbackForm
                packageTitle={title}
                packageSlug={slug}
                destinationSlug={destination?.slug}
                source={`/packages/${slug}/`}
              />
            </div>

            {destination ? (
              <Link
                href={destination.href}
                className="group mt-4 flex items-center gap-3 rounded-2xl border border-line bg-mist-50 p-4 transition-colors hover:border-brand-300"
              >
                <MapPin className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
                <span className="text-sm text-ink-soft">
                  More about{" "}
                  <span className="font-semibold text-ink group-hover:text-brand-700">
                    {destination.name}
                  </span>
                </span>
              </Link>
            ) : null}
          </aside>
        </div>
      </Section>

      {/* ---------------------------- Related -------------------------------- */}
      {related.length ? (
        <Section tone="mist" className="py-6 sm:py-7">
          <div className="container-page">
            <SectionHeading
              title={`Other ${destination?.name || ""} trips`.trim()}
              link="/packages/"
              linkLabel="All packages"
            />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <PackageCard pkg={item} />
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section className="py-6 sm:py-7">
        <div className="container-page">
          <EnquiryCta
            packageTitle={title}
            packageSlug={slug}
            destinationName={destination?.name}
            destinationSlug={destination?.slug}
            source={`/packages/${slug}/`}
            title="Want this one changed?"
          />
        </div>
      </Section>
    </>
  );
}

function DepartureRow({ departure, price }) {
  const expired = departure.availability === "expired";
  const soldOut = departure.availability === "sold-out";

  return (
    <li
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border p-4",
        expired ? "border-line bg-mist-50 opacity-70" : "border-line bg-white"
      )}
    >
      <div className="min-w-0 flex-1">
        <p className={cn("font-sans font-semibold", expired ? "text-ink-muted" : "text-ink")}>
          {departure.returnDate
            ? formatDateRange(departure.departureDate, departure.returnDate)
            : formatDate(departure.departureDate)}
        </p>
        <p className="mt-0.5 text-xs text-ink-muted">
          {departure.boardingCity ? `Departs ${departure.boardingCity}` : "Departure date"}
          {!expired && !soldOut && departure.seatsRemaining
            ? ` · ${departure.seatsRemaining} seats left`
            : ""}
        </p>
      </div>

      <p className={cn("font-sans font-semibold", expired ? "text-ink-muted" : "text-ink")}>
        {formatINR(departure.price ?? price)}
      </p>

      {expired ? (
        <span className="rounded-full bg-mist-200 px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide text-ink-muted uppercase">
          Departed
        </span>
      ) : soldOut ? (
        <span className="rounded-full bg-ink/10 px-2.5 py-1 text-[0.6875rem] font-bold tracking-wide text-ink uppercase">
          Sold out
        </span>
      ) : (
        <Button href="/contact/" size="sm">
          Enquire
        </Button>
      )}
    </li>
  );
}
