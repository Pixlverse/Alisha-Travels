import mongoose from "mongoose";
import { registerModel } from "./_shared.js";

export const PAYMENT_STATUS_VALUES = ["created", "paid", "failed"];
export const PAYMENT_PURPOSE_VALUES = ["advance", "balance", "full", "other"];

/**
 * One online payment through Razorpay, from /pay/.
 *
 * The record is written when the Razorpay order is created - BEFORE the
 * traveller sees the checkout - so an abandoned or failed attempt is still on
 * file, the same rule the Enquiry model follows. It only becomes "paid" once
 * the payment is confirmed server-side: either the checkout's signature is
 * verified and the payment fetched back from Razorpay (/api/payments/verify),
 * or Razorpay's own webhook says so (/api/payments/webhook). Neither trusts
 * the browser's word that the money moved.
 *
 * Amounts are stored in PAISE, as Razorpay counts them, so no rupee figure is
 * ever rounded on its way through.
 */
const paymentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true, default: "" },
    phone: { type: String, required: true, trim: true },

    /** The booking it pays towards: a REF number, an invoice or a trip name. */
    bookingRef: { type: String, trim: true, default: "" },
    purpose: { type: String, enum: PAYMENT_PURPOSE_VALUES, default: "advance" },
    note: { type: String, trim: true, default: "" },

    amount: { type: Number, required: true, min: 100 },
    currency: { type: String, default: "INR" },

    status: { type: String, enum: PAYMENT_STATUS_VALUES, default: "created", index: true },

    razorpayOrderId: { type: String, required: true, unique: true, index: true },
    razorpayPaymentId: { type: String, trim: true, default: "" },
    /** "upi", "card", "netbanking", "wallet"... as Razorpay reports it. */
    method: { type: String, trim: true, default: "" },
    paidAt: { type: Date },
    failureReason: { type: String, trim: true, default: "" },

    /** Set once the receipt e-mails have gone, so the verify call and the
     *  webhook - which can both arrive - never send them twice. */
    emailSentAt: { type: Date },

    source: { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

paymentSchema.index({ createdAt: -1 });

export default registerModel("Payment", paymentSchema);
