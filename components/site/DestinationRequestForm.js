"use client";

import { useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import EnquiryDialog from "./EnquiryDialog";
import { cn } from "@/lib/utils";

/**
 * "Somewhere that isn't on this list?" — the block that closes the destination
 * listings.
 *
 * It used to be a bordered box containing a paragraph and a text link to
 * /contact/, which the client read as weak and not obviously interactive. It
 * asks for the place here instead: type it, press the button, and the enquiry
 * dialog opens with the sentence already written. Nobody types the destination
 * twice, and the block visibly does something.
 *
 * The three prompts below fill the input rather than submitting. They are trip
 * shapes, not places — deliberately. Suggesting destinations we do not sell
 * would be a promise, and suggesting ones we do sell defeats the point of a box
 * for everything that is not on the list.
 *
 * The input is not required. An empty submit still opens the dialog, with no
 * message pre-written — the visitor who wants the full form should not have to
 * satisfy this field first.
 */
const PROMPTS = [
  "A honeymoon somewhere quiet",
  "A family trip in the school holidays",
  "A group departure for twenty of us",
];

export default function DestinationRequestForm({ destinations = [], services = [] }) {
  const [place, setPlace] = useState("");
  const inputRef = useRef(null);

  const message = place.trim()
    ? `I am looking for: ${place.trim()}. Is that something you can arrange?`
    : "";

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-10">
      {/* The same corner wave as the services cards, so this block belongs to
          the same family rather than looking like a form dropped on the page. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 z-0 size-24 bg-gradient-to-br from-brand-100 to-brand-300 opacity-45 [clip-path:path('M96,4.8C76.8,4.8,74.4,33.6,52.8,38.4C31.2,43.2,28.8,72,7.2,76.8C3.6,78,2.4,86.4,0,96L96,96Z')]"
      />

      {/* Two columns: the ask on the left, the form on the right in a surface
          of its own. One column capped at max-w-2xl left the right half of a
          1200px card empty, which is the same "too much white space" note this
          block was rebuilt to answer. */}
      <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <h2 className="text-2xl leading-tight font-bold tracking-[-0.015em] text-ink sm:text-[1.75rem]">
            Somewhere that isn&rsquo;t on this list?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            These are where we send people most, not the limit of what we can arrange. Tell us
            where you have in mind and we will either build it properly or say plainly that
            someone else would serve you better.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-mist-50 p-5 ring-1 ring-line sm:p-6">
          <label className="block">
            <span className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
              Where do you want to go?
            </span>
            {/* A field that looks like a field. The old version's entire
                affordance was an underlined link, which is why it did not read
                as interactive. */}
            <span className="mt-2 flex min-w-0 items-center gap-3 rounded-full bg-white px-5 py-3 ring-1 ring-line transition-colors focus-within:ring-2 focus-within:ring-brand-400">
              <MapPin className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={place}
                onChange={(event) => setPlace(event.target.value)}
                placeholder="Japan, Sri Lanka, a road trip in Spain…"
                className="w-full min-w-0 bg-transparent text-[0.9375rem] text-ink outline-none placeholder:text-ink-muted"
              />
            </span>
          </label>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[0.6875rem] font-semibold tracking-wide text-ink-muted uppercase">
              Or start from
            </span>
            {PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => {
                  setPlace(prompt);
                  inputRef.current?.focus();
                }}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                  "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none",
                  place === prompt
                    ? "bg-brand-700 text-white"
                    : "bg-white text-brand-700 ring-1 ring-brand-100 hover:bg-brand-50"
                )}
              >
                {prompt}
              </button>
            ))}
          </div>

          <EnquiryDialog
            destinations={destinations}
            services={services}
            source="/destinations/"
            title="Where would you like to go?"
            lead="Tell us roughly what you have in mind - dates and budget can be approximate."
            initialMessage={message}
            renderTrigger={({ open }) => (
              <button
                type="button"
                onClick={open}
                className={cn(
                  "group mt-5 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 px-7 text-base font-semibold text-white",
                  "transition-colors hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none"
                )}
              >
                Ask about it
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            )}
          />

          <p className="mt-3 text-xs leading-relaxed text-ink-muted">
            Opens the enquiry form with your answer already written in. The field is optional.
          </p>
        </div>
      </div>
    </div>
  );
}
