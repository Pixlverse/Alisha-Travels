"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, MapPin, Search, Tag, Wallet } from "lucide-react";
import HeroVisaSearch from "./HeroVisaSearch";
import { cn } from "@/lib/utils";
import { BUDGET_RANGES, PACKAGE_CATEGORIES } from "@/lib/site";

/**
 * The floating search card in the hero.
 *
 * It is deliberately a *router*, not a fake availability search. Every field
 * maps onto a filter the site can genuinely answer, and pressing Search deep-
 * links into a real listing page. The legacy site's equivalent form offered
 * three stale hardcoded destinations while the site advertised many more; here
 * the destination list comes from the Destination collection every time.
 *
 * Four tabs, because those are the ways people arrive at this business: they
 * know the kind of trip, they know the place, they want to join a group
 * departure on a set date, or they need a visa. The Visa tab is its own
 * component (HeroVisaSearch): a country search that opens that country's
 * visa page.
 */

/** What the button does, which is not the same thing on all three tabs. */
const SUBMIT_LABEL = {
  packages: "Search packages",
  destinations: "Explore",
  departures: "See dates",
  visa: "Find visa",
};

const TABS = [
  { key: "packages", label: "Packages" },
  { key: "destinations", label: "Destinations" },
  { key: "departures", label: "Fixed departures" },
  { key: "visa", label: "Visa" },
];

export default function HeroSearch({ destinations = [], visaCountries = [] }) {
  const router = useRouter();
  const [tab, setTab] = useState("packages");
  const tabRefs = useRef([]);
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [region, setRegion] = useState("");

  /*
    The client's note was that the Packages and Destinations tabs looked much
    the same while only Packages could really filter. They were: Destinations
    showed the same "Where to?" select followed by a DEAD field reading
    "Attractions, FAQs, packages", so it looked like the Packages tab with two
    of its controls greyed out.

    They are now different instruments. Packages filters — place, kind of
    trip, budget — and lands on a filtered listing. Destinations narrows:
    picking a region rebuilds the list of places below it, and the tab goes to
    a destination guide or a region index. Nothing in either tab is a label
    pretending to be a control, and the button says which of the two you are
    about to do.
  */
  const scoped =
    region === "international" || region === "domestic"
      ? destinations.filter((d) => d.region === region)
      : destinations;

  const international = scoped.filter((d) => d.region === "international");
  const domestic = scoped.filter((d) => d.region === "domestic");

  const onRegionChange = (value) => {
    setRegion(value);
    // A place that is no longer in the list cannot stay selected, or Search
    // would route somewhere the visitor can no longer see they chose.
    if (value && destinations.find((d) => d.slug === destination)?.region !== value) {
      setDestination("");
    }
  };

  // Arrow keys, Home and End across the tabs, with a roving tabindex — the
  // tablist pattern proper, so the three tabs are one stop in the tab order and
  // Tab from the last one lands in the panel they control rather than cycling
  // through the other two. Matches TestimonialSpotlight.
  const onTabKeyDown = (event) => {
    const current = TABS.findIndex((item) => item.key === tab);
    const moves = {
      ArrowRight: current + 1,
      ArrowDown: current + 1,
      ArrowLeft: current - 1,
      ArrowUp: current - 1,
      Home: 0,
      End: TABS.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = (moves[event.key] + TABS.length) % TABS.length;
    setTab(TABS[next].key);
    tabRefs.current[next]?.focus();
  };

  const submit = (event) => {
    event.preventDefault();

    if (tab === "destinations") {
      const match = destinations.find((d) => d.slug === destination);
      if (match) {
        router.push(match.href);
        return;
      }
      router.push(region ? `/destinations/${region}/` : "/destinations/");
      return;
    }

    if (tab === "departures") {
      router.push(region ? `/fixed-departures/${region}/` : "/fixed-departures/");
      return;
    }

    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (category) params.set("category", category);
    if (budget) {
      const [min, max] = budget.split("-");
      if (min) params.set("minPrice", min);
      if (max) params.set("maxPrice", max);
    }
    const query = params.toString();
    router.push(`/packages/${query ? `?${query}` : ""}`);
  };

  return (
    <div className="rounded-[1.75rem] border border-line/70 bg-white p-2.5 shadow-[0_30px_70px_-30px_rgba(16,32,42,0.45)] sm:p-3">
      {/*
        Folder tabs, joined to the panel below them.

        The selected tab draws a --brand-200 border on three sides and a WHITE
        bottom border, then pulls itself down one pixel (-mb-px) so that white
        edge lands exactly on the panel's own top border and erases the segment
        underneath it. The tablist sits at z-10 so the tab paints over that
        line rather than under it. That one-pixel overlap is the whole effect —
        remove -mb-px and you get a floating chip above a closed box.

        Two consequences worth knowing before changing anything here:

        - The panel CANNOT be a pill any more, and used to be (sm:rounded-full).
          A tab has to meet a straight edge: against a 64px-tall pill the flat
          part of the top edge only begins 32px in, so the tab's corners sat on
          the curve and the seam showed as two little horns. It is a rounded
          rectangle now, radius chosen as the card's radius minus its padding
          so the two curves stay concentric.
        - The tab's bottom border is white because the panel's fill is white. It
          was --mist-50 on mobile, which is why that fill is gone: two colours
          to keep in sync for one seam is one too many, and the panel's border
          now does the job the tint was doing.
      */}
      <div
        role="tablist"
        aria-label="What are you looking for?"
        onKeyDown={onTabKeyDown}
        className="relative z-10 flex gap-1"
      >
        {TABS.map((item, position) => {
          const selected = tab === item.key;
          return (
            <button
              key={item.key}
              ref={(node) => {
                tabRefs.current[position] = node;
              }}
              type="button"
              role="tab"
              id={`hero-tab-${item.key}`}
              aria-selected={selected}
              aria-controls="hero-search-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(item.key)}
              className={cn(
                "-mb-px rounded-t-[0.9rem] border px-4 py-2.5 text-[0.8125rem] font-semibold transition-colors",
                "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                selected
                  ? "border-brand-200 border-b-white bg-white text-brand-700"
                  : "border-transparent text-ink-muted hover:bg-mist-100 hover:text-ink"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {tab === "visa" ? (
        <HeroVisaSearch
          countries={visaCountries}
          panelProps={{ id: "hero-search-panel", role: "tabpanel", "aria-labelledby": "hero-tab-visa" }}
        />
      ) : (
        <form
          onSubmit={submit}
          id="hero-search-panel"
          role="tabpanel"
          aria-labelledby={`hero-tab-${tab}`}
          className="relative grid gap-2 rounded-[1.125rem] border border-brand-200 bg-white p-2 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center sm:gap-0"
        >
          {tab === "departures" ? (
            <>
              <Field icon={<MapPin className="size-4" />} label="Region">
                <Select value={region} onChange={setRegion}>
                  <option value="">Anywhere</option>
                  <option value="international">International</option>
                  <option value="domestic">Domestic</option>
                </Select>
              </Field>
              {/* The dead "When: all upcoming dates" field that used to sit here
                  is gone rather than replaced. /fixed-departures/ lists every
                  upcoming date grouped by month, and this component has no way
                  to know which months have departures behind them, so any date
                  control here would be another label dressed as a filter. One
                  real field and a button reading "See dates" is the honest
                  version of this panel. */}
              <span className="hidden sm:block" />
              <span className="hidden sm:block" />
            </>
          ) : (
            <>
              {tab === "destinations" ? (
                <Field icon={<Globe className="size-4" />} label="Region">
                  <Select value={region} onChange={onRegionChange}>
                    <option value="">Everywhere we plan</option>
                    <option value="international">International</option>
                    <option value="domestic">Domestic</option>
                  </Select>
                </Field>
              ) : null}

              <Field
                icon={<MapPin className="size-4" />}
                label="Where to?"
                divider={tab === "destinations"}
              >
                <Select value={destination} onChange={setDestination}>
                  <option value="">
                    {tab === "destinations" ? "Browse every destination" : "Anywhere - help me choose"}
                  </option>
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
                </Select>
              </Field>

              {tab === "packages" ? (
                <>
                  <Field icon={<Tag className="size-4" />} label="Kind of trip" divider>
                    <Select value={category} onChange={setCategory}>
                      <option value="">Any</option>
                      {PACKAGE_CATEGORIES.filter((c) => c.slug !== "customized").map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.label}
                        </option>
                      ))}
                    </Select>
                  </Field>
                  <Field icon={<Wallet className="size-4" />} label="Budget" divider>
                    <Select value={budget} onChange={setBudget}>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </>
              ) : (
                <span className="hidden sm:block" />
              )}
            </>
          )}

          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none sm:ml-2"
          >
            <Search className="size-4" aria-hidden="true" />
            {SUBMIT_LABEL[tab]}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ icon, label, children, divider = false }) {
  return (
    <label
      className={cn(
        "flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl px-3.5 py-2.5 transition-colors sm:rounded-full sm:hover:bg-mist-50",
        // A straight rule between fields, drawn as a pseudo-element rather
        // than a border. `sm:border-l` on this element used to do the job, but
        // the element is `sm:rounded-full`, so the border followed the pill's
        // curve and rendered as a large arc hooking around each field — which
        // read as decoration rather than as a divider.
        divider &&
          "sm:relative sm:before:absolute sm:before:top-1/2 sm:before:left-0 sm:before:h-7 sm:before:w-0.5 sm:before:-translate-y-1/2 sm:before:rounded-full sm:before:bg-brand-200 sm:before:content-['']"
      )}
    >
      <span className="text-brand-500" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}

function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full cursor-pointer appearance-none truncate bg-transparent text-sm font-medium text-ink outline-none"
    >
      {children}
    </select>
  );
}
