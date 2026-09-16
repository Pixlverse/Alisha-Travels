import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatINRCompact } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * Destination card.
 *
 * Follows the pattern the client picked out from the Akbar Travels "Trending
 * Destinations" strip: a photograph, the destination name set large over it,
 * and a "Starting @ ₹X" band pinned to the bottom edge. Adapted to our palette
 * and set in Fraunces italic rather than a script face, so no third font is
 * loaded just for this one element.
 *
 * The price is derived from the cheapest active package for the destination
 * (see lib/data/destinations.js), so it can never advertise a number nobody
 * can actually book.
 */
export default function DestinationCard({ destination, size = "default", eager = false }) {
  const { name, tagline, heroImage, href, priceFrom, region, packageCount } = destination;

  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-3xl bg-brand-900",
        "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none",
        size === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"
      )}
    >
      <Image
        src={heroImage.url}
        alt={heroImage.alt || name}
        fill
        // Cards are never `preload`ed: which one is the LCP depends on the
        // viewport, and the Next 16 docs are explicit that preload is wrong
        // when there are several candidates. Eager loading plus a priority
        // hint gets the first row moving without a head-blocking <link>.
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        // Card art renders around 320 CSS px wide, so the 60 rung costs
        // nothing visible and takes roughly a third off the homepage's
        // image weight — which is what the LCP image competes with.
        quality={60}
        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 78vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />

      {/* Two stops rather than one: a soft top wash so the region chip stays
          legible on a bright sky, and a heavier foot for the title block. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/80"
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
            {region === "international" ? "International" : "Domestic"}
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>

        <div>
          <h3 className="text-[1.75rem] leading-tight font-bold tracking-[-0.02em] text-white drop-shadow-sm sm:text-[2rem]">
            {name}
          </h3>
          {tagline ? (
            <p className="mt-2 line-clamp-2 max-w-[18rem] text-sm leading-snug text-white/80">
              {tagline}
            </p>
          ) : null}

          <div className="mt-4 flex items-center gap-3 border-t border-white/20 pt-3.5">
            {priceFrom ? (
              <p className="text-sm text-white/75">
                Starting @{" "}
                <span className="font-sans text-base font-semibold text-white">
                  {formatINRCompact(priceFrom)}
                </span>
              </p>
            ) : (
              <p className="text-sm text-white/75">Custom itineraries</p>
            )}
            {packageCount ? (
              <span className="ml-auto text-xs text-white/60">
                {packageCount} {packageCount === 1 ? "package" : "packages"}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
