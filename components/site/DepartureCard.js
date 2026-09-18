import Image from "next/image";
import { ArmchairIcon, ArrowRight, Clock, MapPin } from "lucide-react";
import Button from "./Button";
import EnquiryDialog from "./EnquiryDialog";
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
 *
 * REDESIGNED, for two things the client called out.
 *
 * THE TYPE. The tour title was set in `font-display` — Fraunces, the display
 * serif — and it was the last heading on the site still doing that. The client
 * rejected serif headings early on, globals.css turns them off for every h1–h4
 * by default, and this card was opting back in, so the calendar was the one
 * page whose headings did not match the rest of the site. It is Figtree now,
 * at the weight and tracking the package cards use.
 *
 * THE SHAPE. A solid date tile and a photograph sat side by side at the left,
 * two blocks of different proportions competing for the same job, with the
 * detail column stretched thin between them and the price stranded at the far
 * right. The date is now a stamp ON the photograph — one block, the way a
 * ticket carries its own date — and the price and action are divided off by a
 * rule rather than by a gap.
 *
 * AND IT RESPONDS. The whole card lifts and the photograph pushes in under the
 * cursor, the seats remaining are a bar rather than a sentence, and Enquire
 * opens the form in place, pre-filled with this departure, rather than sending
 * the visitor to /contact/ to type out which date they meant.
 */
export default function DepartureCard({ departure, destinations = [], services = [] }) {
  const pkg = departure.package;
  const expired = departure.availability === "expired";
  const soldOut = departure.availability === "sold-out";
  const price = departure.price ?? pkg?.priceFrom;
  const seats = departure.seatsRemaining ?? 0;
  const total = departure.seatsTotal ?? 0;
  const scarce = !expired && !soldOut && total > 0 && seats > 0 && seats <= 6;
  const booked = total > 0 ? Math.min(100, Math.round(((total - seats) / total) * 100)) : null;

  const month = formatDate(departure.departureDate).split(" ")[1];
  const day = new Date(departure.departureDate).getUTCDate();
  const year = new Date(departure.departureDate).getUTCFullYear();
  const dates = departure.returnDate
    ? formatDateRange(departure.departureDate, departure.returnDate)
    : formatDate(departure.departureDate);

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 rounded-3xl border p-3 transition-all duration-300 sm:flex-row sm:items-center sm:gap-5 sm:p-3.5",
        expired
          ? "border-line bg-mist-50"
          : "border-line bg-white hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_24px_50px_-32px_rgba(16,32,42,0.55)] motion-reduce:hover:translate-y-0"
      )}
    >
      {/* The photograph, with the date stamped on it. */}
      <div
        className={cn(
          "relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-2xl sm:aspect-[4/3] sm:w-40 lg:w-48",
          expired ? "bg-mist-200" : "bg-brand-800"
        )}
      >
        {pkg?.heroImage?.url ? (
          <Image
            src={pkg.heroImage.url}
            alt={pkg.heroImage.alt || pkg.title}
            fill
            loading="lazy"
            quality={60}
            sizes="(min-width: 1024px) 12rem, (min-width: 640px) 10rem, 92vw"
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              expired ? "opacity-55 grayscale" : "group-hover:scale-[1.06]"
            )}
          />
        ) : null}

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgb(6_18_25/0.55),transparent_55%)]"
        />

        <span
          className={cn(
            "absolute top-2.5 left-2.5 rounded-xl px-2.5 py-1.5 text-center shadow-[0_10px_24px_-14px_rgba(0,0,0,0.8)]",
            expired ? "bg-white/85 text-ink-muted" : "bg-white text-ink"
          )}
        >
          <span
            className={cn(
              "block text-[0.5625rem] leading-none font-bold tracking-[0.14em] uppercase",
              expired ? "text-ink-muted" : "text-brand-700"
            )}
          >
            {month}
          </span>
          <span className="mt-1 block font-sans text-xl leading-none font-extrabold">{day}</span>
          <span className="mt-1 block text-[0.5625rem] leading-none tracking-wide text-ink-muted">
            {year}
          </span>
        </span>
      </div>

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
            "mt-2 text-lg leading-snug font-bold tracking-[-0.01em] sm:text-xl",
            expired ? "text-ink-muted" : "text-ink"
          )}
        >
          <a
            href={departure.href}
            className="after:absolute after:inset-0 focus-visible:underline focus-visible:outline-none"
          >
            <span className={cn(!expired && "group-hover:text-brand-700")}>{pkg?.title}</span>
            <ArrowRight
              aria-hidden="true"
              className="ml-2 inline-block size-4 -translate-x-1 align-[-0.1em] text-brand-500 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none"
            />
          </a>
        </h3>

        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-muted">
          <li className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {durationLabel(pkg?.durationDays, pkg?.durationNights)}
          </li>
          <li>{dates}</li>
          {departure.boardingCity ? <li>Departs {departure.boardingCity}</li> : null}
        </ul>

        {/* Seats as a bar. "11 of 24 seats" is a fact you have to do the
            arithmetic on; a bar is the same fact already read. */}
        {!expired && total > 0 ? (
          <div className="mt-3.5 max-w-[22rem]">
            <div className="flex items-center justify-between gap-3 text-[0.6875rem] font-semibold">
              <span className="inline-flex items-center gap-1.5 text-ink-soft">
                <ArmchairIcon className="size-3.5 text-ink-muted" aria-hidden="true" />
                {soldOut ? "No seats left" : `${seats} of ${total} seats left`}
              </span>
              <span className="text-ink-muted">{booked}% booked</span>
            </div>
            <div
              className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-mist-200"
              role="img"
              aria-label={`${booked}% of ${total} seats booked`}
            >
              <span
                className={cn(
                  "block h-full rounded-full",
                  soldOut ? "bg-ink/70" : scarce ? "bg-sun" : "bg-brand-500"
                )}
                style={{ width: `${booked}%` }}
              />
            </div>
          </div>
        ) : null}
      </div>

      {/* Price and action, divided off rather than drifting at the far edge.
          Above the card-wide link, so the buttons are the buttons. */}
      <div className="relative z-10 flex shrink-0 items-center justify-between gap-4 border-t border-line pt-4 sm:w-[10.5rem] sm:flex-col sm:items-stretch sm:justify-center sm:gap-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5">
        <div className="sm:text-center">
          <p className="text-[0.625rem] tracking-wide text-ink-muted uppercase">Per person</p>
          <p
            className={cn(
              "font-sans text-xl leading-tight font-extrabold",
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
          <Button href={whatsappLink({ packageTitle: pkg?.title })} variant="outline" size="sm">
            <WhatsAppIcon className="size-4" />
            Join waitlist
          </Button>
        ) : (
          <EnquiryDialog
            label="Enquire"
            size="sm"
            className="w-full justify-center"
            destinations={destinations}
            services={services}
            packageTitle={pkg?.title}
            packageSlug={pkg?.slug}
            destinationSlug={pkg?.destination?.slug}
            source="/fixed-departures/"
            sourceLabel={`${pkg?.title} — ${dates}`}
            title={`Join the ${month} ${day} departure`}
            lead="Tell us how many are travelling and we will hold seats while you decide."
            initialMessage={`I would like to join the ${pkg?.title} departure on ${dates}.`}
          />
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
