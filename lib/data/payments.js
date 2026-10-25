import "server-only";

import { connectToDatabase } from "../db";
import { Payment } from "@/models";
import { PAYMENT_STATUS_VALUES } from "@/models/Payment";
import { plain } from "./_helpers";

/**
 * Admin-side payment queries. Like lib/data/enquiries.js, never reachable
 * from a public page: these are people's names, numbers and payments.
 */

export const PAYMENT_STATUS_LABELS = { paid: "Paid", created: "Not completed", failed: "Failed" };

export async function getPayments({ status, search } = {}, { page = 1, perPage = 25 } = {}) {
  await connectToDatabase();

  const query = {};
  if (PAYMENT_STATUS_VALUES.includes(status)) query.status = status;
  if (search) {
    const rx = new RegExp(String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    query.$or = [
      { name: rx },
      { phone: rx },
      { email: rx },
      { bookingRef: rx },
      { razorpayPaymentId: rx },
      { razorpayOrderId: rx },
    ];
  }

  const [docs, total, paidTotals] = await Promise.all([
    Payment.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean(),
    Payment.countDocuments(query),
    Payment.aggregate([
      { $match: { status: "paid" } },
      { $group: { _id: null, amount: { $sum: "$amount" }, count: { $sum: 1 } } },
    ]),
  ]);

  return {
    payments: plain(docs),
    total,
    pages: Math.max(1, Math.ceil(total / perPage)),
    paid: paidTotals[0] || { amount: 0, count: 0 },
  };
}
