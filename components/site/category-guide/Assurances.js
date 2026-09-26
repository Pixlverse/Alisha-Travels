import { Check } from "lucide-react";

import { Section } from "../Section";

/**
 * The four short promises under a hero, as one strip rather than four boxes:
 * they are one statement in four parts, and four bordered cards in a row
 * read like the start of yet another grid. Hover lifts the one being read.
 */
export default function Assurances({ items = [] }) {
  if (!items.length) return null;
  return (
    <Section className="py-6 sm:py-7">
      <div className="container-page">
        <ul className="grid overflow-hidden rounded-3xl bg-gradient-to-r from-brand-50 via-white to-brand-50 ring-1 ring-brand-100 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card, index) => (
            <li
              key={card.title}
              className="group relative flex gap-4 border-brand-100 p-5 transition-colors duration-300 not-first:border-t hover:bg-white sm:p-6 sm:not-first:border-t-0 sm:[&:nth-child(n+3)]:border-t sm:even:border-l lg:[&:nth-child(n+3)]:border-t-0 lg:not-first:border-l"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-md shadow-brand-700/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <Check className="size-5" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[0.6875rem] font-bold text-brand-500 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-base font-semibold text-ink">{card.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{card.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
