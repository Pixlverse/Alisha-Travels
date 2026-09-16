import Image from "next/image";
import Link from "next/link";
import { ArmchairIcon, Clock, MapPin } from "lucide-react";
import Button from "./Button";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { durationLabel, formatDate, formatDateRange, formatINR } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * A dated group departure, as it appears on the calendar pages.
 *
 * The three availability states all render — `upcoming`, `sold-out` and
 * `expired`. An expired departure is greyed and badged "Departed", never
 * removed: see the long note in models/Departure.js for why deleting them is
 * the wrong fix for the legacy site's stale-dates problem.
 */
export default function DepartureCard({ departure }) {
  const pkg = departure.package;
  const expired = departure.availability === "expired";
  const soldOut = departure.availability === "sold-out";
  const price = departure.price ?? pkg?.priceFrom;
  const seats = departure.seatsRemaining ?? 0;
  const scarce = !expired && !soldOut && departure.seatsTotal > 0 && seats > 0 && seats <= 6;

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-5 rounded-3xl border p-4 sm:flex-row sm:items-center sm:p-5",
        expired ? "border-line bg-mist-50" : "border-line bg-white hover:border-brand-300"
      )}
    >
      {/* Date block — the thing you scan a calendar for. */}
      <div
        className={cn(
          "flex w-full shrink-0 flex-row items-center gap-4 rounded-2xl px-4 py-3 sm:w-24 sm:flex-col sm:gap-0 sm:px-0 sm:py-4",
          expired ? "bg-mist-200 text-ink-muted" : "bg-brand-800 text-white"
        )}
      >
        <span className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase opacity-80 sm:order-1">
          {formatDate(departure.departureDate).split(" ")[1]}
        </span>
        <span className="font-sans text-2xl leading-none font-extrabold sm:order-2 sm:mt-0.5 sm:text-3xl">
          {new Date(departure.departureDate).getUTCDate()}
        </span>
        <span className="text-[0.625rem] tracking-wide uppercase opacity-70 sm:order-3 sm:mt-1">
          {new Date(departure.departureDate).getUTCFullYear()}
        </span>
      </div>

      {/* Thumbnail */}
      {pkg?.heroImage?.url ? (
        <div
          className={cn(
            "relative hidden aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl bg-mist-100 lg:block",
            expired && "opacity-60 grayscale"
          )}
        >
          <Image
            src={pkg.heroImage.url}
            alt={pkg.heroImage.alt || pkg.title}
            fill
            loading="lazy"
            sizes="7rem"
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Detail */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {expired ? (
            <Badge tone="muted">Departed</Badge>
          ) : soldOut ? (
            <Badge tone="dark">Sold out</Badge>
          ) : scarce ? (
            <Badge tone="sun">Only {seats} seats left</Badge>
          ) : (
            <Badge tone="brand">Seats available</Badge>
          )}
          {pkg?.destination ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
              <MapPin className="size-3.5 text-brand-400" aria-hidden="true" />
              {pkg.destination.name}
            </span>
          ) : null}
        </div>

        <h3
          className={cn(
            "mt-2 font-display text-lg leading-snug font-semibold sm:text-xl",
            expired ? "text-ink-muted" : "text-ink"
          )}
        >
          <Link
            href={departure.href}
            className="after:absolute after:inset-0 hover:text-brand-700 focus-visible:underline focus-visible:outline-none"
          >
            {pkg?.title}
          </Link>
        </h3>

        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-muted">
          <li className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {durationLabel(pkg?.durationDays, pkg?.durationNights)}
          </li>
          {departure.returnDate ? (
            <li>{formatDateRange(departure.departureDate, departure.returnDate)}</li>
          ) : null}
          {departure.boardingCity ? <li>Departs {departure.boardingCity}</li> : null}
          {!expired && departure.seatsTotal ? (
            <li className="inline-flex items-center gap-1.5">
              <ArmchairIcon className="size-3.5" aria-hidden="true" />
              {seats} of {departure.seatsTotal} seats
            </li>
          ) : null}
        </ul>
      </div>

      {/* Price and action. The buttons sit above the card-wide link. */}
      <div className="relative z-10 flex shrink-0 items-end justify-between gap-4 sm:flex-col sm:items-end">
        <div className="text-right">
          <p className="text-[0.625rem] tracking-wide text-ink-muted uppercase">Per person</p>
          <p
            className={cn(
              "font-sans text-xl font-extrabold",
              expired ? "text-ink-muted line-through" : "text-ink"
            )}
          >
            {formatINR(price)}
          </p>
        </div>

        {expired ? (
          <Button href={departure.href} variant="outline" size="sm">
            View tour
          </Button>
        ) : soldOut ? (
          <Button
            href={whatsappLink({ packageTitle: pkg?.title })}
            variant="outline"
            size="sm"
          >
            <WhatsAppIcon className="size-4" />
            Join waitlist
          </Button>
        ) : (
          <Button href="/contact/" size="sm">
            Enquire
          </Button>
        )}
      </div>
    </article>
  );
}

function Badge({ tone, children }) {
  const tones = {
    brand: "bg-brand-50 text-brand-700",
    // Not text-sun-deep: on this 20% wash it measures 3.21:1, and a 10px
    // bold badge is still "small text" for AA. --sun-shadow clears it.
    sun: "bg-sun/20 text-sun-shadow",
    dark: "bg-ink/10 text-ink",
    muted: "bg-mist-200 text-ink-muted",
  };
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[0.625rem] font-bold tracking-wide uppercase",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}
