import Link from "next/link";
import { ArrowRight, Check, Quote } from "lucide-react";

import Accordion from "./Accordion";
import ChipCloud from "./ChipCloud";
import Checklist from "./Checklist";
import Explorer from "./Explorer";
import PairTabs from "./PairTabs";
import Reveal from "./Reveal";
import Stepper from "./Stepper";
import ContentBlock from "../ContentBlocks";
import RichText from "../RichText";
import { Section } from "../Section";
import { cn } from "@/lib/utils";

/**
 * The long-form half of a service page or a package category page, laid out
 * so it gets read.
 *
 * The same copy through ContentBlock was a run of identical card grids, and
 * a page where everything looks alike is a page people skim. This picks a
 * treatment per block from the SHAPE of its content, never its wording, so
 * the client can rewrite any of it in /admin/ and the page still holds:
 *
 *   two prose blocks in a row           → a definition card + the argument
 *   one prose block                     → a pull line + the rest
 *   "Domestic …" then "International …" → one band with an India/Overseas switch
 *   "Before …" / "During …" point lists → a two-step checklist
 *   any other two point lists in a row  → one band with a switch
 *   one points list                     → a checklist
 *   a tags list                         → chips, linked to destination pages
 *   steps                               → a stepper
 *   two cards                           → an either/or pair
 *   the closing run of cards            → a dark numbered "reasons" band
 *   other runs of 3+ cards, in turn     → a chooser, a bento, an accordion
 *
 * Anything else falls back to ContentBlock, so a new kind is never lost.
 *
 * `backHref`/`backLabel` add a "back to the list" button to the chooser —
 * the category pages point it at their package grid.
 */
export default function GuideBlocks({ blocks = [], destinations = [], backHref, backLabel }) {
  const scenes = groupBlocks(blocks);

  return scenes.map((scene, index) => {
    const tone = scene.type === "reasons" ? "deep" : index % 2 === 0 ? "mist" : "default";
    return (
      <Section key={`${scene.type}-${index}`} tone={tone} className="py-10 sm:py-14">
        <div className="container-page">
          <Reveal>
            <Scene scene={scene} destinations={destinations} backHref={backHref} backLabel={backLabel} />
            <Footnotes blocks={scene.blocks} invert={tone === "deep"} />
          </Reveal>
        </div>
      </Section>
    );
  });
}

function Scene({ scene, destinations, backHref, backLabel }) {
  const [block] = scene.blocks;

  switch (scene.type) {
    case "prose-pair":
      return <ProsePair blocks={scene.blocks} />;
    case "prose":
      return <ProseQuote block={block} />;
    case "explorer":
      return (
        <>
          <Heading block={block} eyebrow="Find your fit" />
          <Explorer items={block.items} backHref={backHref} backLabel={backLabel} />
        </>
      );
    case "bento":
      return (
        <>
          <Heading block={block} eyebrow="At a glance" />
          <Bento items={block.items} />
        </>
      );
    case "accordion":
      return (
        <>
          <Heading block={block} eyebrow="Open any one" />
          <Accordion items={block.items} />
        </>
      );
    case "region":
      return (
        <PairTabs
          blocks={scene.blocks}
          eyebrow="Where are you headed?"
          destinations={destinations}
          variant="region"
        />
      );
    case "tabs":
      return <PairTabs blocks={scene.blocks} eyebrow="Two sides of it" destinations={destinations} />;
    case "checklist":
      return (
        <>
          {scene.blocks.length > 1 ? <p className="eyebrow">Step by step</p> : null}
          <Checklist
            phases={scene.blocks.map((b) => ({ title: b.title, intro: b.intro, points: b.points }))}
          />
        </>
      );
    case "chips":
      return (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center lg:gap-12">
          <Heading block={block} eyebrow={block.tagsLabel || "Worth pairing with it"} />
          <ChipCloud tags={block.tags} destinations={destinations} />
        </div>
      );
    case "steps":
      return (
        <>
          <Heading block={block} eyebrow="How it works" />
          <Stepper items={block.items} />
        </>
      );
    case "versus":
      return <Versus block={block} />;
    case "reasons":
      return <Reasons block={block} />;
    default:
      return <ContentBlock block={block} />;
  }
}

/* ------------------------------ pieces ---------------------------------- */

function Heading({ block, eyebrow, invert = false }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-3xl">
        {eyebrow ? <p className={cn("eyebrow", invert && "text-brand-200")}>{eyebrow}</p> : null}
        {block.title ? (
          <h2
            className={cn(
              "text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] sm:text-[1.75rem]",
              eyebrow && "mt-2",
              invert ? "text-white" : "text-ink"
            )}
          >
            {block.title}
          </h2>
        ) : null}
        {block.intro ? (
          <p className={cn("mt-3 text-base leading-relaxed", invert ? "text-brand-100" : "text-ink-soft")}>
            {block.intro}
          </p>
        ) : null}
      </div>
      <BlockLink block={block} />
    </div>
  );
}

function BlockLink({ block, className }) {
  if (!block.linkLabel || !block.linkHref) return null;
  return (
    <Link
      href={block.linkHref}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 transition-all hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {block.linkLabel}
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}

function Footnotes({ blocks, invert }) {
  const notes = blocks.map((b) => b.footnote).filter(Boolean);
  if (!notes.length) return null;
  return notes.map((note) => (
    <p
      key={note}
      className={cn("mt-6 max-w-3xl text-sm leading-relaxed", invert ? "text-brand-200" : "text-ink-muted")}
    >
      {note}
    </p>
  ));
}

/** Splits a body into its first sentence and the rest. */
function firstSentence(text) {
  const match = String(text || "").trim().match(/^([\s\S]+?[.!?])\s+([\s\S]+)$/);
  return match ? [match[1], match[2]] : [String(text || "").trim(), ""];
}

/**
 * "What is X?" followed by the argument for it. The definition becomes a
 * card you can take in at a glance; the argument sits beside it as reading.
 */
function ProsePair({ blocks }) {
  const [definition, argument] = blocks;
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-12">
      <div className="relative overflow-hidden rounded-3xl bg-brand-800 p-7 text-white sm:p-9">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -bottom-10 text-[12rem] leading-none font-bold text-white/5 select-none"
        >
          ?
        </span>
        <p className="text-xs font-bold tracking-[0.16em] text-brand-200 uppercase">In short</p>
        <h2 className="mt-3 text-balance-heading text-2xl leading-tight font-bold sm:text-[1.75rem]">
          {definition.title}
        </h2>
        <RichText text={definition.body} className="relative mt-4 text-brand-100" />
      </div>
      <div className="lg:py-4">
        <h2 className="text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
          {argument.title}
        </h2>
        <ProseBody text={argument.body} />
      </div>
    </div>
  );
}

function ProseQuote({ block }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-12">
      <div>
        <p className="eyebrow">Worth knowing</p>
        <h2 className="mt-2 text-balance-heading text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
          {block.title}
        </h2>
      </div>
      <ProseBody text={block.body} flush />
    </div>
  );
}

function ProseBody({ text, flush = false }) {
  const [lead, rest] = firstSentence(text);
  return (
    <div className={flush ? "" : "mt-4"}>
      <p className="flex gap-3 text-xl leading-snug font-semibold tracking-[-0.01em] text-ink sm:text-[1.375rem]">
        <Quote className="mt-1 size-5 shrink-0 text-brand-400" aria-hidden="true" />
        <span>{lead}</span>
      </p>
      {rest ? <RichText text={rest} className="mt-4 text-ink-soft" /> : null}
    </div>
  );
}

/** First card large, the rest around it — a row of equals becomes a shape. */
function Bento({ items }) {
  const [feature, ...rest] = items;
  return (
    <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-7 text-white md:row-span-2 sm:p-8">
        <span
          aria-hidden="true"
          className="absolute top-6 right-6 flex size-11 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-12"
        >
          <Check className="size-5" aria-hidden="true" />
        </span>
        {feature.tag ? (
          <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-100 uppercase">{feature.tag}</p>
        ) : null}
        <h3 className="mt-16 text-2xl font-bold sm:text-3xl">{feature.title}</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-brand-100">{feature.text}</p>
      </div>
      {rest.map((item, index) => (
        <div
          key={item.title}
          className={cn(
            "flex flex-col rounded-3xl bg-white p-6 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200",
            rest.length % 2 === 1 && index === rest.length - 1 && "lg:col-span-2"
          )}
        >
          {item.tag ? (
            <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">{item.tag}</p>
          ) : null}
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-soft">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

/** Two options with an "or" between them. */
function Versus({ block }) {
  return (
    <>
      <Heading block={{ ...block, linkLabel: null }} eyebrow="Two ways to go" />
      <div className="relative mt-7 grid gap-4 md:grid-cols-2 md:gap-6">
        {block.items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "flex flex-col rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
              index === 0
                ? "bg-white ring-1 ring-line hover:shadow-lg"
                : "bg-brand-700 text-white hover:shadow-lg hover:shadow-brand-700/25"
            )}
          >
            {item.tag ? (
              <p
                className={cn(
                  "text-[0.6875rem] font-bold tracking-[0.14em] uppercase",
                  index === 0 ? "text-brand-600" : "text-brand-100"
                )}
              >
                {item.tag}
              </p>
            ) : null}
            <h3 className={cn("text-xl font-bold sm:text-2xl", index === 0 ? "text-ink" : "text-white")}>
              {item.title}
            </h3>
            <p className={cn("mt-3 text-[0.9375rem] leading-relaxed", index === 0 ? "text-ink-soft" : "text-brand-100")}>
              {item.text}
            </p>
            {index === 1 ? <BlockLink block={block} className="mt-6 self-start" /> : null}
          </div>
        ))}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-ink shadow-lg ring-1 ring-line md:flex"
        >
          or
        </span>
      </div>
    </>
  );
}

/** The closing "why choose us" cards, as a dark numbered band. */
function Reasons({ block }) {
  return (
    <>
      <Heading block={block} eyebrow="The short version" invert />
      <ol
        className={cn(
          "mt-8 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2",
          block.items.length % 3 === 0 || block.items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        )}
      >
        {block.items.map((item, index) => (
          <li
            key={item.title}
            className="group relative bg-brand-800 p-6 transition-colors duration-300 hover:bg-brand-700 sm:p-7"
          >
            <span className="font-mono text-3xl font-bold text-brand-300/60 transition-colors group-hover:text-brand-200">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-brand-100">{item.text}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

/* ------------------------------ grouping -------------------------------- */

const isPoints = (b) => b?.kind === "list" && b.points?.length > 0 && !b.tags?.length && !b.columns?.length;
const isTags = (b) => b?.kind === "list" && b.tags?.length > 0 && !b.points?.length && !b.columns?.length;
const isSimpleList = (b) => b?.kind === "list" && (b.points?.length || b.tags?.length) && !b.columns?.length;
const isProse = (b) => b?.kind === "prose" && Boolean(b.body);
const startsWith = (b, pattern) => new RegExp(`^(${pattern})\\b`, "i").test(b?.title || "");
const PHASE = "before|while|during|after|on the day|once";

const CARD_ROTATION = ["explorer", "bento", "accordion"];

function groupBlocks(blocks) {
  const scenes = [];
  let cardRuns = 0;

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i];
    const next = blocks[i + 1];
    const isLast = i === blocks.length - 1;

    if (isSimpleList(block) && isSimpleList(next) && startsWith(block, "domestic") && startsWith(next, "international")) {
      scenes.push({ type: "region", blocks: [block, next] });
      i += 1;
    } else if (isPoints(block) && isPoints(next) && !startsWith(next, "domestic")) {
      const phased = startsWith(block, PHASE) || startsWith(next, PHASE);
      scenes.push({ type: phased ? "checklist" : "tabs", blocks: [block, next] });
      i += 1;
    } else if (isPoints(block)) {
      scenes.push({ type: "checklist", blocks: [block] });
    } else if (isTags(block)) {
      scenes.push({ type: "chips", blocks: [block] });
    } else if (isProse(block) && isProse(next)) {
      scenes.push({ type: "prose-pair", blocks: [block, next] });
      i += 1;
    } else if (isProse(block)) {
      scenes.push({ type: "prose", blocks: [block] });
    } else if (block.kind === "steps" && block.items?.length > 1) {
      scenes.push({ type: "steps", blocks: [block] });
    } else if (block.kind === "cards" && isLast && block.items?.length >= 3) {
      scenes.push({ type: "reasons", blocks: [block] });
    } else if (block.kind === "cards" && block.items?.length === 2) {
      scenes.push({ type: "versus", blocks: [block] });
    } else if (block.kind === "cards" && block.items?.length >= 3) {
      scenes.push({ type: CARD_ROTATION[cardRuns % CARD_ROTATION.length], blocks: [block] });
      cardRuns += 1;
    } else {
      scenes.push({ type: "block", blocks: [block] });
    }
  }

  return scenes;
}
