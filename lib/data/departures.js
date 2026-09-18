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
    const query = { status: "active" };

    /*
      THE DATE GOES IN THE QUERY when past departures are not wanted.

      It used to be a filter applied to the result — after `limit` had already
      been applied by Mongo. The seeded fixture deliberately keeps the legacy
      site's 2024 and 2025 dates, so as soon as those five became the five
      earliest rows, the homepage's `getDepartures({ includePast: false,
      limit: 4 })` took four expired departures out of the database, threw all
      four away, and rendered nothing: the "Leaving next" band disappeared
      from the homepage while eight future departures sat in the collection.

      `$gte: new Date()` rather than midnight, to match departureAvailability
      below — it calls a departure expired the moment its date has passed, and
      two different definitions of "expired" in one function is how a band
      ends up showing a trip its own badge calls over.
    */
    if (!includePast) query.departureDate = { $gte: new Date() };

    let docs = plain(
      await Departure.find(query)
        .populate({
          path: "package",
          select: "slug title summary durationDays durationNights priceFrom heroImage category type destination status",
          populate: { path: "destination", select: "slug name region" },
        })
        .sort({ departureDate: 1 })
        .lean()
    );

    // Drop orphans: a departure whose package was deleted or set to draft.
    docs = docs.filter((d) => d.package && d.package.status === "active");

    if (region) docs = docs.filter((d) => d.package?.destination?.region === region);

    let decorated = docs.map((d) => ({
      ...d,
      availability: departureAvailability(d),
      href: `/packages/${d.package.slug}/`,
    }));

    if (!includePast) decorated = decorated.filter((d) => d.availability !== "expired");

    /*
      `limit` is applied LAST, for the same reason. Region lives on the joined
      package and an orphan can only be spotted after the populate, so neither
      filter can be pushed into the query — which means a limit applied by
      Mongo is a limit on rows we are about to discard, not on the rows the
      caller asked for. The collection is small enough that this costs
      nothing; correctness here is worth more than the round trip.
    */
    return limit ? decorated.slice(0, limit) : decorated;
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
