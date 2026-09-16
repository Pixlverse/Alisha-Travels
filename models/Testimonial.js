import mongoose from "mongoose";
import { imageSchema, registerModel } from "./_shared.js";

/**
 * Manually entered by admins. There is deliberately no live Google Reviews API
 * sync in this phase — see the scope boundaries in the build brief.
 */
const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    location: { type: String, trim: true, default: "" },
    /** Free text ("Maldives 4D/3N") with an optional link to a real package. */
    tourTaken: { type: String, trim: true, default: "" },
    package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
    date: { type: Date, default: Date.now },
    rating: { type: Number, min: 1, max: 5, required: true },
    quote: { type: String, required: true, trim: true },
    photo: { type: imageSchema },

    /**
     * A video review.
     *
     * The URL is a YouTube or Vimeo watch/share link — the site turns it into
     * an embed rather than storing an iframe, so nothing an admin pastes can
     * inject markup. `videoThumbnail` is the still the homepage shows before
     * anybody presses play: without it the grid would have to load one iframe
     * per review, which is two or three hundred kilobytes each and a set of
     * third-party cookies nobody consented to.
     *
     * A testimonial with a videoUrl still works as a written review — the
     * quote is what shows if the video is removed.
     */
    videoUrl: { type: String, trim: true, default: "" },
    videoThumbnail: { type: imageSchema },
    source: {
      type: String,
      enum: ["google", "justdial", "direct"],
      default: "google",
      index: true,
    },
    featured: { type: Boolean, default: false, index: true },
    order: { type: Number, default: 100 },
    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
  },
  { timestamps: true }
);

export default registerModel("Testimonial", testimonialSchema);
