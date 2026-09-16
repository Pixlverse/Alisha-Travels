import "server-only";

import { connectToDatabase } from "../db";
import { Enquiry } from "@/models";
import { ENQUIRY_STATUS_VALUES } from "@/models/Enquiry";
import { plain } from "./_helpers";

/**
 * Admin-side enquiry queries.
 *
 * Separate from lib/data/content.js because nothing here may ever be reached
 * from a public page — these read personal data (names, phone numbers,
 * e-mail addresses) belonging to people who filled in a form.
 */

export { ENQUIRY_STATUS_VALUES };

export const ENQUIRY_STATUS_LABELS = {
  new: "New",
  contacted: "Contacted",
  quoted: "Quoted",
  confirmed: "Confirmed",
  lost: "Lost",
};

function buildQuery({ status, channel, search, from, to } = {}) {
  const query = {};

  if (status && ENQUIRY_STATUS_VALUES.includes(status)) query.status = status;
  if (channel === "whatsapp" || channel === "email") query.channel = channel;

  if (search) {
    // Escaped so a stray "(" in the search box cannot throw a regex error.
    const safe = String(search).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const rx = new RegExp(safe, "i");
    query.$or = [
      { name: rx },
      { email: rx },
      { phone: rx },
      { destinationName: rx },
      { packageTitle: rx },
      { serviceType: rx },
    ];
  }

  if (from || to) {
    query.createdAt = {};
    if (from) query.createdAt.$gte = new Date(`${from}T00:00:00.000Z`);
    // Inclusive of the whole `to` day.
    if (to) query.createdAt.$lte = new Date(`${to}T23:59:59.999Z`);
  }

  return query;
}

export async function getEnquiries(filters = {}, { page = 1, perPage = 25 } = {}) {
  await connectToDatabase();
  const query = buildQuery(filters);

  const [rows, total] = await Promise.all([
    Enquiry.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean(),
    Enquiry.countDocuments(query),
  ]);

  return {
    enquiries: plain(rows),
    total,
    page,
    perPage,
    pages: Math.max(1, Math.ceil(total / perPage)),
  };
}

/** Every match, unpaged — used only by the CSV export. */
export async function getAllEnquiriesForExport(filters = {}) {
  await connectToDatabase();
  const rows = await Enquiry.find(buildQuery(filters)).sort({ createdAt: -1 }).lean();
  return plain(rows);
}

export async function getEnquiryById(id) {
  await connectToDatabase();
  const doc = await Enquiry.findById(id).lean().catch(() => null);
  return doc ? plain(doc) : null;
}

/** Counts per status, for the dashboard tiles and the filter chips. */
export async function getEnquiryCounts() {
  await connectToDatabase();
  const rows = await Enquiry.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]);

  const counts = Object.fromEntries(ENQUIRY_STATUS_VALUES.map((status) => [status, 0]));
  let total = 0;
  for (const row of rows) {
    if (row._id in counts) counts[row._id] = row.count;
    total += row.count;
  }
  return { ...counts, total };
}
