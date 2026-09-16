import mongoose from "mongoose";
import { registerModel } from "./_shared.js";

/**
 * Dashboard accounts. There is no public signup — accounts are created by the
 * seed script or by an existing `admin` from inside the dashboard.
 *
 * Roles:
 *   admin — full CRUD on all content, plus user management
 *   staff — may view enquiries and change their status; read-only everywhere
 *           else, and cannot delete content or manage users
 */
const adminUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    /** bcrypt hash. Never select this by default. */
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ["admin", "staff"], default: "staff", index: true },
    active: { type: Boolean, default: true },
    lastLoginAt: { type: Date },
  },
  { timestamps: true }
);

export default registerModel("AdminUser", adminUserSchema);
