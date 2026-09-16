/**
 * Single source of truth for everything about the business that appears in
 * more than one place: contact numbers, addresses, the WhatsApp number, the
 * navigation tree and the brand tagline.
 *
 * RULE: never hardcode a phone number, e-mail address or WhatsApp link inside
 * a component. Import it from here. Changing the WhatsApp number should be a
 * one-line edit (or a single environment variable) that updates the sticky
 * mobile bar, every package page, the contact page and the footer at once.
 */

/** Digits only, country code included, no `+` — this is the wa.me format. */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919562921818";

export const SITE = {
  name: "Alisha Tours & Travels",
  shortName: "Alisha Travels",
  tagline: "Every travel is a blessing",
  founded: 2013,
  founder: "Ramzi Mohammed Ali",
  legalName: "Alisha Tours & Travels",
  description:
    "IATA-accredited travel agency in Kerala. Customized tour packages, fixed departures, MICE and corporate travel, air tickets, hotels and certificate attestation.",
  // Set NEXT_PUBLIC_SITE_URL in the environment; this default only matters for
  // local development and for absolute URLs in structured data / sitemaps.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alishatravels.in",
  rating: { value: 4.8, count: 532, justDial: 4.9 },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "GTM-NF9ST9W5",
};

/**
 * The number a "Call" button dials. `tel:` values are stored fully qualified
 * and space-free — the legacy site shipped `tel:+91 9562921818`, which several
 * mobile browsers refused to dial.
 */
export const PRIMARY_PHONE = {
  label: "Sales",
  tel: "+919562921818",
  display: "+91 95629 21818",
};

export const SECONDARY_PHONE = {
  label: "Customized tours",
  tel: "+919562311818",
  display: "+91 95623 11818",
};

/**
 * Builds the href for a `tel:` link.
 *
 * The constants above are already space-free, but two sources are not: office
 * phone numbers are edited by admins in the dashboard, and enquiry phone
 * numbers are typed by visitors. Both end up in `tel:` hrefs, and a raw
 * "+91 95629 21818" is exactly the legacy bug this site was rebuilt to fix —
 * several mobile browsers refuse to dial a tel: URI containing spaces, and the
 * site brief calls it out explicitly.
 *
 * Strips everything a dialler cannot use, keeping a leading "+" and the digits.
 * Returns null for input with no digits at all, so callers can render plain
 * text instead of a dead link.
 */
export function telHref(value) {
  if (!value) return null;
  const raw = String(value).trim();
  const digits = raw.replace(/[^\d]/g, "");
  if (!digits) return null;
  return `tel:${raw.startsWith("+") ? "+" : ""}${digits}`;
}

export const EMAILS = {
  // The legacy /tour/ pages advertised info@alishatravels.com — the wrong TLD.
  // Everything on this site uses .in.
  primary: "info@alishatravels.in",
  sales: "sm@alishatravels.in",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/alishatoursandtravels",
  instagram: "https://www.instagram.com/alishatoursandtravels",
};

/**
 * Office data is also seeded into the Office collection so admins can edit it,
 * but these constants are the fallback used for structured data and the footer
 * when the database is unreachable.
 *
 * ONE office. The business ran a Poonthura, Trivandrum branch when this site
 * was built and it is now closed — the client confirmed a single Ettumanoor
 * office. It is still an array, and every consumer still maps over it, because
 * the footer, the contact page and the LocalBusiness nodes should not need
 * rewriting if a second office ever opens. The one place that had to change
 * shape is the footer grid, which was sized for four cells.
 */
export const OFFICES = [
  {
    slug: "kottayam",
    name: "Kottayam Office",
    address:
      "1st & 2nd Floor, SBI Building, Ettumanoor, Kottayam 686631, Kerala, India",
    locality: "Ettumanoor, Kottayam",
    region: "Kerala",
    postalCode: "686631",
    email: EMAILS.primary,
    geo: { lat: 9.6699, lng: 76.5581 },
  },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Signed off by the client's SEO consultant — the order and the URLs are fixed.
 * Two rules from that document are load-bearing:
 *   1. Every top-level item is a real page, not just a dropdown trigger.
 *   2. Destinations are ordered by demand, not alphabetically.
 *
 * Campaigns sits between About and Contact, which is where the original
 * navigation note asked for a Stories / Our Impact page. It is a real page with
 * a real collection behind it — /campaigns/ — rather than a dropdown trigger.
 */
export const NAV = [
  {
    label: "Destinations",
    href: "/destinations/",
    columns: [
      {
        label: "International",
        href: "/destinations/international/",
        items: [
          { label: "Dubai", href: "/destinations/international/dubai/" },
          { label: "Singapore", href: "/destinations/international/singapore/" },
          { label: "Thailand", href: "/destinations/international/thailand/" },
          { label: "Maldives", href: "/destinations/international/maldives/" },
          { label: "Malaysia", href: "/destinations/international/malaysia/" },
          { label: "Bali", href: "/destinations/international/bali/" },
          { label: "Vietnam", href: "/destinations/international/vietnam/" },
          { label: "Azerbaijan", href: "/destinations/international/azerbaijan/" },
          { label: "Europe", href: "/destinations/international/europe/" },
          { label: "Bhutan", href: "/destinations/international/bhutan/" },
          { label: "Nepal", href: "/destinations/international/nepal/" },
        ],
      },
      {
        label: "Domestic",
        href: "/destinations/domestic/",
        items: [
          { label: "Kerala", href: "/destinations/domestic/kerala/" },
          { label: "Kashmir & Srinagar", href: "/destinations/domestic/kashmir-srinagar/" },
          { label: "Ladakh", href: "/destinations/domestic/ladakh/" },
          { label: "Andaman", href: "/destinations/domestic/andaman/" },
          { label: "Goa", href: "/destinations/domestic/goa/" },
          { label: "Rajasthan", href: "/destinations/domestic/rajasthan/" },
          { label: "Darjeeling", href: "/destinations/domestic/darjeeling/" },
          { label: "Hyderabad", href: "/destinations/domestic/hyderabad/" },
        ],
      },
    ],
  },
  {
    label: "Packages",
    href: "/packages/",
    columns: [
      {
        label: "By occasion",
        href: "/packages/",
        items: [
          { label: "Honeymoon Packages", href: "/packages/honeymoon/" },
          { label: "Family Packages", href: "/packages/family/" },
          { label: "Group Tours", href: "/packages/group-tours/" },
          { label: "Corporate & MICE", href: "/packages/corporate/" },
        ],
      },
    ],
  },
  {
    label: "Fixed Departures",
    href: "/fixed-departures/",
    columns: [
      {
        label: "Calendars",
        href: "/fixed-departures/",
        items: [
          { label: "Upcoming Departures", href: "/fixed-departures/" },
          { label: "International Calendar", href: "/fixed-departures/international/" },
          { label: "Domestic Calendar", href: "/fixed-departures/domestic/" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services/",
    columns: [
      {
        label: "What we do",
        href: "/services/",
        items: [
          { label: "Air ticket booking", href: "/services/air-ticket-booking/" },
          { label: "Hotel booking", href: "/services/hotel-booking/" },
          { label: "Travel insurance", href: "/services/travel-insurance/" },
          { label: "Customized tour packages", href: "/services/customized-tour-packages/" },
          { label: "MICE & corporate travel", href: "/services/mice-corporate-travel/" },
          { label: "Educational tours", href: "/services/educational-tours/" },
          { label: "Adventure tours", href: "/services/adventure-tours/" },
          // Per the nav spec this is not a separate content page — it points
          // straight at the Fixed Departures section.
          { label: "Fixed departure tours", href: "/fixed-departures/" },
          { label: "Certificate attestation", href: "/services/certificate-attestation/" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about/",
    columns: [
      {
        label: "The company",
        href: "/about/",
        items: [
          { label: "About Alisha", href: "/about/" },
          { label: "Our Founder", href: "/about/ramzi-mohammed-ali/" },
          { label: "Customer Reviews", href: "/reviews/" },
          { label: "Gallery", href: "/gallery/" },
        ],
      },
    ],
  },
  { label: "Campaigns", href: "/campaigns/", columns: null },
  { label: "Contact", href: "/contact/", columns: null },
];

/** Package category slugs → display labels, used by nav, filters and admin. */
export const PACKAGE_CATEGORIES = [
  { slug: "honeymoon", label: "Honeymoon", href: "/packages/honeymoon/" },
  { slug: "family", label: "Family", href: "/packages/family/" },
  { slug: "group-tours", label: "Group Tours", href: "/packages/group-tours/" },
  { slug: "corporate", label: "Corporate & MICE", href: "/packages/corporate/" },
  { slug: "customized", label: "Customized", href: "/packages/" },
];

/**
 * Filter vocabulary shared by the hero search card and the packages index, so
 * a deep link built by one is always understood by the other. Values are the
 * query-string form: "25000-50000" means minPrice=25000&maxPrice=50000, and an
 * open-ended range leaves one side empty.
 */
export const BUDGET_RANGES = [
  { value: "", label: "Any budget" },
  { value: "0-25000", label: "Under ₹25,000" },
  { value: "25000-50000", label: "₹25,000 – ₹50,000" },
  { value: "50000-100000", label: "₹50,000 – ₹1,00,000" },
  { value: "100000-", label: "Above ₹1,00,000" },
];

/** Ranges are in days, inclusive on both ends. */
export const DURATION_RANGES = [
  { value: "", label: "Any duration" },
  { value: "1-4", label: "Up to 4 days" },
  { value: "5-6", label: "5 – 6 days" },
  { value: "7-9", label: "7 – 9 days" },
  { value: "10-", label: "10 days or more" },
];

export const PACKAGE_SORTS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "duration-asc", label: "Duration: short to long" },
  { value: "duration-desc", label: "Duration: long to short" },
];

export const ENQUIRY_STATUSES = [
  "new",
  "contacted",
  "quoted",
  "confirmed",
  "lost",
];
