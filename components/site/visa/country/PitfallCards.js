"use client";

import { useState } from "react";
import { AlertTriangle, RotateCw } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * "Where trips go wrong" as cards you turn over: the mistake on the front,
 * why it happens on the back. A question you have to tap to answer gets
 * read; five paragraphs in boxes do not.
 *
 * Both faces are always in the markup (the back is only rotated away), so
 * the text is there for search engines and screen readers, and the button
 * reports its state with aria-pressed.
 */
export default function PitfallCards({ items }) {
  const [flipped, setFlipped] = useState(() => new Set());

  function toggle(index) {
    setFlipped((previous) => {
      const next = new Set(previous);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const open = flipped.has(index);
        return (
          <li key={item.title} className="[perspective:1200px]">
            <button
              type="button"
              aria-pressed={open}
              onClick={() => toggle(index)}
              className="group relative grid h-full min-h-52 w-full text-left focus-visible:outline-none"
            >
              <span
                className={cn(
                  "col-start-1 row-start-1 grid transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none",
                  open && "[transform:rotateY(180deg)]"
                )}
              >
                {/* front */}
                <span className="col-start-1 row-start-1 flex flex-col rounded-3xl bg-white p-6 ring-1 ring-line transition-shadow [backface-visibility:hidden] group-hover:shadow-lg group-hover:ring-brand-200 group-focus-visible:ring-2 group-focus-visible:ring-brand-400">
                  <span className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-sun/15 px-2.5 py-1 text-[0.6875rem] font-bold tracking-[0.12em] text-sun-shadow uppercase">
                      <AlertTriangle className="size-3" aria-hidden="true" />
                      {item.tag || "Common"}
                    </span>
                    <span className="font-mono text-xs font-bold text-mist-300 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="mt-5 text-lg leading-snug font-bold text-ink">{item.title}</span>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-xs font-semibold text-brand-700">
                    <RotateCw className="size-3.5 transition-transform duration-500 group-hover:rotate-180" aria-hidden="true" />
                    Tap to see why
                  </span>
                </span>
                {/* back */}
                <span className="col-start-1 row-start-1 flex flex-col rounded-3xl bg-brand-800 p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <span className="text-sm font-semibold text-brand-200">{item.title}</span>
                  <span className="mt-3 text-[0.9375rem] leading-relaxed text-white">{item.text}</span>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-xs font-semibold text-brand-200">
                    <RotateCw className="size-3.5" aria-hidden="true" />
                    Turn back
                  </span>
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
