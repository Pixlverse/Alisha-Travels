"use client";

import { useId, useState } from "react";
import { Check, MapPinned, Plane } from "lucide-react";

import ChipCloud from "./ChipCloud";
import { cn } from "@/lib/utils";

/**
 * Two blocks of the same shape, one after the other, as one band with a
 * sliding switch between them. Two identical grids in a row is the
 * repetition that makes a reader skim; a switch invites the one tap.
 *
 * `variant="region"` labels the switch Within India / Overseas and puts the
 * active block's title above it. Otherwise the blocks' own titles are the
 * labels, and no heading is repeated above them.
 *
 * (A variant name rather than an options array with icons, because icon
 * components cannot be passed from a server component to this one.)
 */
const REGION_OPTIONS = [
  { label: "Within India", icon: MapPinned },
  { label: "Overseas", icon: Plane },
];

export default function PairTabs({ blocks, variant, eyebrow, destinations = [] }) {
  const options = variant === "region" ? REGION_OPTIONS : null;
  const [active, setActive] = useState(0);
  const baseId = useId();
  const labels = options || blocks.map((b) => ({ label: b.title }));
  const block = blocks[active];
  const useTitleAsHeading = Boolean(options);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-2xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          {useTitleAsHeading ? (
            <h2 className="mt-2 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
              {block.title}
            </h2>
          ) : null}
        </div>
      </div>

      <div
        role="tablist"
        aria-label={eyebrow || "Choose a section"}
        className={cn(
          "relative mt-5 grid w-full grid-cols-2 rounded-2xl bg-white p-1 ring-1 ring-line sm:w-auto",
          useTitleAsHeading ? "sm:inline-grid sm:rounded-full" : "sm:max-w-3xl"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] bg-brand-700 shadow-md transition-transform duration-300 ease-out",
            useTitleAsHeading ? "rounded-xl sm:rounded-full" : "rounded-xl",
            active === 1 && "translate-x-full"
          )}
        />
        {labels.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            id={`${baseId}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls={`${baseId}-panel`}
            onClick={() => setActive(index)}
            className={cn(
              "relative z-10 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-center text-sm leading-snug font-semibold transition-colors duration-300",
              useTitleAsHeading ? "sm:rounded-full sm:px-5" : "sm:py-3 sm:text-base",
              "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
              active === index ? "text-white" : "text-ink-soft hover:text-ink"
            )}
          >
            {Icon ? <Icon className="size-4 shrink-0" aria-hidden="true" /> : null}
            {label}
          </button>
        ))}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        key={active}
        className="animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        {block.intro ? (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-soft">{block.intro}</p>
        ) : null}

        {block.points?.length ? (
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {block.points.map((point, index) => (
              <li
                key={point}
                style={{ animationDelay: `${index * 40}ms` }}
                className="group flex animate-in gap-3 rounded-2xl bg-white p-4 ring-1 ring-line fill-mode-both fade-in slide-in-from-bottom-1 transition-shadow duration-300 hover:shadow-md hover:ring-brand-200"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[0.9375rem] leading-snug text-ink-soft">{point}</span>
              </li>
            ))}
          </ol>
        ) : null}

        {block.tags?.length ? (
          <ChipCloud tags={block.tags} destinations={destinations} className="mt-6" />
        ) : null}

        {block.footnote ? (
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-muted">{block.footnote}</p>
        ) : null}
      </div>
    </div>
  );
}
