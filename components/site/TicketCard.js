import { cn } from "@/lib/utils";

/**
 * A boarding pass, used by the 404 and the error boundary.
 *
 * The two pages it replaces were a heading, a paragraph and two buttons on
 * white — correct, and instantly forgettable. A travel agency's dead end is
 * the one place on a site where a bit of theatre costs nothing: nobody meant
 * to be here, so being handed a stub that says the flight did not depart reads
 * as deliberate rather than broken.
 *
 * It is a real ticket, not a picture of one: a paper panel and a stub divided
 * by a perforation, with two notches punched out of the edges. The notches are
 * circles filled with the band's own colour, so they only look like holes
 * while the band behind stays --brand-900 — change one, change both.
 *
 * `actions` is a slot rather than a prop list because the error boundary needs
 * a button wired to reset() while the 404 needs links.
 */
export default function TicketCard({
  status,
  stamp = "Did not depart",
  routeFrom,
  routeTo,
  causeLabel = "Cause",
  cause,
  heading,
  children,
  actions,
  code = ["A", "K", "–", "4", "0", "4"],
  reference,
}) {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-[0_40px_90px_-40px_rgba(0,0,0,0.65)] sm:grid-cols-[1fr_13rem]">
        {/* The ticket itself */}
        <div className="relative p-7 sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-ink-muted uppercase">
              Flight status
            </p>

            {/* Rubber stamp: rotated, hollow, and in the one red on the site.
                A filled badge here read as a status chip; the point is that it
                looks applied after the fact. */}
            <p
              className="-mt-1 -rotate-3 rounded-md border-2 border-destructive/70 px-3 py-1.5 font-sans text-xs font-extrabold tracking-[0.12em] text-destructive/90 uppercase"
              aria-label={`Status: ${stamp}`}
            >
              {stamp}
            </p>
          </div>

          {/* The route line, with dotted leaders between the two ends. */}
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-2xl leading-tight font-extrabold tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            <span>{routeFrom}</span>
            <span aria-hidden="true" className="flex flex-1 items-center gap-2">
              <span className="h-px flex-1 border-t-2 border-dotted border-mist-300" />
              <span className="font-sans text-base text-ink-muted">&rarr;</span>
              <span className="h-px flex-1 border-t-2 border-dotted border-mist-300" />
            </span>
            <span>{routeTo}</span>
          </p>

          <div className="mt-7">
            <p className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-ink-muted uppercase">
              {causeLabel}
            </p>
            <p className="mt-1.5 text-lg font-semibold text-ink">{cause}</p>
          </div>

          <h1 className="mt-7 text-balance-heading text-2xl leading-tight font-bold text-ink sm:text-3xl">
            {heading}
          </h1>

          <div className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{children}</div>

          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        </div>

        {/* The stub */}
        <div className="relative flex flex-col justify-between gap-8 border-t-2 border-dashed border-mist-300 bg-mist-50 p-7 sm:border-t-0 sm:border-l-2">
          <div>
            <p className="text-center font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-ink-muted uppercase">
              Flight
            </p>
            {/* One cell per character, like the flight number on a real pass. */}
            <p className="mt-3 flex justify-center gap-1" aria-label={`Reference ${code.join("")}`}>
              {code.map((character, index) => (
                <span
                  key={`${character}-${index}`}
                  aria-hidden="true"
                  className="flex size-7 items-center justify-center rounded bg-brand-900 font-sans text-sm font-bold text-sun"
                >
                  {character}
                </span>
              ))}
            </p>
          </div>

          <div>
            {/* A barcode drawn in CSS: eight repeating stripes at four widths,
                which is enough irregularity to read as a scan code without
                shipping an image for a page nobody should reach. */}
            <span
              aria-hidden="true"
              className="block h-14 w-full bg-[repeating-linear-gradient(90deg,var(--ink)_0_2px,transparent_2px_5px,var(--ink)_5px_6px,transparent_6px_9px,var(--ink)_9px_12px,transparent_12px_14px)]"
            />
            <p className="mt-2 text-center font-mono text-[0.625rem] tracking-wider text-ink-muted">
              {reference}
            </p>
          </div>
        </div>
      </div>

      {/* The punched notches, sitting over the perforation. Hidden below sm,
          where the stub stacks underneath and the perforation runs across. */}
      <Notch className="-top-3 right-[12.4rem]" />
      <Notch className="-bottom-3 right-[12.4rem]" />
    </div>
  );
}

function Notch({ className }) {
  return (
    <span
      aria-hidden="true"
      className={cn("absolute hidden size-6 rounded-full bg-brand-900 sm:block", className)}
    />
  );
}
