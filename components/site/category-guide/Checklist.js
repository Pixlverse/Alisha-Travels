"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A points list the reader can tick. "Before you travel" and the like are
 * already checklists in the copy; letting a visitor actually check them off
 * turns a list they scroll past into one they read line by line.
 *
 * One or more phases side by side (e.g. before / during), each with its own
 * progress. Nothing is stored — it is a reading aid, not a form.
 */
export default function Checklist({ phases }) {
  return (
    <div className={cn("mt-7 grid gap-5", phases.length > 1 && "lg:grid-cols-2")}>
      {phases.map((phase, index) => (
        <Phase key={phase.title} phase={phase} step={phases.length > 1 ? index + 1 : null} />
      ))}
    </div>
  );
}

function Phase({ phase, step }) {
  const [done, setDone] = useState(() => new Set());
  const total = phase.points.length;
  const count = done.size;

  function toggle(point) {
    setDone((previous) => {
      const next = new Set(previous);
      if (next.has(point)) next.delete(point);
      else next.add(point);
      return next;
    });
  }

  return (
    <section className="flex flex-col rounded-3xl bg-white p-6 ring-1 ring-line sm:p-7">
      <div className="flex items-start gap-4">
        {step ? (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-sm font-bold text-white">
            {step}
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold tracking-[-0.01em] text-ink sm:text-2xl">{phase.title}</h2>
          {phase.intro ? (
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-soft">{phase.intro}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3" aria-live="polite">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-mist-100">
          <div
            className="h-full rounded-full bg-brand-500 transition-[width] duration-500 ease-out"
            style={{ width: `${(count / total) * 100}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-ink-muted tabular-nums">
          {count === total ? "All ticked" : `${count} of ${total} ticked`}
        </span>
      </div>

      <ul className="mt-4 grid gap-1">
        {phase.points.map((point) => {
          const checked = done.has(point);
          return (
            <li key={point}>
              <button
                type="button"
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(point)}
                className={cn(
                  "group flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                  "hover:bg-brand-50/70 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200",
                    checked
                      ? "scale-110 border-brand-600 bg-brand-600 text-white"
                      : "border-mist-300 bg-white text-transparent group-hover:border-brand-400"
                  )}
                >
                  <Check className="size-3" strokeWidth={3.5} aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    "text-[0.9375rem] leading-snug transition-colors",
                    checked ? "text-ink-muted line-through decoration-brand-300" : "text-ink-soft"
                  )}
                >
                  {point}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-auto pt-4 text-xs text-ink-muted">
        Tick them off as you read. Every one of these is handled as part of the booking.
      </p>
    </section>
  );
}
