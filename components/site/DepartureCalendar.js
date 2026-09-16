import Link from "next/link";
import { CalendarX2 } from "lucide-react";
import DepartureCard from "./DepartureCard";
import Button from "./Button";
import { groupByMonth } from "@/lib/format";

/**
 * The calendar body, shared by all three Fixed Departures pages.
 *
 * Upcoming departures are grouped by month and shown first. Past departures
 * are grouped the same way but folded into a <details> element — present, but
 * not the first thing a visitor meets.
 *
 * This is the whole answer to the legacy site's worst symptom. That site
 * advertised four tours whose dates had passed 15 to 23 months earlier, so it
 * read as abandoned. The naive fix is to delete them, but a calendar with
 * three rows reads as a business that has stopped operating. Showing history,
 * clearly marked, is what makes an operating record out of the same data.
 */
export default function DepartureCalendar({ upcoming = [], past = [], emptyMessage }) {
  const upcomingMonths = groupByMonth(upcoming);
  const pastMonths = groupByMonth(past);

  return (
    <div>
      {/* Month jump strip — the "calendar" affordance. */}
      {upcomingMonths.length > 1 ? (
        <nav
          aria-label="Jump to a month"
          className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {upcomingMonths.map((month) => (
            <a
              key={month.key}
              href={`#month-${month.key}`}
              className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              {month.label}
              <span className="ml-2 text-xs text-ink-muted">{month.departures.length}</span>
            </a>
          ))}
        </nav>
      ) : null}

      {upcomingMonths.length ? (
        <div className="space-y-12">
          {upcomingMonths.map((month) => (
            <section key={month.key} id={`month-${month.key}`} aria-labelledby={`h-${month.key}`}>
              <div className="flex items-center gap-4">
                <h2
                  id={`h-${month.key}`}
                  className="text-xl font-semibold text-ink sm:text-2xl"
                >
                  {month.label}
                </h2>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
                <span className="text-sm text-ink-muted">
                  {month.departures.length}{" "}
                  {month.departures.length === 1 ? "departure" : "departures"}
                </span>
              </div>

              <ul className="mt-5 space-y-4">
                {month.departures.map((departure) => (
                  <li key={departure._id}>
                    <DepartureCard departure={departure} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-line px-6 py-16 text-center">
          <CalendarX2 className="mx-auto size-8 text-ink-muted" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold text-ink">
            No dates are on sale here at the moment.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-ink-soft">
            {emptyMessage ||
              "New group departures are added a few months ahead. Tell us roughly when you want to travel and we will either open a group for those dates or build the trip privately."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/contact/">Tell us your dates</Button>
            <Button href="/packages/" variant="outline">
              Browse all packages
            </Button>
          </div>
        </div>
      )}

      {/* Past departures — kept, not deleted. */}
      {pastMonths.length ? (
        <details className="group mt-14">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl border border-line bg-mist-50 px-5 py-4 transition-colors hover:border-brand-300 [&::-webkit-details-marker]:hidden">
            <span>
              <span className="font-sans text-base font-semibold text-ink">
                Departures we have already run
              </span>
              <span className="mt-0.5 block text-sm text-ink-muted">
                {past.length} past {past.length === 1 ? "departure" : "departures"} — kept here so
                you can see what we actually operate
              </span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft"
            >
              <span className="group-open:hidden">Show</span>
              <span className="hidden group-open:inline">Hide</span>
            </span>
          </summary>

          <div className="mt-8 space-y-12">
            {pastMonths.map((month) => (
              <section key={month.key} aria-labelledby={`past-${month.key}`}>
                <div className="flex items-center gap-4">
                  <h3
                    id={`past-${month.key}`}
                    className="text-lg font-semibold text-ink-muted"
                  >
                    {month.label}
                  </h3>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <ul className="mt-5 space-y-4">
                  {month.departures.map((departure) => (
                    <li key={departure._id}>
                      <DepartureCard departure={departure} />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-8 text-sm text-ink-muted">
            Want one of these run again?{" "}
            <Link
              href="/contact/"
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Ask us
            </Link>{" "}
            — most of them come back, and we will tell you when.
          </p>
        </details>
      ) : null}
    </div>
  );
}
