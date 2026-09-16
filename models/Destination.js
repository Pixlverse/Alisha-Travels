import mongoose from "mongoose";
import { imageSchema, faqSchema, seoSchema, registerModel, slugify } from "./_shared.js";

const attractionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

const destinationSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    name: { type: String, required: true, trim: true },
    country: { type: String, trim: true, default: "" },
    region: {
      type: String,
      required: true,
      enum: ["international", "domestic"],
      index: true,
    },
    /**
     * Demand order, not alphabetical — the SEO/nav spec fixes the sequence
     * (Dubai, Singapore, Thailand, Maldives first). Lower sorts first.
     */
    order: { type: Number, default: 100, index: true },

    heroImage: { type: imageSchema, required: true },
    gallery: { type: [imageSchema], default: [] },

    /** Short line used on cards and in the nav mega-menu. */
    tagline: { type: String, trim: true, default: "" },
    intro: { type: String, default: "" },
    whyVisit: { type: String, default: "" },
    bestTimeToVisit: { type: String, default: "" },
    topAttractions: { type: [attractionSchema], default: [] },
    faqs: { type: [faqSchema], default: [] },

    /**
     * Optional manual override for the "Starting @ ₹X" band on destination
     * cards. When absent the value is derived from the cheapest active package
     * for this destination (see lib/data/destinations.js).
     */
    priceFrom: { type: Number, min: 0 },

    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
    ...seoSchema,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

destinationSchema.virtual("href").get(function () {
  return `/destinations/${this.region}/${this.slug}/`;
});

/** Packages that point at this destination. Populate explicitly when needed. */
destinationSchema.virtual("packages", {
  ref: "Package",
  localField: "_id",
  foreignField: "destination",
});

destinationSchema.pre("validate", function (next) {
  if (!this.slug && this.name) this.slug = slugify(this.name);
  next();
});

destinationSchema.index({ region: 1, order: 1 });

export default registerModel("Destination", destinationSchema);
