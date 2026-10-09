import { Service, CategoryPage, Campaign, Testimonial, GalleryItem, Office } from "@/models";
import { withDb, plain } from "./_helpers";

/* ------------------------------- Services -------------------------------- */

export function getServices({ limit } = {}) {
  return withDb(async () => {
    const docs = await Service.find({ status: "active" }).sort({ order: 1 }).limit(limit || 0).lean();
    return plain(docs).map((s) => ({ ...s, href: `/services/${s.slug}/` }));
  }, []);
}

export function getServiceBySlug(slug) {
  return withDb(async () => {
    const doc = await Service.findOne({ slug, status: "active" }).lean();
    return doc ? { ...plain(doc), href: `/services/${doc.slug}/` } : null;
  }, null);
}

/**
 * The editorial content above a package category listing. Null when the
 * client has not written that page yet, which is what the category routes
 * fall back to their original layout on.
 */
export function getCategoryPage(slug) {
  return withDb(async () => {
    const doc = await CategoryPage.findOne({ slug, status: "active" }).lean();
    return doc ? plain(doc) : null;
  }, null);
}

export function getServiceSlugs() {
  return withDb(async () => {
    const docs = await Service.find({ status: "active" }).select("slug").lean();
    return docs.map((d) => ({ slug: d.slug }));
  }, []);
}

/* ------------------------------- Campaigns -------------------------------- */

export function getCampaigns({ limit } = {}) {
  return withDb(async () => {
    const docs = await Campaign.find({ status: "active" })
      .sort({ order: 1, createdAt: -1 })
      .limit(limit || 0)
      .lean();
    return plain(docs).map((c) => ({ ...c, href: `/campaigns/${c.slug}/` }));
  }, []);
}

export function getCampaignBySlug(slug) {
  return withDb(async () => {
    const doc = await Campaign.findOne({ slug, status: "active" }).lean();
    return doc ? { ...plain(doc), href: `/campaigns/${doc.slug}/` } : null;
  }, null);
}

export function getCampaignSlugs() {
  return withDb(async () => {
    const docs = await Campaign.find({ status: "active" }).select("slug").lean();
    return docs.map((d) => ({ slug: d.slug }));
  }, []);
}

/* ----------------------------- Testimonials ------------------------------ */

export function getTestimonials({ featured, limit } = {}) {
  return withDb(async () => {
    const query = { status: "active" };
    if (featured !== undefined) query.featured = featured;
    const docs = await Testimonial.find(query)
      .sort({ featured: -1, order: 1, date: -1 })
      .limit(limit || 0)
      .lean();
    return plain(docs);
  }, []);
}

/**
 * Testimonials that carry a video.
 *
 * A separate query rather than a flag on getTestimonials(): the homepage needs
 * "the newest reviews that have video in them" while the written rails need
 * "the newest reviews", and mixing the two would drop a video review into a
 * text rail with no way to play it.
 */
export function getVideoTestimonials({ limit } = {}) {
  return withDb(async () => {
    const docs = await Testimonial.find({
      status: "active",
      $or: [{ videoUrl: { $exists: true, $ne: "" } }, { "videoFile.resourceType": "video" }],
    })
      .sort({ order: 1, date: -1 })
      .limit(limit || 0)
      .lean();
    return plain(docs);
  }, []);
}

/* -------------------------------- Gallery -------------------------------- */

export function getGalleryItems() {
  return withDb(async () => {
    const docs = await GalleryItem.find({ status: "active" }).sort({ order: 1, createdAt: -1 }).lean();
    return plain(docs);
  }, []);
}

/* -------------------------------- Offices -------------------------------- */

export function getOffices() {
  return withDb(async () => {
    const docs = await Office.find({ status: "active" }).sort({ order: 1 }).lean();
    return plain(docs);
  }, []);
}
