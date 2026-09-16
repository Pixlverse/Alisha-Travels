import { Destination, Package } from "@/models";
import { withDb, plain } from "./_helpers";

const CARD_FIELDS =
  "slug name region order tagline heroImage priceFrom country metaTitle metaDescription";

/**
 * The "Starting @ ₹X" band on a destination card should reflect what a
 * traveller can actually book. So the price is derived from the cheapest
 * active package for that destination, and the manually-set `priceFrom` on the
 * Destination document is only a fallback for destinations that have no
 * packages loaded yet.
 */
async function cheapestPackagePrices() {
  const rows = await Package.aggregate([
    { $match: { status: "active" } },
    { $group: { _id: "$destination", priceFrom: { $min: "$priceFrom" }, count: { $sum: 1 } } },
  ]);
  const map = new Map();
  for (const row of rows) {
    map.set(String(row._id), { priceFrom: row.priceFrom, packageCount: row.count });
  }
  return map;
}

function decorate(destination, priceMap) {
  const derived = priceMap.get(String(destination._id)) || {};
  return {
    ...destination,
    href: `/destinations/${destination.region}/${destination.slug}/`,
    priceFrom: derived.priceFrom ?? destination.priceFrom ?? null,
    packageCount: derived.packageCount ?? 0,
  };
}

export function getDestinations({ region, limit } = {}) {
  return withDb(async () => {
    const query = { status: "active" };
    if (region) query.region = region;

    const [docs, priceMap] = await Promise.all([
      Destination.find(query).select(CARD_FIELDS).sort({ order: 1, name: 1 }).limit(limit || 0).lean(),
      cheapestPackagePrices(),
    ]);

    return plain(docs).map((doc) => decorate(doc, priceMap));
  }, []);
}

/** Both regions in one query, grouped — used by the nav and the index page. */
export function getDestinationsByRegion() {
  return withDb(async () => {
    const [docs, priceMap] = await Promise.all([
      Destination.find({ status: "active" }).select(CARD_FIELDS).sort({ order: 1, name: 1 }).lean(),
      cheapestPackagePrices(),
    ]);
    const all = plain(docs).map((doc) => decorate(doc, priceMap));
    return {
      international: all.filter((d) => d.region === "international"),
      domestic: all.filter((d) => d.region === "domestic"),
      all,
    };
  }, { international: [], domestic: [], all: [] });
}

export function getDestinationBySlug(slug, region) {
  return withDb(async () => {
    const query = { slug, status: "active" };
    if (region) query.region = region;

    const doc = await Destination.findOne(query).lean();
    if (!doc) return null;

    const packages = await Package.find({ destination: doc._id, status: "active" })
      .select("slug title summary category type durationDays durationNights priceFrom heroImage featured order")
      .sort({ featured: -1, order: 1, priceFrom: 1 })
      .lean();

    return {
      ...plain(doc),
      href: `/destinations/${doc.region}/${doc.slug}/`,
      packages: plain(packages).map((p) => ({ ...p, href: `/packages/${p.slug}/` })),
    };
  }, null);
}

/** For generateStaticParams — every destination as { region, slug }. */
export function getDestinationParams() {
  return withDb(async () => {
    const docs = await Destination.find({ status: "active" }).select("slug region").lean();
    return docs.map((d) => ({ region: d.region, slug: d.slug }));
  }, []);
}
