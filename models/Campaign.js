import mongoose from "mongoose";
import { imageSchema, seoSchema, registerModel, slugify } from "./_shared.js";

/**
 * A campaign — the trips and sponsorships the agency runs that are not for
 * sale.
 *
 * The first of these (a sponsored trip for children from a school for the
 * blind in Kottayam) lived as hardcoded copy inside the homepage. That was
 * always temporary: lib/site.js carried a TODO for a Stories / Our Impact page
 * "once the client supplies campaign content", and a band the client cannot
 * edit is a band that goes stale. It is a collection now, so the homepage
 * shows the most recent one and /campaigns/ shows them all.
 *
 * `imageNote` exists because of a specific honesty problem. /gallery/ tells
 * visitors in as many words that its photography is "nothing staged, and
 * nothing from a stock library". Where a campaign's photograph is a stand-in
 * rather than a picture of the trip itself, that has to be said ON the page,
 * not in a code comment — so the caption is a field, and it renders wherever
 * the image does.
 */
const campaignSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    title: { type: String, required: true, trim: true },
    /** One line for the card and the homepage band. */
    summary: { type: String, required: true, trim: true },
    /** The full story. Plain text, blank line between paragraphs. */
    body: { type: String, default: "" },
    heroImage: { type: imageSchema, required: true },
    imageNote: { type: String, trim: true, default: "" },

    /** Free text — "Kottayam, 2025", "Every monsoon" — not a date field: the
     *  client should not have to invent a day for something that ran a week. */
    period: { type: String, trim: true, default: "" },
    location: { type: String, trim: true, default: "" },

    /** The line the campaign is meant to land on, if it has one. */
    pullQuote: { type: String, trim: true, default: "" },

    /**
     * The campaign film.
     *
     * A YouTube or Vimeo share link, parsed by lib/video.js — the same field
     * shape as a video testimonial, and for the same reason: an <iframe> is
     * never built until somebody presses play, so the thumbnail is a field
     * rather than something the page needs the embed to obtain.
     *
     * `videoThumbnail` is optional; the campaign's hero image stands in.
     */
    videoUrl: { type: String, trim: true, default: "" },
    videoThumbnail: { type: imageSchema },

    order: { type: Number, default: 100, index: true },
    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
    ...seoSchema,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

campaignSchema.virtual("href").get(function () {
  return `/campaigns/${this.slug}/`;
});

campaignSchema.pre("validate", function (next) {
  if (!this.slug && this.title) this.slug = slugify(this.title);
  next();
});

export default registerModel("Campaign", campaignSchema);
