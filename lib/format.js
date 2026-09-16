/**
 * Display formatting helpers.
 *
 * Everything on this site is priced in INR. The legacy site quoted USD on its
 * buried /tour/ pages and INR elsewhere, which is exactly the kind of
 * inconsistency that makes a visitor doubt a quote.
 */

const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** 42000 → "₹42,000" */
export function formatINR(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "";
  return INR.format(Number(value));
}

/**
 * Compact form for the "Starting @ ₹X" bands on cards, where the full number
 * crowds the layout. 42000 → "₹42,000", 235000 → "₹2.35 L".
 */
export function formatINRCompact(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "";
  if (n >= 100000) {
    const lakhs = n / 100000;
    const rounded = lakhs >= 10 ? Math.round(lakhs) : Math.round(lakhs * 100) / 100;
    return `₹${rounded} L`;
  }
  return INR.format(n);
}

const DAY_MONTH_YEAR = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const DAY_MONTH = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

/**
 * Departure dates are stored at UTC midnight, so they must be formatted in UTC
 * too — formatting in IST would be harmless, but a viewer in a negative-offset
 * timezone would see every departure a day early.
 */
export function formatDate(value) {
  if (!value) return "";
  return DAY_MONTH_YEAR.format(new Date(value));
}

export function formatDateShort(value) {
  if (!value) return "";
  return DAY_MONTH.format(new Date(value));
}

/** "25 Apr – 29 Apr 2025", collapsing the month when both dates share one. */
export function formatDateRange(from, to) {
  if (!from) return "";
  if (!to) return formatDate(from);
  const a = new Date(from);
  const b = new Date(to);
  const sameMonth = a.getUTCMonth() === b.getUTCMonth() && a.getUTCFullYear() === b.getUTCFullYear();
  return sameMonth
    ? `${a.getUTCDate()}–${formatDate(b)}`
    : `${formatDateShort(a)} – ${formatDate(b)}`;
}

const MONTH_YEAR = new Intl.DateTimeFormat("en-IN", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "October 2026" — the heading the departure calendar groups under. */
export function formatMonthYear(value) {
  if (!value) return "";
  return MONTH_YEAR.format(new Date(value));
}

/** "2026-10" — a stable sort/anchor key for a month group. */
export function monthKey(value) {
  const date = new Date(value);
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
}

/**
 * Groups departures into ordered month buckets for the calendar pages.
 * Input is assumed already sorted by date in the direction you want.
 */
export function groupByMonth(departures = []) {
  const groups = [];
  const index = new Map();

  for (const departure of departures) {
    const key = monthKey(departure.departureDate);
    if (!index.has(key)) {
      const group = { key, label: formatMonthYear(departure.departureDate), departures: [] };
      index.set(key, group);
      groups.push(group);
    }
    index.get(key).departures.push(departure);
  }

  return groups;
}

/** 5, 4 → "5D / 4N" */
export function durationLabel(days, nights) {
  if (!days) return "";
  return `${days}D / ${nights ?? Math.max(days - 1, 0)}N`;
}

/** Trims prose to a card-sized excerpt without cutting a word in half. */
export function excerpt(text, max = 160) {
  if (!text) return "";
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, clean.lastIndexOf(" ", max))}…`;
}
