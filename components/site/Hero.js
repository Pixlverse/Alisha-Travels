import Image from "next/image";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import Button from "./Button";
import HeroSearch from "./HeroSearch";
import { SITE, SOCIAL } from "@/lib/site";

/**
 * Homepage hero.
 *
 * REWRITTEN on client feedback: "in the same laptop screen I want to see the
 * search box filter and the details in hero as well." The previous version
 * stacked a badge, headline, a four-line paragraph, two CTAs and a trust row
 * and only *then* began the photo band with the search card floating over its
 * lower edge — around 1100px before the search box appeared, so on a laptop
 * you never saw the two together. Everything now sits inside one band that
 * measures roughly 540px including the header.
 *
 * The layout follows the reference the client supplied (akbartravels.com): a
 * solid brand band carries the copy, the search card and the trust row, with
 * the photograph bleeding in from the right behind a gradient.
 *
 * Why a brand-coloured band and NOT a dark photographic scrim: the legacy
 * alishatravels.in hero was a Slider Revolution carousel of dark photographs,
 * and "nothing may recall the old site" is a standing instruction. A flat
 * brand band is the opposite of that carousel — and it keeps every piece of
 * text on a known, measured colour instead of on top of whatever photograph
 * the client uploads next. White on --brand-800 is 7.53:1; the brand-100 used
 * for the trust row is 6.35:1.
 *
 * Type: Figtree throughout. Fraunces survives only in the tagline badge —
 * the display serif on headings read as childish at this size, which was the
 * other half of the same review.
 *
 * The copy is the client's own, from the closing section of the About text.
 */
export default function Hero({ destinations = [], testimonials = [] }) {
  const faces = testimonials.slice(0, 4);

  return (
    <section className="relative isolate overflow-hidden bg-brand-800">
      {/*
        The hero photograph — Marina Bay at blue hour, supplied by the client
        as public/images/singapore.jpg.

        LICENCE UNVERIFIED. Unlike the CC0 images sourced for the earlier
        drafts, the provenance of this file is not known here — if it came from
        a stock library, check the licence covers commercial web use before
        launch. See README > The hero photograph.

        It suits the band on two counts. Blue hour means deep blues and near
        blacks, which sit inside the --brand-800 family instead of fighting it
        (the green Munnar frame tried before this did fight it), and the dark
        edges mean there is no bright pixel anywhere near the type. Singapore
        is also a destination the agency actually sells — it is second in the
        trending row.

        The supplied file was 6000x4000 at 2.23MB; it is stored at 2560x1707,
        still wider than any derivative Next will serve from it. Nobody
        downloads this file: next/image resizes it and negotiates AVIF or WebP
        per request at the `quality={60}` rung next.config.mjs reserves for
        hero art.

        object-position sits at 42% so the crop keeps the skyline and its
        reflections rather than centring on open water.
      */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/singapore.jpg"
          alt=""
          fill
          // Next 16: `priority` is deprecated in favour of `preload`, which
          // emits a <link rel="preload"> in <head> so the request starts during
          // head parsing rather than when the <img> is reached.
          //
          // fetchPriority is paired with it deliberately: Next forwards it onto
          // the preload link (see ImagePreload in
          // next/dist/client/image-component.js), and without it Lighthouse's
          // lcp-discovery audit fails on "fetchpriority=high should be applied
          // to the image preload request".
          preload
          fetchPriority="high"
          quality={60}
          sizes="100vw"
          className="object-cover object-[50%_42%]"
        />
        {/*
          NO brand-colour scrim. Removed on client request: the photograph now
          reads at full strength behind the copy and the search card.

          What that costs, measured rather than assumed: the scrim was the
          guarantee that hero text sat on a known colour. Without it, every
          piece of type sits on whatever the photograph is doing at that pixel.
          This particular image survives it — Marina Bay at blue hour is dark
          across the middle where the type is — but the guarantee is gone. Swap
          in a brighter photograph and the headline can fail contrast silently,
          because Lighthouse cannot see through an image and will keep
          reporting 100.

          A dark vertical wash is kept, and it is neutral BLACK rather than
          brand blue, so it deepens the photograph instead of tinting it. The
          stops were set by measurement, not taste: at 0.35/0.45/0.55 the
          headline measured 3.28:1 against a 3.0 large-text minimum — passing,
          but with almost no margin, and entirely at the mercy of which pixel
          of the photograph sat behind it. At 0.46/0.52/0.60 it has real
          headroom and the photograph still reads far more strongly than it did
          under the old solid teal scrim.
        */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.46)_0%,rgb(0_0_0/0.52)_45%,rgb(0_0_0/0.60)_100%)]" />
      </div>

      <div className="relative z-10 container-page py-10 sm:py-12 lg:py-14">
        {/* Badge and headline, centred. Capped at max-w-3xl so the headline
            breaks where we want it to rather than running the full width. */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-white/12 px-4 py-1.5 ring-1 ring-white/25">
            <PaperPlaneGlyph />
            <span className="font-display text-sm text-brand-100 italic">{SITE.tagline}</span>
          </p>

          {/* The break is explicit rather than left to text-wrap so both lines
              stay whole at every width. */}
          <h1 className="mt-5 text-[2rem] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[2.5rem] lg:text-[3.125rem]">
            Tell us where you want to go.
            <span className="block text-white/90">We&rsquo;ll work out the rest.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {SITE.name} — an IATA-accredited travel agency in Kerala, planning holidays,
            honeymoons, flights and corporate journeys for travellers here and across the world
            since {SITE.founded}.
          </p>
        </div>

        {/* The search card, in the band rather than below it. */}
        <div className="relative mt-8 lg:mt-10">
          {/*
            paper-plane-light.svg — the plane and contrail from the client's
            "Paper Plane.svg", tinted white. The original is kept untouched in
            public/animations/ alongside it.

            Two things had to change before it was usable:

            - The supplied contrail is drawn in pink at an alpha of 2-38 out of
              255, which composited to a darkest pixel of 222 on white and
              vanished on the teal band. Every mark is now white with the
              trail's alpha multiplied by six. White is the one colour that
              holds up along this whole strip, which crosses opaque brand-800
              on the left and the photograph on the right.
            - The loop clears the trail and flies the plane off canvas, so
              about a sixth of the cycle is empty. It is therefore absolutely
              positioned and reserves no layout of its own: when it goes quiet
              there is simply band behind it, not a gap.

            z-0 with the card above it at z-10, rather than a negative z-index:
            -z-10 here would resolve against an ancestor and paint behind the
            section background, which is exactly how it ended up invisible the
            first time.
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/animations/paper-plane-light.svg"
            alt=""
            aria-hidden="true"
            loading="eager"
            width={1796}
            height={397}
            className="pointer-events-none absolute inset-x-0 top-full z-0 hidden w-full motion-reduce:hidden lg:block"
          />
          <div className="relative z-10">
            <HeroSearch destinations={destinations} />
          </div>
        </div>

        {/* The two CTAs sit UNDER the search card, per the client's layout:
            the search box is the primary action in this band, and these are
            the way out of it for anyone who would rather browse than search. */}
        <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact/" variant="white" size="lg">
            Plan my trip
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button
            href="/packages/"
            variant="outline"
            size="lg"
            className="border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10"
          >
            Browse packages
          </Button>
        </div>

        {/* Social proof. Initials rather than stock portraits — we are not
            going to invent customer photographs, and the legacy site's
            "0+ customers" counters are exactly the trap to avoid. */}
        <div className="relative z-10 mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          {faces.length ? (
            <div className="flex items-center gap-3">
              <ul className="flex -space-x-2.5">
                {faces.map((person) => (
                  <li
                    key={person._id}
                    className="flex size-9 items-center justify-center rounded-full border-2 border-brand-800 bg-brand-100 text-sm font-semibold text-brand-800"
                    aria-hidden="true"
                  >
                    {person.name.charAt(0)}
                  </li>
                ))}
              </ul>
              {/* A link, to GOOGLE. A rating we host is a claim; the same
                  rating on Google is evidence. It used to be plain text, and
                  the one place that did link "read them all on Google" sent
                  people to our own /reviews/ page instead — which is the
                  thing that makes a visitor stop believing the number. */}
              <a
                href={SOCIAL.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-brand-100 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
              >
                <Star className="size-4 fill-sun text-sun" aria-hidden="true" />
                <span className="font-semibold text-white">{SITE.rating.value}</span>
                on Google
              </a>
            </div>
          ) : null}

          <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden="true" />

          <p className="flex items-center gap-1.5 text-sm text-brand-100">
            <Star className="size-4 fill-sun text-sun" aria-hidden="true" />
            <span className="font-semibold text-white">{SITE.rating.justDial}</span>
            on JustDial
          </p>

          <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden="true" />

          <p className="flex items-center gap-2 text-sm text-brand-100">
            <ShieldCheck className="size-4 shrink-0 text-brand-200" aria-hidden="true" />
            IATA accredited
          </p>
        </div>
      </div>
    </section>
  );
}

function PaperPlaneGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 shrink-0" aria-hidden="true" focusable="false">
      <path d="M22 2 15 22l-4-9-9-4 20-7Z" fill="var(--brand-200)" />
    </svg>
  );
}
