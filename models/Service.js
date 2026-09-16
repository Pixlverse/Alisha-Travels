import mongoose from "mongoose";
import { imageSchema, faqSchema, seoSchema, registerModel, slugify } from "./_shared.js";

/**
 * One card inside a block: an assurance, a situation ("VISA — a booking the
 * consulate will accept"), a numbered step, or a reason. `tag` is the small
 * uppercase label some cards carry; leave it empty and the card is just a
 * heading and a line.
 */
/** What a button on a service page can do. */
export const CTA_ACTIONS = ["enquiry", "phone", "whatsapp", "email"];

const serviceCardSchema = new mongoose.Schema(
  {
    tag: { type: String, trim: true, default: "" },
    title: { type: String, required: true, trim: true },
    text: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

/**
 * A titled column of ticks inside a `list` block — "What we ask you" beside
 * "What we check in the policy". Two short lists that answer each other read
 * as a pair; run one after the other down the page they read as ten bullets.
 */
const serviceColumnSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    points: { type: [String], default: [] },
  },
  { _id: false }
);

/**
 * The long-form service pages are written as a sequence of blocks rather than
 * one prose field, because the copy is a sequence of blocks: a grid of
 * situations, a numbered process, a bulleted capability list, a plain
 * two-paragraph argument.
 *
 * A service with no blocks renders the original layout — description, "what
 * that covers", FAQs — so the five shorter service pages are untouched.
 *
 * `kind` decides which fields matter:
 *   cards  title, intro, items[], linkLabel/linkHref, footnote
 *   steps  title, intro, items[]  (numbered in render order)
 *   list   title, intro, points[] or columns[], tagsLabel + tags[], footnote
 *   prose  title, body
 */
const serviceBlockSchema = new mongoose.Schema(
  {
    kind: { type: String, enum: ["cards", "steps", "list", "prose"], default: "cards" },
    title: { type: String, trim: true, default: "" },
    intro: { type: String, trim: true, default: "" },
    body: { type: String, trim: true, default: "" },
    items: { type: [serviceCardSchema], default: [] },
    points: { type: [String], default: [] },
    columns: { type: [serviceColumnSchema], default: [] },
    tagsLabel: { type: String, trim: true, default: "" },
    tags: { type: [String], default: [] },
    linkLabel: { type: String, trim: true, default: "" },
    linkHref: { type: String, trim: true, default: "" },
    footnote: { type: String, trim: true, default: "" },
  },
  { _id: false }
);

const serviceSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    title: { type: String, required: true, trim: true },
    /** A lucide-react icon name, resolved by components/site/ServiceIcon.js. */
    icon: { type: String, trim: true, default: "Compass" },
    shortDescription: { type: String, required: true, trim: true },
    longDescription: { type: String, default: "" },
    /** Bullet list rendered as an icon-labelled "what's included" block. */
    points: { type: [String], default: [] },
    faqs: { type: [faqSchema], default: [] },
    heroImage: { type: imageSchema },

    /**
     * The <h1>, where the page's own heading differs from the name the service
     * carries in the menu — "MICE & Corporate Travel Services" on a page the
     * navigation calls "MICE & corporate travel". Empty falls back to `title`.
     */
    heroHeading: { type: String, trim: true, default: "" },
    /**
     * The hero paragraph. Longer and more specific than `shortDescription`,
     * which still does the work on the services index and in card grids.
     */
    heroLead: { type: String, trim: true, default: "" },
    /** The four promises directly under the hero. */
    assurances: { type: [serviceCardSchema], default: [] },
    /** The body of a long-form page. Empty means the original layout. */
    blocks: { type: [serviceBlockSchema], default: [] },

    /**
     * Small print at the foot of the page, under the closing band — the
     * regulatory line insurance and attestation both have to carry. Plain
     * text; it renders as one muted paragraph.
     */
    disclaimer: { type: String, trim: true, default: "" },

    /** The closing band at the foot of a long-form page. No heading, no band. */
    closingTitle: { type: String, trim: true, default: "" },
    closingText: { type: String, trim: true, default: "" },
    closingPrimaryLabel: { type: String, trim: true, default: "" },
    closingPrimaryType: { type: String, enum: CTA_ACTIONS, default: "enquiry" },
    closingSecondaryLabel: { type: String, trim: true, default: "" },
    closingSecondaryType: { type: String, enum: CTA_ACTIONS, default: "whatsapp" },

    ctaLabel: { type: String, trim: true, default: "Enquire now" },
    ctaType: { type: String, enum: CTA_ACTIONS, default: "enquiry" },
    secondaryCtaLabel: { type: String, trim: true, default: "" },
    secondaryCtaType: { type: String, enum: CTA_ACTIONS, default: "whatsapp" },

    order: { type: Number, default: 100, index: true },
    status: { type: String, enum: ["active", "draft"], default: "active", index: true },
    ...seoSchema,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

serviceSchema.virtual("href").get(function () {
  return `/services/${this.slug}/`;
});

serviceSchema.pre("validate", function (next) {
  if (!this.slug && this.title) this.slug = slugify(this.title);
  next();
});

export default registerModel("Service", serviceSchema);
