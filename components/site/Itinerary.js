import { BedDouble, UtensilsCrossed } from "lucide-react";

/**
 * Day-wise itinerary, rendered as HTML.
 *
 * This is the fix for the legacy site's worst content decision: itineraries
 * lived only inside PDFs served over http://, which meant they were invisible
 * to search engines, painful on mobile and impossible to update without
 * re-exporting a document. The PDF is now the secondary artefact — see the
 * download control in components/site/PackageActions.js — and this is the
 * canonical, indexable version.
 */
export default function Itinerary({ days = [] }) {
  if (!days.length) return null;

  return (
    <ol className="relative">
      {days.map((day, index) => {
        const last = index === days.length - 1;
        return (
          <li key={day.day} className="relative flex gap-5 pb-8 last:pb-0">
            {/* Timeline rail */}
            {!last ? (
              <span
                aria-hidden="true"
                className="absolute top-12 bottom-0 left-[1.375rem] w-0.5 rounded-full bg-gradient-to-b from-brand-300 to-brand-100"
              />
            ) : null}

            <span
              aria-hidden="true"
              // Filled --brand-700 with white numerals, not --brand-50 with
              // tinted ones. The pale version left the whole timeline reading as
              // a faint grey ladder — the client's note on this page was that it
              // looked soft and low-energy, and the day markers are the spine of
              // it. The rail below them is a --brand-300 -> --brand-100 gradient
              // for the same reason.
              className="relative z-10 flex size-11 shrink-0 flex-col items-center justify-center rounded-full bg-brand-700 text-white shadow-[0_8px_18px_-10px_rgba(10,68,87,0.8)]"
            >
              <span className="text-[0.5625rem] leading-none font-semibold tracking-wide uppercase">
                Day
              </span>
              <span className="font-sans text-base leading-none font-bold">{day.day}</span>
            </span>

            <div className="min-w-0 flex-1 pt-1.5">
              <h3 className="font-sans text-base font-semibold text-ink sm:text-lg">
                {day.title}
              </h3>
              {day.description ? (
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {day.description}
                </p>
              ) : null}

              {day.stay || day.meals ? (
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-ink-muted">
                  {day.stay ? (
                    <li className="inline-flex items-center gap-1.5">
                      <BedDouble className="size-3.5 text-brand-400" aria-hidden="true" />
                      Overnight: {day.stay}
                    </li>
                  ) : null}
                  {day.meals && day.meals !== "—" ? (
                    <li className="inline-flex items-center gap-1.5">
                      <UtensilsCrossed className="size-3.5 text-brand-400" aria-hidden="true" />
                      {day.meals}
                    </li>
                  ) : null}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
