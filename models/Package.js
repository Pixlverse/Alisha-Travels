import mongoose from "mongoose";
import { imageSchema, faqSchema, seoSchema, registerModel, slugify } from "./_shared.js";

export const PACKAGE_CATEGORY_VALUES = [
  "honeymoon",
  "family",
  "group-tours",
  "corporate",
  "customized",
];

const itineraryDaySchema = new mongoose.Schema(
  {
    day: { type: Number, required: true, min: 1 },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    /** Optional per-day extras the detail page renders as small icon rows. */
    meals: { type: String, trim: true, default: "" },
    stay: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

const packageSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    title: { type: String, required: true, trim: true },
    /** Short subtitle shown under the title on the detail page and on cards. */
    summary: { type: String, trim: true, default: "" },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
      index: true,
    },
    category: {
      type: String,
      enum: PACKAGE_CATEGORY_VALUES,
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ["fixed-departure", "customized"],
      default: "customized",
      index: true,
    },

    durationDays: { type: Number, required: true, min: 1 },
    durationNights: { type: Number, required: true, min: 0 },

    /** INR only. The legacy site quoted USD on some pages — never again. */
    priceFrom: { type: Number, required: true, min: 0, index: true },
    /**
     * The fine print that qualifies that number — "Per adult, land only, min 4
     * sharing 2 rooms. Flights and entry tickets extra." A headline price with
     * no basis stated is what travellers complain about, so it sits with the
     * price rather than in a terms block further down the page.
     */
    priceNote: { type: String, trim: true, default: "" },
    /**
     * The fine print that qualifies that number — "Per adult, land only, min 4
     * sharing 2 rooms. Flights and entry tickets extra." A headline price with
     * no basis stated is the thing travellers complain about most, so it sits
     * with the price rather than in a terms block further down.
     */
    priceNote: { type: String, trim: true, default: "" },

    highlights: { type: [String], default: [] },
    inclusions: { type: [String], default: [] },
    exclusions: { type: [String], default: [] },
    itinerary: { type: [itineraryDaySchema], default: [] },
    faqs: { type: [faqSchema], default: [] },

    heroImage: { type: imageSchema, required: true },
    gallery: { type: [imageSchema], default: [] },
    mapCoordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },

    /**
     * A *generated or secondary* download, never the primary content. The
     * itinerary above is the canonical, indexable version — the legacy site's
     * PDF-only itineraries were invisible to search and painful on mobile.
     */
    pdfUrl: { type: String, trim: true, default: "" },

    /** Surfaces the package in the homepage "Exclusive Deals" carousel. */
    featured: { type: Boolean, default: false, index: true },

    /**
     * Last day of a promotional price. Cards show "Offer ends 30 Sep" while
     * the date is in the future and drop the badge by themselves once it has
     * passed, so a stale promotion cannot outlive its own deadline on the
     * page. Empty means the price is not a promotion.
     */
    offerEndsOn: { type: Date },
    order: { type: Number, default: 100 },

    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
    ...seoSchema,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

packageSchema.virtual("href").get(function () {
  return `/packages/${this.slug}/`;
});

packageSchema.virtual("durationLabel").get(function () {
  return `${this.durationDays}D / ${this.durationNights}N`;
});

packageSchema.virtual("departures", {
  ref: "Departure",
  localField: "_id",
  foreignField: "package",
});

packageSchema.pre("validate", function (next) {
  if (!this.slug && this.title) this.slug = slugify(this.title);
  next();
});

packageSchema.index({ status: 1, category: 1, priceFrom: 1 });
packageSchema.index({ destination: 1, status: 1 });

export default registerModel("Package", packageSchema);
