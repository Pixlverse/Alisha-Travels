"use client";

import { useId, useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";

import Button from "../Button";
import { cn } from "@/lib/utils";

/**
 * A row of cards turned into a chooser: the titles down one side, the chosen
 * one opened up beside them. Four equal cards read as "skip"; one question
 * with four answers reads as "which one is me?", which is the question the
 * copy is actually asking.
 *
 * A real tablist (arrow keys move, Home/End jump), so it works without a
 * mouse. Below lg the panel sits under the list.
 */
export default function Explorer({ items, askLabel = "Ask about this", backHref, backLabel }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const current = items[active];

  function onKeyDown(event) {
    const last = items.length - 1;
    const next =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  }

  return (
    <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-6">
      <div role="tablist" aria-orientation="vertical" className="grid gap-2" onKeyDown={onKeyDown}>
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.title}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={cn(
                "group flex items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-200",
                "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                selected
                  ? "border-brand-700 bg-brand-700 text-white shadow-lg shadow-brand-700/20"
                  : "border-line bg-white text-ink hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              )}
            >
              <span
                className={cn(
                  "font-mono text-xs font-bold tabular-nums",
                  selected ? "text-brand-100" : "text-brand-600"
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-base font-semibold">{item.title}</span>
              <ArrowRight
                className={cn(
                  "size-4 transition-transform duration-200",
                  selected ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                )}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 via-white to-white p-7 ring-1 ring-brand-100 sm:p-9"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 -right-2 font-mono text-[9rem] leading-none font-bold text-brand-100/70 select-none"
        >
          {String(active + 1).padStart(2, "0")}
        </span>
        {/* keyed so the text re-enters on every change */}
        <div key={active} className="relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          {current.tag ? (
            <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
              {current.tag}
            </p>
          ) : null}
          <h3 className="text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl">
            {current.title}
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{current.text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {backHref ? (
              <Button href={backHref} variant="outline">
                <ArrowUp className="size-4" aria-hidden="true" />
                {backLabel}
              </Button>
            ) : null}
            <Button href="/contact/">{askLabel}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
