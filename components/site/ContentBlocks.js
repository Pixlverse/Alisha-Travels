import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import RichText from "./RichText";
import { cn } from "@/lib/utils";

/**
 * One block of long-form page content.
 *
 * Lifted out of the service page so the package category pages can use it
 * too. Those pages carry the same shape of copy the client writes for a
 * service — a row of situations, a numbered process, a bulleted list, a
 * two-paragraph argument — and rebuilding four renderers a second time would
 * have meant two sets of markup drifting apart on the next design note.
 *
 * `kind` decides which fields matter:
 *   cards  title, intro, items[], linkLabel/linkHref, footnote
 *   steps  title, intro, items[]  (numbered in render order)
 *   list   title, intro, points[] or columns[], tagsLabel + tags[], footnote
 *   prose  title, body, footnote
 */
export default function ContentBlock({ block }) {
  const heading = block.title ? (
    <h2 className="text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
      {block.title}
    </h2>
  ) : null;

  const intro = block.intro ? (
    <RichText text={block.intro} className="mt-4 max-w-3xl" />
  ) : null;

  if (block.kind === "prose") {
    /*
      Heading in its own column with the copy beside it, rather than a single
      column of text pinned to the left edge.

      The measure has to stay around 70-90 characters or the copy stops being
      readable, but on a 1900px display a 48rem column inside a 76rem band left
      a third of the page blank down the right-hand side — and because these
      bands are tinted, the empty part was impossible to miss. Splitting the
      block gives the measure its width back and puts something in the space:
      the heading, which is the thing you scan a long page for anyway.

      One column below lg, where there is no room for two and no dead space to
      fix.
    */
    return (
      <div className="grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.75fr)]">
        <div>{heading}</div>
        <div>
          <RichText text={block.body} className="max-w-[44rem]" />
          {block.footnote ? (
            <p className="mt-6 max-w-[44rem] text-sm leading-relaxed text-ink-muted">
              {block.footnote}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  if (block.kind === "steps") {
    return (
      <div>
        {heading}
        {intro}
        <ol className={cn("mt-7 grid gap-4", gridColumns(block.items.length))}>
          {block.items.map((item, index) => (
            <li
              key={item.title}
              className="flex h-full flex-col rounded-2xl border border-line bg-white p-5"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ol>
        {block.footnote ? (
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">{block.footnote}</p>
        ) : null}
      </div>
    );
  }

  if (block.kind === "list") {
    return (
      <div>
        {heading}
        {intro}
        {block.columns?.length ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {block.columns.map((column) => (
              <div
                key={column.title}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="text-base font-semibold text-ink">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-ink-soft"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
        {block.points?.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {block.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                <span className="text-[0.9375rem] leading-snug text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {block.tags?.length ? (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {block.tagsLabel ? (
              <span className="eyebrow mr-1">{block.tagsLabel}</span>
            ) : null}
            {block.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-soft ring-1 ring-line"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        {block.footnote ? (
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">{block.footnote}</p>
        ) : null}
      </div>
    );
  }

  // cards
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-3xl">
          {heading}
          {intro}
        </div>
        {block.linkLabel && block.linkHref ? (
          <Link
            href={block.linkHref}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            {block.linkLabel}
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>

      <ul className={cn("mt-7 grid gap-4", gridColumns(block.items.length))}>
        {block.items.map((item) => (
          <li
            key={item.title}
            className="flex h-full flex-col rounded-2xl border border-line bg-white p-5"
          >
            {item.tag ? (
              <span className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                {item.tag}
              </span>
            ) : null}
            <h3 className={item.tag ? "mt-2 text-base font-semibold text-ink" : "text-base font-semibold text-ink"}>
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
          </li>
        ))}
      </ul>

      {block.footnote ? (
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-muted">{block.footnote}</p>
      ) : null}
    </div>
  );
}

/**
 * Grid columns for a row of cards or steps, chosen by how many there are.
 *
 * A fixed four-column grid is only right when there are four (or eight). With
 * two cards it filled half the band and left the other half blank; with three
 * it left a quarter. The counts here are the ones the content actually uses —
 * two, three, four, five, six and eight — and each resolves to a row that ends
 * where the band ends.
 */
function gridColumns(count) {
  if (count <= 1) return "max-w-2xl";
  if (count === 2) return "sm:grid-cols-2";
  if (count === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  if (count === 5) return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";
  if (count === 6) return "sm:grid-cols-2 lg:grid-cols-3";
  return "sm:grid-cols-2 lg:grid-cols-4";
}
