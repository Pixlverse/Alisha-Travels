import mongoose from "mongoose";
import { registerModel, slugify } from "./_shared.js";

const phoneSchema = new mongoose.Schema(
  {
    /** e.g. "Sales Manager", "Operations Manager", "Landline". */
    label: { type: String, required: true, trim: true },
    /**
     * Stored fully qualified and space-free (+919562921818) because it is used
     * directly as a `tel:` href. The legacy site shipped unencoded spaces.
     */
    number: { type: String, required: true, trim: true },
    /** Human-readable form for display, e.g. "+91 95629 21818". */
    display: { type: String, trim: true, default: "" },
    whatsapp: { type: Boolean, default: false },
  },
  { _id: false }
);

const officeSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },
    isHeadOffice: { type: Boolean, default: false },
    address: { type: String, required: true, trim: true },
    locality: { type: String, trim: true, default: "" },
    region: { type: String, trim: true, default: "Kerala" },
    postalCode: { type: String, trim: true, default: "" },
    country: { type: String, trim: true, default: "IN" },
    geo: { lat: Number, lng: Number },

    phones: { type: [phoneSchema], default: [] },
    email: { type: String, trim: true, lowercase: true },

    /** src for the <iframe> embed. */
    mapEmbedUrl: { type: String, trim: true, default: "" },
    /** A real https:// Google Maps link — the legacy "View On Google Map"
     *  anchor pointed at "#". */
    mapLink: { type: String, trim: true, default: "" },

    hours: { type: String, trim: true, default: "Mon–Sat, 9:30 am – 6:30 pm" },
    order: { type: Number, default: 100 },
    status: { type: String, enum: ["active", "draft"], default: "active" },
  },
  { timestamps: true }
);

officeSchema.pre("validate", function (next) {
  if (!this.slug && this.name) this.slug = slugify(this.name);
  next();
});

export default registerModel("Office", officeSchema);
