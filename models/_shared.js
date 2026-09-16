import mongoose from "mongoose";

/**
 * Every image on the site is a Cloudinary asset. We store more than the bare
 * URL the spec asked for because two things depend on it:
 *   - `alt` — Section 10 requires an alt attribute on every image, and alt text
 *     belongs with the image, not with each place it is rendered.
 *   - `publicId` — the admin dashboard needs it to delete the asset from
 *     Cloudinary when an image is removed, otherwise the account fills with
 *     orphans.
 * `url` alone is still enough to render, so treating this as "a Cloudinary URL
 * plus metadata" is safe.
 */
export const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true, trim: true },
    publicId: { type: String, trim: true },
    alt: { type: String, trim: true, default: "" },
    width: Number,
    height: Number,
  },
  { _id: false }
);

export const faqSchema = new mongoose.Schema(
  {
    question: { type: String, required: true, trim: true },
    answer: { type: String, required: true, trim: true },
  },
  { _id: false }
);

/**
 * SEO overrides.
 *
 * `metaTitle` holds the PAGE-SPECIFIC part only — the site name is appended by
 * the title template in app/layout.js, so storing "Dubai Tour Packages" here
 * renders "Dubai Tour Packages · Alisha Tours & Travels". Including the brand
 * in the stored value doubles it.
 */
export const seoSchema = {
  metaTitle: { type: String, trim: true, maxlength: 120 },
  metaDescription: { type: String, trim: true, maxlength: 320 },
};

/** Turn "Kashmir & Srinagar" into "kashmir-srinagar". */
export function slugify(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/**
 * `mongoose.models.X || mongoose.model(...)` guard. Next.js re-evaluates
 * modules on every hot reload; without this the second evaluation throws
 * OverwriteModelError.
 */
export function registerModel(name, schema) {
  return mongoose.models[name] || mongoose.model(name, schema);
}
