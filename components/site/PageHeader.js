import Breadcrumbs from "./Breadcrumbs";
import { cn } from "@/lib/utils";

/**
 * Standard page header for listing and content pages: breadcrumb trail,
 * eyebrow, H1 and a lead paragraph, on the pale brand wash. Detail pages that
 * need a photographic header use their own hero instead.
 *
 * MEASURED to a target, not styled to taste. On a 1440x760 laptop viewport this
 * header used 560px of the 760 on /destinations/, so the first row of cards was
 * a sliver of photograph at the bottom edge and the page opened on an expanse
 * of pale wash — the client's note was that it "feels odd" and that cards
 * should be visible on the first screen.
 *
 * What came out, in order of how much it was worth: 48px of band padding
 * (py-10/14 -> py-6/8), a line of lead copy (the lead was capped at max-w-2xl
 * and wrapped to three lines where max-w-3xl gives two), 8px under the
 * breadcrumbs, and 8px off the H1 by dropping its top step from 3rem to
 * 2.5rem — still the largest type on the page by a clear margin.
 *
 * This is the same rhythm decision recorded in Section.js: the client's
 * reference sites open on content, not on a title screen. Keep the total under
 * about 400px at lg, or the cards go back under the fold.
 *
 * The right half of the band is empty by construction — the heading is capped
 * at max-w-4xl and the lead at max-w-3xl so neither runs to a punishing measure
 * — so it carries a dashed flight path instead of bare wash. See HeaderMotif
 * below, including what is deliberately NOT in it.
 */
export default function PageHeader({ eyebrow, title, lead, breadcrumbs, children, className }) {
  return (
    <header
      className={cn(
        "relative isolate overflow-hidden border-b border-line bg-gradient-to-b from-brand-50/70 to-white",
        className
      )}
    >
      <HeaderMotif />

      <div className="relative z-10 container-page py-6 sm:py-8">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} className="mb-5" /> : null}

        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-2.5 max-w-4xl text-[1.75rem] leading-[1.1] font-extrabold tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.5rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-[1.0625rem]">{lead}</p>
        ) : null}

        {children}
      </div>
    </header>
  );
}

/**
 * The motif in the empty right-hand side of the band: a dashed flight path with
 * two waypoints and the brand's paper plane at the end of it.
 *
 * Exported because the service pages build their own header — icon chip,
 * heading, two buttons and a credentials line — and without this they had the
 * same wide band with the same empty right half.
 *
 * NO GLOBE. A wireframe globe sat under this route and was cut at the client's
 * request — do not put it back. The route alone is also why a photograph is
 * still the wrong answer here: it would need one per page and would fight the
 * cards directly below.
 *
 * xl and up only. Below 1280px the heading at max-w-4xl reaches across the band
 * and would sit on top of the drawing rather than beside it.
 *
 * Every mark is --brand-200 or --brand-300. This band is the pale end of a
 * gradient with the H1 in --ink over it: the motif has to stay decoration, and
 * anything darker started reading as a second element competing for attention.
 */
export function HeaderMotif() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[30rem] xl:block"
    >
      <svg
        viewBox="0 0 480 220"
        fill="none"
        className="absolute top-1/2 right-[-2rem] w-[30rem] -translate-y-1/2"
        focusable="false"
      >
        {/* Sized to the BAND, not to taste. The header is only ~226px tall at
            lg, and an earlier 520x300 drawing scaled to 544px wide had the
            plane sliced off by the band's edge, which reads as a rendering
            fault rather than as a crop. At 480x220 the whole drawing clears
            the band. */}

        {/* Dashed, so it reads as a route rather than as a stray border. */}
        <path
          d="M14 184C90 184 140 158 200 134c66-26 108-58 186-92"
          stroke="var(--brand-300)"
          strokeWidth="2"
          strokeDasharray="5 10"
          strokeLinecap="round"
          opacity="0.75"
        />

        <g fill="var(--brand-200)">
          <circle cx="14" cy="184" r="4.5" />
          <circle cx="200" cy="134" r="4.5" />
        </g>

        {/* The same glyph as the hero badge, at the end of the route. */}
        <g transform="translate(370 24) scale(1.5)">
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="var(--brand-300)" />
        </g>
      </svg>
    </div>
  );
}
