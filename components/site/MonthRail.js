"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * The month strip on the Fixed Departures calendar.
 *
 * It was a row of anchors that scrolled the page and then sat there, giving no
 * indication of where you had ended up — on a calendar running eleven months
 * out, that is the one thing it should be doing. It is sticky now, and it
 * follows the page: an IntersectionObserver watches the month sections and the
 * chip for whichever one is under the header lights up and scrolls itself into
 * view inside the rail.
 *
 * Progressive, not required: the chips are still plain <a href="#month-…">
 * anchors, so the jump works before hydration and without JavaScript. All the
 * observer adds is the highlight.
 */
export default function MonthRail({ months = [] }) {
  const [active, setActive] = useState(months[0]?.key);
  const railRef = useRef(null);
  const chipRefs = useRef({});

  useEffect(() => {
    if (!months.length || typeof IntersectionObserver === "undefined") return;

    const sections = months
      .map((month) => document.getElementById(`month-${month.key}`))
      .filter(Boolean);
    if (!sections.length) return;

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // The topmost section still in the band below the header wins, so
        // scrolling down hands the highlight over one month at a time rather
        // than jumping to whichever section happens to be tallest.
        const first = sections.find((section) => visible.has(section.id));
        if (first) setActive(first.id.replace("month-", ""));
      },
      // Top inset clears the header and this rail; the bottom inset stops a
      // section counting as "here" while it is still only a sliver at the
      // bottom of the window.
      { rootMargin: "-160px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [months]);

  useEffect(() => {
    const chip = chipRefs.current[active];
    const rail = railRef.current;
    if (!chip || !rail || rail.scrollWidth <= rail.clientWidth) return;
    // Only the rail scrolls — scrollIntoView on the element itself would drag
    // the page with it and fight the scrolling that triggered this.
    const target = chip.offsetLeft - rail.clientWidth / 2 + chip.clientWidth / 2;
    rail.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  if (months.length < 2) return null;

  return (
    <div className="sticky top-18 z-30 -mx-5 mb-8 bg-white/92 px-5 py-3 backdrop-blur-sm sm:mx-0 sm:rounded-2xl sm:px-3 xl:top-[5.25rem]">
      <nav
        ref={railRef}
        aria-label="Jump to a month"
        className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {months.map((month) => {
          const selected = month.key === active;
          return (
            <a
              key={month.key}
              ref={(node) => {
                chipRefs.current[month.key] = node;
              }}
              href={`#month-${month.key}`}
              aria-current={selected ? "true" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200",
                "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                selected
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
              )}
            >
              {month.label}
              <span className={cn("ml-2 text-xs", selected ? "text-white/70" : "text-ink-muted")}>
                {month.count}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
