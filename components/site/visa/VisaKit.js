import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Briefcase,
  CalendarCheck,
  Check,
  Clock,
  FileCheck,
  FileText,
  Globe,
  Heart,
  HeartHandshake,
  House,
  Info,
  Landmark,
  Languages,
  ShieldCheck,
  Star,
  Stethoscope,
  TriangleAlert,
  UserRound,
} from "lucide-react";

import Breadcrumbs from "@/components/site/Breadcrumbs";
import Button from "@/components/site/Button";
import EnquiryDialog from "@/components/site/EnquiryDialog";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import Flag, { FlagStack } from "./Flag";
import { SITE, SOCIAL } from "@/lib/site";
import { VISA_PAGES } from "@/lib/content/visa";
import { cn } from "@/lib/utils";

/**
 * The building blocks of the three Global visa pages.
 *
 * These pages are deliberately NOT built on the database-driven service
 * template in app/(site)/services/[slug]/. Visa files are the client's core
 * line of work and the copy is structured (document checklists, eligibility
 * rules, routes to settlement), so it gets its own layout rather than a stack
 * of generic content blocks. The copy itself lives in lib/content/visa.js.
 *
 * Everything here is a server component except the enquiry dialog it embeds
 * and the country filter (CountryBoard.js).
 */

const ICONS = {
  Baby,
  Briefcase,
  CalendarCheck,
  FileCheck,
  FileText,
  Heart,
  HeartHandshake,
  House,
  Landmark,
  Languages,
  ShieldCheck,
  Stethoscope,
  UserRound,
};

function Icon({ name, className }) {
  const Component = ICONS[name] || Check;
  return <Component className={className} aria-hidden="true" />;
}

/** Heading block used by every band on these pages. */
export function VisaHeading({ title, lead, action, invert = false, className, id }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="max-w-2xl">
        <h2
          id={id}
          className={cn(
            "text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] sm:text-[1.875rem]",
            invert ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={cn(
              "mt-3 text-base leading-relaxed sm:text-[1.0625rem]",
              invert ? "text-brand-100/90" : "text-ink-soft"
            )}
          >
            {lead}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/**
 * Text that may contain " OR " between two alternatives, as the client's
 * document lists do ("TB test and chest X-ray OR TB exemption letter"). The
 * OR becomes a small chip, so the alternatives read as a choice rather than
 * as one long document name.
 */
function WithOr({ text }) {
  const parts = text.split(" OR ");
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={index}>
      {index ? (
        <span className="mx-1.5 inline-block rounded-md bg-sun/20 px-1.5 py-px align-[0.1em] text-[0.625rem] font-bold tracking-wide text-sun-shadow uppercase">
          or
        </span>
      ) : null}
      {part}
    </span>
  ));
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

/**
 * The page header. Copy on the left; on large screens, an illustration of the
 * file itself on the right: a passport, the checklist sheet on top of it and
 * a rubber stamp. The checklist rows are passed in per page, so each hero
 * shows the file that page is about.
 */
export function VisaHero({
  crumbs,
  eyebrow,
  title,
  lead,
  primaryLabel,
  whatsappHref,
  enquiry,
  file,
}) {
  return (
    <header className="relative isolate overflow-hidden border-b border-line bg-gradient-to-b from-brand-50/80 via-brand-50/30 to-white">
      {/* A faint dot grid, the texture of the visa pages. Masked so it fades
          out before it reaches the copy. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(var(--brand-200)_1px,transparent_1px)] [mask-image:linear-gradient(to_left,black,transparent_70%)] [background-size:22px_22px] opacity-70"
      />

      <div className="container-page py-6 sm:py-8 lg:py-10">
        <Breadcrumbs items={crumbs} className="mb-6" />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-3 text-[2rem] leading-[1.08] font-extrabold tracking-[-0.025em] text-ink sm:text-[2.625rem] lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {lead}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <EnquiryDialog label={primaryLabel} size="lg" {...enquiry} />
              <Button href={whatsappHref} variant="whatsapp" size="lg">
                <WhatsAppIcon className="size-5" />
                WhatsApp us
              </Button>
            </div>

            <TrustStrip />
          </div>

          <VisaFileVisual {...file} />
        </div>
      </div>
    </header>
  );
}

function TrustStrip() {
  const items = [
    { star: true, label: `${SITE.rating.value} on Google`, href: SOCIAL.google },
    { star: true, label: `${SITE.rating.justDial} on JustDial` },
    { label: "IATA accredited" },
    { label: `Since ${SITE.founded}` },
  ];

  return (
    <ul className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem] text-ink-muted">
      {items.map((item, index) => (
        <li key={item.label} className="flex items-center gap-4">
          {index ? <span aria-hidden="true" className="size-1 rounded-full bg-mist-300" /> : null}
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
            >
              <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" />
              {item.label}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              {item.star ? <Star className="size-3.5 fill-sun text-sun" aria-hidden="true" /> : null}
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * The illustration. Pure decoration, so it is hidden from assistive tech and
 * does not render below lg, where it would push the page's content down.
 *
 * `rows` are [{ label, state }] with state "done" | "active" | "todo".
 */
function VisaFileVisual({ heading, subheading, flags = [], rows = [] }) {
  return (
    <div aria-hidden="true" className="relative hidden h-[23rem] lg:block">
      {/* The passport */}
      <div className="absolute top-2 right-4 h-[18.5rem] w-[13rem] rotate-[7deg] rounded-[1.25rem] bg-gradient-to-br from-brand-800 to-brand-900 p-3 shadow-[0_30px_60px_-30px_rgba(10,68,87,0.8)]">
        <div className="flex h-full flex-col items-center justify-between rounded-[0.9rem] border border-white/15 py-8">
          <span className="text-[0.625rem] font-semibold tracking-[0.35em] text-sun/90 uppercase">
            Passport
          </span>
          <span className="flex size-20 items-center justify-center rounded-full border border-sun/50">
            <Globe className="size-10 text-sun/80" strokeWidth={1.2} />
          </span>
          <span className="h-1.5 w-16 rounded-full bg-white/15" />
        </div>
      </div>

      {/* The checklist sheet */}
      <div className="absolute bottom-2 left-0 w-[19rem] -rotate-[2.5deg] rounded-[1.25rem] border border-line bg-white p-5 shadow-[0_30px_70px_-28px_rgba(16,32,42,0.45)]">
        <div className="flex items-center justify-between gap-3 border-b border-dashed border-line pb-4">
          <div>
            <p className="text-sm font-bold text-ink">{heading}</p>
            <p className="mt-0.5 text-xs text-ink-muted">{subheading}</p>
          </div>
          <FlagStack codes={flags} flagClassName="size-8" />
        </div>
        <ul className="mt-4 space-y-3">
          {rows.map((row) => (
            <li key={row.label} className="flex items-center gap-3 text-[0.8125rem]">
              {row.state === "done" ? (
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-700 text-white">
                  <Check className="size-3" strokeWidth={3} />
                </span>
              ) : row.state === "active" ? (
                <span className="relative flex size-5 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-sun/40" />
                  <span className="size-2.5 rounded-full bg-sun" />
                </span>
              ) : (
                <span className="size-5 rounded-full border-2 border-dashed border-mist-300" />
              )}
              <span className={row.state === "todo" ? "text-ink-muted" : "font-medium text-ink"}>
                {row.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* The stamp */}
      <svg
        viewBox="0 0 120 120"
        className="absolute top-0 left-16 size-28 -rotate-[14deg] text-brand-600/80"
      >
        <defs>
          <path id="visa-stamp-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
        <text fill="currentColor" fontSize="9.5" fontWeight="700" letterSpacing="2.4">
          <textPath href="#visa-stamp-ring">{`ALISHA TOURS & TRAVELS · SINCE ${SITE.founded} ·`}</textPath>
        </text>
        <text x="60" y="58" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="800" letterSpacing="1">
          CHECKED
        </text>
        <text x="60" y="72" textAnchor="middle" fill="currentColor" fontSize="7" fontWeight="600" letterSpacing="1.5">
          LINE BY LINE
        </text>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Assurances                                                                 */
/* -------------------------------------------------------------------------- */

export function Assurances({ items }) {
  return (
    <section aria-label="How we work" className="bg-white py-6 sm:py-8">
      <div className="container-page">
        <ul className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="flex gap-4 bg-white p-5 sm:p-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={item.icon} className="size-5" />
              </span>
              <div>
                <h2 className="text-[0.9375rem] font-semibold text-ink">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  "What is ..." explainer                                                    */
/* -------------------------------------------------------------------------- */

export function Explainer({ title, lead, cards, note, noteFlag }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-14">
      <div>
        <VisaHeading title={title} lead={lead} />
      </div>
      <div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {cards.map((card) => (
            <li key={card.title} className="rounded-2xl border border-line bg-white p-5">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-700 text-white">
                <Icon name={card.icon} className="size-[1.125rem]" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{card.text}</p>
            </li>
          ))}
        </ul>
        {note ? (
          <p className="mt-4 flex items-start gap-3 rounded-2xl bg-brand-50 px-5 py-4 text-sm leading-relaxed text-brand-900">
            {noteFlag ? <Flag code={noteFlag} className="mt-0.5 size-5" /> : null}
            {note}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Situations                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * "What people come to us for". `link` on an item is a VISA_PAGES key; items
 * without one are answered by the enquiry itself, so they carry no link.
 */
export function Situations({ title, lead, items, footnote, action }) {
  return (
    <>
      <VisaHeading title={title} lead={lead} action={action} />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const warn = item.tone === "warn";
          const target = item.link && VISA_PAGES[item.link];
          return (
            <li
              key={item.title}
              className={cn(
                "group relative flex flex-col rounded-2xl border bg-white p-5 transition-[border-color,box-shadow] duration-200 sm:p-6",
                warn ? "border-sun/50 bg-sun/[0.06]" : "border-line",
                target && "hover:border-brand-300 hover:shadow-[0_18px_40px_-26px_rgba(10,68,87,0.5)]"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                    warn ? "bg-sun/20 text-sun-shadow" : "bg-brand-50 text-brand-800"
                  )}
                >
                  {warn ? <TriangleAlert className="size-3.5" aria-hidden="true" /> : null}
                  {item.tag}
                </span>
                {item.flag ? <Flag code={item.flag} className="size-7" /> : null}
              </div>
              <h3 className="mt-4 text-lg leading-snug font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              {target ? (
                <Link
                  href={target.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 after:absolute after:inset-0 after:rounded-2xl"
                >
                  {target.label}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
      {footnote ? (
        <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
          <Globe className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden="true" />
          {footnote}
        </p>
      ) : null}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Process                                                                    */
/* -------------------------------------------------------------------------- */

export function ProcessSteps({ title, lead, steps }) {
  return (
    <>
      <VisaHeading title={title} lead={lead} />
      <ol className="relative mt-10 grid gap-6 lg:grid-cols-5 lg:gap-5">
        {/* The thread through the numbers, desktop only. */}
        <span
          aria-hidden="true"
          className="absolute top-5 right-[10%] left-[10%] hidden border-t-2 border-dashed border-brand-200 lg:block"
        />
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex gap-4 lg:flex-col lg:gap-0">
            <span
              className={cn(
                "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ring-4 ring-white lg:mx-auto",
                index === steps.length - 1
                  ? "bg-sun text-ink"
                  : "bg-brand-700 text-white"
              )}
            >
              {index + 1}
            </span>
            <div className="lg:mt-5 lg:text-center">
              <h3 className="text-base font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Document checklists                                                        */
/* -------------------------------------------------------------------------- */

export function DocChecklist({ flag, title, lead, groups, note, children }) {
  return (
    <>
      <div className="flex items-start gap-4">
        {flag ? <Flag code={flag} className="mt-1 size-10 ring-2 ring-white shadow" /> : null}
        <VisaHeading title={title} lead={lead} className="flex-1" />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {groups.map((group) => (
          <DocGroup key={group.label} group={group} wide={groups.length === 2} />
        ))}
      </div>

      {children}

      {note ? <Callout tone="info" className="mt-5">{note}</Callout> : null}
    </>
  );
}

function DocGroup({ group, wide }) {
  return (
    <section
      className={cn(
        "rounded-[1.5rem] border p-5 sm:p-6",
        group.muted ? "border-dashed border-mist-300 bg-mist-50/60" : "border-line bg-white",
        // A pair of groups sits side by side; an odd, longer set flows as
        // cards, and a closing "may also be asked for" spans the row.
        !wide && group.muted && "lg:col-span-2"
      )}
    >
      <h3 className="flex items-center justify-between gap-3 text-sm font-semibold text-ink">
        {group.label}
        <span className="rounded-full bg-mist-100 px-2.5 py-0.5 text-xs font-medium text-ink-muted tabular-nums">
          {group.items.length} {group.items.length === 1 ? "item" : "items"}
        </span>
      </h3>
      <ol className="mt-4 divide-y divide-line/70">
        {group.items.map((item, index) => (
          <li key={item.title} className="flex gap-3.5 py-3 first:pt-0 last:pb-0">
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold tabular-nums",
                group.muted ? "bg-white text-ink-muted ring-1 ring-line" : "bg-brand-50 text-brand-800"
              )}
            >
              {index + 1}
            </span>
            <div className="min-w-0">
              <p className="text-[0.9375rem] leading-snug font-medium text-ink">
                <WithOr text={item.title} />
              </p>
              {item.note ? (
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">
                  <WithOr text={item.note} />
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Callouts, rows and lists                                                   */
/* -------------------------------------------------------------------------- */

export function Callout({ tone = "info", title, children, className }) {
  const warn = tone === "warn";
  const IconComponent = warn ? TriangleAlert : tone === "time" ? Clock : Info;
  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl px-5 py-4 sm:px-6 sm:py-5",
        warn ? "border border-sun/50 bg-sun/[0.08]" : "border border-brand-100 bg-brand-50/70",
        className
      )}
    >
      <IconComponent
        className={cn("mt-0.5 size-5 shrink-0", warn ? "text-sun-deep" : "text-brand-600")}
        aria-hidden="true"
      />
      <div className="text-sm leading-relaxed text-ink-soft">
        {title ? <p className="mb-1 font-semibold text-ink">{title}</p> : null}
        {children}
      </div>
    </div>
  );
}

/** Label / text rows, as a definition list. */
export function RuleRows({ rows, className }) {
  return (
    <dl className={cn("divide-y divide-line", className)}>
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 py-3.5 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-5">
          <dt className="text-sm font-semibold text-ink">{row.label}</dt>
          <dd className="text-sm leading-relaxed text-ink-soft">{row.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({ items, tone = "check" }) {
  const warn = tone === "warn";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              warn ? "bg-sun/20 text-sun-shadow" : "bg-brand-700 text-white"
            )}
          >
            {warn ? (
              <span className="text-[0.6875rem] font-bold">!</span>
            ) : (
              <Check className="size-3" strokeWidth={3} aria-hidden="true" />
            )}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/*  Editorial band                                                             */
/* -------------------------------------------------------------------------- */

/** "Why the sponsor's file comes first" and friends: a deep, quiet band. */
export function WhyBand({ title, paragraphs, quote }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-800 py-10 text-white sm:py-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.12),transparent_50%)]"
      />
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-14">
        <div>
          <h2 className="text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] sm:text-[2rem]">
            {title}
          </h2>
          {quote ? (
            <p className="mt-6 border-l-2 border-sun pl-5 font-display text-xl leading-snug text-brand-100 italic sm:text-2xl">
              {quote}
            </p>
          ) : null}
        </div>
        <div className="space-y-5 text-base leading-relaxed text-brand-50/90 sm:text-[1.0625rem]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Other visa pages                                                           */
/* -------------------------------------------------------------------------- */

export function OtherVisas({ current }) {
  const keys = ["tourist", "dependant", "settlement"];
  return (
    <>
      <VisaHeading
        title="Other visa services"
        lead="Not quite the right page? These are the other visa files we prepare."
      />
      <ul className="mt-7 grid gap-4 md:grid-cols-3">
        {keys.map((key) => {
          const page = VISA_PAGES[key];
          const here = key === current;
          return (
            <li key={key}>
              {here ? (
                <div
                  aria-current="page"
                  className="flex h-full flex-col rounded-2xl border border-dashed border-mist-300 bg-mist-50/60 p-5"
                >
                  <FlagStack codes={page.flags} />
                  <p className="mt-4 font-semibold text-ink">
                    {page.label} <span className="font-normal text-ink-muted">(this page)</span>
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{page.summary}</p>
                </div>
              ) : (
                <Link
                  href={page.href}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-[border-color,box-shadow] duration-200 hover:border-brand-300 hover:shadow-[0_18px_40px_-26px_rgba(10,68,87,0.5)]"
                >
                  <FlagStack codes={page.flags} />
                  <p className="mt-4 flex items-center gap-1.5 font-semibold text-ink group-hover:text-brand-800">
                    {page.label}
                    <ArrowRight
                      className="size-4 text-brand-600 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{page.summary}</p>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Closing call to action                                                     */
/* -------------------------------------------------------------------------- */

export function VisaClosing({ title, text, primaryLabel, whatsappHref, enquiry }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-700 px-6 py-12 text-center sm:px-14 sm:py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.22),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [mask-image:linear-gradient(to_left,black,transparent_60%)] [background-size:22px_22px]"
      />
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance-heading text-3xl leading-tight font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <EnquiryDialog label={primaryLabel} variant="white" size="lg" {...enquiry} />
          <Button href={whatsappHref} variant="whatsapp" size="lg">
            <WhatsAppIcon className="size-5" />
            WhatsApp us
          </Button>
        </div>
      </div>
    </div>
  );
}
