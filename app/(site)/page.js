import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  CalendarDays,
  Compass,
  GraduationCap,
  Mountain,
  HandHeart,
  Heart,
  PhoneCall,
  Play,
  PlaneLanding,
  Scale,
  Star,
  Ticket,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";

import Button from "@/components/site/Button";
import CampaignFilm from "@/components/site/CampaignFilm";
import DealsTabs from "@/components/site/DealsTabs";
import DepartureMonths from "@/components/site/DepartureMonths";
import DestinationCard from "@/components/site/DestinationCard";
import Hero from "@/components/site/Hero";
import ScrollRow from "@/components/site/ScrollRow";
import StarRating from "@/components/site/StarRating";
import { Section, SectionHeading } from "@/components/site/Section";
import ServiceIcon from "@/components/site/ServiceIcon";
import TestimonialSpotlight from "@/components/site/TestimonialSpotlight";
import VideoReviews from "@/components/site/VideoReviews";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";

import { getDestinationsByRegion } from "@/lib/data/destinations";
import { getPackages } from "@/lib/data/packages";
import {
  getCampaigns,
  getServices,
  getTestimonials,
  getVideoTestimonials,
} from "@/lib/data/content";
import { SERVICES_PRESENTED_AS_PACKAGES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";
import { getDepartures } from "@/lib/data/departures";

/**
 * Content is edited through /admin/ rather than by redeploying, so pages are
 * statically generated and revalidated on a ten-minute window. A price change
 * made in the dashboard is live within ten minutes without a rebuild, and every
 * visitor in between is served a cached page.
 */
/**
 * The four kinds of trip, in the client's words. These are filter views over
 * the same package collection — see the note in PackagesBrowser — but they are
 * how people describe the trip they want, so the homepage leads with them.
 */
const PACKAGE_KINDS = [
  {
    icon: Heart,
    title: "Honeymoon packages",
    text: "You get one. It shouldn't feel like a template with two names typed into it. Quiet rooms, unhurried mornings, no schedule to keep.",
    href: "/packages/honeymoon/",
    linkLabel: "See honeymoon packages",
  },
  {
    icon: Users,
    title: "Family packages",
    text: "Grandparents who need a slower pace. A toddler who naps at two. Family holidays fail on logistics, never on destinations.",
    href: "/packages/family/",
    linkLabel: "See family packages",
  },
  {
    icon: UsersRound,
    title: "Group tours",
    text: "Friends, extended family, neighbourhood groups. One coordinator, one plan, nobody chasing anybody for a number.",
    href: "/packages/group-tours/",
    linkLabel: "See group tours",
  },
  /*
    Corporate & MICE used to be the fourth tile here, pointing at
    /packages/corporate/. Both are gone: the client's position is that a
    corporate movement is customised from scratch, so it is not a category of
    packages to browse. It is a SERVICE now, third in that menu, and it
    appears in the services band further down this page — which is also why it
    is not repeated here.
  */
  /*
    The last three moved here from the services band at the client's
    instruction — they are trips people buy, not work attached to somebody
    else's trip. Each line is the first sentence of the service page's own
    lead, so this band and the page it opens say the same thing, and each link
    goes to that page: the copy on them is the client's and it is indexed, so
    nothing was rebuilt to change a label.
  */
  {
    icon: Compass,
    title: "Customized tour packages",
    text: "Your dates, your budget, your pace. We say what the budget buys before we plan the trip, and the inclusions are written down.",
    href: "/services/customized-tour-packages/",
    linkLabel: "See customized packages",
  },
  {
    icon: GraduationCap,
    title: "Educational tours",
    text: "School and college trips built around the curriculum, with the supervision, transport and paperwork set out in writing.",
    href: "/services/educational-tours/",
    linkLabel: "See educational tours",
  },
  {
    icon: Mountain,
    title: "Adventure tours",
    text: "Trekking, rafting, diving and desert crossings, planned to the season and run with operators we have used before.",
    href: "/services/adventure-tours/",
    linkLabel: "See adventure tours",
  },
];

/**
 * Why people stay — the four promises, in the client's words.
 *
 * `chip` and `rule` are tonal steps of the brand ramp plus --sun, which is the
 * one non-blue the palette carries. Four genuinely different hues were tried
 * from the client's reference and dropped: see the note on the band.
 */
const PROMISES = [
  {
    icon: UserRound,
    chip: "bg-brand-100 text-brand-700",
    rule: "bg-brand-500",
    title: "One person, first message to last",
    text: "The planner who answers your enquiry is the one still answering the night before you fly. You never explain your trip twice.",
  },
  {
    icon: BadgeIndianRupee,
    chip: "bg-sun/15 text-sun-deep",
    rule: "bg-sun",
    title: "The quoted price is the price",
    text: "No fare that shifts on the way to payment. No hotel chosen because it pays us more. If a genuine cost moves, you hear why first.",
  },
  {
    icon: Compass,
    chip: "bg-brand-50 text-brand-600",
    rule: "bg-brand-300",
    title: "Advice from travellers who went ahead",
    text: "We recommend only what our own clients have come back and reported on, not what a brochure claims.",
  },
  {
    icon: PhoneCall,
    chip: "bg-brand-800/10 text-brand-800",
    rule: "bg-brand-800",
    title: "A number that works at 3 a.m.",
    text: "Journeys go wrong at inconvenient hours, in terminals far from home. Ours is answered.",
  },
];

const CORE_VALUES = [
  {
    icon: HandHeart,
    title: "What is entrusted is held",
    text: "A trip carries somebody's savings, somebody's leave, somebody's parents.",
  },
  {
    icon: Scale,
    title: "Plain dealing",
    text: "We would rather lose a booking than win it on a number that changes later.",
  },
  {
    icon: UserRound,
    title: "A name, not a reference number",
    text: "If you can't remember who's handling your trip, we've failed at something.",
  },
  {
    icon: PlaneLanding,
    title: "Measured at the arrival gate",
    text: "A journey is finished when you're home, not when it's paid for.",
  },
];

/** The eight destinations the homepage band names, international then domestic. */
const HOMEPAGE_DESTINATIONS = [
  "dubai",
  "singapore",
  "thailand",
  "maldives",
  "kerala",
  "kashmir-srinagar",
  "rajasthan",
  "goa",
];

export const revalidate = 600;

export const metadata = {
  title: "Alisha Tours & Travels — Tour Packages from Kerala",
  description:
    "IATA-accredited travel agency in Kottayam, Kerala. Customised tour packages, fixed group departures, honeymoons, family holidays and corporate travel, domestic and international.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [
    { international, domestic, all: destinations },
    packages,
    services,
    testimonials,
    videoReviews,
    campaigns,
    departures,
  ] = await Promise.all([
    getDestinationsByRegion(),
    // withNextDeparture: the fixed-departure cards in the band below carry
    // their travel date on the face of the card.
    getPackages({ limit: 60, withNextDeparture: true }),
    getServices(),
    getTestimonials({ limit: 6 }),
    getVideoTestimonials({ limit: 6 }),
    getCampaigns({ limit: 4 }),
    // No limit: the departures band is a calendar of every upcoming date, not
    // a list of the next few. There are tens of these, not thousands.
    getDepartures({ includePast: false }),
  ]);

  // The band below Services. It was hardcoded copy about one trip; it is a
  // collection now. The newest campaign leads the band and the others sit
  // beside it — the client's note was that the area should not be given over
  // to a single campaign when they have run several.
  const [campaign, ...otherCampaigns] = campaigns;

  /*
    TWO tabs, not four.

    Domestic and International were tabs in here as well, which meant a band
    headed "Promotional packages & fixed departures" was also showing every
    other package on the site — the client's note, and they are right: the
    tabs contradicted the heading. Those two are a different question ("where
    do you want to go?"), so they are links out of the band now rather than
    tabs inside it, and the band shows only what it says it shows.
  */
  const groups = [
    {
      key: "hot",
      label: "Promotional packages",
      href: "/packages/",
      packages: packages.filter((p) => p.featured),
    },
    {
      key: "fixed",
      label: "Fixed departures",
      href: "/fixed-departures/",
      packages: packages.filter((p) => p.type === "fixed-departure"),
    },
  ];

  /** Where the rest of the inventory lives, with a count so each link is honest. */
  const browseElsewhere = [
    {
      label: "Domestic packages",
      href: "/destinations/domestic/",
      count: packages.filter((p) => p.destination?.region === "domestic").length,
    },
    {
      label: "International packages",
      href: "/destinations/international/",
      count: packages.filter((p) => p.destination?.region === "international").length,
    },
    { label: "Every package", href: "/packages/", count: packages.length },
  ];

  // The hero photograph is data-driven rather than hardcoded, so the client can
  // change it from the dashboard by editing the Maldives destination image.
  // TODO: give the homepage its own hero image field once the client supplies
  // dedicated hero photography.
  const heroImage =
    destinations.find((d) => d.slug === "maldives")?.heroImage || destinations[0]?.heroImage;

  // The services band shows the work that surrounds a trip. The four the
  // client moved under Packages are advertised in the packages band instead —
  // see SERVICES_PRESENTED_AS_PACKAGES.
  const otherServices = services.filter(
    (service) => !SERVICES_PRESENTED_AS_PACKAGES.includes(service.slug)
  );

  // The Who-we-are photograph, data-driven like the hero: the client changes
  // it by editing the Kerala destination image in the dashboard.
  const storyImage =
    destinations.find((destination) => destination.slug === "kerala")?.heroImage || heroImage;

  // The eight the client names on this band, in the order the copy names them
  // — not the top of the demand-ordered list, which would put Ladakh and the
  // Andamans in front of Rajasthan and Goa.
  const trending = HOMEPAGE_DESTINATIONS.map((slug) =>
    destinations.find((destination) => destination.slug === slug)
  ).filter(Boolean);

  return (
    <>
      <Hero destinations={destinations} testimonials={testimonials} />

      {/* --------------------- Our Journey in Numbers ------------------------ */}
      {/*
        Redesigned to the client's mock: eyebrow with flanking rules, a proper
        section heading and lead, then four cards — each a soft tinted icon
        chip, a hairline rule, a bold figure and two muted lines.

        Every figure here is one the agency can stand behind. The legacy About
        page animated counters that read "0+ Customers" and "0% satisfaction",
        which did more damage than having no counters at all.

        The IATA card carries the real IATA mark from public/images/IATA.png
        rather than a generic shield — it is the credential that does the most
        persuading, so it should look like itself. The file is transparent, so
        it sits on the tinted chip cleanly.
      */}
      {/* No bottom border: it drew a hard rule directly above the next section's
          heading, which on the client's read was one separator too many — the
          stats band already has its own hairlines. */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50 via-white to-mist-50/70">
        <div className="container-page pt-8 pb-5 sm:pt-10 sm:pb-6">
          {/* Heading only. The eyebrow rules and the lead paragraph that used to
              sit here were the bulk of the section's height — measured, the
              heading block was 258px above a 78px row of figures — and the
              client's note was that eyebrow + heading + lead on every section
              reads as filler. The figures are the content; they can speak for
              themselves. */}
          <p className="eyebrow">Since {SITE.founded}</p>
          <h2 className="mt-3 text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
            Nothing for you to chase.
          </h2>

          {/*
            Cards, to the client's reference: a tinted icon chip on top, then a
            coloured rule beside the figure and its supporting lines, on a white
            card with a soft shadow and a faint accent mark in the corner.

            Two deliberate departures from that reference.

            First, the accents come from the brand ramp plus --sun rather than
            the reference's blue/mint/purple/sky, which would put three hues on
            the page that appear nowhere else in the site.

            Second, hover does not recolour the card at all. Two versions of a
            colour fill were built and both were cut on the client's read: a
            solid --brand-900 that flipped the figure, label, icon and rule to
            white (four navy blocks appearing under the cursor read as the row
            breaking apart), then a pale --brand-50 wash (still a tint change
            the cards did not need). What is left is the lift, a --brand-200
            ring and a slightly deeper shadow — enough to say the card is a
            link, with nothing inside it moving or changing colour. Do not
            reintroduce a fill here without asking; it has been rejected twice.

            The chips sit one step up from the reference at --brand-100/70 on
            three of the four cards, which the client kept after the fills came
            out.

            The Google mark labels the review count — the one figure whose
            source needs naming. Public domain for copyright, but a trademark:
            descriptive use is fine, do not restyle it.
          */}
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                chip: "bg-sun/15",
                rule: "bg-sun",
                watermark: <Star className="size-32 text-sun/35" strokeWidth={1} aria-hidden="true" />,
                icon: <Star className="size-6 fill-sun text-sun" aria-hidden="true" />,
                value: `${SITE.rating.value} on Google`,
                label: `${SITE.rating.justDial} on JustDial, earned one traveller at a time`,
                href: "/reviews/",
              },
              {
                chip: "bg-brand-100/70",
                rule: "bg-brand-500",
                watermark: <Ticket className="size-32 text-brand-100" strokeWidth={1} aria-hidden="true" />,
                icon: (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/images/IATA.png"
                    alt=""
                    aria-hidden="true"
                    width={406}
                    height={260}
                    className="w-8"
                  />
                ),
                value: "IATA accredited",
                label: "Tickets issued directly by us, not resold",
                href: "/about/",
              },
              {
                chip: "bg-brand-100/70",
                rule: "bg-brand-700",
                watermark: <CalendarDays className="size-32 text-brand-100" strokeWidth={1} aria-hidden="true" />,
                icon: <CalendarDays className="size-6 text-brand-700" aria-hidden="true" />,
                value: `Since ${SITE.founded}`,
                label: "Thousands of departures, and counting",
                href: "/about/",
              },
              {
                chip: "bg-brand-100/70",
                rule: "bg-brand-400",
                watermark: <HandHeart className="size-32 text-brand-100" strokeWidth={1} aria-hidden="true" />,
                icon: <HandHeart className="size-6 text-brand-600" aria-hidden="true" />,
                // NOT a destination count. The client does not want the size
                // of the destination list stated anywhere on the site — no
                // "19 destinations", no "nineteen places", and no derived count
                // either.
                value: "Hassle-free booking",
                label: "Customers can relax as our staff provide the service diligently",
                href: "/contact/",
              },
            ].map((item) => (
              <li key={item.value}>
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-[0_18px_40px_-30px_rgba(16,32,42,0.45)] ring-1 ring-transparent transition-[box-shadow,transform] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:ring-brand-200 hover:shadow-[0_24px_46px_-30px_rgba(10,68,87,0.4)] focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {/* The corner mark. The reference had a plain tinted circle
                      here; each card now shows its own subject instead, sized
                      well past the card and hung off the bottom-right corner so
                      `overflow-hidden` crops it to roughly half a glyph —
                      recognisable, but reading as texture rather than a second
                      icon competing with the chip.

                      z-0, under the z-10 content — NOT a negative z-index: the
                      card has its own bg-white, and a negative-z child paints
                      behind its parent's background, which is what made an
                      earlier decorative layer here invisible.

                      strokeWidth 1 throughout: lucide's default 2 is 2/24 of
                      the viewBox, so at this size it renders a ~9px stroke that
                      reads as a heavy graphic rather than a watermark. A filled
                      star was tried on the ratings card and had to go — even at
                      15% it sat as a solid beige lump beside three fine
                      outlines. --sun needs more opacity than the blues to hold
                      at one stroke, hence 35% against their --brand-100.

                      Not the IATA logo on its card: it is a trademark used
                      descriptively in the chip, and blowing it up as decoration
                      at 8% opacity is exactly the restyling to avoid. A ticket
                      carries that card's line ("issued directly by us"). */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -bottom-10 z-0"
                  >
                    {item.watermark}
                  </span>
                  <span
                    className={cn(
                      "relative z-10 flex size-12 items-center justify-center rounded-full",
                      item.chip
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="relative z-10 mt-5 flex gap-3">
                    <span
                      aria-hidden="true"
                      className={cn("w-0.5 shrink-0 rounded-full", item.rule)}
                    />
                    <span className="min-w-0">
                      <span className="block text-lg leading-tight font-bold text-ink">
                        {item.value}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-muted">
                        {item.label}
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------- Deals tabs ---------------------------- */}
      <Section tone="mist">
        <div className="container-page">
          <DealsTabs
            groups={groups}
            eyebrow="Promotional packages & fixed departures"
            title="Packages people are actually taking"
            lead="Priced in advance because we run them often. Hotels, transfers, sightseeing and taxes are settled before you ask."
            link="/packages/"
            linkLabel="All packages"
          />

          {/* The way out of this band. Domestic and International used to be
              two more tabs in it, which is how a band about promotions and
              fixed departures ended up showing the whole catalogue. */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-7">
            <p className="mr-1 text-sm text-ink-muted">Looking for something else?</p>
            {browseElsewhere.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
              >
                {item.label}
                <span className="font-sans text-xs text-ink-muted">{item.count}</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ------------------------ Trending destinations --------------------- */}
      <Section>
        <div className="container-page">
          <ScrollRow
            eyebrow="Destinations"
            title="Places we know well enough to argue about."
            lead="The ones we are asked for most often — not the limit of where we plan. We recommend only what our own clients have come back and reported on, and if you want somewhere that is not here, we will plan that too."
            link="/destinations/"
            linkLabel="All destinations"
            label="Destinations"
            itemClassName="w-[17rem] shrink-0 sm:w-[19rem]"
          >
            {trending.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} size="tall" />
            ))}
          </ScrollRow>
        </div>
      </Section>

      {/* ---------------------------- Testimonials -------------------------- */}
      {/*
        DIRECTLY BELOW DESTINATIONS, where the client placed it.

        It started life directly above the final call to action, behind three
        bands of our own account of ourselves — who we are, why people stay,
        what we hold ourselves to — so the first independent evidence on the
        page arrived after about four screens of the company describing
        itself. It moved below the departures, then to second band on the
        page, and this is where it settled: after the two bands that show what
        is for sale, before the ones that explain who we are.

        A visitor has now seen the packages and the places, which is the
        moment "is this lot any good?" occurs to them — and the answer is
        other people, not us.
      */}
      {testimonials.length ? (
        // MIST again. Destinations above it is white and the travel-packages
        // band below is mist, so the tint alternates rather than running two
        // greys together — which is the one thing to check whenever this
        // block moves. It also gives the reviews card a band to sit on.
        <Section tone="mist">
          <div className="container-page">
            <SectionHeading
              eyebrow="Proof"
              title="They remember the person, not the package."
              lead="Read our reviews and the pattern shows itself that people name the person who looked after them. Junaid. Ben. SriSankar. Aditya. Mini."
              link="/reviews/"
              linkLabel="Read all reviews"
            />
            {/* One quote in a spotlight with every reviewer listed beside it,
                replacing a six-card rail. The rationale and the interaction
                notes are in the component. */}
            <TestimonialSpotlight
              testimonials={testimonials}
              rating={SITE.rating}
              className="mt-6"
            />
          </div>
        </Section>
      ) : null}

      {/* --------------------------- Video reviews -------------------------- */}
      {/*
        Directly under the written reviews, because it is the same evidence in a
        stronger form: a traveller saying it on camera is the one thing a page
        cannot fake.

        It used to render only when there were videos, which meant it did not
        render at all — so the space the client asked to have set aside for
        video reviews was invisible, and looked like it had never been built.
        It is always here now, and VideoReviews draws reserved frames until
        the first video is added in /admin/ (Testimonials → Video review URL),
        at which point the frames give way to the real thing.
      */}
      <Section>
        <div className="container-page">
          <SectionHeading
            eyebrow="On camera"
            title="Some of them said it out loud."
            link="/reviews/"
            linkLabel="All reviews"
          />
          <VideoReviews reviews={videoReviews} />
        </div>
      </Section>

      {/* --------------------------- Travel packages ------------------------ */}
      {/*
        The four kinds of trip, drawn AS A MAP.

        The first attempt at this put the globe artwork behind the band and
        called it done, which was fair criticism: a picture behind a row of
        cards is a background, not a structure. This is the structure — the
        whole band is one map panel:

          · a graticule, drawn in CSS at 4rem so it reads as a chart grid
            rather than graph paper;
          · the connected-globe artwork as the landmass under it;
          · a compass rose in the corner and a scale bar opposite;
          · a dashed route curving through four points, drawn with
            preserveAspectRatio="none" so it stretches with the panel; and
          · the four cards STAGGERED onto those points, each pinned by a real
            map pin — a disc with one square corner, rotated to point down at
            the card it marks.

        Same family as the boarding pass on the 404 and the passport page on
        /about/: the site explains a trip using the objects a trip is made of.

        The route and the stagger are desktop-only. Below lg the cards stack,
        and a curve through a vertical stack is a line through nothing.
      */}
      <Section tone="mist">
        <div className="container-page">
          <SectionHeading
            eyebrow="Travel packages"
            title="Built around the people travelling, not around a price point."
            lead="A honeymoon shouldn't feel like a family holiday, and a corporate trip has different priorities from a weekend away."
          />

          <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-white p-5 ring-1 ring-brand-100 sm:p-8 lg:p-10">
            {/* The chart itself: grid, landmass, and the two bits of map
                furniture that say "this is a map" without a word on them. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--brand-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--brand-100)_1px,transparent_1px)] [background-size:4rem_4rem] opacity-60"
            />
            <span
              aria-hidden="true"
              style={GLOBE_MASK}
              className="pointer-events-none absolute top-1/2 left-1/2 aspect-[1500/946] w-[64rem] -translate-x-1/2 -translate-y-1/2 bg-brand-100/80"
            />
            <CompassRose className="pointer-events-none absolute top-6 right-6 hidden size-16 text-brand-200 lg:block" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 bottom-6 hidden items-end gap-1 lg:flex"
            >
              <span className="h-2 w-8 border-x-2 border-b-2 border-brand-200" />
              <span className="h-2 w-8 border-x-2 border-b-2 border-brand-200" />
            </span>

            {/* The route through the four stops. */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
              fill="none"
              className="pointer-events-none absolute inset-x-10 top-16 hidden h-40 lg:block"
            >
              <path
                d="M50 24 C 100 24, 100 96, 150 96 S 200 24, 250 24 S 300 96, 350 96"
                stroke="var(--brand-200)"
                strokeWidth="2"
                strokeDasharray="6 10"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <ul className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {PACKAGE_KINDS.map((kind, index) => (
                <li key={kind.title} className={index % 2 ? "lg:mt-16" : undefined}>
                  <Link
                    href={kind.href}
                    className="group flex h-full flex-col rounded-[1.25rem] bg-white p-6 ring-1 ring-brand-100 shadow-[0_20px_45px_-35px_rgba(16,32,42,0.6)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_55px_-30px_rgba(10,68,87,0.5)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <span className="flex items-start justify-between">
                      {/* A map pin: three rounded corners and one square one,
                          rotated 45° so the square corner points down at the
                          card. The icon is counter-rotated to stay upright. */}
                      <span className="flex size-11 rotate-45 items-center justify-center rounded-full rounded-br-none bg-white text-brand-700 ring-2 ring-brand-300 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700">
                        <kind.icon className="size-5 -rotate-45" aria-hidden="true" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-sans text-xs font-bold text-brand-300 tabular-nums"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <h3 className="mt-6 text-lg leading-snug font-semibold text-ink">
                      {kind.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{kind.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                      {kind.linkLabel}
                      <ArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>


      {/* -------------------------- Next departures ------------------------- */}
      {/*
        A CALENDAR, not the next four rows.

        This band used to render `departures` — the four soonest, in order,
        with no way to see past them. A group departure is bought on the date
        as much as on the destination ("what have you got in December?"), so
        the whole upcoming calendar is here now: a month rail, a month grid
        with the departure days live, and the list filtering to whichever day
        you pick. DepartureMonths has the rest of the reasoning.
      */}
      {departures.length ? (
        <Section tone="tint" className="py-6 sm:py-7">
          <div className="container-page">
            <SectionHeading
              title="Leaving next"
              lead="Set dates with seats still open. Pick a month, or a day, to see what leaves."
              link="/fixed-departures/"
              linkLabel="Full calendar"
            />
            <DepartureMonths departures={departures} />
          </div>
        </Section>
      ) : null}

      {/* ------------------------------ Campaign ---------------------------- */}
      {/*
        The campaign band, now DATA. It was the blind-school trip written into
        this file, which meant a band about the company's most human piece of
        work could only be changed by a deploy — and a second campaign could not
        be added at all. It reads the newest campaign from the collection and
        links to /campaigns/ for the rest.

        Three things about it are unchanged and deliberate.

        ONE — the photograph is labelled as illustrative in visible copy, not
        just in a comment, because /gallery/ tells visitors in as many words
        that its photography is "nothing staged, and nothing from a stock
        library". That label is a field on the campaign (`imageNote`), so it
        travels with whatever image the client sets.

        TWO — hands on a braille page, not a face. A stock portrait of an
        identifiable blind child reads as a claim that this is one of them.

        THREE — the payoff is the campaign's own pull quote, which for this one
        is the site tagline. If the client writes a different campaign with a
        different line, the band follows.
      */}
      {campaign ? (
        <section className="relative isolate flex min-h-[30rem] items-end overflow-hidden sm:min-h-[34rem]">
          <Image
            src={campaign.heroImage.url}
            alt={campaign.heroImage.alt || campaign.title}
            fill
            sizes="100vw"
            quality={60}
            className="object-cover grayscale brightness-[1.18] contrast-[1.08]"
          />

          {/* The scrim, angled so it is heaviest where the copy sits and
              lightest over the photograph's own subject on the right. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(100deg,rgb(6_18_25/0.93)_0%,rgb(6_18_25/0.86)_42%,rgb(6_18_25/0.38)_100%)]"
          />

          <div className="relative z-10 container-page py-12 sm:py-16 lg:py-20">
            {/* TWO COLUMNS now. This was one campaign at full width with the
                photograph behind it, which the client's note called out: they
                have run several, and the band gave the area to one of them and
                left no room for a film. The lead campaign keeps the left, and
                the right carries the film and the other campaigns. */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 ring-1 ring-white/25">
                <HandHeart className="size-4 text-brand-200" aria-hidden="true" />
                <span className="text-[0.6875rem] font-semibold tracking-[0.18em] text-white uppercase">
                  {campaigns.length > 1 ? "Our campaigns" : "Our campaign"}
                </span>
              </p>

              <h2 className="mt-6 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-white sm:text-[2rem]">
                {campaign.title}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                {campaign.summary}
              </p>

              {campaign.pullQuote ? (
                <p className="mt-8 border-t border-white/20 pt-7 font-display text-[1.875rem] leading-tight text-white italic sm:text-[2.75rem]">
                  {campaign.pullQuote}
                </p>
              ) : null}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={campaign.href} variant="white" size="lg">
                  Read the story
                </Button>
                <Button
                  href="/campaigns/"
                  variant="outline"
                  size="lg"
                  className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10"
                >
                  All campaigns
                </Button>
              </div>

              {campaign.imageNote ? (
                <p className="mt-5 text-xs leading-relaxed text-white/65">{campaign.imageNote}</p>
              ) : null}
            </div>

            {/* The film, and the campaigns this band is not leading with. */}
            <div className="lg:pt-4">
              <CampaignFilm
                videoUrl={campaign.videoUrl}
                still={campaign.videoThumbnail?.url || campaign.heroImage?.url}
                alt={campaign.videoThumbnail?.alt || ""}
                title={campaign.title}
              />

              {otherCampaigns.length ? (
                <>
                  <p className="mt-8 font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-brand-200 uppercase">
                    More of our work
                  </p>
                  <ul className="mt-4 divide-y divide-white/15 border-y border-white/15">
                    {otherCampaigns.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={item.href}
                          className="group flex items-center gap-4 py-4 focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
                        >
                          <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-brand-900">
                            {item.heroImage?.url ? (
                              <Image
                                src={item.heroImage.url}
                                alt=""
                                fill
                                sizes="3.5rem"
                                quality={60}
                                className="object-cover"
                              />
                            ) : null}
                            {item.videoUrl ? (
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 flex items-center justify-center bg-brand-900/45 text-white"
                              >
                                <Play className="size-4 fill-current" />
                              </span>
                            ) : null}
                          </span>
                          <span className="min-w-0">
                            <span className="line-clamp-2 text-[0.9375rem] leading-snug font-semibold text-white underline-offset-4 group-hover:underline">
                              {item.title}
                            </span>
                            {item.period || item.location ? (
                              <span className="mt-1 block text-xs text-white/60">
                                {[item.period, item.location].filter(Boolean).join(" · ")}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
            </div>
          </div>
        </section>
      ) : null}


      {/* ------------------------------ Services ---------------------------- */}
      {/*
        Reworked to the client's reference for this band. Four changes from what
        was here, all of them from that image:

        - The band is a wash that comes up out of white and goes back into it,
          rather than a flat --mist-50 panel. Starting and ending white was
          originally to separate it from "Leaving next", which sat directly
          above at tone="tint" (--brand-50/60) — a --brand-50 band butting onto
          that one read as a single undifferentiated blue block for a third of
          the page. The campaign band sits between them now, so that particular
          collision is gone, but white top and bottom is still what makes the
          wash read as a band rather than as a tint on the whole page.
        - Cards lose their border for a soft shadow and a --brand-100 hairline
          ring, which is what makes them sit ON the wash instead of being holes
          cut in it.
        - A folded corner on each card, and a short gradient rule over the
          heading. Both are the reference's; the rule is local to this section
          rather than a SectionHeading prop, because every other heading on the
          site is deliberately bare (see the note in Section.js) and this is the
          one band the client asked to dress up.
        - A dashed contrail and plane in the top-right corner, desktop only.

        The plane is the same glyph as the hero badge, not a new mark: the site
        already establishes it, and the contrail here is drawn rather than the
        animated /animations/paper-plane.svg the hero uses, which is a 43KB SMIL
        strip built for a full-width band and reads as a repeat of the hero
        further down the page.
      */}
      <Section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-brand-50/70 to-white">
        <ServicesBackdrop />

        <div className="relative z-10 container-page">
          <span
            aria-hidden="true"
            className="block h-1 w-14 rounded-full bg-gradient-to-r from-brand-500 to-brand-200"
          />
          <SectionHeading
            className="mt-4"
            eyebrow="Other services"
            title="One trip should never need two agencies."
            link="/services/"
            linkLabel="All services"
          />

          {/* Five services now, so three across and five on a wide screen —
              a four-column grid left a single card stranded on a second row. */}
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {otherServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white p-6 shadow-[0_18px_40px_-32px_rgba(16,32,42,0.5)] ring-1 ring-brand-100/70 transition-[box-shadow,transform] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:ring-brand-200 hover:shadow-[0_26px_48px_-30px_rgba(10,68,87,0.45)] focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {/*
                    The corner mark. The reference draws this as a triangle and
                    it was built that way first; the client asked for a wave
                    instead, so the diagonal is now an undulating edge with one
                    crest and one trough. Four candidates were rendered side by
                    side before this one — a single S-curve and a plain quarter
                    arc both read as a smudge rather than a wave at this size,
                    and a two-crest version at 64px was too small for either
                    crest to register.

                    clip-path: path() takes PIXELS, not percentages, so the
                    path and the size-14 box are one unit: change the box and
                    the wave no longer meets its corners. It was drawn at 80px
                    and every coordinate is that drawing scaled by 0.7 — scale
                    the whole path if this is resized again, do not nudge
                    individual points. Where path() is unsupported the clip is
                    simply dropped and the corner shows as a 56px gradient
                    square — soft enough at this opacity to pass as a
                    deliberate tint.

                    --brand-200 → --brand-400 at 50%, deepening on hover. It is
                    the only thing on the card that responds to hover apart from
                    the lift and the chip: the text sits over the top of this
                    wedge on a three-line description, and --ink-soft over
                    --brand-300 at this opacity still measures above 5:1.

                    600ms on an easeOutQuint, matching the card, and NOT the
                    300ms ease-out these all started on. The lift is only 2px,
                    but a 2px translate and a shadow that changes spread and
                    tint inside 300ms arrive together and read as the card
                    popping forward — the client's note was that it looked like
                    a hard zoom. Most of a long quintic curve's travel is in the
                    first third, so the card still answers the cursor
                    immediately and then settles instead of snapping.
                  */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 bottom-0 z-0 size-14 bg-gradient-to-br from-brand-200 to-brand-400 opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] [clip-path:path('M56,2.8C44.8,2.8,43.4,19.6,30.8,22.4C18.2,25.2,16.8,42,4.2,44.8C2.1,45.5,1.4,50.4,0,56L56,56Z')] group-hover:opacity-90"
                  />

                  <span className="relative z-10 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="relative z-10 mt-5 text-lg leading-snug font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="relative z-10 mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                    {service.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
            {/* The Fixed departure tours card that used to close this row is
                gone, at the client's instruction: Fixed Departures is a
                top-level menu item and has its own calendar page, so a card
                here advertised the same destination twice. */}
          </ul>
        </div>
      </Section>

      {/* ------------------------------ Who we are -------------------------- */}
      {/*
        REDESIGNED AGAIN, and this time the whole section rather than its
        furniture. The three-column version — heading, a ribbon of story text
        behind a rule, and a small photo card — put the client's best piece of
        writing in a column eight words wide and hung a postcard next to it.
        Both problems have the same cause: the copy was being fitted around a
        layout instead of the layout being built for the copy.

        So it is one dark panel now, and the writing is the design. The
        heading runs across the top, the three paragraphs flow as two columns
        of a single measure the way a printed page would set them, and the
        credit line and the button close it off along the bottom rule.

        The photograph survives as TEXTURE, not as a picture: it sits behind a
        heavy brand-900 scrim at low opacity, which is all a placeholder image
        should ever be asked to do. When the client supplies their own
        photography this panel gets better for free — and if they supply none,
        it still reads as deliberate.

        Not the campaign band twice over: that one is full-bleed, photographic
        and centred on a single line; this is an inset panel of body copy, and
        three sections separate them.
      */}
      <Section>
        <div className="container-page">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-11 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            {storyImage ? (
              <Image
                src={storyImage.url}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 76rem, 100vw"
                quality={55}
                className="object-cover opacity-30"
              />
            ) : null}
            {/* Angled, so the panel is heaviest under the heading and lightest
                where the photograph has room to show. Measured at the copy,
                not at the stops: --brand-100 over the lightest end still
                clears AA comfortably. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(105deg,rgb(10_68_87/0.96)_0%,rgb(10_68_87/0.92)_55%,rgb(10_68_87/0.82)_100%)]"
            />

            <div className="relative z-10">
              <p className="eyebrow text-brand-200">Who we are</p>

              <h2 className="mt-3 max-w-3xl text-balance-heading text-2xl leading-tight font-bold tracking-[-0.02em] text-white sm:text-[2rem] lg:text-[2.5rem]">
                Somebody has to handle the details. Since 2013,
                that&rsquo;s been us.
              </h2>

              {/* Real columns, not a grid of paragraphs: the text flows from
                  the foot of the first into the head of the second, so the
                  three paragraphs stay one piece of writing. */}
              <div className="mt-8 border-t border-white/15 pt-8 lg:columns-2 lg:gap-14">
                <p className="mb-5 break-inside-avoid text-[0.9375rem] leading-relaxed text-brand-100/90 sm:text-base sm:leading-relaxed">
                  In most families there is someone who always meant to see a particular place and
                  never did, and everyone knows who it is. So perhaps you&rsquo;ve been saying next
                  year for four years now. Perhaps this is the first flight anyone in your family
                  will board, and there&rsquo;s a quiet nervousness nobody has said out loud.
                  Perhaps it&rsquo;s a honeymoon you started saving for before the wedding date was
                  fixed.
                </p>
                <p className="mb-5 break-inside-avoid text-[0.9375rem] leading-relaxed text-brand-100/90 sm:text-base sm:leading-relaxed">
                  Whichever it is, when a journey finally comes to you, it&rsquo;s worth naming what
                  that is. It isn&rsquo;t a purchase. It&rsquo;s a blessing. Something granted, to
                  you, and not to everyone.
                </p>
                <p className="break-inside-avoid text-[0.9375rem] leading-relaxed text-brand-100/90 sm:text-base sm:leading-relaxed">
                  You&rsquo;re at the right desk. We&rsquo;ve been handling journeys like yours
                  since 2013, and we&rsquo;ve never once treated one as routine.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-6 border-t border-white/15 pt-8 lg:flex-row lg:items-center lg:justify-between">
                {/* The line that used to be the section lead reads better as a
                    credit at the foot — it is a masthead fact, not an opening. */}
                <p className="max-w-lg text-sm leading-relaxed text-brand-100/75">
                  {SITE.name} has worked as a tour operator in Kerala since {SITE.founded}, founded
                  by {SITE.founder}.
                </p>

                <div className="flex flex-wrap items-center gap-5">
                  <span className="font-display text-lg text-brand-200 italic">
                    {SITE.tagline}.
                  </span>
                  <Button href="/about/" variant="white" size="lg" className="shrink-0">
                    Read our story
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------ Why people stay with us -------------------- */}
      {/*
        Four promises that were four bordered boxes of text. They now sit on a
        tinted wash with the same soft radial backdrop the services band uses,
        each on a white card with a round icon chip and a short accent rule
        under it.

        The four accents are TONAL, not four new hues. The reference colours
        them blue / purple / green / orange; purple and green appear nowhere
        else on this site, and a row that introduces two one-off hues reads as
        a component borrowed from somewhere else. So the set is three steps of
        the brand ramp plus --sun, which the palette already reserves for
        ratings and price marks.
      */}
      <Section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-brand-50/70 to-white">
        <PromisesBackdrop />

        <div className="relative z-10 container-page">
          <SectionHeading
            eyebrow="Why people stay with us"
            title="A journey you&rsquo;re given shouldn&rsquo;t be handed to a stranger."
          />

          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((promise) => (
              <li
                key={promise.title}
                className="flex h-full flex-col rounded-[1.25rem] bg-white p-6 shadow-[0_20px_45px_-35px_rgba(16,32,42,0.55)] ring-1 ring-brand-100/70"
              >
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-full",
                    promise.chip
                  )}
                >
                  <promise.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base leading-snug font-semibold text-ink">
                  {promise.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{promise.text}</p>
                <span
                  aria-hidden="true"
                  className={cn("mt-6 block h-1 w-10 rounded-full", promise.rule)}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ----------------------------- Core values --------------------------- */}
      {/*
        Four values that were four lines of text beside a gradient dash. Each
        one now has a round icon chip and sits on a soft tile, and the band
        carries the dashed contrail from the services backdrop in its bottom
        corner — the one piece of decoration on an otherwise quiet band, and
        the same mark the site already uses twice.
      */}
      <Section className="relative isolate overflow-hidden">
        <ValuesBackdrop />

        <div className="relative z-10 container-page">
          <SectionHeading eyebrow="Our core values" title="What we hold ourselves to." />

          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:gap-x-6">
            {CORE_VALUES.map((value) => (
              <li
                key={value.title}
                className="flex gap-4 rounded-2xl bg-mist-50/80 p-5 ring-1 ring-line/70"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-brand-100">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-ink">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{value.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>


      {/* ------------------------------ Final CTA --------------------------- */}
      <Section className="pb-8 sm:pb-10">
        <div className="container-page">
          {/* brand-700, not brand-500: this panel carries white body copy at 16px
              and 20px, which needs 4.5:1. See the note in Button.js. */}
          {/* Solid, not glass. A frosted version was built here — a --brand-800/80
              pane on backdrop-blur over three blurred colour clouds — and
              reverted on the client's read. The measurements, if it is ever
              revisited: 80% tint is the floor, because composited over white
              the body copy sits at 5.85:1 and at 75% it drops to 4.21:1 and
              fails AA. */}
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-14 text-center sm:px-14 sm:py-20">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.22),transparent_55%)]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance-heading text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-[2.75rem]">
                Go well. Come back safely.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Every culture that sends people on journeys has some version of those words. Our
                work sits inside them — getting you there properly, and getting you home.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button href="/contact/" size="lg" variant="white">
                  Plan my trip
                </Button>
                <Button
                  href={whatsappLink()}
                  size="lg"
                  variant="outline"
                  className="border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/**
 * A compass rose for the travel-packages map: four points, a ring, and no
 * lettering — N/E/S/W at this size would be four smudges, and the shape says
 * "compass" on its own.
 */
function CompassRose({ className }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" focusable="false">
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
      <path d="M32 8 36 28 32 32 28 28Z" fill="currentColor" />
      <path d="M32 56 28 36 32 32 36 36Z" fill="currentColor" opacity="0.5" />
      <path d="M8 32 28 28 32 32 28 36Z" fill="currentColor" opacity="0.5" />
      <path d="M56 32 36 36 32 32 36 28Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/**
 * The promises band's decoration: the client's connected-globe artwork.
 *
 * It is used as a MASK, not as a picture. The supplied file is black line work
 * on an opaque white ground, so dropping it in as an <img> would either put a
 * white rectangle on a blue band or, blended, leave grey lines that belong to
 * no palette. Painting a brand colour THROUGH its alpha instead gives line
 * work in --brand-300 that sits in the band as if it were drawn for it.
 *
 * public/images/connected-globe-mask.webp is that alpha: the original
 * negated to greyscale so ink becomes opacity, black RGB underneath, 1500px
 * wide and 93KB against the original PNG's 1.4MB. Regenerate it from
 * public/images/connected-globe.png the same way if the artwork changes.
 *
 * The mask properties are inline rather than arbitrary Tailwind values: the
 * URL is the one thing here a class-name parser can mangle, and this element
 * is decorative and unique, so there is nothing to reuse.
 *
 * Anchored off the top-right and cropped by the band. Desktop only — at
 * tablet width it lands behind the heading, and below that there is no room
 * for it at a size worth loading.
 */
const GLOBE_MASK = {
  maskImage: "url('/images/connected-globe-mask.webp')",
  WebkitMaskImage: "url('/images/connected-globe-mask.webp')",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskSize: "contain",
  WebkitMaskSize: "contain",
};

function PromisesBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <span className="absolute -top-24 -left-28 size-[26rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-70" />
      <span className="absolute -right-24 -bottom-32 size-[30rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-60" />

      <span
        style={GLOBE_MASK}
        className="absolute -top-16 -right-24 hidden aspect-[1500/946] w-[42rem] bg-brand-300/70 lg:block xl:-top-20 xl:w-[52rem]"
      />
    </div>
  );
}

/**
 * The core-values band's decoration: a soft wash and a dashed contrail curving
 * up out of the bottom-right corner with the site's paper plane at the end of
 * it — the services band's mark, mirrored, so the two read as one motif rather
 * than two ideas.
 *
 * Desktop only. At tablet width the curve runs under the second column of
 * values, and shrinking it turns a 400px arc into a squiggle.
 */
function ValuesBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <span className="absolute -right-32 -bottom-40 size-[28rem] rounded-full bg-[radial-gradient(circle,var(--brand-50)_0%,transparent_65%)]" />

      <svg
        viewBox="0 0 420 160"
        fill="none"
        className="absolute right-2 bottom-0 hidden w-[26rem] lg:block"
        focusable="false"
      >
        <path
          d="M4 150C70 150 108 120 158 116s86 22 132 -8c34-22 56-52 122-96"
          stroke="var(--brand-200)"
          strokeWidth="2"
          strokeDasharray="5 11"
          strokeLinecap="round"
        />
        <g transform="translate(398 4) scale(1.5)">
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="var(--brand-300)" />
        </g>
      </svg>
    </div>
  );
}

/**
 * The services band's decoration: two soft washes and a dashed contrail with
 * the hero's paper plane at the end of it.
 *
 * Its own stacking context sits at z-0 with the band's content at z-10 — not a
 * negative z-index, which would resolve against the section and paint the whole
 * thing behind the background it is meant to sit on.
 *
 * The contrail is desktop-only. At tablet width it crosses the heading, and
 * shrinking it to fit turns a 500px curve into a 200px squiggle that reads as
 * an artefact rather than a flight path.
 */
function ServicesBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <span className="absolute -top-28 -right-20 size-[28rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-90" />
      <span className="absolute -bottom-32 -left-28 size-[22rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-50" />

      <svg
        viewBox="0 0 520 150"
        fill="none"
        className="absolute top-0 right-4 hidden w-[30rem] xl:block"
        focusable="false"
      >
        {/* Dashes, not a solid line: a continuous 2px stroke across the corner
            reads as a border someone left behind. */}
        <path
          d="M4 120C64 120 104 88 156 94s96 30 150 2c40-21 62-46 116-70"
          stroke="var(--brand-200)"
          strokeWidth="2"
          strokeDasharray="5 11"
          strokeLinecap="round"
        />
        <g transform="translate(416 6) scale(1.7)">
          <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="var(--brand-300)" />
        </g>
      </svg>
    </div>
  );
}
