import mongoose from "mongoose";
import { registerModel } from "./_shared.js";

/**
 * A dated departure of a Package. Kept as its own collection so a single
 * package (e.g. "Ladakh 6D/5N") can run on many dates at different prices.
 *
 * IMPORTANT — expired departures are NEVER deleted or hidden.
 * The legacy site's worst symptom was advertising tours that had departed 15
 * months earlier, but the fix is not to drop them: an empty calendar reads as
 * a dead business too. Past departures stay in the collection and are rendered
 * greyed out with a "Departed" badge, behind a "show past departures" toggle,
 * so the calendar shows a real operating history. See app/fixed-departures/.
 */
const departureSchema = new mongoose.Schema(
  {
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
      index: true,
    },
    departureDate: { type: Date, required: true, index: true },
    returnDate: { type: Date },

    /** Overrides the package's priceFrom for this specific date. */
    price: { type: Number, min: 0 },

    seatsTotal: { type: Number, min: 0, default: 0 },
    seatsRemaining: { type: Number, min: 0, default: 0 },

    /** Optional, e.g. "Kochi" — group tours often depart from a named city. */
    boardingCity: { type: String, trim: true, default: "" },

    notes: { type: String, trim: true, default: "" },
    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/**
 * Availability is derived, never stored — a stored status would go stale the
 * moment nobody logged into the admin for a week, which is exactly how the
 * legacy site rotted.
 */
departureSchema.virtual("availability").get(function () {
  if (this.departureDate && this.departureDate.getTime() < Date.now()) return "expired";
  if (this.seatsTotal > 0 && this.seatsRemaining <= 0) return "sold-out";
  return "upcoming";
});

departureSchema.index({ departureDate: 1, status: 1 });

export default registerModel("Departure", departureSchema);

/** Same rule as the virtual, usable on plain objects from `.lean()` queries. */
export function departureAvailability(departure, now = Date.now()) {
  if (!departure) return "upcoming";
  const date = new Date(departure.departureDate).getTime();
  if (date < now) return "expired";
  if ((departure.seatsTotal ?? 0) > 0 && (departure.seatsRemaining ?? 0) <= 0) return "sold-out";
  return "upcoming";
}
