import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCheck, Target, Telescope } from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import Button from "@/components/site/Button";
import { Section } from "@/components/site/Section";
import ServiceIcon from "@/components/site/ServiceIcon";
import TestimonialCard from "@/components/site/TestimonialCard";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { getDestinationsByRegion } from "@/lib/data/destinations";
import { getTestimonials } from "@/lib/data/content";
import { ABOUT_HERO, ABOUT_SECTIONS } from "@/lib/content/about";
import { SITE, SOCIAL } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

export const revalidate = 600;

export const metadata = {
  title: "About Alisha Tours & Travels - IATA Accredited Since 2013",
  description:
    "Ramzi Mohammed Ali founded Alisha Tours & Travels in 2013 on one conviction: a traveller should never have to chase anyone. IATA accredited, 4.8★ on Google reviews, based in Kottayam, Kerala.",
  alternates: { canonical: "/about/" },
};

const {
  opening,
  story,
  visionMission,
  team,
  iata,
  whatWeDo,
  reach,
  proof,
  closing,
} = ABOUT_SECTIONS;

/**
 * The About page.
 *
 * The copy is the client's own and is reproduced verbatim from
 * lib/content/about.js — nothing here paraphrases, shortens or reorders it.
 *
 * THIRD STRUCTURE. The first set nine sections as one narrow column each; the
 * second added photographs but kept the rhythm, and the client's read was that
 * it still looked like a template — which it did, because every band was
 * eyebrow, heading, paragraphs, in that order, nine times.
 *
 * So no band on this page is shaped like its neighbour. The questions are a
 * conversation. The founding story turns on the one line in it that is a line.
 * The team's names are set as large type because the sentence is about names.
 * The rating is a numeral you can read across the room. The numbered marks are
 * what tie the nine together — there was a sticky chapter rail beside them for
 * a while and the client cut it, so the numbers now do that job alone.
 *
 * Three photographs, all public domain or CC0 (see /public/images/about), so
 * the page most likely to be screenshotted carries nothing that needs a credit
 * line.
 */
export default async function AboutPage() {
  const [{ international, domestic }, testimonials] = await Promise.all([
    getDestinationsByRegion(),
    getTestimonials({ featured: true, limit: 3 }),
  ]);

  // Match the names in the client's prose to real destination pages, so the
  // sentence reads as written but every place name is navigable.
  const linkFor = (name) => {
    const needle = name.replace(/^the /i, "").replace(/ and /i, " & ").toLowerCase();
    const all = [...international, ...domestic];
    return (
      all.find((d) => d.name.toLowerCase() === needle) ||
      all.find((d) => d.name.toLowerCase().startsWith(needle.split(" ")[0]))
    );
  };

  // "Since 2013 · IATA Accredited · 4.8★ on Google reviews" — the client's
  // line, split on its own separators into the three facts it already is.
  const credentials = ABOUT_HERO.subline.split("·").map((part) => part.trim());

  return (
    <>
      {/* ------------------------------- Hero -------------------------------- */}
      {/*
        The photograph is the BACKGROUND of the panel, not a picture sitting on
        it. It was a rounded box before, and a box has edges: a corner radius
        on one side and three hard cuts on the others, which is exactly what
        made it read as an image dropped into a layout.

        Now it is masked instead — faded to nothing on its left and along its
        top and bottom — so the sky dissolves out of the --brand-900 rather
        than being framed by it. Two gradients composited with
        mask-composite: intersect; the horizontal one clears the aircraft,
        which sits around 38% across, before it reaches full strength.

        Two layers rather than one because the shape is genuinely different at
        the two sizes: a full-height bleed beside the copy on a wide screen, a
        band underneath it on a narrow one. Each is display:none at the other
        breakpoint, so only one is ever in the accessibility tree.
      */}
      <section className="relative isolate overflow-hidden bg-brand-900">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.13),transparent_58%)]"
        />

        {/* Wide screens: the sky fills the right of the band, top to bottom. */}
        <div
          style={HERO_IMAGE_MASK}
          className="absolute inset-y-0 right-0 z-0 hidden w-[60%] lg:block"
        >
          <Image
            src="/images/about/about-sky.webp"
            alt="A wide-body airliner on approach against towering white cloud."
            fill
            priority
            sizes="60vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 container-page">
          <div className="py-9 sm:py-11 lg:max-w-[54%] lg:py-14">
            <Breadcrumbs items={[{ label: "About" }]} invert className="mb-6" />

            <h1 className="text-balance-heading text-[1.875rem] leading-[1.06] font-extrabold tracking-[-0.025em] text-white sm:text-[2.375rem] lg:text-[2.75rem]">
              {ABOUT_HERO.headline}
              <span className="mt-1.5 block font-display text-[1.625rem] font-semibold tracking-normal text-brand-200 italic sm:text-[2rem] lg:text-[2.25rem]">
                {ABOUT_HERO.headlineAccent}
              </span>
            </h1>

            {/* The client's line, split on its own separators into the three
                facts it already is. No captions over them: two of the three
                carry their own framing word, so a label only said it twice. */}
            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-5">
              {credentials.map((fact, index) => (
                <li key={fact} className="flex items-center gap-5">
                  {index ? (
                    <span aria-hidden="true" className="size-1 rounded-full bg-brand-300" />
                  ) : null}
                  <span className="text-[0.9375rem] font-medium text-white">{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Narrow screens: the same photograph as a band under the copy,
              dissolving into the panel at both edges rather than starting at
              one. */}
          <div
            style={HERO_IMAGE_MASK_NARROW}
            className="relative -mx-5 h-44 sm:-mx-8 sm:h-52 lg:hidden"
          >
            <Image
              src="/images/about/about-sky.webp"
              alt="A wide-body airliner on approach against towering white cloud."
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* --------------------------- 1 · Opening ----------------------------- */}
      {/*
        A TWO-WAY CHAT, which is what the copy already was: five questions a
        traveller asks, and one line that answers all five — "For more than
        2013, that has been our job."

        So the traveller asks, on the left, in white. Alisha answers, on the
        right, in brand, under a plane avatar and with the two read ticks a
        delivered message carries. The typing dots sit between the last
        question and the reply, so the exchange has a beat in it.

        The five questions are the client's sentence split on its own question
        marks — they rejoin to it exactly — and the reply is the section's own
        closing line, which now lands where it was always aimed: at the
        questions. It is therefore no longer repeated under the body copy.
      */}
      <Section id="chapter-1" className="scroll-mt-28 py-12 sm:py-16">
        <div className="container-page">
          <div className="relative">
            <div className="max-w-2xl">
              <SectionMark eyebrow={opening.eyebrow} number={opening.number} />
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink sm:text-4xl">
                {opening.heading}
              </h2>
              <p className="mt-4 font-display text-xl text-brand-700 italic sm:text-2xl">
                {opening.lede}
              </p>
            </div>

            <Contrail className="absolute -top-4 right-0 hidden w-[22rem] xl:block" />
          </div>

          {/* The panel needed a wallpaper. A chat on near-white looked like
              bubbles floating on the page rather than a conversation happening
              somewhere: a tinted ground, a soft wash in the corner and the
              connected-globe artwork faint behind it — the same mark the Reach
              band uses — gives it a room to sit in. */}
          <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-brand-50/70 p-5 ring-1 ring-brand-100 sm:p-8">
            <span
              aria-hidden="true"
              style={GLOBE_MASK}
              className="pointer-events-none absolute -right-24 -bottom-20 aspect-[1500/946] w-[38rem] bg-brand-200/35"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 -left-24 size-[24rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)]"
            />

            <ul className="relative space-y-3">
              {opening.questions.match(/[^?]+\?/g).map((question) => (
                <li key={question} className="flex justify-start">
                  <span className="max-w-[42rem] rounded-[1.25rem] rounded-bl-sm bg-white px-5 py-3.5 text-base leading-relaxed text-ink ring-1 ring-brand-100 shadow-[0_14px_30px_-24px_rgba(16,32,42,0.6)] transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:px-6 sm:text-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                    {question.trim()}
                  </span>
                </li>
              ))}

              {/* Alisha's reply.

                  No typing indicator and no plane mark. Both were read as
                  controls rather than as message furniture — the dots as a
                  live status, the plane as a send button, especially on a wide
                  screen where it landed under the floating "Plan my trip"
                  action. The read ticks are enough: they say the message was
                  delivered, which is the only thing the bubble needs to say
                  beyond its words. */}
              <li className="flex justify-end pt-1">
                <span className="max-w-[42rem] rounded-[1.25rem] rounded-br-sm bg-brand-700 px-5 py-4 text-base leading-relaxed font-semibold text-white shadow-[0_16px_34px_-20px_rgba(0,92,117,0.85)] sm:px-6 sm:text-lg">
                  {opening.close}
                  <span className="mt-2 flex items-center justify-end text-brand-200">
                    <CheckCheck className="size-4" aria-hidden="true" />
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-10 grid gap-8 text-base leading-relaxed text-ink-soft sm:text-lg lg:grid-cols-2 lg:gap-14">
            {opening.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>


      {/* --------------------------- 2 · Our Story --------------------------- */}
      {/*
        REDESIGNED. This was a timeline down the left with the founder card
        parked in the right column, which left most of that column empty: the
        card is short and the story is four paragraphs long, so a two-column
        split could only ever balance at one scroll position.

        The card pairs with the HEADING instead — the two belong together, it
        is his story — and the prose then runs the full width beneath them.

        The shape of the writing does the rest. The four paragraphs are long,
        long, one line, long, and that third one — "Alisha was built as the
        answer to that wondering." — is the hinge the whole section turns on.
        So the first two run as a pair of columns, the hinge is set across the
        full measure at display size, and the last one closes underneath. The
        detection is on length rather than an index, so an edit in the
        dashboard cannot put the emphasis on the wrong sentence.
      */}
      <Section id="chapter-2" tone="mist" className="scroll-mt-28 py-12 sm:py-16">
        <div className="container-page">
          <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              <SectionMark eyebrow={story.eyebrow} number={story.number} />
              <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold text-ink sm:text-4xl lg:text-[2.75rem]">
                {story.heading}
              </h2>
            </div>

            {/* The founder, beside the heading rather than beside the story:
                the two belong together, it is his story. */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 ring-1 ring-brand-100 shadow-[0_26px_60px_-45px_rgba(16,32,42,0.6)] sm:p-7">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300"
              />

              <div className="flex items-center gap-4">
                {/* Photo placeholder — replaced from /admin/ once the client
                    supplies a portrait. Deliberately an initial rather than a
                    stock photograph of somebody who is not him. */}
                <span
                  aria-hidden="true"
                  className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 font-display text-2xl font-semibold text-brand-700"
                >
                  R
                </span>
                <span>
                  <span className="block text-lg font-semibold text-ink">{SITE.founder}</span>
                  <span className="mt-0.5 block text-sm text-ink-muted">
                    Founder · {SITE.name}
                  </span>
                </span>
              </div>

              <p className="mt-5 border-l-2 border-brand-200 pl-4 font-display text-lg leading-snug text-ink italic">
                One desk in {SITE.founded}, and one rule that has not moved since: a traveller
                should never have to chase anyone.
              </p>

              <p className="mt-5">
                <Link
                  href="/about/ramzi-mohammed-ali/"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
                >
                  Read his profile
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </p>
            </div>
          </div>

          {(() => {
            const hinge = story.body.findIndex((paragraph) => paragraph.length < 80);
            const before = story.body.slice(0, hinge);
            const after = story.body.slice(hinge + 1);

            return (
              <div className="mt-10 border-t border-line pt-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
                  {before.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-base leading-relaxed text-ink-soft sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/*
                  The turn in the story, issued as a pass.

                  "Alisha was built as the answer to that wondering." is the
                  sentence the section exists to deliver, and the paragraph
                  after it is what the company has been ever since — so the two
                  sit on one card, divided by a perforation, with a stub down
                  the side. Same device as the 404's boarding card, which is
                  the point: this site has one piece of theatre and it is a
                  ticket.

                  Nothing on the stub is a word. The year is already in the
                  paragraph above it and the rest is a barcode, so the
                  furniture invents no copy.
                */}
                <div className="relative mt-10">
                  <div className="grid overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-brand-100 shadow-[0_30px_70px_-50px_rgba(16,32,42,0.65)] sm:grid-cols-[1fr_6.5rem]">
                    <div className="p-7 sm:p-9">
                      <p className="max-w-4xl font-display text-[1.75rem] leading-tight font-semibold text-ink italic sm:text-[2.25rem]">
                        {story.body[hinge]}
                      </p>

                      {after.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="mt-7 border-t-2 border-dashed border-mist-200 pt-7 text-base leading-relaxed text-ink-soft sm:text-lg lg:columns-2 lg:gap-12"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div
                      aria-hidden="true"
                      className="flex items-center justify-between gap-4 border-t-2 border-dashed border-mist-300 bg-mist-50 p-4 sm:flex-col sm:border-t-0 sm:border-l-2 sm:py-7"
                    >
                      <span className="flex gap-1 sm:flex-col">
                        {String(SITE.founded)
                          .split("")
                          .map((digit, index) => (
                            <span
                              key={`${digit}-${index}`}
                              className="flex size-7 items-center justify-center rounded bg-brand-900 font-sans text-sm font-bold text-sun"
                            >
                              {digit}
                            </span>
                          ))}
                      </span>

                      <span className="h-12 w-8 bg-[repeating-linear-gradient(180deg,var(--ink)_0_2px,transparent_2px_5px,var(--ink)_5px_6px,transparent_6px_9px,var(--ink)_9px_12px,transparent_12px_14px)] sm:h-16 sm:w-10" />
                    </div>
                  </div>

                  {/* The punched notches, filled with the band's own colour —
                      this section is tone="mist". Change one, change both. */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 right-[6.5rem] hidden size-6 translate-x-1/2 rounded-full bg-mist-50 sm:block"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 right-[6.5rem] hidden size-6 translate-x-1/2 rounded-full bg-mist-50 sm:block"
                  />
                </div>
              </div>
            );
          })()}
        </div>
      </Section>


      {/* ------------------------ 3 · Vision & Mission ----------------------- */}
      {/*
        REDESIGNED to the client's reference. It was a dark photographic band
        with two frosted panels on it, which meant one photograph behind
        everything and two cards that had to be translucent to survive it —
        hence the washed-out, indistinct look.

        Inverted: the band is light and the PHOTOGRAPHS ARE IN THE CARDS. One
        picture per statement, bled in from the right of each card behind the
        same kind of mask the hero uses, so the type sits on solid colour and
        the image still reads.

        The pairing is the point. The mission is the flying — a wing above
        cloud, dark card, white type. The vision is where people end up —
        Kerala water, light card, dark type. Two cards, two temperatures, one
        idea each.

        They are tilted by half a degree in opposite directions and straighten
        under the cursor. Half a degree is enough: the reference tilts hard,
        which looks like a mockup rather than a page.

        No taglines under the cards. The reference has one on each and they are
        invented copy; every word on this page is the client's.
      */}
      <Section id="chapter-3" className="relative isolate scroll-mt-28 overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-brand-50/50 py-12 sm:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <span className="absolute -top-28 -left-24 size-[26rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-70" />
          <span className="absolute -right-20 bottom-0 size-[28rem] rounded-full bg-[radial-gradient(circle,var(--brand-100)_0%,transparent_65%)] opacity-60" />
        </div>

        <div className="relative z-10 container-page">
          <div className="relative">
            <SectionMark eyebrow={visionMission.eyebrow} number={visionMission.number} />
            <h2 className="mt-5 max-w-3xl text-4xl leading-none font-extrabold tracking-[-0.03em] text-ink sm:text-6xl">
              {visionMission.heading}
            </h2>

            <Contrail className="absolute -top-6 right-0 hidden w-[24rem] xl:block" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Mission — the flying. Dark card, wing above cloud. */}
            <article className="group relative overflow-hidden rounded-[1.75rem] bg-brand-900 shadow-[0_34px_70px_-40px_rgba(16,32,42,0.75)] transition-transform duration-500 ease-out lg:-rotate-[0.5deg] lg:hover:rotate-0 motion-reduce:transition-none motion-reduce:lg:rotate-0">
              <div
                aria-hidden="true"
                style={CARD_IMAGE_MASK}
                className="absolute inset-y-0 right-0 w-[58%]"
              >
                <Image
                  src="/images/about/about-wing-card.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22rem, 60vw"
                  className="object-cover"
                />
              </div>

              <div className="relative z-10 p-7 sm:p-9 lg:max-w-[64%]">
                <span className="flex size-12 items-center justify-center rounded-full bg-white text-brand-700">
                  <Target className="size-5" aria-hidden="true" />
                </span>
                {/* Sans, not the display serif. Fraunces italic is this
                    site's accent voice — a tagline, a pull-quote, an eyebrow —
                    and putting a card's subheading in it made the label read
                    as another quotation. Figtree extrabold with tight tracking
                    is what every other heading on the page uses. */}
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-[1.75rem]">
                  Our Mission
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-100/90">
                  {visionMission.mission}
                </p>
              </div>
            </article>

            {/*
              Vision — where people end up. Light card, Kerala water.

              THE PHOTOGRAPH IS HELD BACK HERE in a way the mission card does
              not need. The client's note was that the vision was hard to
              read, and the reason is the pairing: the mission card is dark
              with white type, so a bright picture behind it only adds
              contrast, while this card is white with --ink-soft type, so the
              same brightness eats it. The image keeps its mask and gains a
              white veil over the copy's half of the card plus a lighter,
              less saturated treatment, which leaves the photograph legible as
              a photograph and the paragraph legible as a paragraph.
            */}
            <article className="group relative overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-brand-100 shadow-[0_34px_70px_-45px_rgba(16,32,42,0.6)] transition-transform duration-500 ease-out lg:mt-10 lg:rotate-[0.5deg] lg:hover:rotate-0 motion-reduce:transition-none motion-reduce:lg:rotate-0">
              <div
                aria-hidden="true"
                style={CARD_IMAGE_MASK}
                className="absolute inset-y-0 right-0 w-[58%]"
              >
                <Image
                  src="/images/about/about-kerala-card.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 22rem, 60vw"
                  className="object-cover opacity-90 brightness-[1.06] saturate-[0.85]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_right,#fff_0%,rgb(255_255_255/0.78)_38%,rgb(255_255_255/0.12)_78%,transparent_100%)]"
                />
              </div>

              <div className="relative z-10 p-7 sm:p-9 lg:max-w-[64%]">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Telescope className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                  Our Vision
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {visionMission.vision}
                </p>
              </div>
            </article>
          </div>
        </div>
      </Section>


      {/* ---------------------------- 4 · The Team --------------------------- */}
      {/*
        NEW CONCEPT. The names were set as a row of large italic type between
        two rules — which looked like a pull-quote about four words, not like
        four people — and the three paragraphs ran as three equal columns, so
        the one-line middle one floated in a column of its own with white space
        above and below it.

        The band is dark now, and the names are PEOPLE: a monogram disc each,
        in the same language the founder card uses, lifting under the cursor.
        The section's whole argument is that you deal with a person rather than
        a company, so the names should look like the people the reviews thank.

        The prose then takes the shape the writing has. "That is not an
        accident. It is the whole design." is a verdict on the paragraph before
        it, so it sits beside that paragraph at display size rather than in the
        queue behind it, and the long closing paragraph runs underneath across
        two columns. Found by length, not by index, so an edit cannot move the
        emphasis onto the wrong sentence.
      */}
      <Section
        id="chapter-4"
        tone="deep"
        className="relative isolate scroll-mt-28 overflow-hidden py-12 sm:py-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.16),transparent_55%)]"
        />

        <div className="relative z-10 container-page">
          <div className="max-w-3xl">
            <SectionMark eyebrow={team.eyebrow} number={team.number} invert />
            <h2 className="mt-5 text-3xl leading-tight font-semibold text-white sm:text-4xl">
              {team.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-100/90 sm:text-xl">{team.lede}</p>
          </div>

          {/* The four the copy names, as people rather than as typography. */}
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {team.names.map((name) => (
              <li
                key={name}
                className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] p-4 transition-colors duration-300 hover:border-white/35 hover:bg-white/[0.12]"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/15 font-display text-xl font-semibold text-white ring-1 ring-white/25 transition-colors duration-300 group-hover:bg-white group-hover:text-brand-800"
                >
                  {name.charAt(0)}
                </span>
                <span className="text-lg font-semibold text-white">{name}</span>
              </li>
            ))}
          </ul>

          {(() => {
            const verdict = team.body.findIndex((paragraph) => paragraph.length < 80);
            const before = team.body.slice(0, verdict);
            const after = team.body.slice(verdict + 1);

            return (
              <div className="mt-12 border-t border-white/15 pt-10">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                  <div className="space-y-5 text-base leading-relaxed text-brand-100/85 sm:text-lg">
                    {before.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>

                  <p className="self-center border-l-2 border-brand-300 pl-6 font-display text-2xl leading-snug font-semibold text-white italic sm:text-[1.75rem]">
                    {team.body[verdict]}
                  </p>
                </div>

                {after.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-10 text-base leading-relaxed text-brand-100/85 sm:text-lg lg:columns-2 lg:gap-14"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            );
          })()}
        </div>
      </Section>


      {/* ------------------------ 5 · IATA Accreditation --------------------- */}
      <Section id="chapter-5" tone="mist" className="scroll-mt-28 py-12 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionMark eyebrow={iata.eyebrow} number={iata.number} />

            {/* A stamped credential rather than a bullet point: dashed rule,
                the real mark, and the one fact that follows from it. */}
            <div className="mt-6 rounded-[1.5rem] border-2 border-dashed border-brand-200 bg-white p-7 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/IATA.png"
                alt="IATA accredited agent"
                width={406}
                height={260}
                className="mx-auto w-28"
              />
              <p className="mt-5 font-sans text-sm font-bold tracking-[0.14em] text-brand-800 uppercase">
                IATA Accredited
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                Tickets issued directly by us
              </p>
            </div>
          </div>

          <div>
            <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-ink sm:text-4xl">
              {iata.heading}
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {iata.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 rounded-2xl bg-brand-800 p-7 font-display text-2xl leading-snug font-semibold text-white italic">
              {iata.close}
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------- 6 · What We Do -------------------------- */}
      <Section id="chapter-6" className="scroll-mt-28 py-12 sm:py-16">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <div>
              <SectionMark eyebrow={whatWeDo.eyebrow} number={whatWeDo.number} />
              <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink sm:text-4xl">
                {whatWeDo.heading}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg lg:pt-2">
              {whatWeDo.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* A numbered index rather than a card grid: the page already has two
              card grids, and these six are a list of what the company sells. */}
          <ul className="mt-10 divide-y divide-line overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-line">
            {whatWeDo.services.map((service, index) => (
              <li key={service.title}>
                <Link
                  href={service.href}
                  className="group grid gap-x-8 gap-y-2 px-6 py-6 transition-colors hover:bg-brand-50/50 lg:grid-cols-[auto_minmax(0,17rem)_1fr_auto] lg:items-center"
                >
                  <span
                    aria-hidden="true"
                    className="font-sans text-xs font-bold text-brand-300 tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 transition-colors group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                      <ServiceIcon name={service.icon} className="size-5" />
                    </span>
                    <span className="text-lg font-semibold text-ink group-hover:text-brand-800">
                      {service.title}
                    </span>
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    {service.body}
                  </span>
                  <ArrowRight
                    className="hidden size-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-brand-700 lg:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {whatWeDo.close}
            </p>
            <Button href={whatWeDo.ctaHref} size="lg" className="shrink-0">
              {whatWeDo.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ------------------------------ 7 · Reach ---------------------------- */}
      {/*
        The map is the BAND now, not a card in a column beside it. A world map
        shrunk into a 20rem panel is a decoration; run across the whole section
        behind the type it is the thing the heading is talking about — "Kerala
        is home. The world is the map." — and the copy gets the full measure
        back, which is what the aside was costing it.

        Reading order is the client's: the argument, then where they go, then
        why the list is honest.
      */}
      <Section
        id="chapter-7"
        tone="mist"
        className="relative isolate scroll-mt-28 overflow-hidden py-12 sm:py-16"
      >
        <span
          aria-hidden="true"
          style={GLOBE_MASK}
          className="pointer-events-none absolute top-1/2 -right-24 z-0 hidden aspect-[1500/946] w-[52rem] -translate-y-1/2 bg-brand-200/55 lg:block xl:-right-16 xl:w-[62rem]"
        />

        <div className="relative z-10 container-page">
          <div className="max-w-3xl">
            <SectionMark eyebrow={reach.eyebrow} number={reach.number} />
            <h2 className="mt-5 text-3xl leading-tight font-semibold text-ink sm:text-4xl">
              {reach.heading}
            </h2>
            <p className="mt-5 font-display text-xl text-brand-700 italic sm:text-2xl">
              {reach.lede}
            </p>

            <div className="mt-7 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {reach.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/*
            The destination list, as a PASSPORT PAGE.

            It is a list of every country and state the agency sends people
            to, so the artefact it belongs on is obvious — and it gives this
            band its own object, rather than the third white rounded box on
            the page. A stitched binding down the left edge with three punched
            holes, a stamp in the corner, and the paper a half-tone warmer
            than the card it sits in.

            The client's two sentences are untouched, commas and "and"
            included: DestinationLinks only makes each name navigable. The
            stamp carries the site's paper plane rather than a word, so the
            furniture invents no copy.
          */}
          <div className="relative mt-8 overflow-hidden rounded-[1.25rem] bg-mist-50 py-7 pr-7 pl-12 ring-1 ring-mist-300 sm:pl-14">
            {/* The binding: a stitch line and three punched holes. */}
            <span
              aria-hidden="true"
              className="absolute inset-y-4 left-6 border-l-2 border-dashed border-mist-300 sm:left-7"
            />
            <span aria-hidden="true" className="absolute inset-y-0 left-0 flex w-6 flex-col items-center justify-center gap-8 sm:w-7">
              {[0, 1, 2].map((hole) => (
                <span key={hole} className="size-2 rounded-full bg-mist-300" />
              ))}
            </span>

            {/* The stamp. */}
            <span
              aria-hidden="true"
              className="absolute -top-2 -right-2 flex size-24 rotate-[-9deg] items-center justify-center rounded-2xl border-2 border-dashed border-brand-200/70 sm:size-28"
            >
              <svg viewBox="0 0 24 24" className="size-8 text-brand-200" focusable="false">
                <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="currentColor" />
              </svg>
            </span>

            <p className="relative max-w-[42rem] text-base leading-loose text-ink-soft">
              {reach.destinationsIntro}{" "}
              <DestinationLinks names={reach.internationalNames} linkFor={linkFor} />
            </p>
            <p className="relative mt-5 max-w-[42rem] border-t border-dashed border-mist-300 pt-5 text-base leading-loose text-ink-soft">
              {reach.domesticIntro}{" "}
              <DestinationLinks names={reach.domesticNames} linkFor={linkFor} />
            </p>
          </div>

          <div className="mt-8 grid max-w-5xl gap-8 text-base leading-relaxed text-ink-soft sm:text-lg lg:grid-cols-2 lg:gap-12">
            {reach.bodyAfter.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <Button href={reach.ctaHref} size="lg" variant="outline">
              {reach.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Section>


      {/* ------------------------------ 8 · Proof ---------------------------- */}
      <Section id="chapter-8" className="scroll-mt-28 py-12 sm:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14">
            <div>
              <SectionMark eyebrow={proof.eyebrow} number={proof.number} />

              {/* The rating as a figure you can read across the room, with the
                  client's heading kept intact underneath it. */}
              {/* The Google rating as a figure you can read across the room.
                  Its label is the one the page already used — "on Google" —
                  and the other three follow underneath, word for word as they
                  were, so the band states exactly the four facts it did before.

                  The star is the lucide mark in --sun, not the ★ character:
                  the glyph set at 7rem sat on its own baseline, a different
                  weight from the digits and a third taller than them, which is
                  what threw the whole figure out of line. Centred against the
                  numeral at 0.55 of its size, it reads as one lockup. */}
              <p className="mt-6 flex items-center gap-5 font-sans text-[5rem] leading-none font-extrabold tracking-[-0.04em] text-ink sm:gap-7 sm:text-[6.5rem]">
                {SITE.rating.value}
                <SharpStar className="size-11 shrink-0 text-sun sm:size-14" />
                <span className="sr-only">stars on Google</span>
              </p>
              {/* The label is the link — to Google, not to our own /reviews/.
                  aria-hidden is gone with the plain text: the figure above
                  carries the screen-reader wording, and a hidden link would be
                  a keyboard stop announcing nothing. */}
              <a
                href={SOCIAL.google}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-ink-muted underline-offset-4 transition-colors hover:text-brand-700 hover:underline focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
              >
                Read the reviews on Google
              </a>
              <h2 className="mt-5 text-2xl font-semibold text-ink sm:text-3xl">
                {goldStars(proof.heading)}
              </h2>

              {/* No review COUNT and no elapsed-year count — the client asked
                  for both to go. A years-in-operation figure also went stale
                  every January, which a founding year cannot. */}
              <dl className="mt-7 divide-y divide-line border-y border-line">
                <Stat value={goldStars(`${SITE.rating.justDial}★`)} label="on JustDial" />
                <Stat value={`Since ${SITE.founded}`} label="operating" />
              </dl>
            </div>

            <div>
              <div className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                {proof.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 border-l-2 border-brand-400 pl-6 font-display text-2xl leading-snug font-semibold text-ink italic">
                {proof.close}
              </p>
              <div className="mt-8">
                <Button href={proof.ctaHref} size="lg" variant="outline">
                  {proof.ctaLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>

          {testimonials.length ? (
            <ul className="mt-12 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <li key={testimonial._id}>
                  <TestimonialCard testimonial={testimonial} className="h-full" />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Section>

      {/* ----------------------------- 9 · Closing --------------------------- */}
      <section
        id="chapter-9"
        className="relative isolate scroll-mt-28 overflow-hidden bg-brand-900 py-14 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.16),transparent_58%)]"
        />
        <Contrail className="absolute -top-4 right-0 hidden w-[30rem] opacity-50 lg:block" invert />
        {/* The radial wash is sized farthest-corner, so it is still lifting
            the band's bottom-left when the footer — the same --brand-900, flat
            — starts underneath it, and that mismatch drew a hard line across
            the page. This fades the wash back to the exact footer colour
            before the edge, so the two read as one surface. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-brand-900"
        />

        <div className="relative z-10 container-page">
          <div className="max-w-3xl">
            <SectionMark eyebrow={closing.eyebrow} number={closing.number} invert />
            <h2 className="mt-5 text-3xl leading-tight font-semibold text-white sm:text-4xl">
              {closing.heading}
            </h2>
          </div>

          <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="space-y-5 text-base leading-relaxed text-brand-100/85 sm:text-lg">
              {closing.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-white/15 bg-white/5 p-8 backdrop-blur-sm">
              <p className="font-display text-2xl leading-snug font-semibold text-white italic sm:text-[1.75rem]">
                {closing.close}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact/" size="lg" variant="white">
                  {closing.ctaLabel}
                </Button>
                <Button
                  href={whatsappLink()}
                  size="lg"
                  variant="outline"
                  className="border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * The hero photograph's mask.
 *
 * Two gradients intersected: one fades the image out towards the copy, the
 * other softens its top and bottom edges so nothing about it reads as a box.
 * Masking rather than overlaying a dark gradient matters here — an overlay
 * would dim the sky where it IS visible, and a pale sky against --brand-900 is
 * the whole effect.
 *
 * -webkit- duplicates for Safari, which spells the composite keyword
 * differently; both are ignored where unsupported, leaving a plain image.
 */
const HERO_IMAGE_MASK = {
  maskImage:
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, #000 58%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, #000 58%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
};

/**
 * The mask that bleeds a photograph into a card from its right-hand edge.
 * Wider and softer than the hero's: the copy runs to about 64% of the card, so
 * the image has to be gone well before it and fully itself by the edge.
 */
const CARD_IMAGE_MASK = {
  maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, #000 72%)",
  WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 30%, #000 72%)",
};

/** The same idea for the stacked layout, where only the vertical edges show. */
const HERO_IMAGE_MASK_NARROW = {
  maskImage: "linear-gradient(to bottom, transparent 0%, #000 28%, #000 82%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, #000 28%, #000 82%, transparent 100%)",
};

/**
 * The connected-globe artwork used as a mask so it can be painted in a brand
 * colour — the homepage's promises band builds the same asset the same way.
 */
const GLOBE_MASK = {
  maskImage: "url('/images/connected-globe-mask.webp')",
  WebkitMaskImage: "url('/images/connected-globe-mask.webp')",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskSize: "contain",
  WebkitMaskSize: "contain",
};

/** The numbered mark that opens each chapter, mirroring the rail. */
function SectionMark({ eyebrow, number, invert = false }) {
  return (
    <p className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className={
          invert
            ? "flex size-8 items-center justify-center rounded-full bg-white/15 font-sans text-xs font-bold text-white ring-1 ring-white/25"
            : "flex size-8 items-center justify-center rounded-full bg-brand-50 font-sans text-xs font-bold text-brand-800 ring-1 ring-brand-200"
        }
      >
        {String(number).padStart(2, "0")}
      </span>
      <span className={invert ? "eyebrow text-brand-200" : "eyebrow"}>{eyebrow}</span>
    </p>
  );
}

/**
 * A five-pointed star with actual points.
 *
 * lucide's Star is drawn with rounded joins and a stroke, which at 56px turned
 * the tips into blobs — fine at 16px in a review row, wrong as the largest
 * mark on the page. This is a plain filled path: sharp points, no stroke.
 */
function SharpStar({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M12 1.6 15.09 8.4 22.5 9.25 17.01 14.2 18.54 21.5 12 17.77 5.46 21.5 6.99 14.2 1.5 9.25 8.91 8.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * The ★ characters the client's own copy contains, painted --sun.
 *
 * The text is untouched — the string is split on the glyph and the glyph is
 * put back inside a span — so "4.8★ on Google reviews." still reads exactly as
 * written, with the star the colour a star should be rather than ink black.
 */
function goldStars(text) {
  return String(text)
    .split("★")
    .flatMap((part, index) =>
      index === 0
        ? [part]
        : [
            <span key={`star-${index}`} className="ml-1 text-sun">
              ★
            </span>,
            part,
          ]
    );
}

/** A row in the proof band's figures list. */
function Stat({ value, label }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3.5">
      <dt className="text-sm text-ink-muted">{label}</dt>
      <dd className="font-sans text-xl font-extrabold text-ink">{value}</dd>
    </div>
  );
}

/** The dashed flight path used across the site. `invert` is for dark bands. */
function Contrail({ className, invert = false }) {
  const stroke = invert ? "rgb(255 255 255 / 0.45)" : "var(--brand-200)";
  const plane = invert ? "rgb(255 255 255 / 0.6)" : "var(--brand-300)";

  return (
    <svg viewBox="0 0 460 150" fill="none" className={className} aria-hidden="true" focusable="false">
      <path
        d="M6 128C70 128 112 98 164 100s92 28 146 2c40-19 62-44 138-82"
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray="5 11"
        strokeLinecap="round"
      />
      <g transform="translate(424 6) scale(1.4)">
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill={plane} />
      </g>
    </svg>
  );
}

/**
 * Renders a list of destination names as an inline, comma-separated sentence,
 * linking each name that resolves to a real destination page. Names that do
 * not resolve are rendered as plain text so the sentence never breaks.
 */
function DestinationLinks({ names, linkFor }) {
  return (
    <>
      {names.map((name, index) => {
        const destination = linkFor(name);
        const separator =
          index === names.length - 1 ? "." : index === names.length - 2 ? " and " : ", ";
        return (
          <span key={name}>
            {destination ? (
              <Link
                href={destination.href}
                className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-4 transition-colors hover:decoration-brand-500"
              >
                {name}
              </Link>
            ) : (
              name
            )}
            {separator}
          </span>
        );
      })}
    </>
  );
}
