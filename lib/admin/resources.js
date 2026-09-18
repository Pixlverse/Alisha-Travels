import {
  Campaign,
  Destination,
  Package,
  Departure,
  Service,
  Testimonial,
  GalleryItem,
  Office,
} from "@/models";
import { PACKAGE_CATEGORIES } from "@/lib/site";
import { GALLERY_CATEGORIES } from "@/models/GalleryItem";
import { SERVICE_ICON_NAMES } from "@/components/site/ServiceIcon";

/**
 * The content registry.
 *
 * Seven collections, one description each, and one form engine that renders
 * all of them (components/admin/ResourceForm.js). The alternative — seven
 * hand-written list pages and seven hand-written forms — would be roughly two
 * thousand lines that drift apart the first time a field is added.
 *
 * Field types the engine understands:
 *   text · slug · textarea · number · checkbox · select · date
 *   image      — a single Cloudinary asset ({ url, publicId, alt })
 *   imageList  — an array of them
 *   stringList — an array of plain strings (inclusions, highlights …)
 *   objectList — an array of objects, `of` describes the sub-fields
 *   ref        — an ObjectId pointing at another collection
 *
 * `status: draft` hides a document from the public site everywhere, because
 * every public query filters on `status: "active"`.
 */

/** Every button on a service page picks one of these. */
const CTA_ACTION_OPTIONS = [
  { value: "enquiry", label: "Open the enquiry form" },
  { value: "phone", label: "Start a phone call" },
  { value: "whatsapp", label: "Open WhatsApp" },
  { value: "email", label: "Open an email" },
];

const STATUS_FIELD = {
  name: "status",
  label: "Status",
  type: "select",
  options: [
    { value: "active", label: "Active — visible on the site" },
    { value: "draft", label: "Draft — hidden from the site" },
  ],
  section: "Publishing",
};

const SEO_FIELDS = [
  {
    name: "metaTitle",
    label: "Meta title",
    type: "text",
    section: "SEO",
    help: 'The page-specific part only — "· Alisha Tours & Travels" is appended automatically.',
    maxLength: 120,
  },
  {
    name: "metaDescription",
    label: "Meta description",
    type: "textarea",
    rows: 3,
    section: "SEO",
    help: "Around 150–160 characters reads best in search results.",
    maxLength: 320,
  },
];

const IMAGE_FIELD = (name, label, options = {}) => ({
  name,
  label,
  type: "image",
  folder: options.folder || "misc",
  section: options.section || "Media",
  required: options.required,
  help: options.help || "Alt text is required — it is read aloud by screen readers and shown if the image fails to load.",
});

export const RESOURCES = {
  destinations: {
    model: Destination,
    label: "Destination",
    plural: "Destinations",
    description:
      "The destination landing pages. On the legacy site these were dead tiles with no page behind them — each one here is a real, indexable page.",
    defaultSort: { region: 1, order: 1 },
    listColumns: [
      { key: "name", label: "Name", primary: true },
      { key: "region", label: "Region" },
      { key: "order", label: "Order", align: "right" },
      { key: "priceFrom", label: "From", format: "inr", align: "right" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["name", "slug", "country"],
    previewPath: (doc) => `/destinations/${doc.region}/${doc.slug}/`,
    fields: [
      { name: "name", label: "Name", type: "text", required: true, section: "Basics" },
      {
        name: "slug",
        label: "URL slug",
        type: "slug",
        required: true,
        from: "name",
        section: "Basics",
        help: "Part of the page address. Changing it breaks existing links — set a redirect if you must.",
      },
      { name: "country", label: "Country", type: "text", section: "Basics" },
      {
        name: "region",
        label: "Region",
        type: "select",
        required: true,
        section: "Basics",
        options: [
          { value: "international", label: "International" },
          { value: "domestic", label: "Domestic" },
        ],
      },
      {
        name: "order",
        label: "Demand order",
        type: "number",
        section: "Basics",
        help: "Lower sorts first. This is demand order, not alphabetical — Dubai, Singapore, Thailand and the Maldives lead the international list.",
      },
      { name: "tagline", label: "Tagline", type: "text", section: "Basics", help: "One line, shown on cards and in the hero." },

      IMAGE_FIELD("heroImage", "Hero image", { folder: "destinations", required: true }),
      { name: "gallery", label: "Gallery", type: "imageList", folder: "destinations", section: "Media" },

      { name: "intro", label: "Introduction", type: "textarea", rows: 6, section: "Content" },
      { name: "whyVisit", label: "Why go", type: "textarea", rows: 5, section: "Content" },
      { name: "bestTimeToVisit", label: "Best time to visit", type: "textarea", rows: 4, section: "Content" },
      {
        name: "topAttractions",
        label: "Top attractions",
        type: "objectList",
        section: "Content",
        itemLabel: "Attraction",
        of: [
          { name: "title", label: "Title", type: "text", required: true },
          { name: "description", label: "Description", type: "textarea", rows: 2 },
        ],
      },
      {
        name: "faqs",
        label: "FAQs",
        type: "objectList",
        section: "Content",
        itemLabel: "Question",
        help: "These render as an accordion and feed the FAQPage structured data.",
        of: [
          { name: "question", label: "Question", type: "text", required: true },
          { name: "answer", label: "Answer", type: "textarea", rows: 3, required: true },
        ],
      },
      {
        name: "priceFrom",
        label: "Starting price override (₹)",
        type: "number",
        section: "Publishing",
        help: "Usually leave blank — the card price is taken from the cheapest active package for this destination.",
      },
      STATUS_FIELD,
      ...SEO_FIELDS,
    ],
  },

  packages: {
    model: Package,
    label: "Package",
    plural: "Packages",
    description: "Every itinerary you sell. Dates for group tours are managed as Departures.",
    defaultSort: { order: 1, title: 1 },
    populate: [{ path: "destination", select: "name region slug" }],
    listColumns: [
      { key: "title", label: "Title", primary: true },
      { key: "destination.name", label: "Destination" },
      { key: "category", label: "Category" },
      { key: "durationDays", label: "Days", align: "right" },
      { key: "priceFrom", label: "From", format: "inr", align: "right" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["title", "slug"],
    previewPath: (doc) => `/packages/${doc.slug}/`,
    children: { resource: "departures", foreignKey: "package", label: "Departures" },
    fields: [
      { name: "title", label: "Title", type: "text", required: true, section: "Basics" },
      { name: "slug", label: "URL slug", type: "slug", required: true, from: "title", section: "Basics" },
      { name: "summary", label: "Summary", type: "textarea", rows: 2, section: "Basics", help: "One or two sentences, shown on cards." },
      {
        name: "destination",
        label: "Destination",
        type: "ref",
        required: true,
        optionsFrom: "destinations",
        section: "Basics",
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        required: true,
        section: "Basics",
        /*
          Driven by the categories the SITE shows, not by the model's enum.
          The enum still carries "corporate" so that packages created before
          the client removed that category remain valid documents — but it is
          not a category any more, so offering it here would let the dashboard
          file a package into a listing that no longer exists.
        */
        options: PACKAGE_CATEGORIES.map((category) => ({
          value: category.slug,
          label: category.label,
        })),
      },
      {
        name: "type",
        label: "Type",
        type: "select",
        section: "Basics",
        options: [
          { value: "customized", label: "Customized" },
          { value: "fixed-departure", label: "Fixed departure" },
        ],
        help: "Fixed departure packages appear in the departures calendar once they have dates.",
      },
      { name: "durationDays", label: "Days", type: "number", required: true, section: "Basics" },
      { name: "durationNights", label: "Nights", type: "number", required: true, section: "Basics" },
      {
        name: "priceFrom",
        label: "Starting price (₹)",
        type: "number",
        required: true,
        section: "Basics",
        help: "INR only. Nothing on this site is ever quoted in another currency.",
      },
      {
        name: "priceNote",
        label: "Price basis",
        type: "textarea",
        rows: 2,
        section: "Basics",
        help: "Shown under the price. What the figure covers and what it does not.",
      },
      {
        name: "referenceNo",
        label: "Proposal reference",
        type: "text",
        section: "Basics",
        help: 'The "REF 004645" from the proposal PDF. Shown on the page so a caller and the office are looking at the same quote.',
      },
      {
        name: "travelWindow",
        label: "Travel window",
        type: "text",
        section: "Basics",
        help: 'Free text, as the proposal has it — "Aug 2026", "January 2027". Not a departure date; fixed departures have their own dates.',
      },
      {
        name: "travellers",
        label: "Party the quote is built for",
        type: "text",
        section: "Basics",
        help: '"3 adults", "4 adults", "2 adults + 1 child". Free text, because the proposals vary.',
      },
      { name: "rooms", label: "Rooms", type: "number", section: "Basics" },

      IMAGE_FIELD("heroImage", "Hero image", { folder: "packages", required: true }),
      { name: "gallery", label: "Gallery", type: "imageList", folder: "packages", section: "Media" },

      { name: "highlights", label: "Highlights", type: "stringList", section: "Content" },
      { name: "inclusions", label: "What's included", type: "stringList", section: "Content" },
      { name: "exclusions", label: "What's not included", type: "stringList", section: "Content" },
      {
        name: "itinerary",
        label: "Day-by-day itinerary",
        type: "objectList",
        section: "Content",
        itemLabel: "Day",
        help: "This renders as HTML on the page — it is the canonical version, not the PDF.",
        of: [
          { name: "day", label: "Day", type: "number", required: true },
          { name: "title", label: "Title", type: "text", required: true },
          { name: "description", label: "Description", type: "textarea", rows: 3 },
          { name: "stay", label: "Overnight", type: "text" },
          { name: "meals", label: "Meals", type: "text" },
        ],
      },
      {
        name: "stays",
        label: "Where you'll stay",
        type: "objectList",
        section: "Content",
        itemLabel: "Hotel",
        help: 'Page 2 of the proposal — one row per town. Write the hotel as the proposal does, "Hotel Central Park or similar".',
        of: [
          { name: "destination", label: "Destination", type: "text", required: true },
          { name: "hotel", label: "Hotel", type: "text", required: true },
          { name: "nights", label: "Nights", type: "number" },
          { name: "meals", label: "Meals", type: "text" },
        ],
      },
      {
        name: "stayNote",
        label: "Accommodation note",
        type: "textarea",
        rows: 2,
        section: "Content",
        help: "Leave empty for the standard line about hotel category being confirmed at booking.",
      },
      {
        name: "priceRows",
        label: "Your investment",
        type: "objectList",
        section: "Content",
        itemLabel: "Price row",
        help: 'Page 5. "Per adult" and, where the proposal shows it, the party total. Amounts in rupees, digits only.',
        of: [
          { name: "label", label: "Label", type: "text", required: true },
          { name: "amount", label: "Amount (₹)", type: "number", required: true },
        ],
      },
      {
        name: "faqs",
        label: "FAQs",
        type: "objectList",
        section: "Content",
        itemLabel: "Question",
        of: [
          { name: "question", label: "Question", type: "text", required: true },
          { name: "answer", label: "Answer", type: "textarea", rows: 3, required: true },
        ],
      },

      /*
        Page 6 and page 7 of the proposal. Every one of these falls back to
        lib/content/package-policies.js when left empty, which is what every
        package should do unless this particular trip really is different —
        fill one in and this package stops following any change made to the
        standard text.
      */
      {
        name: "paymentOptions",
        label: "Payment options",
        type: "objectList",
        section: "Policies",
        itemLabel: "Payment option",
        help: "Leave empty for the standard three rows (card, bank transfer, UPI or cash — all at NIL charges).",
        of: [
          { name: "method", label: "Method", type: "text", required: true },
          { name: "charges", label: "Charges", type: "text" },
        ],
      },
      {
        name: "bookingPolicy",
        label: "Booking policy",
        type: "textarea",
        rows: 3,
        section: "Policies",
        help: "Leave empty for the standard 50% on confirmation, 50% thirty days before departure.",
      },
      {
        name: "cancellationPolicy",
        label: "Cancellation policy",
        type: "textarea",
        rows: 3,
        section: "Policies",
        help: "Leave empty for the standard 50% before thirty days, 100% within thirty days.",
      },
      {
        name: "guidelines",
        label: "Guidelines for travelling",
        type: "objectList",
        section: "Policies",
        itemLabel: "Group",
        help: "Leave empty for the standard four groups — the domestic set or the international one, chosen by the destination's region.",
        of: [
          { name: "title", label: "Group heading", type: "text", required: true },
          { name: "points", label: "Points", type: "stringList" },
        ],
      },
      {
        name: "terms",
        label: "Terms & conditions",
        type: "objectList",
        section: "Policies",
        itemLabel: "Clause",
        help: "Leave empty for the standard fourteen clauses. Only override for a trip whose terms genuinely differ — a clause typed here is not kept in step with the others.",
        of: [
          { name: "title", label: "Clause heading", type: "text", required: true },
          { name: "body", label: "Clause", type: "textarea", rows: 4, required: true },
        ],
      },
      {
        name: "pdfUrl",
        label: "PDF itinerary URL",
        type: "text",
        section: "Publishing",
        help: "Optional and secondary. Leave blank and the page offers a clean print-to-PDF instead.",
      },
      { name: "featured", label: "Feature on the homepage", type: "checkbox", section: "Publishing" },
      { name: "offerEndsOn", label: "Offer ends on", type: "date", section: "Publishing", help: "Shows an \"Offer ends\" badge on the card until this date passes. Leave empty if the price is not a promotion." },
      { name: "order", label: "Sort order", type: "number", section: "Publishing" },
      STATUS_FIELD,
      ...SEO_FIELDS,
    ],
  },

  departures: {
    model: Departure,
    label: "Departure",
    plural: "Departures",
    description:
      "Dated group departures. Past dates are never deleted — they stay on the calendar, greyed and badged, so it reads as an operating record rather than an empty page.",
    defaultSort: { departureDate: -1 },
    populate: [{ path: "package", select: "title slug durationDays priceFrom" }],
    listColumns: [
      { key: "departureDate", label: "Departs", format: "date", primary: true },
      { key: "package.title", label: "Package" },
      { key: "price", label: "Price", format: "inr", align: "right" },
      { key: "seatsRemaining", label: "Seats left", align: "right" },
      { key: "availability", label: "Availability", format: "availability" },
    ],
    fields: [
      { name: "package", label: "Package", type: "ref", required: true, optionsFrom: "packages", section: "Basics" },
      { name: "departureDate", label: "Departure date", type: "date", required: true, section: "Basics" },
      { name: "returnDate", label: "Return date", type: "date", section: "Basics" },
      { name: "price", label: "Price (₹)", type: "number", section: "Basics", help: "Overrides the package's starting price for this date." },
      { name: "seatsTotal", label: "Seats in total", type: "number", section: "Seats" },
      {
        name: "seatsRemaining",
        label: "Seats remaining",
        type: "number",
        section: "Seats",
        help: "Drives the availability badge. At 0 with a total set, the date shows as Sold out.",
      },
      { name: "boardingCity", label: "Boarding city", type: "text", section: "Basics" },
      { name: "notes", label: "Internal notes", type: "textarea", rows: 2, section: "Basics" },
      STATUS_FIELD,
    ],
  },

  services: {
    model: Service,
    label: "Service",
    plural: "Services",
    description:
      "Eight service pages. The ninth entry in the site menu, Fixed Departure Tours, links to the departures calendar and has no page of its own.",
    defaultSort: { order: 1 },
    listColumns: [
      { key: "title", label: "Title", primary: true },
      { key: "icon", label: "Icon" },
      { key: "order", label: "Order", align: "right" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["title", "slug"],
    previewPath: (doc) => `/services/${doc.slug}/`,
    fields: [
      { name: "title", label: "Title", type: "text", required: true, section: "Basics" },
      { name: "slug", label: "URL slug", type: "slug", required: true, from: "title", section: "Basics" },
      {
        name: "icon",
        label: "Icon",
        type: "select",
        section: "Basics",
        options: SERVICE_ICON_NAMES.map((name) => ({ value: name, label: name })),
      },
      { name: "shortDescription", label: "Short description", type: "textarea", rows: 2, required: true, section: "Basics", help: "Used on the services index and in card grids, not on the page itself." },
      { name: "heroHeading", label: "Page heading", type: "text", section: "Basics", help: "The <h1>, if it differs from the title. Leave empty to use the title." },
      { name: "heroLead", label: "Hero paragraph", type: "textarea", rows: 4, section: "Basics", help: "The paragraph under the heading. Leave a blank line between paragraphs." },
      { name: "longDescription", label: "Full description", type: "textarea", rows: 10, section: "Content", help: "Leave a blank line between paragraphs. Ignored on pages that use content blocks." },
      { name: "points", label: "What that covers", type: "stringList", section: "Content", help: "Ignored on pages that use content blocks." },
      {
        name: "assurances",
        label: "Assurance cards",
        type: "objectList",
        section: "Content",
        itemLabel: "Card",
        help: "The row of promises directly under the hero. Four reads best.",
        of: [
          { name: "title", label: "Heading", type: "text", required: true },
          { name: "text", label: "Line under it", type: "textarea", rows: 2 },
        ],
      },
      {
        name: "blocks",
        label: "Content blocks",
        type: "objectList",
        section: "Content",
        itemLabel: "Block",
        help:
          "The body of a long-form service page, in the order it appears. Leave empty and the page falls back to the full description, \"what that covers\" and FAQs.",
        of: [
          {
            name: "kind",
            label: "Block type",
            type: "select",
            options: [
              { value: "cards", label: "Cards — a grid of headings and lines" },
              { value: "steps", label: "Steps — a numbered sequence" },
              { value: "list", label: "List — an intro and bullet points" },
              { value: "prose", label: "Prose — heading and paragraphs" },
            ],
          },
          { name: "title", label: "Heading", type: "text" },
          { name: "intro", label: "Intro paragraph(s)", type: "textarea", rows: 3 },
          { name: "body", label: "Body (prose blocks)", type: "textarea", rows: 8 },
          {
            name: "items",
            label: "Cards / steps",
            type: "objectList",
            itemLabel: "Card",
            of: [
              { name: "tag", label: "Tag", type: "text" },
              { name: "title", label: "Heading", type: "text", required: true },
              { name: "text", label: "Line under it", type: "textarea", rows: 2 },
            ],
          },
          { name: "points", label: "Bullet points (list blocks)", type: "stringList" },
          {
            name: "columns",
            label: "Paired lists (list blocks)",
            type: "objectList",
            itemLabel: "Column",
            of: [
              { name: "title", label: "Column heading", type: "text", required: true },
              { name: "points", label: "Bullet points", type: "stringList" },
            ],
          },
          { name: "tagsLabel", label: "Chip row label", type: "text" },
          { name: "tags", label: "Chips", type: "stringList" },
          { name: "linkLabel", label: "Link label", type: "text" },
          { name: "linkHref", label: "Link URL", type: "text" },
          { name: "footnote", label: "Footnote", type: "textarea", rows: 2 },
        ],
      },
      {
        name: "faqs",
        label: "FAQs",
        type: "objectList",
        section: "Content",
        itemLabel: "Question",
        of: [
          { name: "question", label: "Question", type: "text", required: true },
          { name: "answer", label: "Answer", type: "textarea", rows: 3, required: true },
        ],
      },
      { name: "ctaLabel", label: "Button label", type: "text", section: "Publishing" },
      {
        name: "ctaType",
        label: "Button action",
        type: "select",
        section: "Publishing",
        options: CTA_ACTION_OPTIONS,
      },
      { name: "secondaryCtaLabel", label: "Second button label", type: "text", section: "Publishing" },
      {
        name: "secondaryCtaType",
        label: "Second button action",
        type: "select",
        section: "Publishing",
        options: CTA_ACTION_OPTIONS,
      },
      { name: "disclaimer", label: "Disclaimer", type: "textarea", rows: 3, section: "Content", help: "Small print at the very foot of the page. Empty leaves it off." },
      { name: "closingTitle", label: "Closing heading", type: "text", section: "Publishing", help: "The band at the foot of the page. Empty leaves it off." },
      { name: "closingText", label: "Closing line", type: "textarea", rows: 2, section: "Publishing" },
      { name: "closingPrimaryLabel", label: "Closing first button", type: "text", section: "Publishing" },
      { name: "closingPrimaryType", label: "Closing first action", type: "select", section: "Publishing", options: CTA_ACTION_OPTIONS },
      { name: "closingSecondaryLabel", label: "Closing second button", type: "text", section: "Publishing" },
      { name: "closingSecondaryType", label: "Closing second action", type: "select", section: "Publishing", options: CTA_ACTION_OPTIONS },
      { name: "order", label: "Sort order", type: "number", section: "Publishing" },
      STATUS_FIELD,
      ...SEO_FIELDS,
    ],
  },

  campaigns: {
    model: Campaign,
    label: "Campaign",
    plural: "Campaigns",
    description:
      "The trips and sponsorships that are not for sale. The most recent one shows on the homepage; all of them live at /campaigns/.",
    defaultSort: { order: 1 },
    listColumns: [
      { key: "title", label: "Title", primary: true },
      { key: "period", label: "When" },
      { key: "location", label: "Where" },
      { key: "order", label: "Order", align: "right" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["title", "summary"],
    previewPath: (doc) => `/campaigns/${doc.slug}/`,
    fields: [
      { name: "title", label: "Title", type: "text", required: true, section: "Basics" },
      { name: "slug", label: "URL slug", type: "slug", required: true, from: "title", section: "Basics" },
      {
        name: "summary",
        label: "Summary",
        type: "textarea",
        rows: 3,
        required: true,
        section: "Basics",
        help: "One or two sentences. This is what the homepage band and the campaign card show.",
      },
      { name: "period", label: "When", type: "text", section: "Basics", help: 'Free text — "August 2025", "Every monsoon".' },
      { name: "location", label: "Where", type: "text", section: "Basics" },

      IMAGE_FIELD("heroImage", "Photograph", { folder: "campaigns", required: true }),
      {
        name: "imageNote",
        label: "Photograph note",
        type: "text",
        section: "Media",
        help:
          "Say so here if the photograph is a stand-in rather than a picture of this campaign. It renders under the image — the gallery promises visitors nothing on this site is stock, so an unlabelled stand-in would make that a lie.",
      },

      {
        name: "videoUrl",
        label: "Campaign video URL",
        type: "text",
        section: "Media",
        help:
          "A YouTube or Vimeo link — paste the normal share URL and the site builds the embed itself. The homepage campaign band shows a film where there is one, and the reserved frame it shows otherwise disappears as soon as this is filled in.",
      },
      IMAGE_FIELD("videoThumbnail", "Video still", {
        folder: "campaigns",
        help: "Shown before the video is played. Without one the campaign's photograph stands in.",
      }),

      { name: "body", label: "The full story", type: "textarea", rows: 12, section: "Content", help: "Leave a blank line between paragraphs." },
      { name: "pullQuote", label: "Pull quote", type: "text", section: "Content", help: "The line the campaign lands on. Optional." },

      { name: "order", label: "Sort order", type: "number", section: "Publishing" },
      STATUS_FIELD,
      ...SEO_FIELDS,
    ],
  },

  testimonials: {
    model: Testimonial,
    label: "Testimonial",
    plural: "Testimonials",
    description:
      "Entered by hand. There is no live Google Reviews sync — publish only reviews you have permission to reproduce.",
    defaultSort: { order: 1, date: -1 },
    listColumns: [
      { key: "name", label: "Name", primary: true },
      { key: "tourTaken", label: "Tour" },
      { key: "rating", label: "Rating", align: "right" },
      { key: "source", label: "Source" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["name", "quote"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true, section: "Basics" },
      { name: "location", label: "Location", type: "text", section: "Basics" },
      { name: "tourTaken", label: "Tour taken", type: "text", section: "Basics" },
      { name: "date", label: "Date", type: "date", section: "Basics" },
      {
        name: "rating",
        label: "Rating",
        type: "select",
        required: true,
        section: "Basics",
        options: [5, 4, 3, 2, 1].map((n) => ({ value: String(n), label: `${n} star${n === 1 ? "" : "s"}` })),
      },
      {
        name: "source",
        label: "Source",
        type: "select",
        section: "Basics",
        options: [
          { value: "google", label: "Google" },
          { value: "justdial", label: "JustDial" },
          { value: "direct", label: "Shared with us directly" },
        ],
      },
      { name: "quote", label: "Review", type: "textarea", rows: 6, required: true, section: "Content" },
      {
        name: "videoUrl",
        label: "Video review URL",
        type: "text",
        section: "Content",
        help:
          "A YouTube or Vimeo link. Paste the normal share URL — the site builds the embed itself. Reviews with a video appear in the homepage video band.",
      },
      IMAGE_FIELD("videoThumbnail", "Video still", {
        folder: "testimonials",
        help: "Shown before the video is played. Without one the card falls back to the reviewer's photo.",
      }),
      IMAGE_FIELD("photo", "Photograph", { folder: "testimonials", help: "Optional. Without one the card shows their initial." }),
      { name: "featured", label: "Feature on the homepage", type: "checkbox", section: "Publishing" },
      { name: "order", label: "Sort order", type: "number", section: "Publishing" },
      STATUS_FIELD,
    ],
  },

  gallery: {
    model: GalleryItem,
    label: "Photograph",
    plural: "Gallery",
    description:
      "One gallery, replacing the legacy Memory Book and portfolio. A filter tab only appears on the site if at least one photograph uses that category.",
    defaultSort: { order: 1 },
    listColumns: [
      { key: "caption", label: "Caption", primary: true },
      { key: "category", label: "Category" },
      { key: "order", label: "Order", align: "right" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["caption"],
    fields: [
      IMAGE_FIELD("image", "Photograph", { folder: "gallery", required: true, section: "Basics" }),
      { name: "caption", label: "Caption", type: "text", section: "Basics" },
      {
        name: "category",
        label: "Category",
        type: "select",
        section: "Basics",
        options: GALLERY_CATEGORIES.map((value) => ({
          value,
          label: value.replace(/\b\w/g, (c) => c.toUpperCase()),
        })),
      },
      { name: "takenAt", label: "Taken on", type: "date", section: "Basics" },
      { name: "order", label: "Sort order", type: "number", section: "Publishing" },
      STATUS_FIELD,
    ],
  },

  offices: {
    model: Office,
    label: "Office",
    plural: "Offices",
    description: "Both locations. Every phone number carries the role that answers it.",
    defaultSort: { order: 1 },
    listColumns: [
      { key: "name", label: "Name", primary: true },
      { key: "locality", label: "Locality" },
      { key: "email", label: "Email" },
      { key: "status", label: "Status", format: "status" },
    ],
    searchFields: ["name", "address"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true, section: "Basics" },
      { name: "slug", label: "Slug", type: "slug", required: true, from: "name", section: "Basics" },
      { name: "isHeadOffice", label: "Head office", type: "checkbox", section: "Basics" },
      { name: "address", label: "Address", type: "textarea", rows: 3, required: true, section: "Basics" },
      { name: "locality", label: "Locality", type: "text", section: "Basics" },
      { name: "region", label: "State", type: "text", section: "Basics" },
      { name: "postalCode", label: "PIN code", type: "text", section: "Basics" },
      { name: "email", label: "Email", type: "text", section: "Contact" },
      { name: "hours", label: "Opening hours", type: "text", section: "Contact" },
      {
        name: "phones",
        label: "Phone numbers",
        type: "objectList",
        section: "Contact",
        itemLabel: "Number",
        help: "Label each number with who answers it. Store the dialling value with no spaces, e.g. +919562921818.",
        of: [
          { name: "label", label: "Who answers", type: "text", required: true },
          { name: "number", label: "Dialling value", type: "text", required: true },
          { name: "display", label: "Shown as", type: "text" },
          { name: "whatsapp", label: "On WhatsApp", type: "checkbox" },
        ],
      },
      { name: "mapLink", label: "Google Maps link", type: "text", section: "Map" },
      { name: "mapEmbedUrl", label: "Google Maps embed URL", type: "text", section: "Map", help: "The ...&output=embed form." },
      { name: "order", label: "Sort order", type: "number", section: "Publishing" },
      STATUS_FIELD,
    ],
  },
};

export const RESOURCE_KEYS = Object.keys(RESOURCES);

export function getResource(key) {
  return RESOURCES[key] || null;
}

/** Sections in the order they first appear in the field list. */
export function resourceSections(resource) {
  const seen = [];
  for (const field of resource.fields) {
    const section = field.section || "Basics";
    if (!seen.includes(section)) seen.push(section);
  }
  return seen;
}
