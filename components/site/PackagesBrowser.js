"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Briefcase,
  CalendarRange,
  ChevronDown,
  Heart,
  LayoutGrid,
  MapPin,
  SlidersHorizontal,
  Users,
  UsersRound,
  Wallet,
  X,
} from "lucide-react";
import PackageCard from "./PackageCard";
import Button from "./Button";
import {
  BUDGET_RANGES,
  DURATION_RANGES,
  PACKAGE_CATEGORIES,
  PACKAGE_SORTS,
} from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * An icon per kind of trip. Four words of similar length read as a list; four
 * words with a mark beside each read as four kinds of holiday.
 */
const CATEGORY_ICONS = {
  honeymoon: Heart,
  family: Users,
  "group-tours": UsersRound,
  corporate: Briefcase,
};

/**
 * The packages index, and every category view.
 *
 * Filtering happens in the browser, not on the server. The whole active
 * inventory is a couple of dozen documents, so shipping it once and filtering
 * locally is both cheaper than a round trip per keystroke and instant to use —
 * and it lets /packages/ stay a statically generated page instead of becoming
 * dynamic the moment it reads a search param.
 *
 * The URL is still the source of truth: filters are mirrored into the query
 * string with `replace`, so a filtered view is shareable and the Back button
 * behaves, and the hero search card's deep links (?destination=&category=&
 * minPrice=&maxPrice=) are read straight back out here.
 *
 * `lockedCategory` is set by the four /packages/<category>/ pages. Those are
 * filter views over this same collection, not separate content types, so they
 * render this component with the category fixed and its group hidden.
 *
 * LAYOUT — replaced the horizontal filter panel that sat above the grid.
 * That bar had to lay five controls out sideways, so budget and duration
 * became wrapping rails of pills three lines deep and the whole thing pushed
 * the first row of packages below the fold. This is the arrangement every
 * travel site converges on instead: a sticky left rail of stacked groups that
 * stays with you as you scroll the results, and a results column that owns its
 * own count and sort. On mobile the rail is exactly the same markup, moved
 * into a drawer behind a Filters button.
 */
export default function PackagesBrowser({
  packages = [],
  destinations = [],
  lockedCategory = null,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState(() => ({
    category: lockedCategory || searchParams.get("category") || "",
    destination: searchParams.get("destination") || "",
    budget: budgetFromParams(searchParams),
    duration: searchParams.get("duration") || "",
    sort: searchParams.get("sort") || "recommended",
  }));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const update = (patch) => {
    const next = { ...filters, ...patch };
    setFilters(next);

    const params = new URLSearchParams();
    if (!lockedCategory && next.category) params.set("category", next.category);
    if (next.destination) params.set("destination", next.destination);
    if (next.duration) params.set("duration", next.duration);
    if (next.sort && next.sort !== "recommended") params.set("sort", next.sort);
    if (next.budget) {
      const [min, max] = next.budget.split("-");
      if (min) params.set("minPrice", min);
      if (max) params.set("maxPrice", max);
    }

    const query = params.toString();
    // `scroll: false` so adjusting a filter does not throw you back to the top
    // of the page while you are reading the results.
    router.replace(query ? `?${query}` : window.location.pathname, { scroll: false });
  };

  const clearAll = () =>
    update({ category: lockedCategory || "", destination: "", budget: "", duration: "" });

  const results = useMemo(
    () => [...packages.filter((pkg) => matches(pkg, filters))].sort(SORTERS[filters.sort] || SORTERS.recommended),
    [packages, filters]
  );

  /*
    Facet counts, the part a horizontal bar had no room for.

    Each group is counted against the OTHER groups' filters but not its own —
    the standard behaviour: with Honeymoon selected, the budget group says how
    many honeymoon packages fall in each band, while the kind-of-trip group
    still shows every category, because those are the options you would switch
    to. A band with nothing behind it is disabled rather than hidden, so the
    rail does not reflow under the cursor as you filter.
  */
  const facets = useMemo(() => {
    const pool = (skip) => packages.filter((pkg) => matches(pkg, filters, skip));

    const categoryPool = pool("category");
    const budgetPool = pool("budget");
    const durationPool = pool("duration");

    return {
      categoryAll: categoryPool.length,
      category: Object.fromEntries(
        PACKAGE_CATEGORIES.map((c) => [c.slug, categoryPool.filter((p) => p.category === c.slug).length])
      ),
      budget: Object.fromEntries(
        BUDGET_RANGES.map((b) => [b.value, countInRange(budgetPool, b.value, "priceFrom")])
      ),
      duration: Object.fromEntries(
        DURATION_RANGES.map((d) => [d.value, countInRange(durationPool, d.value, "durationDays")])
      ),
    };
  }, [packages, filters]);

  const activeCount =
    (!lockedCategory && filters.category ? 1 : 0) +
    (filters.destination ? 1 : 0) +
    (filters.budget ? 1 : 0) +
    (filters.duration ? 1 : 0);

  const activeChips = [
    !lockedCategory && filters.category
      ? {
          key: "category",
          label: PACKAGE_CATEGORIES.find((c) => c.slug === filters.category)?.label,
          clear: () => update({ category: "" }),
        }
      : null,
    filters.destination
      ? {
          key: "destination",
          label: destinations.find((d) => d.slug === filters.destination)?.name,
          clear: () => update({ destination: "" }),
        }
      : null,
    filters.budget
      ? {
          key: "budget",
          label: BUDGET_RANGES.find((b) => b.value === filters.budget)?.label,
          clear: () => update({ budget: "" }),
        }
      : null,
    filters.duration
      ? {
          key: "duration",
          label: DURATION_RANGES.find((d) => d.value === filters.duration)?.label,
          clear: () => update({ duration: "" }),
        }
      : null,
  ].filter(Boolean);

  // Escape closes the drawer, and the page behind it does not scroll while it
  // is open — a filter panel that lets the results slide away underneath it
  // reads as broken on a phone.
  useEffect(() => {
    if (!drawerOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  // Two instances of the same groups — the sticky rail and the drawer — so
  // each needs its own radio-group names, or the browser treats them as one
  // group and only the last-rendered set can hold a checked option.
  const renderGroups = (idPrefix) => (
    <FilterGroups
      idPrefix={idPrefix}
      filters={filters}
      facets={facets}
      destinations={destinations}
      lockedCategory={lockedCategory}
      totalCount={packages.length}
      onChange={update}
    />
  );

  return (
    <div className="lg:grid lg:grid-cols-[16.5rem_minmax(0,1fr)] lg:items-start lg:gap-8">
      {/* The rail. Sticky under the site header, and allowed to scroll on its
          own when the viewport is short — otherwise the bottom group is
          unreachable on a laptop screen. */}
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto lg:pb-2">
        <div className="rounded-3xl border border-line bg-white p-4">
          <div className="flex items-center justify-between gap-3 pb-3">
            <h2 className="flex items-center gap-2 text-sm font-bold text-ink">
              <SlidersHorizontal className="size-4 text-brand-500" aria-hidden="true" />
              Filters
            </h2>
            {activeCount ? (
              <button
                type="button"
                onClick={clearAll}
                className="text-[0.8125rem] font-semibold text-ink-muted underline-offset-4 hover:text-brand-700 hover:underline"
              >
                Clear all
              </button>
            ) : null}
          </div>
          {renderGroups("rail")}
        </div>

        {/* Not a duplicate of the floating CTA: this one is for the visitor who
            has just filtered down to something that is not quite it. */}
        <div className="mt-4 rounded-3xl border border-brand-100 bg-brand-50/60 p-4">
          <p className="text-sm font-semibold text-ink">Nothing quite right?</p>
          <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-soft">
            Almost everything we sell is made to order. Tell us your dates and who is travelling,
            and we will build it and price it.
          </p>
          <Button href="/contact/" size="sm" className="mt-3 w-full">
            Ask us to build it
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Button>
        </div>
      </aside>

      <div>
        {/* Results toolbar: what you are looking at, and how it is ordered. */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-mist-300 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(16,32,42,0.06)] transition-colors hover:border-brand-300 hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none lg:hidden"
          >
            <SlidersHorizontal className="size-4 text-brand-500" aria-hidden="true" />
            Filters
            {activeCount ? (
              <span className="flex size-5 items-center justify-center rounded-full bg-brand-700 text-[0.625rem] font-bold text-white">
                {activeCount}
              </span>
            ) : null}
          </button>

          <p className="text-sm text-ink-muted">
            Showing <span className="font-semibold text-ink">{results.length}</span> of{" "}
            {packages.length}
          </p>

          <div className="ml-auto flex items-center gap-2">
            <span className="hidden text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase sm:inline">
              Sort by
            </span>
            <SelectPill
              value={filters.sort}
              onChange={(v) => update({ sort: v })}
              aria-label="Sort packages"
              className="min-w-[11rem]"
            >
              {PACKAGE_SORTS.map((sortOption) => (
                <option key={sortOption.value} value={sortOption.value}>
                  {sortOption.label}
                </option>
              ))}
            </SelectPill>
          </div>
        </div>

        {/* Every active filter is removable on its own here, so you can undo
            one without hunting back through the rail for the control that set
            it — and on mobile, without reopening the drawer at all. */}
        {activeChips.length ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={chip.clear}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 py-1.5 pr-2.5 pl-3 text-[0.8125rem] font-semibold text-brand-800 ring-1 ring-brand-200 transition-colors hover:bg-brand-100 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
              >
                {chip.label}
                <X className="size-3.5 text-brand-600" aria-hidden="true" />
                <span className="sr-only">Remove this filter</span>
              </button>
            ))}
            <button
              type="button"
              onClick={clearAll}
              className="text-[0.8125rem] font-semibold text-ink-muted underline-offset-4 hover:text-brand-700 hover:underline"
            >
              Clear all
            </button>
          </div>
        ) : null}

        <div aria-live="polite" className="mt-6">
          {results.length ? (
            <>
              {/* PackageCard titles are <h3>. Nothing else on this page sits
                  between them and the page <h1>, so without this the heading
                  outline jumps h1 -> h3 as soon as the client render fills the
                  grid in. Visually redundant next to the rail, hence sr-only. */}
              <h2 className="sr-only">Packages</h2>
              <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((pkg, index) => (
                  <li key={pkg.slug}>
                    <PackageCard pkg={pkg} eager={index < 3} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-line px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-ink">
                Nothing matches that combination - yet.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
                These are the trips we have already built and priced. Almost everything we sell is
                made to order, so tell us what you were looking for and we will put it together.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button href="/contact/">Ask us to build it</Button>
                <Button variant="outline" onClick={clearAll}>
                  Clear filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: the same rail, in a drawer. Filters apply as you tap them —
          the footer button only closes the panel, and says what it will
          reveal, so nothing is ever lost by dismissing it. */}
      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
            className="absolute inset-y-0 left-0 flex w-[min(21rem,88vw)] flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <h2 className="flex items-center gap-2 text-sm font-bold text-ink">
                <SlidersHorizontal className="size-4 text-brand-500" aria-hidden="true" />
                Filters
              </h2>
              <div className="flex items-center gap-3">
                {activeCount ? (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-[0.8125rem] font-semibold text-ink-muted underline-offset-4 hover:text-brand-700"
                  >
                    Clear all
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-full p-1.5 text-ink-muted transition-colors hover:bg-mist-100 hover:text-ink focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
                >
                  <X className="size-5" aria-hidden="true" />
                  <span className="sr-only">Close filters</span>
                </button>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">{renderGroups("drawer")}</div>

            <div className="border-t border-line px-4 py-3">
              <Button onClick={() => setDrawerOpen(false)} className="w-full">
                Show {results.length} {results.length === 1 ? "package" : "packages"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/**
 * The rail's contents, rendered twice — once in the sticky column, once in the
 * mobile drawer. `idPrefix` keeps the two sets of radio groups from sharing a
 * name and fighting over which one is checked.
 */
function FilterGroups({
  idPrefix,
  filters,
  facets,
  destinations,
  lockedCategory,
  totalCount,
  onChange,
}) {
  const international = destinations.filter((d) => d.region === "international");
  const domestic = destinations.filter((d) => d.region === "domestic");

  return (
    <div className="divide-y divide-line border-t border-line">
      {!lockedCategory ? (
        <Group label="Kind of trip" icon={<LayoutGrid className="size-3.5" />}>
          <fieldset>
            <legend className="sr-only">Kind of trip</legend>
            <Option
              name={`${idPrefix}-category`}
              checked={!filters.category}
              onSelect={() => onChange({ category: "" })}
              count={facets.categoryAll ?? totalCount}
              icon={LayoutGrid}
            >
              All packages
            </Option>
            {PACKAGE_CATEGORIES.filter((c) => c.slug !== "customized").map((c) => (
              <Option
                key={c.slug}
                name={`${idPrefix}-category`}
                checked={filters.category === c.slug}
                onSelect={() => onChange({ category: c.slug })}
                count={facets.category[c.slug] || 0}
                icon={CATEGORY_ICONS[c.slug]}
              >
                {c.label}
              </Option>
            ))}
          </fieldset>
        </Group>
      ) : null}

      {/*
        Destination stays a <select>: it is the one control with a long list,
        and nineteen radio rows would be most of the rail. (It is also the only
        one that must not publish its length — see the note in the destinations
        index, which is why there is no count beside it either.)
      */}
      <Group label="Destination" icon={<MapPin className="size-3.5" />}>
        <SelectPill
          value={filters.destination}
          onChange={(v) => onChange({ destination: v })}
          aria-label="Destination"
        >
          <option value="">Anywhere</option>
          {international.length ? (
            <optgroup label="International">
              {international.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </optgroup>
          ) : null}
          {domestic.length ? (
            <optgroup label="Domestic">
              {domestic.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </optgroup>
          ) : null}
        </SelectPill>
      </Group>

      <Group label="Budget" icon={<Wallet className="size-3.5" />}>
        <fieldset>
          <legend className="sr-only">Budget</legend>
          {BUDGET_RANGES.map((option) => (
            <Option
              key={option.value || "any"}
              name={`${idPrefix}-budget`}
              checked={filters.budget === option.value}
              onSelect={() => onChange({ budget: option.value })}
              count={facets.budget[option.value] || 0}
            >
              {option.label}
            </Option>
          ))}
        </fieldset>
      </Group>

      <Group label="Duration" icon={<CalendarRange className="size-3.5" />}>
        <fieldset>
          <legend className="sr-only">Duration</legend>
          {DURATION_RANGES.map((option) => (
            <Option
              key={option.value || "any"}
              name={`${idPrefix}-duration`}
              checked={filters.duration === option.value}
              onSelect={() => onChange({ duration: option.value })}
              count={facets.duration[option.value] || 0}
            >
              {option.label}
            </Option>
          ))}
        </fieldset>
      </Group>
    </div>
  );
}

function Group({ label, icon, children }) {
  return (
    <div className="py-4 first:pt-3.5 last:pb-1">
      <span className="flex items-center gap-1.5 px-1 text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
        <span className="text-brand-500" aria-hidden="true">
          {icon}
        </span>
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/**
 * One filter row. A real radio input, kept off-screen: that buys arrow-key
 * movement within the group and the right announcement from a screen reader
 * for free, which a row of <button aria-pressed> would have to fake.
 *
 * An option with nothing behind it is disabled rather than removed, so the
 * rail keeps its shape while you filter.
 */
function Option({ name, checked, onSelect, count, icon: Icon, children }) {
  const empty = count === 0 && !checked;

  return (
    <label
      className={cn(
        "group flex items-center gap-2.5 rounded-xl px-2 py-[0.4375rem] text-sm transition-colors",
        "has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-brand-400",
        empty
          ? "cursor-not-allowed text-ink-muted/55"
          : checked
            ? "cursor-pointer bg-brand-50 font-semibold text-brand-800"
            : "cursor-pointer text-ink-soft hover:bg-mist-50 hover:text-brand-700"
      )}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        disabled={empty}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors",
          checked
            ? "border-brand-700 bg-brand-700"
            : "border-mist-300 bg-white group-hover:border-brand-300"
        )}
      >
        <span className={cn("size-1.5 rounded-full bg-white", !checked && "hidden")} />
      </span>
      {Icon ? (
        <Icon
          className={cn("size-4 shrink-0", checked ? "text-brand-700" : "text-brand-500")}
          aria-hidden="true"
        />
      ) : null}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      <span
        className={cn(
          "text-[0.6875rem] font-bold tabular-nums",
          checked ? "text-brand-700" : "text-ink-muted"
        )}
      >
        {count}
      </span>
    </label>
  );
}

function SelectPill({ value, onChange, className, children, ...props }) {
  return (
    <span
      className={cn(
        "flex h-10 items-center gap-2 rounded-full border border-mist-300 bg-white px-4 shadow-[0_1px_2px_rgba(16,32,42,0.06)] transition-colors focus-within:border-brand-400 focus-within:ring-2 focus-within:ring-brand-400/25",
        className
      )}
    >
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        // outline-none is safe only because the wrapping pill reacts to
        // :focus-within with a ring.
        className="w-full cursor-pointer appearance-none truncate rounded-full bg-transparent text-sm font-medium text-ink outline-none"
        {...props}
      >
        {children}
      </select>
      {/* appearance-none removes the native arrow, and without a replacement
          these read as text boxes rather than as pickers. */}
      <ChevronDown className="size-4 shrink-0 text-ink-muted" aria-hidden="true" />
    </span>
  );
}

const SORTERS = {
  recommended: (a, b) =>
    Number(b.featured) - Number(a.featured) ||
    (a.order ?? 100) - (b.order ?? 100) ||
    a.priceFrom - b.priceFrom,
  "price-asc": (a, b) => a.priceFrom - b.priceFrom,
  "price-desc": (a, b) => b.priceFrom - a.priceFrom,
  "duration-asc": (a, b) => a.durationDays - b.durationDays,
  "duration-desc": (a, b) => b.durationDays - a.durationDays,
};

/**
 * Does this package survive the filters? `skip` leaves one group out, which is
 * what makes that group's own counts say what you would get by switching to
 * each of its options rather than what you already have.
 */
function matches(pkg, filters, skip = null) {
  if (skip !== "category" && filters.category && pkg.category !== filters.category) return false;
  if (skip !== "destination" && filters.destination && pkg.destination?.slug !== filters.destination)
    return false;

  if (skip !== "budget") {
    const [minPrice, maxPrice] = splitRange(filters.budget);
    if (minPrice != null && pkg.priceFrom < minPrice) return false;
    if (maxPrice != null && pkg.priceFrom > maxPrice) return false;
  }

  if (skip !== "duration") {
    const [minDays, maxDays] = splitRange(filters.duration);
    if (minDays != null && pkg.durationDays < minDays) return false;
    if (maxDays != null && pkg.durationDays > maxDays) return false;
  }

  return true;
}

/** How many of `pool` fall inside a "25000-50000" style range on `field`. The
    empty value is the "any" option, which is the whole pool. */
function countInRange(pool, value, field) {
  if (!value) return pool.length;
  const [min, max] = splitRange(value);
  return pool.filter(
    (pkg) => (min == null || pkg[field] >= min) && (max == null || pkg[field] <= max)
  ).length;
}

/** "25000-50000" → [25000, 50000]; an empty side becomes null. */
function splitRange(value) {
  if (!value) return [null, null];
  const [min, max] = value.split("-");
  return [min ? Number(min) : null, max ? Number(max) : null];
}

/** Rebuild the budget control's value from the minPrice/maxPrice deep link. */
function budgetFromParams(searchParams) {
  const min = searchParams.get("minPrice") || "";
  const max = searchParams.get("maxPrice") || "";
  if (!min && !max) return "";
  const candidate = `${min}-${max}`;
  return BUDGET_RANGES.some((b) => b.value === candidate) ? candidate : "";
}
