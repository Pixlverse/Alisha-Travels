import mongoose from "mongoose";
import { seoSchema, registerModel } from "./_shared.js";
import { serviceBlockSchema, serviceCardSchema } from "./Service.js";

/**
 * The editorial content of a package category page — /packages/honeymoon/,
 * /packages/family/, /packages/group-tours/.
 *
 * Those three pages were a heading, a lead and the filtered package grid. The
 * client has since written full pages for them: a hero, four assurances, an
 * explanation of how the booking works, several bands of situations, and a
 * closing call to action — the same shape as a service page, because it is
 * the same kind of argument.
 *
 * It is a SEPARATE COLLECTION rather than a field on Package, because it is
 * not about any one package: it is the page that sits above a filtered list
 * of them. And it reuses the Service block schemas rather than redefining
 * them, so a change to how a block works reaches both.
 *
 * `slug` matches the category slug in lib/site.js (PACKAGE_CATEGORIES). A
 * category with no document here renders the original layout, so adding one
 * is additive and removing one is safe.
 */
const categoryPageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    /** The <h1>. Line breaks in it are respected, as the client writes them. */
    title: { type: String, required: true, trim: true },
    /** The eyebrow over the title. */
    eyebrow: { type: String, trim: true, default: "Packages" },
    /** The opening paragraph, under the title. */
    heroLead: { type: String, default: "" },
    /** The smaller line under that, carrying the credentials. */
    subline: { type: String, default: "" },

    ctaLabel: { type: String, trim: true, default: "" },
    secondaryCtaLabel: { type: String, trim: true, default: "" },

    /** The four short promises under the hero. */
    assurances: { type: [serviceCardSchema], default: [] },
    /** A paragraph or two before the bands begin. */
    intro: { type: String, default: "" },
    /** The body of the page. */
    blocks: { type: [serviceBlockSchema], default: [] },

    closingTitle: { type: String, trim: true, default: "" },
    closingText: { type: String, default: "" },

    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
    ...seoSchema,
  },
  { timestamps: true }
);

export default registerModel("CategoryPage", categoryPageSchema);
