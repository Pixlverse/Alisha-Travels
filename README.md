# Alisha Tours & Travels

A rebuild of alishatravels.in as a single Next.js application — public site and
admin dashboard, one deployment, one URL.

This is a **lead-generation site, not a booking engine**. There is no payment
module in this phase. Every conversion point ends in an enquiry that is written
to MongoDB *first* and then routed to WhatsApp or e-mail, so a lead exists in
the dashboard whether or not the visitor completes the hand-off.

---

## Status

| Phase | Scope | State |
| --- | --- | --- |
| 1 | Scaffold, Tailwind + shadcn, MongoDB, Cloudinary, env structure | Done |
| 2 | Schemas and seed script | Done |
| 3 | Public shell — layout, nav, footer, loader, sticky mobile bar, homepage | Done |
| 4 | Destinations — index, region listings, 19 detail pages | Done |
| 5 | Packages — index with filters, 4 category views, 20 detail pages | Done |
| 6 | Fixed Departures — upcoming, international and domestic calendars | Done |
| 7 | Services — index (9 cards) and 8 detail pages | Done |
| 8 | About (verbatim copy), founder, reviews, gallery | Done |
| 9 | Contact — both offices, maps, enquiry form | Done |
| 10 | Enquiry flow — API, MongoDB-first write, Resend, sitewide dialog | Done |
| 11 | Admin dashboard — auth, roles, CRUD, enquiry pipeline | Done |
| 12 | SEO — structured data, sitemap, robots, canonicals | Done |
| 13 | Deployment config — App Platform spec, standalone build, CI/CD, health check | Done |
| 14 | Performance and accessibility pass | Done — a11y 100 on all 9 public pages; Performance 90 mobile, LCP short of target ([why](#why-lcp-misses-25s-honestly)) |

---

## Running it locally

```bash
npm install
cp .env.example .env.local     # then fill in the values
npm run seed                   # development content, safe to re-run
npm run dev                    # http://localhost:3000
```

`npm run seed -- --reset` clears the seeded content collections first. It never
touches `enquiries` or `adminusers`, so real leads and real logins survive a
reseed.

The seed script prints the initial admin credentials once, taken from
`SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD`. Change the password after the first
login.

### Requirements

- Node.js 20.9 or newer (Next 16 minimum; developed on 22).
- A MongoDB connection string. MongoDB Atlas in production; a local `mongod`
  is fine for development.
- Cloudinary and Resend credentials are optional locally — see below.

---

## Stack and the decisions behind it

| Area | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16 (App Router, JavaScript) | One app serves the public site, the admin dashboard and the API. No separate Express server, no CORS. |
| Bundler | Turbopack | The default in Next 16 for both `dev` and `build`. |
| Styling | Tailwind CSS v4 | Design tokens live in `app/globals.css` as CSS custom properties. |
| Admin UI | shadcn/ui (Radix base) | Fast, accessible primitives for tables, forms and dialogs. **Admin only.** |
| Public UI | Bespoke components | The public site must not read as a shadcn template. It uses the brand tokens directly. |
| Database | MongoDB Atlas via Mongoose | Connection is cached on `globalThis` (`lib/db.js`) so hot reloads and concurrent lambdas do not exhaust the Atlas connection pool. |
| Media | Cloudinary | `lib/cloudinary.js` is shared by the seed script and the admin uploader. |
| E-mail | Resend | Transactional enquiry mail from a verified `alishatravels.in` sender. |
| Auth | Custom JWT in an httpOnly cookie (`jose` + `bcryptjs`) | Chosen over NextAuth: this is a two-role internal dashboard with no OAuth, no public signup and no account linking. A signed cookie plus a `proxy.js` guard is less machinery, has no beta dependency, and reads clearly in Next 16's App Router. Planned for phase 11. |

### Typography

**Fraunces** for display, **Figtree** for body — both self-hosted through
`next/font/google`, so no request ever leaves for Google and there is no layout
shift.

Fraunces is a variable old-style display serif, warm and editorial rather than
corporate.

**It is no longer the heading face.** A base-layer rule used to apply it to
every `h1`–`h4` on the site, which meant every section title rendered as a soft
display serif whatever the component asked for. The review of that was blunt —
"feels childish" — so headings are now Figtree and Fraunces is opt-in.
It survives where it reads as character rather than as a default:

- the hero's tagline badge,
- the About page pull-quotes and their attributions,
- the oversized decorative quote mark on the founder page.

Card titles, section headings, office names, footer column headings and the
hero headline are all Figtree now. If you add a heading, do nothing — it will
be sans. Reach for `font-display` deliberately, and mostly with `italic`.

Figtree is the body face. The client asked for the register Airbnb uses;
Airbnb's own type is **Cereal**, which is proprietary, and Figtree is the
closest freely-licensed equivalent — the same geometric skeleton, low stroke
contrast, wide apertures and slightly softened terminals. It carries body copy,
navigation, forms, prices and the whole admin dashboard.

#### Section spacing is deliberately tight

`Section` pads `py-6 sm:py-7 lg:py-8` — 32px top and bottom at desktop, so
64px between adjacent sections.

It started at `py-16 sm:py-20 lg:py-24`, which was 96px each side. Measured on
the homepage that came to **1,152px of pure section padding on a 6,326px page**
— about 18% of the page was empty space between sections, and the client's
verdict was blunt: "too much white space between each section, and it's
throughout the website." The reference sites they pointed at run dense — title,
content, next title.

After the change: **384px of padding, page 5,414px** — a third of the padding
and 912px shorter, with no content removed. The per-section `py-*` overrides
scattered through `app/(site)/` were brought down in the same proportion (27 of
them), heading-to-content gaps went from `mt-10` to `mt-6`, and the card rails'
arrow row from `mt-5` to `mt-3`.

If a section genuinely needs more air, pass `py-*` through `className` — but
the default is tight, on purpose.

### Section headings are bare on purpose

Listing sections carry a title and nothing else — no eyebrow, no lead
paragraph. `SectionHeading` still accepts `eyebrow` and `lead`, but no call
site passes them.

The reasoning is the client's, and it is a good one: eyebrow + 44px heading +
a two-line lead on every section reads as filler by the third repetition, and
it pushed the actual content — the cards, the figures — a long way down the
page. Measured on the stats section before the change, the heading block was
258px tall above a 78px row of figures. The reference sites the client pointed
at (Akbar Travels, Headout) all use a single modest bold title with the "view
all" link on the same line, so that is the pattern now: `text-2xl` /
`sm:text-[1.75rem]`, not the old `lg:text-[2.75rem]`.

**`PageHeader` is the exception and keeps both.** A page's `h1` legitimately
has a supporting sentence — it is the page's own copy and carries SEO weight —
so `/destinations/`, `/packages/`, `/gallery/`, `/services/`, `/reviews/` and
`/fixed-departures/` all still open with eyebrow, `h1` and lead. Do not
confuse the two components when tidying.

## Colour

Defined once in `app/globals.css` and exposed as Tailwind utilities. Never
paste a hex value into a component.

- `--brand-500` `#0a9ddb` — primary (client-specified), `bg-brand`, `text-brand`
- `--brand-800` `#005c75` — deep accent (client-specified), `bg-brand-deep`
- `--mist-200` `#e3e3e5` — neutral background (client-specified), `bg-mist`
- Plus a tint/shade ramp either side of each, an ink scale for text, and a
  single warm `--sun` accent reserved for ratings and price bands.
- `--whatsapp` `#0e7a40` — WhatsApp affordances. Not WhatsApp's own `#25D366`,
  which carries white text at 1.98:1.

The public site is deliberately light-only; a dark inversion would fight the
photography.

#### Where brand-500 stops

**White text never sits on `--brand-500`.** It measures 3.06:1, and AA wants
4.5:1 for anything below 18.66px bold — which is every button on this site.
`--brand-600` does not fix it either (4.40). So white-on-blue surfaces use
`--brand-700` (5.99:1): the primary `Button` variant, the hero search submit,
the enquiry submit, selected filter pills, and the homepage's closing CTA panel.

`--brand-500` keeps everything that is not carrying text — the nav's active
underline, icon tints, star ratings, focus rings, outline-button borders — so
the brand colour is still the colour you see most.

`--ink-muted` was darkened from `#6a7a86` to `#566470` in the same pass. The
old value failed AA for small text on every surface it sits on. The new one is
picked against the darkest of them, `--mist-200` (4.75:1), because muted text
on a mist-200 chip appears in six places — status badges, expired departure
pills, inline `<code>`.

These were measured, not guessed — see the phase 14 notes under Performance
and accessibility.

---

## Header and hero

Both were rebuilt after the first review, on one instruction: **nothing may
recall the old alishatravels.in.**

What the legacy site did, and what replaced it:

| Legacy | Now |
| --- | --- |
| Dark utility strip across the top carrying the IATA badge, a phone number, an e-mail address and social icons, with the menu on a second row | One row. Logo left, navigation centred, Call and "Plan my trip" right. The IATA credential moved to where it persuades — the hero badge, About and the footer |
| No indication of which section you were in | An underline marks the active section, and the link carries `aria-current="page"` |
| Slider Revolution carousel of dark photographs, with "Learn More" buttons that had no destination | No slider. One brand-teal band carries the headline, both CTAs, the search card and the trust row, with the photograph bleeding in from the right on desktop. Every control leads somewhere real |
| A "Book Your Trip Now" form with three hardcoded, stale destinations | A three-tab search card — Packages / Destinations / Fixed departures — whose destination list comes from the database, and whose every field maps to a filter the site can actually answer |

The hero headline is the client's own copy, taken from the closing section of
the About text. The tagline sits in the badge above it, as the brand brief
asks. The dashed flight path in the background echoes the logo, which is itself
a paper aeroplane.

### The hero photograph and its licence

`public/images/singapore.jpg` — Marina Bay at blue hour, supplied by the
client.

**Its licence is unverified.** That is worth stating plainly, because the
drafts before it were deliberately CC0 — a public-domain dedication with no
attribution obligation, which is the only licence class that can ship as a
permanent hero with no credit line. This file's provenance is not known here.
If it came from a stock library, confirm the licence covers commercial web use
before launch.

Related trap, since it will come up again: most of Wikimedia Commons — and
*every* image in `scripts/seed-data/images.js` — is CC BY or CC BY-SA. That is
fine for development placeholders but needs visible attribution in production.
"It's on Wikimedia" is not the same as "it's free to use".

Why this image works where earlier attempts did not. Blue hour gives deep
blues and near-blacks that sit inside the `--brand-800` family, so the
photograph reads as an extension of the band rather than a clash — and its
dark edges mean no bright pixel lands near the type. Two rejected drafts show
the failure modes: a cherry-blossom shot of Chureito Pagoda was vivid but pink,
and Japan is not a destination the agency sells; misty Munnar tea gardens fixed
the destination problem but the greens fought the brand. Singapore is second in
the trending row, so the subject is also something the agency can book.

Stored at 2560×1707 / 384KB, down from 6000×4000 / 2.23MB, and still wider than
any derivative Next will serve from it. Nobody downloads that file:
`next/image` resizes and negotiates AVIF or WebP per request, so a browser
actually receives about **48KB of AVIF** at 1920 wide.

### No brand scrim behind the hero — and what that costs

The hero used to sit on a solid `--brand-800` panel. That was removed on client
request so the photograph reads at full strength behind the copy and the search
card. What remains is a **neutral black** vertical wash, not a brand tint, so it
deepens the photograph instead of colouring it.

The scrim was doing real work, so this is worth understanding before anyone
swaps the image. With a known flat colour behind the type, contrast was a
constant. Now every piece of hero text sits on whatever the photograph is doing
at that pixel. Measured on the current image, with the text hidden and the
background sampled directly:

| Element | Needs | Measured |
| --- | --- | --- |
| Headline, 50px bold | 3.0:1 | **4.35:1** |
| Tagline badge, 14px | 4.5:1 | **5.76:1** |
| Rating line, 14px | 4.5:1 | **12.29:1** |
| IATA line, 14px | 4.5:1 | **10.18:1** |

The wash stops (0.46 / 0.52 / 0.60 top to bottom) were set by that
measurement, not by eye: at 0.35 / 0.45 / 0.55 the headline came out at
**3.28:1** — passing, but with almost no margin and entirely at the mercy of
which pixel sat behind it.

**Lighthouse cannot check any of this.** It does not see through images, so it
reports the colour-contrast audit as passing regardless. If you change the hero
photograph, re-measure rather than trusting the score — a brighter image will
fail the headline silently.

### The hero fits one screen, deliberately

The brief for the rework was "in the same laptop screen I want to see the
search box filter and the details in hero as well". The previous hero stacked
badge → headline → a four-line paragraph → CTAs → trust row and only *then*
started the photo band with the search card floating over its lower edge: the
search box began around 1100px down, so on a laptop you never saw the two
together.

Everything now sits in one band. Measured on the built site, the trust row ends
at 609px and the band at 673px, so the whole hero is visible on a 1280×720
viewport with the 85px header above it. The descriptive paragraph was cut — it
was the biggest single vertical cost and it is not in the content the client
listed for this section.

The band is a flat `--brand-800` panel, not a photographic scrim. That is
deliberate on two counts: "nothing may recall the old alishatravels.in", and
the legacy hero was a carousel of dark photographs; and a flat brand colour is
the only way to keep hero text on a *known* contrast ratio, because the
photograph behind it is admin-editable and would otherwise give an
unpredictable one. White on `--brand-800` is 7.53:1.

**The photograph is rendered at every width and preloaded — and that is not
the obvious choice.** On mobile it sits under a 95%-opaque teal wash, so it is
visually almost nothing while still costing bytes, which makes hiding it look
like free money.

It was tried: photo layer `hidden` below `lg` plus `loading="lazy"`, which is
the pattern the Next 16 image docs use for art direction (they note that "the
default behavior of `loading='lazy'` ensures that only the correct image is
loaded", and that `preload` / `loading="eager"` would defeat it). Phones then
fetched no hero photo at all and mobile image weight fell from 254KB to 56KB.

**It made the metric worse.** Three runs each: LCP 3.5s → 3.7s, Performance
90 → 89. With no hero image the LCP element falls to a small paragraph further
down the page, which paints *later* than the preloaded 8KB photo did. So the
photo stays and the 198KB saving is deliberately left on the table, because
Section 10's target is the Lighthouse score.

If you would rather have the bytes than the point — a defensible call for
Indian mobile data — the revert is three lines and is spelled out in the
comment at the top of `Hero.js`.

### "Plan my trip" floats, bottom-right

It used to be the last item in the header, competing with the logo, six nav
items and the phone number, and it was the first thing to wrap to two lines
when the row ran short. It is now a fixed pill in the bottom-right corner from
`lg` up.

Below `lg` it is not rendered: `StickyActionBar` already owns the bottom of the
screen there with Call / WhatsApp / Enquire, and two floating controls on a
phone would cover content and duplicate the same destination. The cookie
consent card moved to the bottom-*left* on desktop so the two never overlap.

One known trade-off: like any floating action it sits over page content as you
scroll, and it is a solid fill, so text directly beneath it is hidden until you
scroll on.

### The navbar needs 1280px, and says so

The tagline is gone from the header — it crowded the nav at every width, and
the footer already carries it. Nothing in the header wraps any more either:
`whitespace-nowrap` is on the nav links, the phone pill and the `Button` base,
because "Fixed Departures", the phone number and the CTA were all breaking onto
two lines when the row ran short.

The desktop nav appears from `xl`, not `lg`. That is measured, not cautious:
six top-level items with five dropdown chevrons come to 688px, and with the
82px logo, the 300px action group and the gaps that needs about 1152px of inner
container. At `lg` (960px inner) the CTA overflowed the container by 43px. So
below `xl` the drawer takes over, which is also the honest answer to "it feels
congested" — the alternative was shrinking type and padding until it fit.

### Design backlog — hero and nav v3

The client supplied a full-fidelity mockup after the v2 rework. **Not yet
built** — deferred so the remaining page phases could land first. What it asks
for, so nothing is lost:

- **Hero becomes a split layout**, not centred: copy on the left, photography
  on the right, with the photograph masked by a large concave curve sweeping
  down the middle rather than sitting in a rectangle.
- **Headline left-aligned**, with the Fraunces italic accent line carrying a
  hand-drawn underline swoosh beneath it.
- **A script "Explore / Dream / Discover"** mark in the top-right of the
  photograph, with its own underline flourish.
- **Trust row becomes three labelled items with icons** — IATA accredited,
  4.8 from 532 travellers, Safe & Secure — divided by vertical rules, sitting
  above the search bar rather than below the CTAs.
- **Search card is a single row**, no tabs: Where to / Kind of trip / Budget,
  each with a round tinted icon chip and a chevron, and a pill Search button
  with a trailing arrow.
- **Badge above the headline** reads "Your next journey starts here" with a
  plane icon, replacing the tagline badge.
- **Soft circular blobs** in pale brand blue bleeding off the left and right
  edges of the section.
- **A "Why travel with us" band** directly below the hero: left column with an
  eyebrow rule, a two-tone headline and an "About us" button; right column of
  four icon-chip statistics; a dashed flight path curving across the lower
  right ending in a paper plane.
- **Nav needs re-arranging to fit** — at the mockup's width the six items plus
  the phone pill and CTA are cramped. Options: drop the tagline beside the
  logo, shorten "Fixed Departures", or move the phone number behind an icon.

---

## URL structure

Signed off by the client's SEO consultant. **Do not change these paths.** The
nav tree lives in `lib/site.js` (`NAV`) and is the single source of truth.

`trailingSlash: true` is set in `next.config.mjs` so every URL matches the
signed-off sitemap exactly. Next 308-redirects the slashless form.

### Destinations

Destination detail pages nest under their region:

```
/destinations/                          all destinations
/destinations/international/            the 11 international destinations
/destinations/international/dubai/      one destination
/destinations/domestic/                 the 8 domestic destinations
/destinations/domestic/kerala/          one destination
```

Nesting was chosen over a flat `/destinations/dubai/` because it mirrors the
submenu the SEO spec defines, keeps the two listing pages as real parents
rather than orphan filters, and removes any chance of a slug colliding with a
future top-level route.

### Everything else

```
/packages/                    all packages, filterable
/packages/honeymoon/          category views — filters over one Package
/packages/family/             collection, not separate content types
/packages/group-tours/
/packages/corporate/
/packages/<slug>/             package detail

/fixed-departures/            upcoming departures
/fixed-departures/international/
/fixed-departures/domestic/

/services/                    index (renders 9 cards — see below)
/services/<slug>/             8 service pages

/about/
/about/ramzi-mohammed-ali/
/reviews/
/gallery/
/contact/
/admin/                       dashboard (protected)
```

**Destination URLs 404 rather than soft-200.** A destination requested under
the wrong region (`/destinations/international/kerala/`), an unknown region
(`/destinations/nonsense/`) and an unknown slug all return a real 404. Without
that, crawlers would find an unbounded set of thin duplicate pages.

**A note on the services count.** The nav lists nine Services entries, but 4.8
"Fixed Departure Tours" links to `/fixed-departures/` rather than a page of its
own. So there are **eight** Service documents — one per real URL — and the
`/services/` index renders a ninth card pointing at the Fixed Departures
calendar. The menu and the index both show nine items, and
`/services/fixed-departure-tours/` correctly returns 404 rather than existing
as an empty page.

---

## The loader

The full-screen paper-plane loader shows on **every full page load** — first
visit, return visit and a hard refresh on any route. That is the requirement,
not a bug, and there is deliberately no `sessionStorage` "show once" check.

It does *not* appear on client-side navigation: it is mounted by
`app/(site)/layout.js`, and a layout does not re-mount when the router moves
between pages inside it.

Three details worth knowing before changing it:

- It is **server-rendered visible**, so it paints with the first frame.
  Waiting for hydration would show the page and then cover it.
- It hides as soon as `document.readyState === "complete"`, with an 800 ms
  floor so it cannot flicker and a 1500 ms ceiling so it cannot overstay.
- `.page-loader` in `app/globals.css` carries a **CSS-only fade-out at
  1500 ms**. If hydration fails or JavaScript is blocked, the overlay still
  clears itself. React only ever makes it leave earlier.

The animation runs on `transform` and `opacity` only, loads no images and no
libraries, and collapses to a static mark under `prefers-reduced-motion`.

The motif is not arbitrary — the client's own logo already contains a paper
aeroplane, so the loader reads as the brand mark taking off.

---

### The mark: a plane orbiting a ring

Reworked on client request into a paper plane flying a full circle with a
comet trail behind it, and the tagline beneath in Fraunces italic — the same
face as the hero badge, which is the only place the display serif still
appears.

How it works, because the trick is not obvious: the wake and the plane sit in
**one rotating group**. Rotating them together means the wake is fixed
relative to the plane, so it always reads as that plane's own trail rather
than a separate spinning shape. The falloff is two arcs — one long and faint,
one short and bright at the nose — which is cheaper and crisper than trying to
run a gradient along a curved stroke.

The arc endpoints are computed from the circle rather than eyeballed (centre
70,70, radius 52, nose at 0°, wake running back to −60° and −150°), and the
plane carries a 90° rotation because travelling clockwise through 0° means
heading straight down the screen. `transform-box: view-box` matters: inside an
SVG a percentage `transform-origin` resolves against the element's own bounding
box, not the circle, so the origin is given in user units.

It animates on `transform` only, so it stays on the compositor while the page
behind it is still parsing.

Under `prefers-reduced-motion` the plane does not orbit — it parks at the top
of the ring with its wake behind it, which still reads as a finished mark
rather than a half-drawn one.

**Both exit paths were re-verified after the rework:** with JavaScript the
overlay clears and `body` scrolling is restored; with JavaScript disabled the
CSS-only fallback still fades it out at 1500ms.

## Packages

`/packages/` and the four `/packages/<category>/` views are **filter views over
one Package collection**, not separate content types. Each category page
renders the same `PackagesBrowser` with its category locked and that control
hidden.

**Filtering happens in the browser.** The active inventory is a couple of dozen
documents, so the page ships them once and filters locally: instant to use,
cheaper than a round trip per keystroke, and it keeps `/packages/` a statically
generated page instead of turning dynamic the moment it reads a search param.
The URL stays the source of truth — filters are mirrored into the query string
with `replace`, so a filtered view is shareable, Back behaves, and the hero
search card's deep links (`?destination=&category=&minPrice=`) are read
straight back out.

Static route segments beat the dynamic one in Next's matcher, so
`/packages/honeymoon/` resolves to the category page and never to
`/packages/[slug]/`.

### Itineraries are HTML, not PDFs

The single biggest content fix on the site. The legacy itineraries existed only
as PDFs served over `http://` from `/wp-content/uploads/` — invisible to search
engines, painful on mobile, impossible to update without re-exporting.

Now the day-by-day itinerary is rendered on the page, and the PDF is the
secondary artefact:

- If a package has a `pdfUrl`, the Download control links to it.
- If it does not, the control prints, and the print stylesheet in
  `app/globals.css` strips the chrome, flattens the tinted bands, expands link
  URLs and stops a day breaking across a page boundary — so "Save as PDF"
  produces a clean itinerary.

A disabled or dead download button would have repeated exactly the legacy
habit of shipping controls that go nowhere.

---

## About copy

The nine sections of `/about/` are the client's own text, reproduced verbatim
in `lib/content/about.js`. The page contributes structure, not words: each
section gets its own visual treatment so the page reads as a sequence rather
than one wall of text, and the service and destination names the prose mentions
become real links to their pages.

Exactly **one** string on that page is ours rather than theirs — the heading
"What we are for." over Vision & Mission. Their section 3 is just the two
statements with no heading, and every other section has an `<h2>`; a section
without one is an accessibility gap. It is labelled as ours in the content
file.

**Two things flagged to the client, deliberately left as written:**

- The hero says "thirteen years" while sections 1 and 8 say "twelve" and "more
  than twelve". Founded 2013, so thirteen is the arithmetic — but this is their
  voice and their call.
- Their copy offered an alternative hero line, "Travel far enough, you meet
  yourself." The build brief selects the other one, so that ships; the
  alternative is kept in the content file for an easy switch.

---

## The enquiry form

`components/site/EnquiryForm.js` is the rebuild of the legacy "Book Your Trip
Now!" form. The audit's defect register for that form, item by item:

| Legacy defect | Now |
| --- | --- |
| Three duplicate "Return Ticket" fields, one per ticket type | The tree branches, it never repeats. There is no ticket-type branch at all |
| Destination list hardcoded to three stale options, while the site advertised nineteen | Populated from the Destination collection on every render |
| No travel dates, no passenger count, no budget field | From/to dates, adults, children and a budget range |
| Name, e-mail and phone absent from the rendered markup — unclear the form could even be replied to | All three required and always visible |
| Submissions likely e-mail only, with no database record | Phase 10: written to MongoDB *first*, then routed to the chosen channel |

The visitor chooses **WhatsApp or e-mail** as the reply channel.

### The order of operations is the point

`POST /api/enquiries` does exactly this, in this order:

1. Validate (zod).
2. **Write the Enquiry to MongoDB.**
3. *Only then* send e-mail, or hand back a WhatsApp URL for the client to open.

So the lead is recorded **before** the visitor is handed off, and regardless of
which channel they chose. A lead exists in the dashboard even if they close the
WhatsApp tab without sending anything, and staff never have to check a phone or
an inbox to discover that somebody got in touch. On the legacy site submissions
went to e-mail only with no database record — the audit could not even
establish whether that form could be replied to.

**E-mail failure never fails an enquiry.** The lead is already saved by the time
Resend is called, so a missing API key, an unverified domain or an outage is
recorded on the Enquiry's `emailError` field and surfaced in the dashboard,
rather than silently losing the lead. The visitor still sees success, because
as far as the business is concerned they succeeded.

### Popup blockers

Browsers only permit `window.open()` inside the user gesture that triggered it,
and our fetch resolves long after that gesture expires. `lib/submitEnquiry.js`
opens a blank tab synchronously on click and points it at the WhatsApp URL once
the response lands, falling back to navigating the current tab if even that is
blocked. The lead is saved either way, so the worst case is a lost scroll
position, not a lost enquiry.

### Spam handling

- **Honeypot** — a `website` field hidden from sight, from assistive tech and
  from the tab order. Anything in it came from a bot, and the API answers 200
  with a plausible body so the bot believes it worked while nothing is stored.
- **Rate limit** — 8 submissions per IP per 10 minutes. This is an in-memory,
  per-process counter: it stops a script filling the leads table, but on more
  than one instance each gets its own window. Move it to MongoDB or Redis if
  that ever needs to be exact.

### Where it appears

"Enquire now" opens the form **in place** as a native `<dialog>`, pre-scoped to
whatever page opened it — so nobody has to navigate to `/contact/` and
re-explain which package they were reading. The "Want us to call you?" form in
the package sidebar goes through the same path with just a name and a number.

---

## The dashboard

`/admin/` — auth, content CRUD and the lead pipeline. shadcn/ui throughout,
which is exactly the split the brief asks for: the public site is bespoke, the
dashboard is built from the component library.

### Auth and roles

A signed JWT in an httpOnly cookie (`jose` + `bcryptjs`). There is **no public
signup** — accounts come from the seed script or from an existing admin.

| | admin | staff |
| --- | --- | --- |
| View and work enquiries, change status, add notes, export CSV | ✅ | ✅ |
| Create, edit and delete content | ✅ | ❌ |
| Upload images | ✅ | ❌ |
| Manage team accounts | ✅ | ❌ |

**Three layers, and only the last two are boundaries.** `proxy.js` (Next 16's
renamed `middleware.js`) bounces signed-out visitors — an optimistic check on a
cookie. `app/admin/layout.js` re-reads the session server-side on every render.
Every Server Action calls `requireAdmin()` or `requireSession()` again, because
a cookie is something the client holds and could be stale after a role change.
Hiding a nav link from staff is a courtesy, not security.

A staff account following a bookmark to a content page is **redirected to
`/admin/denied/`**, not shown a 500. Nothing has gone wrong — they simply do not
have that permission — and the page says what they *can* do and links there.

### One form engine, seven collections

`lib/admin/resources.js` describes each collection; `components/admin/ResourceForm.js`
renders all of them. Adding a field to a schema is a one-line change there
rather than an edit across a list page, a create page and an edit page.

Field types: `text · slug · textarea · number · checkbox · select · date ·
image · imageList · stringList · objectList · ref`. Values arrive from the
browser as strings and are coerced back to schema types **on the server**, so
the client is never trusted about what a number or a date is.

The nesting the brief asks for is there: open a package and its departures are
listed inline with an Add button that pre-selects the parent. Deleting a
package that still has departures is refused rather than silently orphaning
them.

### Safety rules enforced server-side

- You cannot change your own role, deactivate or delete your own account.
- You cannot remove the last active admin, by deletion or by demotion.
- Passwords are bcrypt hashes with `select: false` — never loaded into memory
  by the users page, and unreadable afterwards. A reset sets a new one.
- The CSV export escapes cells beginning `=`, `+`, `-` or `@`. Every value in
  that file was typed by a stranger on the internet, and Excel treats those as
  formulas.

---

## SEO

The legacy site had no structured data at all. Everything emitted here
describes something the page actually renders — that is Google's rule, and it
is also the honest test: if the markup claims a price, a rating or an FAQ, the
page shows it.

| Type | Where |
| --- | --- |
| `TravelAgency` + `WebSite` | Once, in the site layout. Every other page references the organisation by `@id` rather than repeating the business details |
| `TravelAgency` (LocalBusiness) ×2 | `/contact/` — one node per office, each with its own address, geo, hours and map, pointing at the organisation as parent |
| `TouristTrip` | Every package, with the INR offer and the day-by-day itinerary as an `ItemList` |
| `TouristDestination` | Every destination, with its attractions |
| `Service` | Every service page |
| `FAQPage` | Wherever FAQs are rendered — destinations, packages, services |
| `Review` + `AggregateRating` | `/reviews/`, extending the organisation node by `@id` rather than restating it |
| `BreadcrumbList` | Every page below the top level, built from the same array the visible breadcrumb renders, so the two can never disagree |

**`TouristTrip`, not `Product`.** The audit flagged that the original spec used
the two interchangeably. `Product` describes a thing you buy off a shelf and
would misrepresent an itinerary that gets rebuilt around each traveller.

**A note on `FAQPage`.** Since August 2023 Google shows FAQ rich results only
for authoritative government and health sites, so this will not produce
accordions in Google's results for a travel agency. It is still emitted —
other engines and assistants consume it and it costs nothing. Do not remove it
expecting rich results to appear; do not expect them either.

### Sitemap and robots

`app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and `/robots.txt`
dynamically from the database — **65 URLs**: 18 static routes plus 19
destinations, 20 packages and 8 services. Every URL carries a trailing slash to
match `trailingSlash: true`; listing the slashless form would submit URLs that
308-redirect and waste crawl budget.

`robots.txt` disallows `/admin/`, `/api/` and filtered `/packages/?*` views —
the filtered listings are the same inventory reordered, and the canonical
unfiltered pages are what should rank. That is a crawl instruction, not access
control: the dashboard is protected by `proxy.js`, the layout session check and
per-action role checks.

---

## Content model

Nine collections in `models/`. `models/index.js` re-exports them all; import
from there so every schema is registered before a `.populate()` runs.

`Destination` · `Package` · `Departure` · `Service` · `Testimonial` ·
`GalleryItem` · `Office` · `Enquiry` · `AdminUser`

Two deliberate deviations from the brief, both widening rather than narrowing:

- **Images are objects, not bare URL strings** (`{ url, publicId, alt, width,
  height }`). Alt text is required on every image by the accessibility target
  and belongs with the image rather than being reinvented at each render site;
  `publicId` is what lets the admin delete an asset from Cloudinary instead of
  leaving orphans behind.
- **Departure status is derived, never stored.** A stored status goes stale the
  moment nobody logs into the admin for a week — which is exactly how the
  legacy site came to be advertising tours that had departed 15 months earlier.
  `departureAvailability()` in `models/Departure.js` computes
  `upcoming | expired | sold-out` from the date and the seat count.

Expired departures are **never deleted or hidden.** They render greyed out with
a "Departed" badge behind a "show past departures" toggle, so the calendar
shows a real operating history instead of a suspiciously empty page.

The three Fixed Departures pages group upcoming departures by month with a jump
strip, then fold past ones into a `<details>` below. That is the full answer to
the legacy site's worst symptom — it advertised four tours that had left 15 to
23 months earlier, so it read as abandoned. Deleting them is the obvious fix and
the wrong one: a calendar with three rows reads as a business that has stopped
operating. Showing the history, clearly marked, turns the same data into an
operating record.

Scarcity badges ("Only 6 seats left") come from `seatsRemaining` on the
Departure document. The legacy tour pages carried a hardcoded "8 travellers are
considering this tour right now!" — nothing on this site invents urgency.

---

## Seed data

`scripts/seed-data/` holds the content, `scripts/seed.js` runs it. Everything
is matched on a natural key (slug, or package + departure date) so re-running
updates in place.

- **19 destinations** — 11 international, 8 domestic, in the demand order the
  nav spec fixes, each with intro / why-visit / best-time / attractions / FAQ
  copy. On the legacy site all 19 were dead tiles: nineteen high-intent landing
  pages that existed only as JPEGs.

  These counts are for this document only. **The size of the destination list
  is not published anywhere on the site**, at the client's instruction — not as
  a figure ("19 destinations"), not spelled out ("nineteen places"), and not
  derived from the collection either (`destinations.length` in a heading or
  eyebrow counts as publishing it). Copy that needs to refer to the list says
  "every destination" or names the places.
- **20 packages** across all four categories, including the four fixed
  departures the legacy site advertised.
- **13 departures.** The five real 2024–2025 dates are kept exactly as they
  were, so they are all in the past — that is the fixture that exercises the
  "expired but still shown" behaviour. Eight plausible future dates sit
  alongside them so the default upcoming view is not empty.
- **8 services**, **6 testimonials**, **11 gallery items**, **2 offices**, and
  one `admin` account.

### About the seeded images

They are freely licensed Wikimedia Commons photographs, chosen so every
destination shows a picture of *itself* — the legacy site put a Dubai
photograph on the Vietnam tile.

With Cloudinary configured, the seed uploads each one into the client's own
account and stores the returned `secure_url`, so nothing in production
hotlinks. Without Cloudinary it stores the source URL so the site still renders
locally, which is why `thumb.wikimedia.org` is allowlisted in
`next.config.mjs`. **Both the images and the testimonial text are placeholders
and must be replaced before launch.**

Production content goes in through `/admin/`, not through this script.

---

## Legacy redirects

`next.config.mjs` 301s the indexed WordPress URLs identified in the site audit:

| From | To |
| --- | --- |
| `/our-destinations/` | `/destinations/` |
| `/fixed-departure-tours/` | `/fixed-departures/` |
| `/memory-book/` | `/gallery/` |
| `/portfolio/*` | `/gallery/` |
| `/tour/dubai\|singapore\|malaysia/` | the matching destination page |
| `/payment/` | `/contact/` (302 — no payment module in this phase) |

`/about/`, `/services/` and `/contact/` keep their existing paths.

---

## Environment variables

See `.env.example` for the annotated list. Summary:

| Variable | Required | Notes |
| --- | --- | --- |
| `MONGODB_URI` | yes | Atlas connection string including the database name. |
| `CLOUDINARY_URL` *or* `CLOUDINARY_CLOUD_NAME` + `CLOUDINARY_API_KEY` + `CLOUDINARY_API_SECRET` | production | Optional locally. |
| `RESEND_API_KEY` | production | Optional locally; enquiries still save without it. |
| `ENQUIRY_FROM_EMAIL` / `ENQUIRY_TO_EMAIL` | production | Sender must be on a verified domain. |
| `AUTH_SECRET` | yes | `openssl rand -base64 48`. Signs the admin session cookie. |
| `SEED_ADMIN_NAME` / `SEED_ADMIN_EMAIL` / `SEED_ADMIN_PASSWORD` | seeding only | |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical origin for canonicals, sitemap and structured data. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | yes | `wa.me` format — country code, digits only, no `+`. |
| `NEXT_PUBLIC_GTM_ID` | yes | Legacy container `GTM-NF9ST9W5`, reused for analytics continuity. Fires only after cookie consent. |

**The WhatsApp number is never hardcoded in a component.** It is read once in
`lib/site.js` and imported everywhere — the sticky mobile bar, package pages,
the contact page, the footer. Changing it is a one-line edit.

---

## Deployment

DigitalOcean App Platform, project `first-project`, region `BLR1`. One app,
one component, one public URL serving both the site and its API routes — there
is no separate backend, no second origin and therefore no CORS configuration
anywhere in this repository.

There is **no Dockerfile**. App Platform's Node.js buildpack builds the app and
starts the standalone server directly, which is less machinery for the same
result — see below.

| File | What it is |
| --- | --- |
| `next.config.mjs` | `output: 'standalone'`, `trailingSlash: true`, image hosts, legacy redirects. |
| `scripts/postbuild.js` | Copies `.next/static` and `public` into the standalone bundle. Runs automatically after `npm run build`. |
| `.do/app.yaml` | The App Platform spec — buildpack, build/run commands, health check, env var scopes, domains, alerts. |
| `.github/workflows/deploy.yml` | Lint → build → deploy → smoke test on every push to `main`. |
| `app/api/health/route.js` | The endpoint App Platform polls. |

### How the build runs — buildpack, no Dockerfile

The spec asks for `output: 'standalone'` "for a lean container". That reads like
it implies a Dockerfile, but it does not: `standalone` is a property of the
*build output*, not of how the build is packaged. Next traces exactly the files
the server imports and emits a self-contained `.next/standalone` with its own
`server.js` and a pruned `node_modules` (~44 MB against ~500 MB installed).
Running that is what makes the deployment lean, and the Node buildpack runs it
as well as a container would.

So the buildpack does all three steps:

```
npm ci  →  npm run build  (+ postbuild)  →  npm start
```

where `npm start` is `node .next/standalone/server.js`, **not** `next start` —
`next start` would need the full dependency tree at runtime, which is precisely
what standalone output exists to avoid.

This was first built with a multi-stage Dockerfile. It worked, but it bought
nothing App Platform does not already do, while adding a second place to declare
the Node version and a set of `ARG`/`ENV` lines that had to be kept in step with
`.do/app.yaml` by hand. Reach for a Dockerfile if this ever has to run somewhere
with no Node buildpack; until then it is overhead.

Two details still matter, and both are easy to break:

- **`.next/static` and `public` must be copied into the bundle.** Next
  deliberately does not trace them, because a CDN would normally serve them —
  and there is no CDN in front of this app, so the Node process serves
  everything. `scripts/postbuild.js` does the copy and is wired to the
  `postbuild` npm hook, so `npm run build` on its own produces a startable
  bundle. Skip it and the site answers `200` with no CSS, no fonts and no
  images, having logged no error at all.
- **The build needs the environment, not just the runtime.** `next build`
  prerenders the public pages, so it queries MongoDB and inlines every
  `NEXT_PUBLIC_*` value into the client bundle. That is why those keys are
  `scope: RUN_AND_BUILD_TIME` in `.do/app.yaml` — the buildpack injects
  RUN_AND_BUILD_TIME variables into the build step for you. Set them `RUN_TIME`
  only and you get a green build that deploys empty pages with an undefined
  WhatsApp number.

### First deploy

1. **MongoDB Atlas.** Create the cluster and a database user, then add
   `0.0.0.0/0` to the IP allowlist — App Platform does not publish static
   outbound IPs on the basic tiers. Restrict it later with VPC peering if the
   client wants that.

2. **Edit the spec.** In `.do/app.yaml`, set `github.repo` to the real
   `owner/repository`. Every `${...}` is a placeholder for a secret and must
   *not* be committed with a real value in it.

3. **Create the app**, substituting the secrets at apply time so they never
   touch the repository:

   ```bash
   export MONGODB_URI='mongodb+srv://…'
   export CLOUDINARY_URL='cloudinary://…'
   export RESEND_API_KEY='re_…'
   export AUTH_SECRET="$(openssl rand -base64 48)"

   envsubst < .do/app.yaml > /tmp/app.yaml
   doctl apps create --spec /tmp/app.yaml
   rm /tmp/app.yaml
   ```

   Anything marked `type: SECRET` is encrypted at rest by App Platform and
   shows as `EV[1:…]` if you read the spec back. Alternatively create the app
   from the spec without the secrets and paste them into
   **Settings → App-Level Environment Variables**, ticking *Encrypt*.

4. **Seed the production database** once, from your machine, with
   `MONGODB_URI` pointing at Atlas:

   ```bash
   MONGODB_URI='mongodb+srv://…' npm run seed
   ```

   It prints the initial admin credentials once. Sign in at
   `/admin/login/` and change the password immediately. The seed script never
   touches `enquiries` or `adminusers` on a re-run, so real leads and real
   logins survive a reseed.

5. **GitHub side.** Add a repository secret `DIGITALOCEAN_ACCESS_TOKEN` with
   write scope, and create an environment named `production` (Settings →
   Environments) if you want a required reviewer gating deploys — the workflow
   already declares it.

6. **DNS.** Point `alishatravels.in` and `www.alishatravels.in` at the app as
   App Platform instructs. `.do/app.yaml` declares the apex as `PRIMARY` and
   `www` as an `ALIAS`, so the redirect between them is handled by DO, not by
   the app.

### Every deploy after that

A push to `main` runs `.github/workflows/deploy.yml`:

```
push → lint → build (no MONGODB_URI) → deploy to App Platform → smoke test
```

The build step deliberately runs **without** database credentials.
`lib/data/_helpers.js` returns empty data and warns when `MONGODB_URI` is
absent, so the job still proves that the app compiles and that every page
renders — while no production credential is ever handed to a CI runner. The
real, data-populated build happens on App Platform, where
`MONGODB_URI` is scoped `RUN_AND_BUILD_TIME`.

`deploy_on_push` is `false` in the spec on purpose. Driving the deploy from
Actions means each deployment is attached to the commit that caused it, can be
re-run from the Actions tab, and only starts after lint and build pass. If you
switch `deploy_on_push` back on, disable the workflow — otherwise every push
deploys twice.

The `deploy` step targets the app **by name**, using the spec already stored in
App Platform rather than the one in the branch. So a bad `app.yaml` on a
feature branch cannot reshape production; spec changes are applied
deliberately with `doctl apps update <APP_ID> --spec .do/app.yaml`.

### The health check

`GET /api/health/` answers two questions: is the process up, and can it reach
MongoDB. Only the first is fatal.

A database blip returns `200` with `database: "degraded"`, because failing the
health check on a transient Atlas hiccup would take down the whole site —
including the statically generated pages, which do not need the database at
all — and App Platform would then roll the container in a loop. A non-200 from
this route should mean *this container is broken*, not *Atlas is slow*.

**`degraded` is not an alarm.** `lib/db.js` connects lazily on first use, and
the public pages are all prerendered at build time — so a perfectly healthy
production container reports `degraded` until something actually touches
MongoDB at runtime, which means an enquiry submission, an admin page, or an ISR
revalidation. That can be a long while after boot. This is the other reason the
route must not return 503 on a database miss: it would fail App Platform's very
first health check on every single deploy. Read `status: "ok"` as the liveness
signal and `database` as information only.

**The trailing slash is load-bearing.** `trailingSlash: true` means
`/api/health` answers `308` with a `Location` of `/api/health/`, and App
Platform's health check does not follow redirects — point it at the slashless
path and the deployment never goes healthy, however well the app is running.
The same applies to the smoke test in the workflow, which deliberately does not
pass `curl -L`. Both are set to `/api/health/`; keep them that way.

The smoke test at the end of the workflow polls the same endpoint through the
public domain for up to two minutes and fails the run if it never returns 200.

### Testing the production build locally

Worth doing before the first deploy, because it exercises the standalone bundle
that App Platform will actually run — something `next dev` never touches:

```bash
npm run build     # runs postbuild too, so the bundle is complete
npm start         # node .next/standalone/server.js
```

Then check `http://localhost:3000/api/health/` and confirm the homepage has its
CSS and images.

This catches the two failures `next dev` cannot: a standalone bundle missing
`.next/static` (every page renders unstyled, with no error anywhere), and a
health-check path that answers a redirect instead of `200`.

### E-mail

Enquiry notifications go out through Resend from a verified sending domain.
Add the domain in the Resend dashboard and publish the exact records it
generates for it — an SPF `TXT`, the DKIM `TXT` (Resend supplies the selector
and key), the `MX` record for the sending subdomain, and a `DMARC` `TXT` if
the client wants reporting. Resend shows the records verbatim; do not retype
them from memory.

`ENQUIRY_FROM_EMAIL` must be on that verified domain or Resend rejects the
send. `ENQUIRY_TO_EMAIL` can be a comma-separated list. Neither is required
for a lead to be captured: the enquiry is written to MongoDB *before* any
e-mail is attempted, and a Resend failure is logged, not surfaced to the
visitor.

### Rolling back

App Platform keeps previous deployments. Roll back from the app's Activity tab,
or `doctl apps list-deployments <APP_ID>` and then
`doctl apps create-deployment <APP_ID> --deployment-id <OLD_ID>`. A rollback
replays the old image; it does not undo database changes, so a bad content
edit is fixed in the dashboard, not by rolling back.

### After going live

- Confirm `https://alishatravels.in/sitemap.xml` and `/robots.txt` resolve and
  reference the production origin, then submit the sitemap in Search Console.
- Spot-check a few legacy URLs (`/our-destinations/`, `/memory-book/`,
  `/fixed-departure-tours/`) and confirm the 308s land on the new paths. Note
  that Next normalises the trailing slash *before* matching a redirect, so the
  slashless form of a legacy URL costs two hops (`/memory-book` →
  `/memory-book/` → `/gallery/`). The indexed WordPress URLs all carry the
  slash, so real traffic takes one hop; do not try to "fix" this by rewriting
  the redirect sources, because normalisation still runs first.
- Submit one real enquiry end-to-end and confirm it appears in the dashboard,
  the WhatsApp hand-off opens, and the notification e-mail arrives.
- Verify GTM `GTM-NF9ST9W5` fires only after the cookie banner is accepted.

---

## Performance and accessibility

Measured with Lighthouse against the production standalone build (`npm run
build && npm start`), mobile preset, three runs per page, medians reported.
Numbers below are reproducible with the commands in this section — they are not
estimates.

### Against the section 10 targets

| Target | Result |
| --- | --- |
| Lighthouse Performance ≥ 90 mobile | **90** median — met, but only just. Individual runs have come in anywhere from 82 to 93 on a developer laptop |
| LCP < 2.5s on 4G | **3.6s** median — **not met**, see below |
| `next/image` everywhere, lazy below the fold | Met — no raw `<img>` in the codebase |
| No mixed content | Met — no `http://` URL anywhere in `app/`, `components/`, `lib/` |
| No empty anchors or `href="#"` placeholders | Met — the only two `#` hrefs are the skip link and an in-page jump |
| `tel:` links encoded, no unencoded spaces | Met, and now enforced by `telHref()` rather than by convention |
| Cookie consent gates GTM | Met — the container is injected only after consent |

Treat the Performance number as sitting *on* the threshold rather than above
it. One of three runs on the final build scored 89. The spread comes from
measuring on a developer laptop; re-measure somewhere quiet, and in production,
before treating 90 as banked.

Accessibility was not given a numeric target in the brief. It is at **100 with
zero failures on all nine public pages** — home, destinations, packages,
fixed-departures, services, about, contact, reviews, gallery — audited
individually, because a score on one page says nothing about the others. Three
of those pages were failing before this pass.

### Why LCP misses 2.5s, honestly

The LCP element on the homepage is the hero photograph, which since the hero
rework covers the whole band. It is the largest thing in the viewport by a wide
margin, so it is always the LCP candidate.

Two things were tried and neither closed the gap. Preloading it with a
`fetchpriority` hint fixed the `lcp-discovery` audit but moved LCP only 3.5s →
3.4s. Removing it from mobile entirely so the LCP fell to text made it *worse*
(3.7s, Performance 89) — see the hero section above. The remaining levers are
framework-level or environmental, below.

What this pass did do, and what each was worth:

- The hero now emits a `<link rel="preload" as="image" fetchpriority="high">`
  in `<head>`. Before, Lighthouse's `lcp-discovery` audit failed on
  *"fetchpriority=high should be applied to the image preload request"*; it now
  passes. See the Next 16 note below — this did not work the way it used to.
- Homepage destination cards no longer load eagerly. They sit ~1100px down, so
  the old `priority={index < 2}` was fetching below-the-fold art at high
  network priority in the first 200ms, directly competing with the hero on a
  slow link.
- Photography dropped to the `quality={60}` rung that `next.config.mjs` already
  allowed but nothing used — the config comment even reserved it for "very
  large hero art", and every image was asking for 75. The hero went 15KB → 8KB;
  the homepage's card art went ~240KB → ~155KB.

What is left, in order of size:

1. **Render-blocking CSS, ~240ms.** Two stylesheets, 20KB and 1.3KB. Next
   controls this; there is no critical-CSS inlining to reach for without
   fighting the framework.
2. **The measurement environment is pessimistic.** Lighthouse's simulated 4G is
   1.6 Mbps / 150ms RTT, the images are Wikimedia placeholders being resized by
   the local Next optimiser on a laptop, and there is no CDN. Production serves
   the client's own photography from Cloudinary's CDN, with the app in BLR1
   next to the Kerala audience. **That will move the number, but it has not
   been measured — do not assume it clears 2.5s.** Re-run against
   `https://alishatravels.in` once real photography is in and record the result
   here.
3. **The loader is not the cause.** It is worth stating because it looks like
   the obvious suspect: it clears at 1500ms at the latest, well before LCP
   lands, and the hero paints behind it rather than after it.

### Next 16 changed the image priority API

`priority` is deprecated in Next 16 in favour of `preload`, and — this is the
part that matters — the deprecated prop no longer emits a `fetchpriority` hint
or, on its own, everything it used to. The codebase was using `priority` in ten
places, inherited from the Next 15 idiom.

The mapping now used, per `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`:

| Case | Props |
| --- | --- |
| The single, definitive LCP image (hero art) | `preload` + `fetchPriority="high"` |
| First row of a card grid, where which card is the LCP depends on viewport | `loading="eager"` + `fetchPriority="high"` |
| Anything below the fold | `loading="lazy"` (the default) |

The docs advise against combining `preload` with `fetchPriority`, but Next
forwards `fetchPriority` onto the preload link itself (`ImagePreload` in
`next/dist/client/image-component.js`), and without it the `lcp-discovery`
audit fails. Combining them is what actually satisfies the audit.

The card components take an `eager` prop, not `priority`, so the distinction is
visible at the call site.

### Reproducing the measurements

```bash
npm run build && npm start          # the standalone server, not next dev
npx lighthouse http://127.0.0.1:3000/ --preset=desktop   # or omit for mobile
npx lighthouse http://127.0.0.1:3000/ --only-categories=accessibility
```

Two warnings from experience:

- **Measure the standalone build, never `next dev`.** Dev has no minification,
  no image optimisation cache and a dev-only client bundle.
- **`rm -rf .next` first.** An incremental `next build` in this project has
  been observed serving a *stale prerendered page* — component edits were
  absent from `.next/standalone/.next/server/app/index.html` even though the
  build reported success and the source on disk was newer. It cost a round of
  wrong conclusions in this pass. Production is unaffected (App Platform builds
  a fresh container every deploy), but any local before/after measurement must
  start from a clean `.next`.

---

## Not in this phase

Deliberately excluded — do not scaffold empty versions:

- Payment integration of any kind. No Razorpay, no checkout, no "pay now".
- Customer accounts, login, signup or wishlist.
- Live Google Reviews API sync — testimonials are entered by admins.
- Blog / travel guides, a visa information hub, CRM integration beyond CSV
  export, an analytics dashboard beyond GTM, abandoned-enquiry tracking.
- A `/stories/` or `/our-impact/` page. The "Every travel is a blessing"
  tagline carries that thread for now; a `TODO` in `lib/site.js` marks where
  the nav entry slots in once campaign content exists.

## Content the client still needs to supply

- Real photography (the audit asks for the original high-resolution set).
- Genuine testimonials with permission to publish.
- The real office landline numbers — two are placeholders in
  `scripts/seed-data/content.js`, clearly marked.
- Current departure dates and prices in INR.
- A decision on the legacy `/privacy-policy/`, `/terms-and-conditions/` and
  `/refund-policy/` pages. They are live and indexed today but are not in the
  signed-off nav, and the refund policy existed for Razorpay, which this phase
  removes. They are not built yet.
- Company registration / GST details for the footer.
