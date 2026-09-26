"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, BookOpenCheck, Search, X } from "lucide-react";

import Flag from "./visa/Flag";
import { cn } from "@/lib/utils";

/**
 * The Visa tab of the hero search: type a country, pick it, land on its
 * visa page.
 *
 * A combobox over every destination in the tourist visa table. Countries
 * with their own page (the ones the agency files most often) are listed
 * first and open that page; any other country opens the tourist visa page's
 * full destination list, where its usual route is shown. Each result carries
 * that route as a badge, so the answer to "do I need one?" often arrives
 * before the click.
 *
 * Results render IN the card rather than as a floating dropdown: the hero
 * section clips its overflow for the background art, and an absolutely
 * positioned list would be cut off at its bottom edge. The card simply grows.
 *
 * `countries` is [{ code, name, route, href }], built on the server in
 * Hero.js so the visa page copy never ships to the browser.
 */

const fold = (value) =>
  String(value)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

const ALL_DESTINATIONS = "/services/global-visa/tourist-visa/#every-destination";
const MAX_RESULTS = 6;

export default function HeroVisaSearch({ countries = [], panelProps }) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const deferred = useDeferredValue(query);
  const needle = fold(deferred.trim());

  const guides = useMemo(() => countries.filter((c) => c.href), [countries]);

  const results = useMemo(() => {
    if (!needle) return [];
    const scored = [];
    for (const country of countries) {
      const name = fold(country.name);
      const index = name.indexOf(needle);
      if (index < 0) continue;
      // Guides first, then names that START with the query, then the rest.
      scored.push({ country, score: (country.href ? 0 : 2) + (index === 0 ? 0 : 1) });
    }
    return scored
      .sort((a, b) => a.score - b.score || a.country.name.localeCompare(b.country.name))
      .slice(0, MAX_RESULTS)
      .map((entry) => entry.country);
  }, [countries, needle]);

  const go = (country) => router.push(country?.href || ALL_DESTINATIONS);

  const onKeyDown = (event) => {
    if (!results.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (event.key === "Escape") {
      setQuery("");
    }
  };

  const submit = (event) => {
    event.preventDefault();
    go(results[active] || results[0]);
  };

  const showResults = Boolean(needle);

  return (
    <form
      onSubmit={submit}
      {...panelProps}
      className="relative rounded-[1.125rem] border border-brand-200 bg-white p-2"
    >
      <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-0">
        <label className="flex min-w-0 cursor-text items-center gap-3 rounded-2xl px-3.5 py-2.5 sm:rounded-full">
          <Search className="size-4 text-brand-500" aria-hidden="true" />
          <span className="min-w-0 flex-1">
            <span className="block text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
              Which country?
            </span>
            <input
              type="text"
              role="combobox"
              aria-expanded={showResults && results.length > 0}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={showResults && results[active] ? `${listId}-${results[active].code}` : undefined}
              autoComplete="off"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              onKeyDown={onKeyDown}
              placeholder="Type a country - e.g. Japan, Canada, UK"
              className="w-full bg-transparent text-sm font-medium text-ink outline-none placeholder:font-normal placeholder:text-ink-muted"
            />
          </span>
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-mist-100 hover:text-ink"
            >
              <span className="sr-only">Clear</span>
              <X className="size-3.5" aria-hidden="true" />
            </button>
          ) : null}
        </label>

        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none sm:ml-2"
        >
          <Search className="size-4" aria-hidden="true" />
          Find visa
        </button>
      </div>

      {showResults ? (
        <div className="mt-2 border-t border-line px-1 pt-2 pb-1">
          {results.length ? (
            <ul id={listId} role="listbox" aria-label="Matching countries" className="grid gap-1 sm:grid-cols-2">
              {results.map((country, index) => (
                <li
                  key={country.code}
                  id={`${listId}-${country.code}`}
                  role="option"
                  aria-selected={index === active}
                  onMouseEnter={() => setActive(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => go(country)}
                  className={cn(
                    "group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors",
                    index === active ? "bg-brand-50" : "hover:bg-mist-50"
                  )}
                >
                  <Flag code={country.code} className="size-7" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">{country.name}</span>
                    <span className="block truncate text-xs text-ink-muted">{country.route}</span>
                  </span>
                  {country.href ? (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-700 px-2.5 py-1 text-[0.6875rem] font-semibold text-white">
                      <BookOpenCheck className="size-3" aria-hidden="true" />
                      Full guide
                    </span>
                  ) : (
                    <ArrowRight
                      className={cn(
                        "size-4 shrink-0 transition-all",
                        index === active ? "translate-x-0 text-brand-600" : "-translate-x-1 text-mist-300"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-3 text-sm text-ink-soft">
              No country matches &ldquo;{deferred}&rdquo;.{" "}
              <Link href={ALL_DESTINATIONS} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                See all 197 destinations
              </Link>
            </p>
          )}
        </div>
      ) : guides.length ? (
        /* Before anything is typed: the countries with a full guide, one tap each. */
        <div className="mt-2 flex flex-wrap items-center gap-1.5 border-t border-line px-2 pt-3 pb-1.5">
          <span className="mr-1 text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
            Popular
          </span>
          {guides.slice(0, 10).map((country) => (
            <Link
              key={country.code}
              href={country.href}
              className="inline-flex items-center gap-1.5 rounded-full py-0.5 pr-2.5 pl-0.5 text-xs font-medium text-ink-soft ring-1 ring-line transition-colors hover:bg-brand-50 hover:text-brand-800 hover:ring-brand-200"
            >
              <Flag code={country.code} className="size-5" />
              {country.name}
            </Link>
          ))}
          <Link
            href="/services/global-visa/tourist-visa/"
            className="ml-auto text-xs font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            All visas
          </Link>
        </div>
      ) : null}
    </form>
  );
}
