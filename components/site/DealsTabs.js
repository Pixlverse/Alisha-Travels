"use client";

import { useState } from "react";
import PackageCard from "./PackageCard";
import ScrollRow from "./ScrollRow";
import { cn } from "@/lib/utils";

/**
 * Tabbed package carousel — the "Exclusive Deals" pattern from the client's
 * Akbar Travels reference, with our own four tabs.
 *
 * All the packages arrive from the server in one payload and the tabs filter in
 * the browser. At this inventory size that is far cheaper than a request per
 * tab, and switching tabs is instant.
 *
 * A tab is only rendered if it has packages behind it — no empty tabs.
 */
export default function DealsTabs({ groups, title, eyebrow, lead, link, linkLabel }) {
  const available = groups.filter((group) => group.packages.length > 0);
  const [active, setActive] = useState(available[0]?.key);

  if (!available.length) return null;

  const current = available.find((group) => group.key === active) || available[0];

  // The heading, the "view all" link and the rail's arrows all belong on one
  // row, so ScrollRow renders them and takes the tablist as its beforeRail
  // slot. The rail keeps its role="tabpanel" wrapper via railWrapper, which is
  // why that prop exists.
  const tablist = (
    <div
        role="tablist"
        aria-label="Package collections"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {available.map((group) => {
          const selected = group.key === current.key;
          return (
            <button
              key={group.key}
              role="tab"
              type="button"
              id={`deals-tab-${group.key}`}
              aria-selected={selected}
              aria-controls={`deals-panel-${group.key}`}
              onClick={() => setActive(group.key)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                selected
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
              )}
            >
              {group.label}
              <span className={cn("ml-2 text-xs", selected ? "text-white/70" : "text-ink-muted")}>
                {group.packages.length}
              </span>
            </button>
          );
        })}
    </div>
  );

  return (
    <ScrollRow
      title={title}
      eyebrow={eyebrow}
      lead={lead}
      link={link || current.href}
      linkLabel={linkLabel}
      label={`${current.label} packages`}
      itemClassName="w-[19rem] shrink-0 sm:w-[21rem]"
      beforeRail={tablist}
      railWrapper={(rail) => (
        <div
          role="tabpanel"
          id={`deals-panel-${current.key}`}
          aria-labelledby={`deals-tab-${current.key}`}
        >
          {rail}
        </div>
      )}
    >
      {current.packages.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
    </ScrollRow>
  );
}
