import "server-only";

import { Payment } from "@/models";
import { sendPaymentNotification, sendPaymentReceipt } from "./email";

/**
 * Marks a payment paid from Razorpay's own payment record, and sends the
 * receipts once. Shared by /api/payments/verify (the checkout's callback) and
 * /api/payments/webhook (Razorpay's server-to-server notice), which can both
 * arrive for the same payment and in either order - so every step here is
 * idempotent.
 *
 * Returns the updated Payment, or null when the amount Razorpay reports does
 * not match the order (which would mean somebody tampered with it).
 */
export async function recordSuccessfulPayment(orderId, rzpPayment) {
  const existing = await Payment.findOne({ razorpayOrderId: orderId });
  if (!existing) return null;
  if (Number(rzpPayment.amount) !== existing.amount) {
    console.error("[payments] amount mismatch on", orderId, rzpPayment.amount, existing.amount);
    return null;
  }

  const payment = await Payment.findOneAndUpdate(
    { _id: existing._id },
    {
      $set: {
        status: "paid",
        razorpayPaymentId: rzpPayment.id,
        method: rzpPayment.method || "",
        paidAt: existing.paidAt || new Date((rzpPayment.created_at || Date.now() / 1000) * 1000),
        failureReason: "",
      },
    },
    { returnDocument: "after" }
  );

  // Claim the e-mails atomically: only the first caller gets a document back.
  const claimed = await Payment.findOneAndUpdate(
    { _id: payment._id, emailSentAt: { $exists: false } },
    { $set: { emailSentAt: new Date() } },
    { returnDocument: "after" }
  );
  if (claimed) {
    const plain = claimed.toObject();
    const notified = await sendPaymentNotification(plain);
    if (!notified.sent) console.error("[payments] notification e-mail failed:", notified.error);
    sendPaymentReceipt(plain).catch(() => {});
  }

  return payment;
}

/** A failed attempt never overwrites a payment that has already succeeded. */
export async function recordFailedPayment(orderId, reason) {
  await Payment.updateOne(
    { razorpayOrderId: orderId, status: { $ne: "paid" } },
    { $set: { status: "failed", failureReason: String(reason || "").slice(0, 300) } }
  );
}
