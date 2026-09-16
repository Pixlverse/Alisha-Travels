import mongoose from "mongoose";
import { registerModel } from "./_shared.js";

export const ENQUIRY_STATUS_VALUES = ["new", "contacted", "quoted", "confirmed", "lost"];

/**
 * The site's only conversion artefact in this phase.
 *
 * Every enquiry is written here FIRST, before the visitor is handed off to
 * WhatsApp or before Resend sends the e-mail. That ordering is deliberate: it
 * means a lead exists in the dashboard even if the visitor never actually
 * sends the WhatsApp message, and staff never have to check a phone or an
 * inbox to find out that someone got in touch.
 */
const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, default: "" },
    phone: { type: String, required: true, trim: true },

    /** Which button the visitor pressed. Both paths store a record. */
    channel: { type: String, enum: ["whatsapp", "email"], required: true, index: true },

    /** "tours" | "other-services" — the top of the conditional form tree. */
    enquiryType: { type: String, enum: ["tours", "other-services"], default: "tours" },
    /** Only for enquiryType "tours". */
    tourType: { type: String, enum: ["customized", "fixed", ""], default: "" },

    serviceType: { type: String, trim: true, default: "" },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination" },
    package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
    departure: { type: mongoose.Schema.Types.ObjectId, ref: "Departure" },

    /** Denormalised labels so the admin list reads correctly even if the
     *  referenced package is later renamed or deleted. */
    destinationName: { type: String, trim: true, default: "" },
    packageTitle: { type: String, trim: true, default: "" },

    travelDates: {
      from: { type: Date },
      to: { type: Date },
    },
    adults: { type: Number, min: 0, default: 0 },
    children: { type: Number, min: 0, default: 0 },
    budgetRange: { type: String, trim: true, default: "" },

    message: { type: String, trim: true, default: "" },

    status: {
      type: String,
      enum: ENQUIRY_STATUS_VALUES,
      default: "new",
      index: true,
    },
    /** Free-text internal notes added by staff while working the lead. */
    adminNotes: { type: String, default: "" },

    /** Attribution: the page path and the CTA that produced this enquiry. */
    source: { type: String, trim: true, default: "" },
    sourceLabel: { type: String, trim: true, default: "" },
    referrer: { type: String, trim: true, default: "" },

    /** Set once the Resend call succeeds, so failures are visible in admin. */
    emailSentAt: { type: Date },
    emailError: { type: String, default: "" },
  },
  { timestamps: true }
);

enquirySchema.index({ createdAt: -1 });
enquirySchema.index({ status: 1, createdAt: -1 });

export default registerModel("Enquiry", enquirySchema);
