import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The three Fixed Departures views, per the navigation specification:
 * Upcoming Departures, International Calendar and Domestic Calendar.
 *
 * Plain links rather than client-side tab state — each is a real, indexable
 * URL with its own metadata, which is the point of having three routes.
 */
export default function CalendarTabs({ active, counts = {} }) {
  const tabs = [
    { key: "all", label: "All upcoming", href: "/fixed-departures/" },
    { key: "international", label: "International", href: "/fixed-departures/international/" },
    { key: "domestic", label: "Domestic", href: "/fixed-departures/domestic/" },
  ];

  return (
    <nav aria-label="Departure calendars" className="mt-8 flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const selected = tab.key === active;
        const count = counts[tab.key];
        return (
          <Link
            key={tab.key}
            href={tab.href}
            aria-current={selected ? "page" : undefined}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              selected
                ? "border-brand-700 bg-brand-700 text-white"
                : "border-line bg-white text-ink-soft hover:border-brand-300 hover:text-brand-700"
            )}
          >
            {tab.label}
            {typeof count === "number" ? (
              <span className={cn("ml-2 text-xs", selected ? "text-white/75" : "text-ink-muted")}>
                {count}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
