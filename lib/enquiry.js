import { BUDGET_RANGES } from "./site";

/**
 * One place that turns a stored Enquiry into readable text.
 *
 * Both channels use it, so the WhatsApp message and the e-mail body can never
 * drift apart, and the admin dashboard can render the same summary. It runs on
 * the server, which is what keeps the client from having to duplicate any of
 * this formatting.
 */

const BUDGET_LABEL = Object.fromEntries(BUDGET_RANGES.map((b) => [b.value, b.label]));

function formatDay(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/** Ordered label/value pairs — the shape both the e-mail table and the
 *  WhatsApp message are built from. */
export function enquiryFields(enquiry) {
  const fields = [
    ["Name", enquiry.name],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
  ];

  if (enquiry.packageTitle) fields.push(["Package", enquiry.packageTitle]);

  if (enquiry.enquiryType === "tours") {
    fields.push([
      "Enquiry",
      enquiry.tourType === "fixed"
        ? "Tours - fixed departure"
        : "Tours - customized",
    ]);
    if (enquiry.destinationName) fields.push(["Destination", enquiry.destinationName]);

    const from = formatDay(enquiry.travelDates?.from);
    const to = formatDay(enquiry.travelDates?.to);
    if (from || to) fields.push(["Travel dates", `${from || "flexible"} → ${to || "flexible"}`]);

    const adults = Number(enquiry.adults) || 0;
    const children = Number(enquiry.children) || 0;
    if (adults || children) {
      fields.push([
        "Travellers",
        [
          adults ? `${adults} adult${adults === 1 ? "" : "s"}` : null,
          children ? `${children} child${children === 1 ? "" : "ren"}` : null,
        ]
          .filter(Boolean)
          .join(", "),
      ]);
    }

    if (enquiry.budgetRange) {
      fields.push(["Budget", BUDGET_LABEL[enquiry.budgetRange] || enquiry.budgetRange]);
    }
  } else {
    fields.push(["Enquiry", "Other services"]);
    if (enquiry.serviceType) fields.push(["Service", enquiry.serviceType]);
  }

  return fields.filter(([, value]) => value !== undefined && value !== null && value !== "");
}

/** Plain-text summary, used for the WhatsApp message body. */
export function enquiryToText(enquiry, { heading = "New enquiry from alishatravels.in" } = {}) {
  const lines = [heading, ""];

  for (const [label, value] of enquiryFields(enquiry)) {
    lines.push(`${label}: ${value}`);
  }

  if (enquiry.message) {
    lines.push("", enquiry.message);
  }
  if (enquiry.source) {
    lines.push("", `(sent from ${enquiry.source})`);
  }

  return lines.join("\n");
}

/**
 * The message the *visitor* arrives in WhatsApp with. Written in their voice,
 * not ours — they are the one sending it.
 */
export function enquiryToWhatsAppText(enquiry) {
  const opener = enquiry.packageTitle
    ? `I'd like to enquire about the "${enquiry.packageTitle}" package.`
    : enquiry.destinationName
      ? `I'd like to plan a trip to ${enquiry.destinationName}.`
      : enquiry.serviceType
        ? `I'd like to enquire about ${enquiry.serviceType}.`
        : "I'd like to plan a trip.";

  const lines = ["Hi Alisha Tours & Travels,", "", opener, ""];

  for (const [label, value] of enquiryFields(enquiry)) {
    // The opener already names the package/destination/service.
    if (["Package", "Destination", "Service"].includes(label)) continue;
    lines.push(`${label}: ${value}`);
  }

  if (enquiry.message) lines.push("", enquiry.message);

  return lines.join("\n");
}
