"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { AdminUser } from "@/models";
import { hashPassword } from "@/lib/password";

/**
 * Team account management. Admin-only throughout.
 *
 * Three safety rules, all enforced server-side because the UI is not a
 * boundary:
 *   - You cannot deactivate or demote yourself. Locking the last admin out of
 *     their own dashboard is a support call nobody wants to make.
 *   - You cannot remove the last active admin, by deletion or by demotion.
 *   - You cannot delete your own account.
 */

const MIN_PASSWORD = 10;

async function countOtherActiveAdmins(excludeId) {
  return AdminUser.countDocuments({
    _id: { $ne: excludeId },
    role: "admin",
    active: true,
  });
}

export async function createUser(_previousState, formData) {
  await requireAdmin();

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const role = formData.get("role") === "admin" ? "admin" : "staff";

  if (!name || !email) return { error: "Name and e-mail are both required." };
  if (password.length < MIN_PASSWORD) {
    return { error: `Choose a password of at least ${MIN_PASSWORD} characters.` };
  }

  await connectToDatabase();
  if (await AdminUser.findOne({ email })) {
    return { error: "An account already uses that e-mail address." };
  }

  await AdminUser.create({
    name,
    email,
    passwordHash: await hashPassword(password),
    role,
    active: true,
  });

  revalidatePath("/admin/users/");
  return { success: `${name} can now sign in.` };
}

export async function setUserRole(id, role) {
  const session = await requireAdmin();
  if (String(id) === String(session.id)) {
    return { ok: false, error: "You cannot change your own role." };
  }
  if (!["admin", "staff"].includes(role)) return { ok: false, error: "Unknown role." };

  await connectToDatabase();
  if (role === "staff" && !(await countOtherActiveAdmins(id))) {
    return { ok: false, error: "That is the last active admin — promote someone else first." };
  }

  await AdminUser.updateOne({ _id: id }, { $set: { role } });
  revalidatePath("/admin/users/");
  return { ok: true };
}

export async function setUserActive(id, active) {
  const session = await requireAdmin();
  if (String(id) === String(session.id)) {
    return { ok: false, error: "You cannot deactivate your own account." };
  }

  await connectToDatabase();
  if (!active && !(await countOtherActiveAdmins(id))) {
    return { ok: false, error: "That is the last active admin — promote someone else first." };
  }

  await AdminUser.updateOne({ _id: id }, { $set: { active: Boolean(active) } });
  revalidatePath("/admin/users/");
  return { ok: true };
}

export async function resetUserPassword(id, password) {
  await requireAdmin();

  if (String(password || "").length < MIN_PASSWORD) {
    return { ok: false, error: `Choose a password of at least ${MIN_PASSWORD} characters.` };
  }

  await connectToDatabase();
  await AdminUser.updateOne({ _id: id }, { $set: { passwordHash: await hashPassword(password) } });
  revalidatePath("/admin/users/");
  return { ok: true };
}

export async function deleteUser(id) {
  const session = await requireAdmin();
  if (String(id) === String(session.id)) {
    return { ok: false, error: "You cannot delete your own account." };
  }

  await connectToDatabase();
  if (!(await countOtherActiveAdmins(id))) {
    return { ok: false, error: "That is the last active admin — promote someone else first." };
  }

  await AdminUser.deleteOne({ _id: id });
  revalidatePath("/admin/users/");
  return { ok: true };
}
