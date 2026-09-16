"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "@/lib/db";
import { Enquiry } from "@/models";
import { ENQUIRY_STATUS_VALUES } from "@/models/Enquiry";
import { requireSession } from "@/lib/auth";

/**
 * Enquiry mutations.
 *
 * These are the only content changes a `staff` account may make — the brief is
 * explicit that staff view enquiries and update status, and are read-only
 * everywhere else. So these guard with requireSession(); every other action
 * file in the dashboard uses requireAdmin().
 */

export async function updateEnquiryStatus(id, status) {
  await requireSession();

  if (!ENQUIRY_STATUS_VALUES.includes(status)) {
    return { ok: false, error: "Unknown status." };
  }

  await connectToDatabase();
  const result = await Enquiry.updateOne({ _id: id }, { $set: { status } });
  if (!result.matchedCount) return { ok: false, error: "That enquiry no longer exists." };

  revalidatePath("/admin/enquiries/");
  revalidatePath(`/admin/enquiries/${id}/`);
  revalidatePath("/admin/");
  return { ok: true };
}

export async function updateEnquiryNotes(id, adminNotes) {
  await requireSession();

  await connectToDatabase();
  const result = await Enquiry.updateOne(
    { _id: id },
    { $set: { adminNotes: String(adminNotes || "").slice(0, 8000) } }
  );
  if (!result.matchedCount) return { ok: false, error: "That enquiry no longer exists." };

  revalidatePath(`/admin/enquiries/${id}/`);
  return { ok: true };
}

/**
 * Deleting a lead is admin-only and genuinely destructive — there is no
 * recycle bin. Staff cannot reach it.
 */
export async function deleteEnquiry(id) {
  const { role } = await requireSession();
  if (role !== "admin") return { ok: false, error: "Only an admin can delete an enquiry." };

  await connectToDatabase();
  await Enquiry.deleteOne({ _id: id });

  revalidatePath("/admin/enquiries/");
  revalidatePath("/admin/");
  return { ok: true };
}
