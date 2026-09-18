import mongoose from "mongoose";
import { imageSchema, faqSchema, seoSchema, registerModel, slugify } from "./_shared.js";

const attractionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

/** One card inside a `cards` block — "Phuket — the biggest island, with…". */
const blockCardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    text: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

/**
 * A destination page is written as a SEQUENCE OF BLOCKS, because that is how
 * the client writes them.
 *
 * The three fixed prose fields below (whyVisit, bestTimeToVisit,
 * topAttractions) held the shape of the placeholder copy this site launched
 * with: one paragraph each, one grid of attractions. The copy the client
 * actually supplied does not fit it — Thailand has "Bangkok and around", "the
 * southern islands", "the north", "Pattaya", a honeymoon section and a
 * "from Kerala" section; Kerala has a requested-packages section; the
 * Maldives has one on choosing where to stay. Forcing nineteen documents of
 * that shape into three fields would have meant throwing most of them away.
 *
 * `kind` decides which fields matter, and matches the service blocks:
 *   list   title, intro, points[]
 *   cards  title, intro, items[], footnote
 *   prose  title, body  — a title with no body is a heading for the blocks
 *          under it, which is how the client groups a run of regions
 *
 * A destination with no blocks renders the original layout, so the two the
 * client has not written yet are untouched.
 */
const destinationBlockSchema = new mongoose.Schema(
  {
    kind: { type: String, enum: ["list", "cards", "prose"], default: "prose" },
    title: { type: String, trim: true, default: "" },
    intro: { type: String, trim: true, default: "" },
    body: { type: String, trim: true, default: "" },
    items: { type: [blockCardSchema], default: [] },
    points: { type: [String], default: [] },
    footnote: { type: String, trim: true, default: "" },
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
    /** The opening. Blank line between paragraphs. */
    intro: { type: String, default: "" },

    /** The body of the page. Empty means the three fields below are used. */
    blocks: { type: [destinationBlockSchema], default: [] },

    /** The sign-off under the blocks — "Ready to plan your Kerala holiday?" */
    closingTitle: { type: String, trim: true, default: "" },
    closingText: { type: String, default: "" },

    /* The original fixed fields. Still rendered for a destination with no
       blocks, and still editable, so nothing that predates the blocks has to
       be rewritten to keep working. */
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
