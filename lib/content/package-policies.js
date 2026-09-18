/**
 * ===========================================================================
 *  CLIENT-SUPPLIED COPY — TRANSCRIBED FROM THEIR TRAVEL PROPOSAL PDFs.
 * ===========================================================================
 *
 * Every package the agency quotes goes out as the same seven-page proposal:
 * cover, the offer, day by day, what's covered, your investment, getting
 * ready, the fine print. Four of those pages are per-trip and live on the
 * Package document. The rest — payment methods, booking and cancellation
 * policy, the travel guidelines and fourteen clauses of terms — are identical
 * on every proposal, so they live here.
 *
 * WHY HERE AND NOT IN THE DATABASE. A package document that carried its own
 * copy of fourteen legal clauses would mean editing twenty-seven packages to
 * fix one comma, and a package added next year would silently ship whatever
 * the boilerplate said the day it was created. These are the defaults; any
 * package that genuinely differs overrides them field by field in /admin/
 * (Payment options, Booking policy, Cancellation policy, Guidelines, Terms).
 *
 * The guidelines come in two sets because the proposals do: a domestic trip
 * asks for a photo ID, an international one for a passport, a visa and
 * currency. `guidelinesFor(region)` picks the right one.
 *
 * TRANSCRIBED VERBATIM. Do not tidy the wording — this is the text the client
 * sends clients, and the terms are a legal document. The only edits are
 * typographic: the PDF's line breaks are removed and its "▪" bullets become
 * array entries.
 */

/** Page 6 — Payment & Policies. Identical on both sample proposals. */
export const PAYMENT_OPTIONS = [
  { method: "Credit Card (EMI) / Debit Card", charges: "NIL" },
  { method: "IMPS / NEFT / RTGS", charges: "NIL" },
  { method: "UPI / Cash", charges: "NIL" },
];

export const BOOKING_POLICY =
  "50% at the time of confirmation. Remaining 50% due 30 days prior to departure.";

export const CANCELLATION_POLICY =
  "50% charge before 30 days of travel date. 100% charge within 30 days of travel date.";

/** Page 2 — the note under "Where You'll Stay". */
export const STAY_NOTE =
  "Hotel category is confirmed at time of booking; if unavailable, an alternate of equal or higher standard will be offered.";

/** Page 6 — Guidelines for Travelling, domestic proposal. */
const DOMESTIC_GUIDELINES = [
  {
    title: "Before departure",
    points: [
      "Carry a valid photo ID (Aadhaar, passport or driving licence) for airport/hotel check-in",
      "Confirm your return ticket",
      "Travel insurance is optional but recommended for medical emergencies",
      "Carry copies of ID, insurance and booking confirmations",
    ],
  },
  {
    title: "Packing essentials",
    points: [
      "Clothing suited to the destination's climate; modest layers for temples",
      "Comfortable walking shoes and sandals",
      "Personal toiletries and prescription medication",
      "Phone, charger, power bank and adapter",
      "Backpack, water bottle, sunglasses, hat, sunscreen, insect repellent",
    ],
  },
  {
    title: "At the airport",
    points: [
      "Arrive early for check-in",
      "Keep photo ID and return ticket handy for security",
      "Follow airline baggage regulations",
    ],
  },
  {
    title: "During your stay",
    points: [
      "Respect local customs and traditions",
      "Stay hydrated and be cautious with food and water",
      "Keep belongings secure at all times",
      "Hotel and café Wi-Fi are the most reliable way to stay connected",
    ],
  },
];

/** Page 6 — Guidelines for Travelling, international proposal. */
const INTERNATIONAL_GUIDELINES = [
  {
    title: "Before departure",
    points: [
      "Passport valid at least 6 months beyond the trip",
      "Confirm your return ticket",
      "Travel insurance covering medical emergencies",
      "Exchange INR for international currency, or carry a travel card",
      "Carry copies of passport, visa, insurance and bookings",
    ],
  },
  {
    title: "Packing essentials",
    points: [
      "Lightweight clothing, modest for temple visits",
      "Comfortable walking shoes and sandals",
      "Personal toiletries and prescription medication",
      "Phone, charger, power bank and adapter",
      "Backpack, water bottle, sunglasses, hat, sunscreen, insect repellent",
    ],
  },
  {
    title: "At the airport",
    points: [
      "Arrive early for check-in",
      "Keep passport, visa and return ticket handy for immigration",
      "Follow customs regulations",
    ],
  },
  {
    title: "During your stay",
    points: [
      "Respect local customs and traditions",
      "Stay hydrated and be cautious with food",
      "Keep belongings secure at all times",
      "Hotel and café Wi-Fi are the most reliable way to stay connected",
    ],
  },
];

/**
 * The right guideline set for a package, by its destination's region.
 * Anything that is not explicitly international gets the domestic set, which
 * is the safer default: it asks for a photo ID rather than assuming a visa.
 */
export function guidelinesFor(region) {
  return region === "international" ? INTERNATIONAL_GUIDELINES : DOMESTIC_GUIDELINES;
}

/** Page 7 — The Fine Print. Fourteen clauses, verbatim. */
export const PACKAGE_TERMS = [
  {
    title: "Introduction",
    body: "Welcome to Alisha Tours and Travels. By booking any travel services or products from us, you agree to adhere to the terms and conditions outlined below. These terms apply to all customers, so please read them carefully before making any bookings.",
  },
  {
    title: "Booking and Payment",
    body: "A booking is confirmed only upon receipt of the full payment or an agreed-upon deposit; you will receive a confirmation email or message detailing your travel itinerary and payment receipt. We accept payment via bank transfer, credit/debit card, UPI, and other approved methods. Full payment must be made prior to departure as per the terms stated in your invoice. Delayed payments may result in cancellation of your booking or additional charges.",
  },
  {
    title: "Cancellations and Refunds",
    body: "Cancellation requests must be submitted to us in writing. Charges apply on a sliding scale: 50% of total cost 30 days or more before departure, 75% between 15–29 days before departure, and 100% within 15 days of departure. Where we must cancel a booking, you will be offered an alternative arrangement or a full refund. Refunds, where applicable, are processed within 15–30 days of the cancellation request; certain trip components may be non-refundable.",
  },
  {
    title: "Amendments",
    body: "Requests for changes to a booking must be made in writing; we will endeavour to accommodate them but cannot guarantee they will be possible. We reserve the right to make changes to the itinerary, accommodation, or other services due to unforeseen circumstances, and will notify you of any significant changes as soon as possible.",
  },
  {
    title: "Travel Documents and Visas",
    body: "It is your responsibility to ensure valid travel documents — including a passport valid more than 6 months after tour completion — visas, and any other necessary permits. We can assist with visa services, but final responsibility rests with the customer. We are not responsible for issues arising from incorrect documentation or failure to comply with immigration requirements.",
  },
  {
    title: "Travel Insurance",
    body: "We strongly recommend comprehensive travel insurance covering trip cancellations, medical emergencies, lost baggage and other travel-related risks. We are not responsible for financial loss, medical expenses or other damages not covered by your policy.",
  },
  {
    title: "Limitation of Liability",
    body: "We act as an intermediary between you and service providers such as airlines, hotels and transport companies, and are not liable for their acts, errors, omissions or failures. We are also not liable for delays, cancellations or damages arising from events beyond our control, including natural disasters, strikes or other force majeure events.",
  },
  {
    title: "Health and Safety",
    body: "It is your responsibility to ensure you are medically fit to travel; please consult a doctor beforehand if you have health concerns. We strive to ensure your safety throughout the journey but cannot guarantee it against all risks — please follow all safety instructions from our representatives and service providers.",
  },
  {
    title: "Conduct",
    body: "We expect all customers to behave respectfully and responsibly throughout the trip. Behaviour deemed inappropriate by our staff or service providers may result in termination of travel arrangements without refund. You must comply with local laws and customs; any resulting legal issues are your sole responsibility.",
  },
  {
    title: "Complaints and Dispute Resolution",
    body: "Complaints should be reported to our representatives immediately during the trip so we can attempt to resolve them. If unresolved, a written complaint must be submitted within 14 days of your return. Disputes arising from your booking will be resolved through arbitration, whose decision will be final and binding.",
  },
  {
    title: "Privacy Policy",
    body: "We respect your privacy and are committed to protecting your personal data. Please refer to our Privacy Policy for details on how we collect, use and protect your information.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of Kerala, India. Any legal action arising from them will be subject to the jurisdiction of the courts in Kottayam, Kerala.",
  },
  {
    title: "Changes to Terms and Conditions",
    body: "We reserve the right to amend these terms and conditions at any time without prior notice. Revised terms apply to all bookings made after the date of amendment.",
  },
  {
    title: "Acceptance of Terms",
    body: "By booking with Alisha Tours and Travels, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.",
  },
];
