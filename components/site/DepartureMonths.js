"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArmchairIcon, MapPin } from "lucide-react";
import { durationLabel, formatDate, formatINR, groupByMonth } from "@/lib/format";
import { cn } from "@/lib/utils";

/**
 * "Leaving next", as a calendar.
 *
 * It was four rows in a two-column grid: the next four dates, in order, with
 * no way to look past them and nothing to do but click through. A group
 * departure is bought on the date more than on the destination — people ask
 * "what have you got in December?", not "what is the fourth-soonest trip?" —
 * so the band is now a month rail and a month grid, and the whole calendar is
 * reachable without leaving the homepage.
 *
 * Three levels of interaction, each optional:
 *
 *   - Pick a MONTH from the rail. Months with nothing in them are not there;
 *     an empty cell in a rail is a dead end.
 *   - Pick a DAY in the grid. Days that carry a departure are buttons and
 *     everything else is inert text, so the affordance is honest. Choosing
 *     one filters the list beside it to that date.
 *   - Follow a DEPARTURE through to its tour page, which is what the old band
 *     did and the only thing it did.
 *
 * Dates are read in UTC throughout. Departure dates are stored at UTC
 * midnight, so building the grid from local getters would slide the whole
 * month by a day for anyone west of Greenwich.
 */

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

export default function DepartureMonths({ departures = [] }) {
  const months = useMemo(() => groupByMonth(departures), [departures]);
  const [activeKey, setActiveKey] = useState(months[0]?.key);
  const [activeDay, setActiveDay] = useState(null);

  const month = months.find((m) => m.key === activeKey) || months[0];
  if (!month) return null;

  const [year, monthNumber] = month.key.split("-").map(Number);
  const cells = monthGrid(year, monthNumber - 1);

  /** Departures keyed by day-of-month, so a grid cell is a map lookup. */
  const byDay = new Map();
  for (const departure of month.departures) {
    const day = new Date(departure.departureDate).getUTCDate();
    if (!byDay.has(day)) byDay.set(day, []);
    byDay.get(day).push(departure);
  }

  const listed = activeDay ? byDay.get(activeDay) || [] : month.departures;

  const selectMonth = (key) => {
    setActiveKey(key);
    setActiveDay(null);
  };

  return (
    <div className="mt-8">
      {/* The months we actually have something in. */}
      <div
        role="tablist"
        aria-label="Departure months"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {months.map((item) => {
          const selected = item.key === month.key;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="departure-month-panel"
              onClick={() => selectMonth(item.key)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200",
                "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                selected
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
              )}
            >
              {item.label}
              <span className={cn("ml-2 text-xs", selected ? "text-white/70" : "text-ink-muted")}>
                {item.departures.length}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="departure-month-panel"
        className="mt-5 grid gap-5 lg:grid-cols-[19rem_1fr] lg:gap-7"
      >
        {/* ------------------------------ The grid ------------------------- */}
        <div className="rounded-3xl border border-line bg-white p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-base font-bold text-ink">{month.label}</p>
            {activeDay ? (
              <button
                type="button"
                onClick={() => setActiveDay(null)}
                className="text-xs font-semibold text-brand-700 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
              >
                Show the whole month
              </button>
            ) : (
              <p className="text-xs text-ink-muted">
                {month.departures.length}{" "}
                {month.departures.length === 1 ? "departure" : "departures"}
              </p>
            )}
          </div>

          <div
            aria-hidden="true"
            className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.625rem] font-bold tracking-wide text-ink-muted uppercase"
          >
            {WEEKDAYS.map((day, index) => (
              <span key={`${day}-${index}`}>{day}</span>
            ))}
          </div>

          <div className="mt-1.5 grid grid-cols-7 gap-1">
            {cells.map((day, index) => {
              if (!day) return <span key={`blank-${index}`} />;

              const onThisDay = byDay.get(day);
              if (!onThisDay) {
                return (
                  <span
                    key={day}
                    className="flex aspect-square items-center justify-center rounded-lg text-sm text-ink-muted/60"
                  >
                    {day}
                  </span>
                );
              }

              const selected = activeDay === day;
              const soldOut = onThisDay.every((d) => d.availability === "sold-out");
              return (
                <button
                  key={day}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveDay(selected ? null : day)}
                  className={cn(
                    "relative flex aspect-square items-center justify-center rounded-lg text-sm font-bold transition-colors duration-200",
                    "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                    selected
                      ? "bg-brand-700 text-white"
                      : soldOut
                        ? "bg-mist-100 text-ink-muted hover:bg-mist-200"
                        : "bg-brand-50 text-brand-800 hover:bg-brand-100"
                  )}
                >
                  {day}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-1 size-1 rounded-full",
                      selected ? "bg-white" : soldOut ? "bg-ink-muted" : "bg-brand-500"
                    )}
                  />
                  <span className="sr-only">
                    , {onThisDay.length} {onThisDay.length === 1 ? "departure" : "departures"}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-line pt-3.5 text-[0.6875rem] text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2.5 rounded bg-brand-50 ring-1 ring-brand-200" />
              Seats available
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="size-2.5 rounded bg-mist-200" />
              Sold out
            </span>
          </p>
        </div>

        {/* ------------------------------ The list -------------------------
            ONE COLUMN, full width of this side of the band. It was a
            two-column grid, which at xl gave each card half of the remaining
            space — so a month with a single departure produced one cramped
            card with a truncated title and a large hole beside it. Wide rows
            also give the title room to finish, which is the thing somebody is
            reading. */}
        <ul className="grid content-start gap-3.5">
          {listed.map((departure) => {
            const soldOut = departure.availability === "sold-out";
            return (
              <li key={departure._id}>
                <Link
                  href={departure.href}
                  className="group flex h-full items-center gap-5 rounded-3xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_22px_48px_-30px_rgba(16,32,42,0.55)] focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none motion-reduce:hover:translate-y-0 sm:p-6"
                >
                  <span
                    className={cn(
                      "flex size-[4.5rem] shrink-0 flex-col items-center justify-center rounded-2xl sm:size-20",
                      soldOut ? "bg-mist-200 text-ink-muted" : "bg-brand-800 text-white"
                    )}
                  >
                    <span className="font-sans text-2xl leading-none font-extrabold sm:text-[1.75rem]">
                      {new Date(departure.departureDate).getUTCDate()}
                    </span>
                    <span className="mt-1 text-[0.625rem] font-semibold tracking-[0.12em] uppercase opacity-85">
                      {formatDate(departure.departureDate).split(" ")[1]}
                    </span>
                    <span className="mt-0.5 text-[0.5625rem] tracking-wide opacity-70">
                      {new Date(departure.departureDate).getUTCFullYear()}
                    </span>
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-lg leading-snug font-bold text-ink group-hover:text-brand-700 sm:text-xl">
                      {departure.package?.title}
                    </span>
                    <span className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8125rem] text-ink-muted">
                      <span>
                        {durationLabel(
                          departure.package?.durationDays,
                          departure.package?.durationNights
                        )}
                      </span>
                      {departure.package?.destination?.name ? (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-brand-400" aria-hidden="true" />
                          {departure.package.destination.name}
                        </span>
                      ) : null}
                      {departure.boardingCity ? <span>from {departure.boardingCity}</span> : null}
                    </span>
                    <span
                      className={cn(
                        "mt-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold",
                        soldOut
                          ? "bg-mist-100 text-ink-muted"
                          : departure.seatsRemaining && departure.seatsRemaining <= 6
                            ? "bg-sun/20 text-sun-shadow"
                            : "bg-brand-50 text-brand-700"
                      )}
                    >
                      <ArmchairIcon className="size-3.5" aria-hidden="true" />
                      {soldOut ? "Sold out" : `${departure.seatsRemaining} seats left`}
                    </span>
                  </span>

                  <span className="hidden shrink-0 text-right sm:block">
                    <span className="block font-sans text-2xl leading-none font-extrabold text-ink">
                      {formatINR(departure.price ?? departure.package?.priceFrom)}
                    </span>
                    <span className="mt-1.5 block text-[0.6875rem] text-ink-muted">per person</span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      View tour
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </span>

                  <ArrowRight
                    className="size-4 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-700 sm:hidden"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/**
 * The cells of one month, Monday-first, padded with nulls for the days before
 * the 1st. Trailing blanks are not emitted — an empty last row is a row of
 * nothing, and the grid ends where the month does.
 */
function monthGrid(year, monthIndex) {
  const first = new Date(Date.UTC(year, monthIndex, 1));
  const daysInMonth = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  // getUTCDay is Sunday-first; the rail reads Monday-first, as calendars in
  // India do.
  const lead = (first.getUTCDay() + 6) % 7;

  return [
    ...Array.from({ length: lead }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
}
