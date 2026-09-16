import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { durationLabel, formatDateShort, formatINR } from "@/lib/format";
import { PACKAGE_CATEGORIES } from "@/lib/site";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL = Object.fromEntries(PACKAGE_CATEGORIES.map((c) => [c.slug, c.label]));

/**
 * Package card — used on the homepage deals carousel, the packages index, the
 * category views and the "related packages" strips.
 *
 * Everything a visitor needs to shortlist is on the face of the card: where,
 * how long, from how much, and what kind of trip it is. Price is always INR.
 */
export default function PackageCard({ pkg, className, eager = false }) {
  const destinationName = pkg.destination?.name;
  const offerEnds =
    pkg.offerEndsOn && new Date(pkg.offerEndsOn) >= startOfToday()
      ? formatDateShort(pkg.offerEndsOn)
      : null;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white",
        "transition-shadow duration-300 hover:shadow-[0_20px_50px_-28px_rgba(16,32,42,0.45)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist-100">
        <Image
          src={pkg.heroImage.url}
          alt={pkg.heroImage.alt || pkg.title}
          fill
          // See DestinationCard: eager + hint, not preload.
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          // Card art renders around 320 CSS px wide, so the 60 rung costs
          // nothing visible and takes roughly a third off the homepage's
          // image weight — which is what the LCP image competes with.
          quality={60}
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 88vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {pkg.type === "fixed-departure" ? (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-sun px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-brand-900 uppercase">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            Fixed departure
          </span>
        ) : null}

        {/* A promotional price says when it stops being one. The badge takes
            itself down the day after the offer ends — see the field note in
            models/Package.js — so nothing here has to be unpublished by hand. */}
        {offerEnds ? (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.6875rem] font-semibold text-brand-800 shadow-sm">
            Offer ends {offerEnds}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-ink-muted">
          {destinationName ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand-500" aria-hidden="true" />
              {destinationName}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5 font-medium text-brand-700">
            {durationLabel(pkg.durationDays, pkg.durationNights)}
          </span>
        </div>

        <h3 className="mt-2.5 text-xl leading-snug font-semibold text-ink">
          <Link
            href={pkg.href}
            className="after:absolute after:inset-0 focus-visible:underline focus-visible:outline-none"
          >
            {pkg.title}
          </Link>
        </h3>

        {pkg.summary ? (
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{pkg.summary}</p>
        ) : null}

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="text-[0.6875rem] tracking-wide text-ink-muted uppercase">Starting from</p>
            <p className="font-sans text-xl font-semibold text-ink">{formatINR(pkg.priceFrom)}</p>
            <p className="text-[0.6875rem] text-ink-muted">per person</p>
          </div>
          <span className="rounded-full bg-mist-100 px-3 py-1 text-[0.6875rem] font-semibold text-ink-soft">
            {CATEGORY_LABEL[pkg.category] || pkg.category}
          </span>
        </div>
      </div>
    </article>
  );
}

/**
 * Midnight UTC today. Package dates are stored at UTC midnight (see
 * lib/format.js), so comparing against the local clock would drop an offer a
 * day early for a viewer west of Greenwich.
 */
function startOfToday() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}
