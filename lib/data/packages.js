import { Package, Departure } from "@/models";
import { withDb, plain } from "./_helpers";
import { departureAvailability } from "@/models/Departure";

const CARD_FIELDS =
  "slug title summary category type durationDays durationNights priceFrom offerEndsOn heroImage featured order destination";

function decorate(pkg) {
  return {
    ...pkg,
    href: `/packages/${pkg.slug}/`,
    destination: pkg.destination && typeof pkg.destination === "object"
      ? { ...pkg.destination, href: `/destinations/${pkg.destination.region}/${pkg.destination.slug}/` }
      : pkg.destination,
  };
}

/**
 * One query powers the packages index, all four category views and the
 * "related packages" strip on destination pages. The four /packages/<category>/
 * routes are filters over this single collection, not separate content types.
 */
export function getPackages({
  category,
  destinationId,
  destinationSlug,
  type,
  featured,
  minPrice,
  maxPrice,
  minDays,
  maxDays,
  exclude,
  sort = "recommended",
  limit,
} = {}) {
  return withDb(async () => {
    const query = { status: "active" };
    if (category) query.category = category;
    if (type) query.type = type;
    if (featured !== undefined) query.featured = featured;
    if (destinationId) query.destination = destinationId;
    if (exclude) query.slug = { $ne: exclude };

    if (minPrice != null || maxPrice != null) {
      query.priceFrom = {};
      if (minPrice != null) query.priceFrom.$gte = Number(minPrice);
      if (maxPrice != null) query.priceFrom.$lte = Number(maxPrice);
    }
    if (minDays != null || maxDays != null) {
      query.durationDays = {};
      if (minDays != null) query.durationDays.$gte = Number(minDays);
      if (maxDays != null) query.durationDays.$lte = Number(maxDays);
    }

    const sorts = {
      recommended: { featured: -1, order: 1, priceFrom: 1 },
      "price-asc": { priceFrom: 1 },
      "price-desc": { priceFrom: -1 },
      "duration-asc": { durationDays: 1 },
      "duration-desc": { durationDays: -1 },
    };

    let builder = Package.find(query)
      .select(CARD_FIELDS)
      .populate("destination", "slug name region")
      .sort(sorts[sort] || sorts.recommended);

    if (limit) builder = builder.limit(limit);

    let docs = plain(await builder.lean());

    // Filtering by destination slug happens after the populate because the slug
    // lives on the joined document, not on the package itself.
    if (destinationSlug) {
      docs = docs.filter((p) => p.destination?.slug === destinationSlug);
    }

    return docs.map(decorate);
  }, []);
}

export function getPackageBySlug(slug) {
  return withDb(async () => {
    const doc = await Package.findOne({ slug, status: "active" })
      .populate("destination", "slug name region heroImage")
      .lean();
    if (!doc) return null;

    const departures = await Departure.find({ package: doc._id, status: "active" })
      .sort({ departureDate: 1 })
      .lean();

    return {
      ...decorate(plain(doc)),
      departures: plain(departures).map((d) => ({
        ...d,
        availability: departureAvailability(d),
      })),
    };
  }, null);
}

export function getPackageSlugs() {
  return withDb(async () => {
    const docs = await Package.find({ status: "active" }).select("slug").lean();
    return docs.map((d) => ({ slug: d.slug }));
  }, []);
}

/**
 * Price and duration bounds for the /packages/ filter UI, so the sliders are
 * built from the real inventory rather than hardcoded guesses.
 */
export function getPackageFacets() {
  return withDb(async () => {
    const [row] = await Package.aggregate([
      { $match: { status: "active" } },
      {
        $group: {
          _id: null,
          minPrice: { $min: "$priceFrom" },
          maxPrice: { $max: "$priceFrom" },
          minDays: { $min: "$durationDays" },
          maxDays: { $max: "$durationDays" },
          total: { $sum: 1 },
        },
      },
    ]);
    return row || { minPrice: 0, maxPrice: 0, minDays: 0, maxDays: 0, total: 0 };
  }, { minPrice: 0, maxPrice: 0, minDays: 0, maxDays: 0, total: 0 });
}
