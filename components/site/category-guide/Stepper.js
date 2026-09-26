"use client";

import { useId, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A numbered process as a stepper: the steps along a track, one open at a
 * time, with next / back to walk through them. A row of five identical
 * boxes invites a glance; "step 2 of 5, next" invites the next click.
 *
 * Every step's text is in the markup (inactive panels are only hidden), so
 * the whole process is still there for search engines and screen readers
 * that list all panels.
 */
export default function Stepper({ items }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const last = items.length - 1;

  return (
    <div className="mt-8">
      <div role="tablist" aria-label="Steps" className="relative grid gap-2 sm:flex sm:items-start sm:gap-0">
        {/* the track behind the dots, filled up to the active step */}
        <div aria-hidden="true" className="absolute top-5 right-5 left-5 hidden h-0.5 bg-line sm:block">
          <div
            className="h-full bg-brand-500 transition-[width] duration-500 ease-out"
            style={{ width: `${last ? (active / last) * 100 : 0}%` }}
          />
        </div>
        {items.map((item, index) => {
          const selected = index === active;
          const reached = index <= active;
          return (
            <button
              key={item.title}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              onClick={() => setActive(index)}
              className="group relative flex items-center gap-3 rounded-xl text-left focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none sm:flex-1 sm:flex-col sm:gap-2.5 sm:text-center"
            >
              <span
                className={cn(
                  "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 transition-all duration-300",
                  reached ? "bg-brand-700 text-white ring-brand-100" : "bg-white text-ink-muted ring-mist-100",
                  selected && "scale-110",
                  !reached && "group-hover:text-brand-700"
                )}
              >
                {index + 1}
              </span>
              <span
                className={cn(
                  "text-sm leading-snug font-semibold transition-colors sm:px-2",
                  selected ? "text-ink" : "text-ink-muted group-hover:text-ink-soft"
                )}
              >
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
        {items.map((item, index) => (
          <div
            key={item.title}
            id={`${baseId}-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${index}`}
            hidden={index !== active}
            className="animate-in fade-in slide-in-from-right-2 duration-300"
          >
            <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
              Step {index + 1} of {items.length}
            </p>
            <h3 className="mt-2 text-xl font-bold text-ink sm:text-2xl">{item.title}</h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">{item.text}</p>
          </div>
        ))}

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
          <button
            type="button"
            onClick={() => setActive((i) => Math.max(0, i - 1))}
            disabled={active === 0}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-ink-soft transition-colors hover:text-ink disabled:opacity-30"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back
          </button>
          <button
            type="button"
            onClick={() => setActive((i) => (i === last ? 0 : i + 1))}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            {active === last ? "Start again" : "Next step"}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
