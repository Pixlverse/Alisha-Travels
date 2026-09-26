"use client";

import { useDeferredValue, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, X } from "lucide-react";
import Flag from "./Flag";
import { countryVisaHref } from "@/lib/content/visa-country-pages";
import { cn } from "@/lib/utils";

/**
 * The "countries we file most often" board: every country as a flag chip,
 * grouped, with a filter box across all groups.
 *
 * A client component only for the filter. It still renders on the server with
 * every chip in the HTML, so the country names are there for search engines
 * and for anyone without JavaScript. The filter only hides chips; it never
 * decides what exists.
 *
 * Matching ignores case and accents, so "turkiye" finds Türkiye, and it also
 * searches the small note ("Turkey"), so the old name works too.
 *
 * A country with its own visa page (lib/content/visa-country-pages.js) is a
 * link to it, marked with an arrow and a firmer outline so it reads as one.
 */
const fold = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function CountryBoard({ groups, footnote }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const needle = fold(deferred.trim());

  const filtered = groups.map((group) => ({
    ...group,
    shown: group.countries.filter(
      ([, name, note]) => !needle || fold(`${name} ${note || ""}`).includes(needle)
    ),
  }));
  const total = groups.reduce((sum, group) => sum + group.countries.length, 0);
  const matches = filtered.reduce((sum, group) => sum + group.shown.length, 0);

  return (
    <div className="rounded-[1.75rem] border border-line bg-white p-5 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted" aria-live="polite">
          {needle ? (
            <>
              <span className="font-semibold text-ink">{matches}</span> of {total} countries
            </>
          ) : (
            <>
              <span className="font-semibold text-ink">{total}</span> countries
            </>
          )}
        </p>

        <label className="relative block sm:w-72">
          <span className="sr-only">Find a country</span>
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a country"
            className="h-11 w-full rounded-full border border-line bg-mist-50 pr-10 pl-10 text-sm text-ink placeholder:text-ink-muted focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-mist-100 hover:text-ink"
            >
              <span className="sr-only">Clear</span>
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </label>
      </div>

      <div className="mt-6 space-y-7">
        {filtered.map((group) =>
          group.shown.length ? (
            <section key={group.key} aria-labelledby={`countries-${group.key}`}>
              <h3
                id={`countries-${group.key}`}
                className="flex items-center gap-2.5 text-sm font-semibold text-ink"
              >
                {group.flag ? <Flag code={group.flag} className="size-5" /> : null}
                {group.label}
                <span className="rounded-full bg-mist-100 px-2 py-0.5 text-xs font-medium text-ink-muted tabular-nums">
                  {group.shown.length}
                </span>
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.shown.map(([code, name, note]) => {
                  const href = countryVisaHref(code);
                  const body = (
                    <>
                      <Flag code={code} />
                      <span>
                        {name}
                        {note ? (
                          <span className="ml-1 text-xs text-ink-muted">({note})</span>
                        ) : null}
                      </span>
                      {href ? (
                        <ArrowUpRight className="size-3.5 text-brand-600" aria-hidden="true" />
                      ) : null}
                    </>
                  );
                  const chip = cn(
                    "inline-flex items-center gap-2 rounded-full border bg-white py-1 pr-3.5 pl-1 text-sm",
                    "transition-[border-color,box-shadow,color,transform] duration-150 hover:shadow-[0_6px_18px_-10px_rgba(10,68,87,0.45)]"
                  );
                  return (
                    <li key={`${group.key}-${code}`}>
                      {href ? (
                        <Link
                          href={href}
                          className={cn(chip, "border-brand-200 font-medium text-ink hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-800")}
                        >
                          {body}
                        </Link>
                      ) : (
                        <span className={cn(chip, "border-line text-ink-soft hover:border-brand-300 hover:text-ink")}>
                          {body}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null
        )}

        {needle && !matches ? (
          <p className="rounded-2xl bg-mist-50 px-5 py-6 text-center text-sm text-ink-soft">
            {footnote}
          </p>
        ) : null}
      </div>
    </div>
  );
}
