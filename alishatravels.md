# Alisha Tours & Travels — Full Website Rebuild

Build a production-grade travel agency website replacing an outdated WordPress
site. This is a **lead-generation site**, not a transactional booking engine —
there is no payment module in this phase. Every conversion point ends in an
enquiry that is logged to the database and simultaneously routed to WhatsApp
or email.

Read this entire document before writing code. Work in phases as laid out in
Section 9 — do not attempt everything in one pass.

---

## 1. Tech Stack

- **Frontend + Backend**: Next.js (JavaScript, not TypeScript), single app —
  App Router, API routes (or Route Handlers) power the backend. No separate
  Express server.
- **Styling**: Tailwind CSS + shadcn/ui components for the **admin dashboard**
  only. The **public-facing site** should use custom-designed components built
  with Tailwind utility classes — do not let it look like a shadcn template.
  Reference `frontend-design` best practices for typography, spacing, and
  visual hierarchy on the public site.
- **Database**: MongoDB Atlas via Mongoose. Assume a fresh cluster; all
  connection details come from `MONGODB_URI` in environment variables. Never
  hardcode credentials.
- **Media storage**: Cloudinary for all images (destination heroes, package
  galleries, testimonials, team photos, admin uploads). Use `CLOUDINARY_URL`
  or the three-part env vars (cloud name / api key / api secret). Build a
  small upload utility used by both seed scripts and the admin dashboard.
- **Auth**: Credentials-based login (email + password) using NextAuth.js
  (Credentials provider) or a custom JWT + httpOnly cookie session — pick
  whichever integrates more cleanly with Next.js App Router in the current
  stable version. Passwords hashed with bcrypt. No public signup — admin
  accounts are created via a seed script or by an existing admin from within
  the dashboard.
- **Email**: Resend for transactional enquiry emails. Store `RESEND_API_KEY`
  in env. Sender domain: `alishatravels.in` (verify domain configuration is
  documented in a README even if actual DNS setup happens outside this repo).
- **Deployment target**: DigitalOcean App Platform.
  - One App Platform app (project `first-project`, region `BLR1`) serving
    both the Next.js frontend and its API routes from a single component and
    single public URL — no separate frontend/backend services, no CORS
    concerns.
  - Include a `.github/workflows/deploy.yml` GitHub Actions workflow that
    triggers on push to `main`. Since DigitalOcean App Platform normally
    auto-deploys on push via its own GitHub integration, the workflow file
    should be set up to **trigger a DigitalOcean App Platform deployment**
    using `digitalocean/app_action` (or equivalent), so deployments are
    visible/controllable both from GitHub Actions and DO's Activity tab.
  - Document required App Platform environment variables in `.env.example`
    and in the README's deployment section.
  - Build in Next.js standalone output mode (`output: 'standalone'` in
    `next.config.js`) for a lean container.

---

## 2. Brand & Design System

**Business**: Alisha Tours & Travels — IATA-accredited travel agency, Kerala
(Ettumanoor/Kottayam HQ + Trivandrum branch), founded 2013 by Ramzi Mohammed
Ali. Focus is **tours and packages only** — no hotel/flight/visa booking
engines (unlike Akbar Travels or Veena World references below; we're leaner
and more personal, not an OTA).

**Tagline**: "Every travel is a blessing" — weave this through the site as an
emotional through-line:

- Homepage hero subline
- Footer, near the logo/about blurb
- The loading animation quote (see Section 6)
- Do NOT create a dedicated `/stories/` or `/our-impact/` page yet — no
  content exists for it. Leave a commented placeholder/TODO in the codebase
  (e.g. in the nav config or a `// TODO: add Stories/Impact page once
campaign content is ready` comment) so it's easy to slot in later once
  campaign content (e.g. the blind children's tour) is provided.

**Color palette**:

- Primary: `#0a9ddb` (bright sky blue)
- Deep accent: `#005c75` (deep teal)
- Neutral/background: `#e3e3e5` (light grey)
  Use these as CSS custom properties / Tailwind theme extension, not
  hardcoded hex values scattered through components.

**Typography**: Pick a free, professional font pairing available via Google
Fonts — a confident serif or display serif for headings (something warm and
editorial, evocative of travel/storytelling — e.g. in the spirit of what
premium travel sites like Veena World use) paired with a clean, highly
legible sans-serif for body text. Load via `next/font/google` for
performance. Use your judgment on the exact pairing but justify the choice
briefly in a code comment or README note.

**Reference UI patterns** (screenshots provided by the client — replicate the
_pattern_, not the exact visuals, and adapt to our palette and simpler
tours-only scope):

1. Akbar Travels homepage: prominent search/destination bar in the hero,
   trust badges row (ratings, years of experience, happy customers) directly
   under the hero, tabbed "Exclusive Deals" style horizontal card carousel
   (Hot Deals / Fixed Departures / Domestic / International).
2. Akbar Travels "Trending Destinations": horizontal scrollable destination
   cards with a background image, destination name in script/display font
   overlay, and a "Starting @ ₹X" price band at the bottom — use this pattern
   for our Destinations grid.
3. Veena World tour detail page: sticky sidebar with starting price, a clear
   primary CTA button, "Share/Download/Email Itinerary" icon row, tour
   highlights and includes rendered as clean icon-labeled lists, breadcrumbs,
   and a "Want us to call you?" mini lead-capture form — use this pattern for
   our Package detail page, swapping payment/pricing complexity for our
   simpler Enquire flow.
4. Paper airplane icon/motif — use as the basis for the loader animation
   (Section 6).

**Assets**: The client will place an `images/` folder at the project root
containing the logo and other brand images before running this build. Move
its contents into `public/images/` (or an appropriate Next.js static assets
location) as part of setup, and reference the logo from there (e.g.
`public/images/logo.svg` or whatever extension is actually present — inspect
the folder rather than assuming a filename/extension).

---

## 3. Navigation & Routes (confirmed by SEO — do not alter structure)

Every main menu item must be a real, renderable page — not just a dropdown
trigger.

### Main menu (left to right), Call button at the right end of the bar, logo → home

1. Destinations — `/destinations/`
2. Packages — `/packages/`
3. Fixed Departures — `/fixed-departures/`
4. Services — `/services/`
5. About — `/about/`
6. Contact — `/contact/`

### Submenus

**Destinations**

- International — `/destinations/international/`
  Dubai, Singapore, Thailand, Maldives, Malaysia, Bali, Vietnam, Azerbaijan,
  Europe, Bhutan, Nepal (in this order — ordered by demand, not alphabetical)
- Domestic — `/destinations/domestic/`
  Kerala, Kashmir & Srinagar, Ladakh, Andaman, Goa, Rajasthan, Darjeeling,
  Hyderabad

Each individual destination also gets its own detail page, e.g.
`/destinations/international/dubai/` or `/destinations/dubai/` — decide one
consistent URL pattern (recommend nesting under `international`/`domestic`
to match the submenu structure and avoid slug collisions) and apply it
uniformly. Document the chosen pattern in the README.

**Packages**

- Honeymoon — `/packages/honeymoon/`
- Family — `/packages/family/`
- Group Tours — `/packages/group-tours/`
- Corporate & MICE — `/packages/corporate/`

These are **category filter views** of the same underlying Package
collection (filtered by a `category` field), not separate content types.
`/packages/` itself shows all packages with filters for category,
destination, budget, and duration.

Each package also gets a detail page: `/packages/[slug]/`.

**Fixed Departures**

- Upcoming Departures — `/fixed-departures/`
- International Calendar — `/fixed-departures/international/`
- Domestic Calendar — `/fixed-departures/domestic/`

**Services** — `/services/` (index) plus individual pages:

- `/services/air-ticket-booking/`
- `/services/hotel-booking/`
- `/services/travel-insurance/`
- `/services/customized-tour-packages/`
- `/services/mice-corporate-travel/`
- `/services/educational-tours/`
- `/services/adventure-tours/`
- Fixed Departure Tours → links to `/fixed-departures/` (no separate content
  page, per the client's nav spec)
- `/services/certificate-attestation/`

**About**

- `/about/` — full About page (Section 5 has exact copy)
- `/about/ramzi-mohammed-ali/` — founder profile page
- `/reviews/` — customer reviews/testimonials
- `/gallery/` — single consolidated gallery (replacing the old site's two
  competing gallery systems)

**Contact**

- `/contact/` — no submenu, direct link. Both offices (Kottayam HQ,
  Trivandrum branch), all phone numbers labeled by role, both emails
  (correct `.in` domain — the legacy site had a `.com` typo, do not repeat
  it), embedded Google Maps for both locations, and a general enquiry form.

---

## 4. Content Model (MongoDB / Mongoose schemas)

Build these as separate collections:

### Destination

- `slug`, `name`, `region` (`international` | `domestic`), `order` (integer,
  for demand-based sorting — Dubai/Singapore/Thailand/Maldives first)
- `heroImage` (Cloudinary URL), `gallery` (array of Cloudinary URLs)
- `intro` (rich text/markdown), `whyVisit`, `bestTimeToVisit`
- `topAttractions` (array of strings or small objects)
- `faqs` (array of `{ question, answer }`)
- `metaTitle`, `metaDescription` (SEO)
- Virtual/computed: related packages (query Package where
  `destination` ref matches)

### Package

- `slug`, `title`, `destination` (ref → Destination), `category`
  (`honeymoon` | `family` | `group-tours` | `corporate` | `customized`)
- `type` (`fixed-departure` | `customized`)
- `durationDays`, `durationNights`
- `priceFrom` (number, INR — no USD anywhere on the new site)
- `inclusions` (array of strings), `exclusions` (array of strings)
- `itinerary` (array of `{ day, title, description }` — day-wise, rendered as
  HTML, not a PDF)
- `gallery` (array of Cloudinary URLs), `mapCoordinates` (optional)
- `pdfUrl` (optional — a _generated/secondary_ download, not the primary
  content artefact)
- `highlights` (array of strings — for "Point of Attractions" style content)
- `status` (`active` | `draft`)
- `metaTitle`, `metaDescription`

### Departure

- `package` (ref → Package)
- `departureDate`, `returnDate` (or duration-derived)
- `price` (can override package's `priceFrom` for this specific date)
- `seatsTotal`, `seatsRemaining`
- `status`: compute as `upcoming` | `expired` | `sold-out` based on date and
  seats — **do not delete or hide expired departures**. Show them in the UI
  clearly labeled (e.g. greyed out with an "Expired" or "Departed" badge)
  rather than dropping them, so the calendar pages show full history/context
  without looking like dead/broken listings. Filter the _default_ view to
  upcoming-first, with an option to reveal past departures.

### Service

- `slug`, `icon`, `title`, `shortDescription`, `longDescription` (rich text)
- `ctaLabel`, `ctaType` (`enquiry` | `phone`)

### Testimonial

- `name`, `tourTaken` (optional ref → Package or free text), `date`,
  `rating` (1–5), `quote`, `photo` (optional Cloudinary URL), `source`
  (`google` | `justdial` | `direct` — manual entry for now, no live API sync)

### GalleryItem

- `image` (Cloudinary URL), `caption`, `category` (`ads` | `memories` |
  `office` | other real taxonomy — no duplicate images, no dead filter tabs)

### Office

- `name`, `address`, `phones` (array of `{ label, number }` — e.g. "Sales
  Manager", "Operations Manager"), `email`, `mapEmbedUrl`, `hours`

### Enquiry

- `name`, `email`, `phone`
- `channel` (`whatsapp` | `email`) — which button the user clicked
- `serviceType`, `destination`, `package` (refs, optional depending on where
  the enquiry originated)
- `travelDates` (`{ from, to }`, optional), `adults`, `children`,
  `budgetRange`
- `message`
- `status`: `new` | `contacted` | `quoted` | `confirmed` | `lost` (admin can
  update)
- `source` (which page/CTA it came from — for later attribution work)
- `createdAt`

### AdminUser

- `name`, `email`, `passwordHash`, `role` (`admin` | `staff`)
  - `admin`: full CRUD on all content + can manage other admin users
  - `staff`: can view/update Enquiry status only, cannot delete content or
    manage users
- `createdAt`, `lastLoginAt`

---

## 5. About Page — Exact Content

Build `/about/` using the following copy essentially verbatim (light HTML/JSX
structuring is fine, but do not paraphrase or shorten the client-provided
narrative). Render as clearly sectioned content matching the section
breaks below, each section getting appropriate visual treatment (not one
undifferentiated wall of text).

**Hero**: "Somebody has to handle the details. For thirteen years, that's
been us." with sub-line "Since 2013 · IATA Accredited · 4.8★ from 532
travellers"

**Section 1 — Opening**: "Every journey starts long before the airport..."
through "...somebody has to take responsibility for the details. For more
than twelve years, that has been our job."

**Section 2 — Our Story**: "One man, one desk, and a refusal to leave people
guessing." — full founder story about Ramzi Mohammed Ali, founding in 2013.

**Section 3 — Vision & Mission**: Mission and Vision statements as given.

**Section 4 — The Team**: "Read our reviews and you'll notice something."
— names Junaid, Ben, SriSankar, Aditya as staff referenced in reviews.

**Section 5 — IATA Accreditation**: "A credential matters for what it means
at 2 a.m." — full section as given.

**Section 6 — What We Do**: Service summaries (Customized Tours, Fixed
Departures, MICE & Corporate, Air Ticket Booking, Hotel Booking, Certificate
Attestation) each linking to their respective `/services/[slug]/` page. End
with an "Explore all services" CTA button → `/services/`.

**Section 7 — Reach**: "Kerala is home. The world is the map." Include a
"Browse destinations" CTA → `/destinations/`.

**Section 8 — Proof**: "4.8★ from 532 reviews." — link through to `/reviews/`.

**Section 9 — Closing/CTA**: "We measure success differently." Ends with a
prominent "Plan My Trip" button that opens the enquiry flow (Section 7).

Build `/about/ramzi-mohammed-ali/` as a dedicated founder profile page — pull
the founder-relevant material from Section 2 and expand with a photo
placeholder (Cloudinary) and role/title, since it's a standalone nav item.

---

## 6. Interactive Loader (Paper Plane Animation)

- Full-screen loader shown **on every full page load**, including hard
  refreshes on any route (not just first visit, and not skipped on internal
  client-side navigation triggering a full reload).
- Visual: an animated paper airplane (reference the 4th client-provided
  image — a bold, flat, single-color paper airplane silhouette with a
  vertical bar suggesting motion/takeoff) flying across the screen — use CSS
  or a lightweight animation approach (CSS keyframes or Framer Motion, your
  choice) in the brand's primary blue (`#0a9ddb`) against the neutral
  background.
- Displays a rotating or single emotional line built around the tagline —
  e.g. "Every travel is a blessing." — styled in the heading font.
- Keep it fast: this must not meaningfully harm perceived performance or
  Core Web Vitals. Target a loader duration in the 800ms–1.5s range, tied to
  actual content readiness where feasible rather than an arbitrary long
  timeout, and ensure it's skippable/fades out immediately if content is
  already ready.
- Implement as a client component that hooks into route/page load
  lifecycle; document clearly in code comments since this is an unusual
  "every load" requirement that a future developer might otherwise "fix" by
  making it first-visit-only.

---

## 7. Enquiry Flow (replaces payment for this phase)

This is the core conversion mechanism sitewide — every package, destination,
and service page ends in a clear enquiry CTA.

**UI**: An "Enquire Now" button/form that lets the user choose **WhatsApp**
or **Email** as the channel.

**Behavior — regardless of channel chosen**:

1. Enquiry is **always saved to MongoDB** (Enquiry collection) first.
2. Then, based on channel:
   - **WhatsApp**: redirect to `https://wa.me/<NUMBER>?text=<prefilled message>`
     with the prefilled message including package/destination name and any
     details the user entered.
   - **Email**: send via Resend to the business inbox (`info@alishatravels.in`)
     with the enquiry details, and optionally a confirmation email to the
     user.
3. Enquiry appears immediately in the admin dashboard's lead list regardless
   of channel, so staff never rely on checking a phone or inbox manually to
   know a lead exists.

**WhatsApp number as central config**: Do not hardcode the WhatsApp number
anywhere in components. Define it once in a config file (e.g.
`lib/config.js` or `.env` as `NEXT_PUBLIC_WHATSAPP_NUMBER`) and import it
everywhere a WhatsApp link/button is used (sticky mobile bar, package pages,
contact page, footer, etc.) so changing the number in one place updates it
site-wide.

**Form fields** (build the full conditional tree described below — this
replaces and fixes the old site's broken, duplicated version):

- Name, email, phone (required, always visible)
- Enquiry type: Tours / Other Services
  - If Tours: Tour type (Customized / Fixed) → Destination (populated
    dynamically from the Destination collection, not hardcoded) → travel
    dates (from/to), adults, children, budget range
  - If Other Services: Service type dropdown (populated from Service
    collection) — Visa Services / Hotel Booking / Attestation / etc.
- Message/notes (free text)
- No duplicate "Return Ticket" style fields — deduplicate per the old site's
  known defect.

**Sticky mobile action bar**: Call / WhatsApp / Enquire, persistent on mobile
viewports across the site.

---

## 8. Admin Dashboard

Route: `/admin/` (protected — redirect unauthenticated users to
`/admin/login/`).

**Auth**: Email + password login, multiple accounts, two roles (`admin`,
`staff`) as defined in Section 4. Seed at least one initial `admin` account
via a seed script (credentials from env vars, not hardcoded, printed once to
console on seed).

**Admin capabilities** (role: `admin`):

- Full CRUD on Destinations, Packages, Departures, Services, Testimonials,
  Gallery items, Offices
- Manage other AdminUser accounts (create/deactivate/change role)
- View, filter, and export the Enquiry list (CSV export is fine for now;
  no CRM integration in this phase)
- Update Enquiry status through the pipeline: New → Contacted → Quoted →
  Confirmed / Lost

**Staff capabilities** (role: `staff`):

- View Enquiry list, update status only
- Read-only on all other content

**Package/Departure management UX**: Since a destination (e.g. Dubai) can
have multiple packages, and each package can have multiple departures, the
admin UI should reflect that nesting clearly — e.g. from a Destination's
admin detail view, show its Packages; from a Package's admin detail view,
show/manage its Departures inline, rather than three disconnected flat
tables.

Use shadcn/ui components for tables, forms, dialogs, and navigation within
`/admin/` to move fast — the admin experience does not need the same bespoke
design treatment as the public site.

---

## 9. Seed Data

Write a seed script (`scripts/seed.js` or similar, run via `node
scripts/seed.js` or an npm script) that populates MongoDB with realistic
starter content for **development only**, based on the legacy site's actual
inventory so the site isn't empty during development:

- All 19 destinations from the legacy audit (11 international + 8 domestic),
  correctly ordered, with placeholder Cloudinary images per destination (use
  a small set of representative travel stock images — do not repeat the
  legacy site's Vietnam/Dubai image mixup)
- The 4 known fixed departures (Pattaya & Bangkok, Ladakh, Phuket & Krabi,
  Langkawi) as Package + Departure entries — note their dates have passed,
  so they're useful for testing the "expired but still shown" behavior from
  Section 4
- The 9 (not 10 — drop "Fixed Departure Tours" as its own service since it
  now just links to `/fixed-departures/`) services from the new nav spec
- One seeded `admin` AdminUser
- A handful of placeholder testimonials and gallery items so those pages
  aren't empty

Clearly comment the seed script so the client can re-run or extend it, and
note in the README that production content should be entered via
`/admin/` going forward.

---

## 10. SEO & Technical Requirements

- Structured data: `TravelAgency`, two `LocalBusiness` entries (Kottayam +
  Trivandrum), `TouristTrip` per package, `FAQPage` where destination FAQs
  exist, `BreadcrumbList` sitewide.
- `sitemap.xml` and `robots.txt` generated dynamically (Next.js supports
  this natively via `app/sitemap.js` / `app/robots.js`).
- Canonical tags on every page.
- All images served via Cloudinary with responsive sizing, lazy-loaded below
  the fold, `next/image` where practical.
- No mixed content — everything HTTPS.
- Every link has real destination and visible/accessible text — no empty
  anchors, no `href="#"` placeholders left in production code.
- `tel:` links use properly encoded `+919562921818` format, no unencoded
  spaces.
- Lighthouse Performance target ≥ 90 mobile, LCP < 2.5s on 4G.
- Cookie consent banner gating any analytics (Google Tag Manager — reuse the
  legacy container ID `GTM-NF9ST9W5` so historical analytics continuity is
  preserved, but do not fire it until consent is given).

---

## 11. Explicit Scope Boundaries (do not build these yet)

- **No payment integration.** No Razorpay, no checkout flow, no "pay now"
  buttons anywhere.
- **No user-facing account system** (no customer login/signup/wishlist —
  that was dead weight on the legacy site and isn't in scope here).
- **No live Google Reviews API sync** — testimonials are manually entered by
  admin for now.
- **No blog/travel-guide content type**, no visa information hub, no CRM
  integration beyond CSV export, no analytics dashboard beyond what GTM
  provides, no abandoned-enquiry tracking. These are explicitly deferred to
  a later phase — do not scaffold empty versions of them "just in case."
- **No `/stories/` or `/our-impact/` page** — tagline only, per Section 2.

---

## 12. Suggested Build Order

1. Project scaffold: Next.js app, Tailwind + shadcn setup, MongoDB
   connection, Cloudinary utility, env var structure, `.env.example`.
2. Core schemas/models (Section 4) + seed script (Section 9).
3. Public site shell: layout, nav (Section 3), footer with tagline, sticky
   mobile action bar, loader (Section 6).
4. Destinations section (index, international/domestic listings, individual
   destination pages).
5. Packages section (index with filters, category pages, package detail
   pages with itinerary/inclusions/gallery).
6. Fixed Departures (calendar views, expired/upcoming/sold-out states).
7. Services (index + individual pages).
8. About (Section 5 content), founder page, Reviews, Gallery.
9. Contact page + both offices.
10. Enquiry flow end-to-end (form → MongoDB → WhatsApp redirect / Resend
    email → visible in admin).
11. Admin dashboard: auth, roles, CRUD screens, enquiry management.
12. SEO pass (structured data, sitemap, robots, meta tags per page).
13. Deployment config: `next.config.js` standalone output,
    `.github/workflows/deploy.yml`, DigitalOcean App Platform spec/README
    documentation.
14. Performance and accessibility pass against Section 10 targets.

Work through these phases sequentially and check in after each major phase
rather than attempting the entire build in one continuous pass.
