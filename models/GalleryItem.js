import mongoose from "mongoose";
import { mediaSchema, registerModel } from "./_shared.js";

/**
 * One consolidated gallery. The legacy site ran two competing systems (the
 * "Memory Book" page and a portfolio custom post type) with a duplicated image
 * across them; /gallery/ replaces both and /portfolio/* 301s here.
 *
 * An item is a photograph or a video. The field is still called `image` so
 * documents written before video support keep loading unchanged.
 *
 * Categories are kept for organising items in the dashboard; the public page
 * no longer renders filter tabs.
 */
export const GALLERY_CATEGORIES = ["ads", "memories", "office", "tours", "events"];

const galleryItemSchema = new mongoose.Schema(
  {
    image: { type: mediaSchema, required: true },
    caption: { type: String, trim: true, default: "" },
    category: {
      type: String,
      enum: GALLERY_CATEGORIES,
      default: "memories",
      index: true,
    },
    takenAt: { type: Date },
    order: { type: Number, default: 100, index: true },
    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
  },
  { timestamps: true }
);

export default registerModel("GalleryItem", galleryItemSchema);
