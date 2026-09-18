import mongoose from "mongoose";
import { imageSchema, faqSchema, seoSchema, registerModel, slugify } from "./_shared.js";

/*
  "corporate" is LEGACY. The client removed Corporate & MICE as a package
  category — a corporate movement is quoted from scratch, so it is the MICE
  service rather than a shelf of packages — and lib/site.js no longer lists it,
  which takes it out of the menu, the filters, the category chip and the
  dashboard's own category select.

  The value stays in this enum on purpose: documents created while the category
  existed would otherwise fail validation the next time somebody saved them,
  including for an edit to an unrelated field. Nothing offers it any more, so
  no new document can arrive with it.
*/
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

/**
 * One row of "Where You'll Stay" — page 2 of the client's proposal. A trip can
 * run through several towns, so this is a list, not a single hotel field.
 */
const staySchema = new mongoose.Schema(
  {
    destination: { type: String, required: true, trim: true },
    hotel: { type: String, required: true, trim: true },
    nights: { type: Number, min: 0 },
    meals: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

/**
 * One row of "Your Investment" — page 5. The proposals quote per adult, and
 * sometimes the party total beside it ("PARTY OF 3 · INR 35,400"), so the
 * label is free text and the amount is a number the site formats as INR.
 */
const priceRowSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

/** One row of the payment table — page 6. */
const paymentOptionSchema = new mongoose.Schema(
  {
    method: { type: String, required: true, trim: true },
    charges: { type: String, trim: true, default: "NIL" },
  },
  { _id: false }
);

/** One group of "Guidelines for Travelling" — page 6. */
const guidelineGroupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    points: { type: [String], default: [] },
  },
  { _id: false }
);

/** One numbered clause of "The Fine Print" — page 7. */
const termSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true, trim: true },
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

    /* ----------------------------------------------------------------------
       THE PROPOSAL FIELDS

       Every package the agency quotes goes out as the same seven-page travel
       proposal, and the website was showing about half of it. These are the
       rest, named after the sections they come from, so a page and a PDF for
       the same trip say the same things in the same order.

       All of them are OPTIONAL. The site renders a section only when its data
       is there, so the packages that predate this (and any the client adds in
       a hurry) still produce a complete, coherent page. The boilerplate ones —
       payments, policies, guidelines, terms — fall back to
       lib/content/package-policies.js when left empty, which is how one comma
       gets fixed in one place instead of twenty-seven.
       ---------------------------------------------------------------------- */

    /** "REF 004645" on every page of the proposal. */
    referenceNo: { type: String, trim: true, default: "" },
    /** "Aug 2026" — the window the quote is built for, not a departure date. */
    travelWindow: { type: String, trim: true, default: "" },
    /** "3 adults", "4A", "2 adults + 1 child" — free text, as the PDFs have it. */
    travellers: { type: String, trim: true, default: "" },
    rooms: { type: Number, min: 0 },

    /** Page 2 — Where You'll Stay, and the note under it. */
    stays: { type: [staySchema], default: [] },
    stayNote: { type: String, trim: true, default: "" },

    /** Page 5 — Your Investment. */
    priceRows: { type: [priceRowSchema], default: [] },

    /** Page 6 — Payment & Policies. Empty means the standard terms. */
    paymentOptions: { type: [paymentOptionSchema], default: [] },
    bookingPolicy: { type: String, trim: true, default: "" },
    cancellationPolicy: { type: String, trim: true, default: "" },

    /** Page 6 — Guidelines for Travelling. Empty means the standard set for
     *  the destination's region. */
    guidelines: { type: [guidelineGroupSchema], default: [] },

    /** Page 7 — The Fine Print. Empty means the standard fourteen clauses. */
    terms: { type: [termSchema], default: [] },

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
