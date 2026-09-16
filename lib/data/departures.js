import { Departure } from "@/models";
import { withDb, plain } from "./_helpers";
import { departureAvailability } from "@/models/Departure";

/**
 * Fixed departures.
 *
 * Past departures are returned, never filtered out. The legacy site's worst
 * symptom was advertising tours that had left 15 months earlier, but silently
 * dropping them creates the opposite problem — a calendar with three entries
 * reads as a business that has stopped operating. The UI shows upcoming first
 * and puts past departures behind a toggle, clearly badged "Departed".
 */
export function getDepartures({ region, includePast = true, limit } = {}) {
  return withDb(async () => {
    let builder = Departure.find({ status: "active" })
      .populate({
        path: "package",
        select: "slug title summary durationDays durationNights priceFrom heroImage category type destination status",
        populate: { path: "destination", select: "slug name region" },
      })
      .sort({ departureDate: 1 });

    if (limit) builder = builder.limit(limit);

    let docs = plain(await builder.lean());

    // Drop orphans: a departure whose package was deleted or set to draft.
    docs = docs.filter((d) => d.package && d.package.status === "active");

    if (region) docs = docs.filter((d) => d.package?.destination?.region === region);

    const decorated = docs.map((d) => ({
      ...d,
      availability: departureAvailability(d),
      href: `/packages/${d.package.slug}/`,
    }));

    if (!includePast) return decorated.filter((d) => d.availability !== "expired");
    return decorated;
  }, []);
}

/** Split into the two lists the calendar pages render. */
export async function getDeparturesSplit(options = {}) {
  const all = await getDepartures(options);
  return {
    upcoming: all.filter((d) => d.availability !== "expired"),
    // Most recent first — a visitor scanning past departures wants the last
    // one that ran, not one from 2024.
    past: all.filter((d) => d.availability === "expired").reverse(),
  };
}
