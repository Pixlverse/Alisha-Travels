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
  /**
   * `count` is STRUCTURED DATA ONLY. The client asked for the review count to
   * come off the site — every visible mention now reads "4.8 on Google
   * reviews" — but schema.org's AggregateRating is invalid without a
   * reviewCount or ratingCount, and Google drops the rich result rather than
   * showing it without one. So the figure stays here for lib/seo/schema.js and
   * appears nowhere a visitor can read it. Keep it current; do not render it.
   */
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
  /**
   * PLACEHOLDER — replace with the Google Business Profile link.
   *
   * Every "4.8 on Google" on the site is a link now, and it has to land on
   * Google rather than on our own /reviews/ page: a rating we host is a claim,
   * the same rating on Google is evidence, and sending people to our page to
   * read about our rating is the move that makes visitors distrust it.
   *
   * This is the documented Google Maps search URL, which resolves to the
   * business listing by name and locality — correct, and good enough to ship.
   * It should be swapped for the profile's own short link (or a
   * search.google.com/local/reviews?placeid=… URL, which opens the review list
   * directly) as soon as the client sends either the link or the Place ID.
   */
  google:
    "https://www.google.com/maps/search/?api=1&query=Alisha%20Tours%20%26%20Travels%20Ettumanoor%20Kottayam",
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
        ],
      },
      {
        // MOVED OUT OF SERVICES at the client's instruction: these are trips
        // people buy, not services attached to a trip, so they belong in this
        // menu. Their pages keep their /services/ URLs — the copy on them is
        // the client's own, it is indexed, and nothing about the pages changed
        // when the label moved. See SERVICES_PRESENTED_AS_PACKAGES below,
        // which is what keeps the Services listings in step with this.
        label: "Planned to order",
        href: "/packages/",
        items: [
          { label: "Customized tour packages", href: "/services/customized-tour-packages/" },
          { label: "Educational tours", href: "/services/educational-tours/" },
          { label: "Adventure tours", href: "/services/adventure-tours/" },
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
        // WHAT CHANGED, and why, because this list used to have nine entries:
        //
        //   - "Fixed departure tours" is gone. It pointed at /fixed-departures/,
        //     which is already a top-level menu item, so the menu offered the
        //     same page twice.
        //   - Customized tours, educational tours and adventure tours moved to
        //     the Packages menu. They are trips, not services attached to one.
        //   - MICE & corporate travel moved there too and has since moved
        //     BACK, at the client's instruction: every corporate movement is
        //     quoted from scratch, so there is no shelf of MICE packages to
        //     browse. It is third here, behind air tickets and visas, which is
        //     the order the client asked for.
        //   - "Global tourist visa" is new, and second.
        //   - "Train & bus tickets" is new. THE COPY ON THAT PAGE IS DRAFTED,
        //     not supplied — it needs the client's sign-off.
        //
        // What is left is the work that surrounds somebody else's trip, which
        // is what this menu is for.
        items: [
          { label: "Air ticket booking", href: "/services/air-ticket-booking/" },
          { label: "Global tourist visa", href: "/services/global-tourist-visa/" },
          { label: "MICE & corporate travel", href: "/services/mice-corporate-travel/" },
          { label: "Train & bus tickets", href: "/services/train-bus-tickets/" },
          { label: "Hotel booking", href: "/services/hotel-booking/" },
          { label: "Travel insurance", href: "/services/travel-insurance/" },
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

/**
 * Services the client presents under PACKAGES rather than Services.
 *
 * The menu above is hand-written, but the /services/ index and the homepage
 * services band are built from the database — so without a shared rule the
 * three would drift apart the moment anything is edited in the dashboard.
 * Those two listings filter this set out, and the homepage packages band shows
 * them instead. The pages themselves are untouched and still live at
 * /services/<slug>/.
 *
 * MICE & corporate travel WAS in here, and is not any more. It was listed
 * under Packages because the "Corporate & MICE" category view reached it — and
 * that category view is gone (see PACKAGE_CATEGORIES), because the client's
 * position is that a corporate movement is customised from scratch rather than
 * picked off a shelf. So MICE is a service again, and a service that is in
 * this set appears in no listing at all, which is where it briefly ended up.
 */
export const SERVICES_PRESENTED_AS_PACKAGES = [
  "customized-tour-packages",
  "educational-tours",
  "adventure-tours",
];

/** Package category slugs → display labels, used by nav, filters and admin. */
/*
  CORPORATE & MICE IS NOT IN HERE, at the client's instruction: a corporate
  movement or a conference is quoted from scratch every time, so it is not a
  shelf of packages to browse — it is the MICE service, which is where it now
  lives in the menu (third, with air tickets and visas).

  Removing it from this list removes it from the packages menu, the filter on
  /packages/, the category chip on the cards and the admin's own category
  select, and /packages/corporate/ is gone with it. The value survives in
  models/Package.js only so that documents created before this still validate;
  see the note there.
*/
export const PACKAGE_CATEGORIES = [
  { slug: "honeymoon", label: "Honeymoon", href: "/packages/honeymoon/" },
  { slug: "family", label: "Family", href: "/packages/family/" },
  { slug: "group-tours", label: "Group Tours", href: "/packages/group-tours/" },
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
