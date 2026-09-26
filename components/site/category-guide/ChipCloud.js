import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Tags as chips. Where a tag names a destination the site has a page for, the
 * chip is a link to it, so "Maldives" in a list of ideas is one tap from the
 * Maldives page rather than a word to go and search for.
 */
export default function ChipCloud({ tags, destinations = [], className }) {
  return (
    <ul className={cn("flex flex-wrap gap-2.5", className)}>
      {tags.map((tag) => {
        const destination = matchDestination(tag, destinations);
        const base =
          "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200";
        return (
          <li key={tag}>
            {destination ? (
              <Link
                href={destination.href}
                className={cn(
                  base,
                  "bg-white text-brand-800 ring-1 ring-brand-200 hover:-translate-y-0.5 hover:bg-brand-700 hover:text-white hover:shadow-md hover:ring-brand-700"
                )}
              >
                {tag}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            ) : (
              <span className={cn(base, "bg-white text-ink-soft ring-1 ring-line")}>{tag}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function matchDestination(tag, destinations) {
  const needle = tag.trim().toLowerCase();
  const found = destinations.find((destination) => {
    const name = String(destination.name || "").toLowerCase();
    return name === needle || name.split(/\s*&\s*|\s+and\s+/).includes(needle);
  });
  if (!found) return null;
  return { ...found, href: found.href || `/destinations/${found.region}/${found.slug}/` };
}
