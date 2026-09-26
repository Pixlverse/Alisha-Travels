"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, X } from "lucide-react";
import Flag from "./Flag";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { routeKinds } from "@/lib/content/visa-routes";
import { countryVisaHref } from "@/lib/content/visa-country-pages";
import { VISA_PAGES } from "@/lib/content/visa-pages";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * "Every destination, by region": all 197 countries, findable three ways.
 *
 *   - Search, across every region at once, ignoring case and accents.
 *   - The route legend doubles as the filter. Each chip shows how many of the
 *     countries currently in view take that route, so "VOA" answers "where
 *     can I go on arrival?" before anyone reads a table.
 *   - The region bar jumps to a region and opens it.
 *
 * Regions are accordions, closed by default except Schengen, because 197 rows
 * open at once is a wall. A search or a filter opens every region that has a
 * match and hides the rest, so a result is never behind a closed panel.
 *
 * Every row is in the server-rendered HTML whether its panel is open or not
 * (closed panels collapse to zero height rather than unmounting), so each of
 * the 197 names the client promises is on the page for search engines too.
 *
 * Each row ends in a WhatsApp link that opens with that country named, which
 * is the shortest path from "is it an e-visa?" to a document list.
 */

const KIND_STYLES = {
  schengen: { badge: "bg-brand-50 text-brand-800 ring-brand-100", dot: "bg-brand-500" },
  evisa: { badge: "bg-violet-50 text-violet-800 ring-violet-100", dot: "bg-violet-500" },
  voa: { badge: "bg-sun/15 text-sun-shadow ring-sun/30", dot: "bg-sun" },
  free: { badge: "bg-emerald-50 text-emerald-800 ring-emerald-100", dot: "bg-emerald-500" },
  required: { badge: "bg-mist-100 text-ink-soft ring-line", dot: "bg-ink-muted" },
};
const NEUTRAL = { badge: "bg-white text-ink-muted ring-line", dot: "bg-mist-300" };

const fold = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function DestinationFinder({ regions, legend, asterisk }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState(null);
  const [open, setOpen] = useState(() => new Set([regions[0].key]));
  const deferred = useDeferredValue(query);
  const needle = fold(deferred.trim());
  const filtering = Boolean(needle || kind);

  // Classify once. Route text never changes on the client.
  const indexed = useMemo(
    () =>
      regions.map((region) => ({
        ...region,
        rows: region.countries.map(([code, name, route]) => ({
          code,
          name,
          route: route.replace(/\*$/, ""),
          starred: route.endsWith("*"),
          kinds: routeKinds(route),
          search: fold(name),
        })),
      })),
    [regions]
  );

  // The query narrows everything; the legend counts are taken after the query
  // but before the route filter, so each chip says what picking it would show.
  const byQuery = indexed.map((region) => ({
    ...region,
    rows: needle ? region.rows.filter((row) => row.search.includes(needle)) : region.rows,
  }));
  const counts = {};
  byQuery.forEach((region) =>
    region.rows.forEach((row) => row.kinds.forEach((k) => (counts[k] = (counts[k] || 0) + 1)))
  );
  const shown = byQuery.map((region) => ({
    ...region,
    rows: kind ? region.rows.filter((row) => row.kinds.includes(kind)) : region.rows,
  }));
  const total = indexed.reduce((sum, region) => sum + region.rows.length, 0);
  const matches = shown.reduce((sum, region) => sum + region.rows.length, 0);
  const allOpen = open.size === regions.length;

  const toggle = (key) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const jumpTo = (key) => {
    setQuery("");
    setKind(null);
    setOpen((current) => new Set(current).add(key));
    // After the panel has had a frame to start opening.
    requestAnimationFrame(() =>
      document.getElementById(`region-${key}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  const clear = () => {
    setQuery("");
    setKind(null);
  };

  return (
    <div>
      {/* Toolbar. Sticky under the site header while the regions scroll past. */}
      <div className="sticky top-[4.75rem] z-20 -mx-2 rounded-[1.5rem] border border-line bg-white/95 p-4 shadow-[0_18px_40px_-30px_rgba(16,32,42,0.45)] backdrop-blur sm:mx-0 sm:p-5 xl:top-[5.75rem]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <label className="relative block flex-1">
            <span className="sr-only">Where are you going?</span>
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-4.5 -translate-y-1/2 text-brand-600"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Where are you going?"
              className="h-12 w-full rounded-full border border-line bg-mist-50 pr-11 pl-11 text-[0.9375rem] text-ink placeholder:text-ink-muted focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-200 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute top-1/2 right-2.5 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-mist-100 hover:text-ink"
              >
                <span className="sr-only">Clear search</span>
                <X className="size-4" aria-hidden="true" />
              </button>
            ) : null}
          </label>

          <p className="shrink-0 text-sm text-ink-muted lg:w-52 lg:text-right" aria-live="polite">
            {filtering ? (
              <>
                <span className="font-semibold text-ink">{matches}</span> of {total} destinations
                <button
                  type="button"
                  onClick={clear}
                  className="ml-2 font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  Clear
                </button>
              </>
            ) : (
              <>
                <span className="font-semibold text-ink">{total}</span> destinations
              </>
            )}
          </p>
        </div>

        {/* The legend, as filters. */}
        <div className="mt-3.5 -mb-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {legend.map((item) => {
            const active = kind === item.kind;
            const style = KIND_STYLES[item.kind];
            return (
              <button
                key={item.kind}
                type="button"
                aria-pressed={active}
                onClick={() => setKind(active ? null : item.kind)}
                className={cn(
                  "group inline-flex shrink-0 items-center gap-2 rounded-full border py-1.5 pr-3 pl-2.5 text-left text-[0.8125rem] transition-colors",
                  active
                    ? "border-brand-700 bg-brand-700 text-white"
                    : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-ink"
                )}
              >
                <span className={cn("size-2.5 rounded-full", style.dot, active && "ring-2 ring-white/70")} />
                <span className="font-semibold">{item.label}</span>
                <span className={cn("hidden sm:inline", active ? "text-white/75" : "text-ink-muted")}>
                  · {item.text}
                </span>
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[0.6875rem] font-semibold tabular-nums",
                    active ? "bg-white/20 text-white" : "bg-mist-100 text-ink-muted"
                  )}
                >
                  {counts[item.kind] || 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Region bar */}
      <div className="mt-5 flex items-center gap-3">
        <nav aria-label="Regions" className="min-w-0 flex-1">
          <ul className="flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:thin]">
            {indexed.map((region) => (
              <li key={region.key} className="shrink-0">
                <button
                  type="button"
                  onClick={() => jumpTo(region.key)}
                  className="rounded-full px-3 py-1.5 text-[0.8125rem] font-medium whitespace-nowrap text-ink-soft transition-colors hover:bg-white hover:text-brand-800"
                >
                  {region.name}
                  <span className="ml-1.5 text-ink-muted tabular-nums">{region.rows.length}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {!filtering ? (
          <button
            type="button"
            onClick={() => setOpen(allOpen ? new Set() : new Set(regions.map((r) => r.key)))}
            className="hidden shrink-0 rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.8125rem] font-semibold text-brand-700 hover:border-brand-300 sm:inline-flex"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        ) : null}
      </div>

      {/* Regions */}
      <div className="mt-4 gap-5 lg:columns-2">
        {shown.map((region) =>
          filtering && !region.rows.length ? null : (
            <RegionCard
              key={region.key}
              region={region}
              isOpen={filtering || open.has(region.key)}
              onToggle={filtering ? undefined : () => toggle(region.key)}
              needle={needle}
              asterisk={asterisk}
            />
          )
        )}

        {filtering && !matches ? (
          <div className="rounded-[1.5rem] border border-dashed border-mist-300 bg-white px-6 py-10 text-center lg:[column-span:all]">
            <p className="text-sm text-ink-soft">
              Nothing matches{query ? <> &ldquo;{query}&rdquo;</> : null}.
            </p>
            <button
              type="button"
              onClick={clear}
              className="mt-3 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Show all {total} destinations
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function RegionCard({ region, isOpen, onToggle, needle, asterisk }) {
  const panelId = `region-panel-${region.key}`;
  const preview = region.rows.slice(0, 7);
  const more = region.rows.length - preview.length;

  return (
    <section
      id={`region-${region.key}`}
      className={cn(
        "mb-5 scroll-mt-64 break-inside-avoid overflow-hidden rounded-[1.5rem] border bg-white transition-[border-color,box-shadow] duration-200",
        isOpen ? "border-brand-200 shadow-[0_24px_50px_-36px_rgba(10,68,87,0.55)]" : "border-line hover:border-brand-200"
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          disabled={!onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center gap-3 px-5 pt-5 text-left sm:px-6"
        >
          {region.flag ? <Flag code={region.flag} className="size-7" /> : null}
          <span className="flex-1">
            <span className="block text-[1.0625rem] leading-snug font-bold text-ink">{region.name}</span>
            <span className="mt-0.5 block text-xs text-ink-muted">
              {region.rows.length} {region.rows.length === 1 ? "country" : "countries"}
            </span>
          </span>
          {onToggle ? (
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color] duration-200",
                isOpen ? "rotate-180 border-brand-700 bg-brand-700 text-white" : "border-line text-ink-muted"
              )}
            >
              <ChevronDown className="size-4" aria-hidden="true" />
            </span>
          ) : null}
        </button>
      </h3>

      <div className="px-5 sm:px-6">
        <p className={cn("mt-3 text-sm leading-relaxed text-ink-soft", !isOpen && "line-clamp-2")}>
          {region.note}
          {region.emphasis ? <strong className="font-semibold text-ink"> {region.emphasis}</strong> : null}
          {region.seeAlso && isOpen ? (
            <>
              {" "}
              See our{" "}
              <Link href={VISA_PAGES.dependant.href} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                UK &amp; Ireland Dependant Visa
              </Link>{" "}
              and{" "}
              <Link href={VISA_PAGES.settlement.href} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                UK Settlement
              </Link>{" "}
              pages.
            </>
          ) : null}
        </p>

        {/* Closed: a strip of flags standing in for the list. */}
        {!isOpen ? (
          <button
            type="button"
            onClick={onToggle}
            tabIndex={-1}
            aria-hidden="true"
            className="mt-4 mb-5 flex items-center -space-x-1.5"
          >
            {preview.map((row) => (
              <Flag
                key={row.code}
                code={row.code}
                className="size-7 shadow-[0_0_0_3px_rgba(16,32,42,0.1)] ring-2 ring-white"
              />
            ))}
            {more > 0 ? (
              <span className="relative ml-1 flex h-7 items-center rounded-full bg-mist-100 px-2.5 text-xs font-semibold text-ink-muted ring-2 ring-white">
                +{more}
              </span>
            ) : null}
          </button>
        ) : null}
      </div>

      {/* The rows. Always rendered; a closed panel collapses to nothing. */}
      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
        inert={!isOpen}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 divide-y divide-line/70 border-t border-line/70 px-2 pb-2 sm:px-3">
            {region.rows.map((row) => (
              <CountryRow key={row.code} row={row} needle={needle} asterisk={asterisk} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CountryRow({ row, needle, asterisk }) {
  const style = KIND_STYLES[row.kinds[0]] || NEUTRAL;
  // Countries with their own visa page link to it; the rest stay plain rows.
  const href = countryVisaHref(row.code);
  return (
    <li className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50/60">
      <Flag code={row.code} className="size-6" />
      {href ? (
        <Link
          href={href}
          className="min-w-0 flex-1 text-sm font-semibold text-brand-800 underline-offset-4 hover:underline"
        >
          <Highlight text={row.name} needle={needle} />
          <span className="ml-2 inline-flex items-center rounded-full bg-brand-50 px-2 py-0.5 align-middle text-[0.6875rem] font-semibold text-brand-700 ring-1 ring-brand-100">
            Full guide →
          </span>
        </Link>
      ) : (
        <span className="min-w-0 flex-1 text-sm font-medium text-ink">
          <Highlight text={row.name} needle={needle} />
        </span>
      )}
      <span
        className={cn(
          "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-right text-xs font-semibold ring-1",
          style.badge
        )}
      >
        {row.route}
        {row.starred ? (
          <span className="group/star relative ml-0.5 cursor-help" tabIndex={0}>
            <span aria-hidden="true">*</span>
            <span className="sr-only"> ({asterisk})</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 bottom-full z-10 mb-2 w-56 rounded-xl bg-ink px-3 py-2 text-left text-xs leading-relaxed font-normal text-white opacity-0 shadow-lg transition-opacity group-hover/star:opacity-100 group-focus/star:opacity-100"
            >
              {asterisk}
            </span>
          </span>
        ) : null}
      </span>
      <a
        href={whatsappLink({ serviceTitle: `a tourist visa for ${row.name}` })}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-whatsapp-text transition-[opacity,background-color] hover:bg-whatsapp/15 focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <WhatsAppIcon className="size-4" />
        <span className="sr-only">Ask about a tourist visa for {row.name} on WhatsApp</span>
      </a>
    </li>
  );
}

/** Bolds the part of a name the search matched. */
function Highlight({ text, needle }) {
  if (!needle) return text;
  const index = fold(text).indexOf(needle);
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <mark className="rounded bg-sun/30 px-0.5 text-ink">{text.slice(index, index + needle.length)}</mark>
      {text.slice(index + needle.length)}
    </>
  );
}
