"use client";

import { useId, useState } from "react";
import { Check, FileCheck2, RotateCcw } from "lucide-react";

import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * The document list as a kit the visitor works through: tick what you
 * already have, watch the ring fill, and send what is still missing to us on
 * WhatsApp in one tap. A list you act on gets read line by line; a list you
 * look at gets scrolled past.
 *
 * Several groups (applicant / sponsor / …) become tabs, each with its own
 * count. Nothing is stored; every item is in the markup for search engines.
 */
export default function DocKit({ country, groups, note }) {
  const baseId = useId();
  const [tab, setTab] = useState(0);
  const [ready, setReady] = useState(() => new Set());

  const all = groups.flatMap((group, g) => group.items.map((item, i) => `${g}:${i}`));
  const total = all.length;
  const done = ready.size;
  const percent = total ? Math.round((done / total) * 100) : 0;

  function toggle(key) {
    setReady((previous) => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const missing = groups.flatMap((group, g) =>
    group.items.filter((_, i) => !ready.has(`${g}:${i}`)).map((item) => `- ${item}`)
  );
  const message = [
    "Hi Alisha Tours & Travels,",
    `I'm applying for a ${country} tourist visa.`,
    done
      ? `I have ${done} of ${total} documents ready. Still to sort:`
      : "Please send me the document list for my trip.",
    ...(done ? missing : []),
  ].join("\n");

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
      <div className="rounded-3xl bg-white p-5 ring-1 ring-line sm:p-7">
        {groups.length > 1 ? (
          <div role="tablist" aria-label="Document groups" className="-mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1">
            {groups.map((group, g) => {
              const count = group.items.filter((_, i) => ready.has(`${g}:${i}`)).length;
              return (
                <button
                  key={group.title}
                  id={`${baseId}-tab-${g}`}
                  type="button"
                  role="tab"
                  aria-selected={tab === g}
                  aria-controls={`${baseId}-panel-${g}`}
                  onClick={() => setTab(g)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    tab === g ? "bg-brand-700 text-white" : "bg-mist-50 text-ink-soft ring-1 ring-line hover:text-ink"
                  )}
                >
                  {group.title}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-xs tabular-nums",
                      tab === g ? "bg-white/20" : "bg-white text-ink-muted"
                    )}
                  >
                    {count}/{group.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}

        {groups.map((group, g) => (
          <ul
            key={group.title}
            id={`${baseId}-panel-${g}`}
            role={groups.length > 1 ? "tabpanel" : undefined}
            aria-labelledby={groups.length > 1 ? `${baseId}-tab-${g}` : undefined}
            aria-label={groups.length > 1 ? undefined : group.title}
            hidden={groups.length > 1 && tab !== g}
            className="grid gap-1.5 animate-in fade-in duration-300"
          >
            {group.items.map((item, i) => {
              const key = `${g}:${i}`;
              const checked = ready.has(key);
              return (
                <li key={key}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={checked}
                    onClick={() => toggle(key)}
                    className={cn(
                      "group flex w-full items-start gap-3.5 rounded-2xl px-3.5 py-3 text-left transition-colors",
                      checked ? "bg-emerald-50/70" : "hover:bg-brand-50/60",
                      "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none"
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200",
                        checked
                          ? "scale-110 border-emerald-600 bg-emerald-600 text-white"
                          : "border-mist-300 bg-white text-transparent group-hover:border-brand-400"
                      )}
                    >
                      <Check className="size-3.5" strokeWidth={3.5} aria-hidden="true" />
                    </span>
                    <span className={cn("text-[0.9375rem] leading-relaxed", checked ? "text-ink-muted" : "text-ink-soft")}>
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ))}

        {note ? (
          <p className="mt-5 rounded-2xl bg-sun/10 px-4 py-3 text-sm leading-relaxed text-ink-soft ring-1 ring-sun/25">
            {note}
          </p>
        ) : null}
      </div>

      {/* The progress card follows you down the list on wide screens. */}
      <aside className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white lg:sticky lg:top-40">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 64 64" className="size-20 shrink-0 -rotate-90" aria-hidden="true">
            <circle cx="32" cy="32" r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-white/15" />
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="text-sun transition-[stroke-dashoffset] duration-500 ease-out"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (percent / 100) * circumference}
            />
          </svg>
          <div aria-live="polite">
            <p className="text-3xl font-bold tabular-nums">{percent}%</p>
            <p className="text-sm text-brand-100">
              {done} of {total} documents ready
            </p>
          </div>
        </div>

        <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-brand-100">
          <FileCheck2 className="mt-0.5 size-4 shrink-0 text-sun" aria-hidden="true" />
          {done === total && total
            ? "Everything on the list. Send it over and we'll check each one against your passport."
            : "Tick what you already have. We'll help with the rest."}
        </p>

        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-whatsapp-ink transition-colors hover:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="size-4" />
          {done ? "Send us what's missing" : "Get this list on WhatsApp"}
        </a>
        {done ? (
          <button
            type="button"
            onClick={() => setReady(new Set())}
            className="mt-3 flex w-full items-center justify-center gap-1.5 text-xs font-semibold text-brand-100 hover:text-white"
          >
            <RotateCcw className="size-3" aria-hidden="true" />
            Clear ticks
          </button>
        ) : null}
      </aside>
    </div>
  );
}
