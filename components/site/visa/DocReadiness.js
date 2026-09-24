"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import WhatsAppIcon from "@/components/site/icons/WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * "Documents we help you prepare", as a checklist the visitor can tick.
 *
 * The list is the client's copy; the ticking is ours. Whatever is still
 * unticked goes into the WhatsApp message, so the conversation opens on what
 * the traveller actually needs help with rather than on "Hi".
 *
 * Nothing is stored: it is a thinking aid for one visit, not a record.
 */
export default function DocReadiness({ title, items }) {
  const [ready, setReady] = useState(() => new Set());
  const done = ready.size;
  const missing = items.filter((item) => !ready.has(item));
  const percent = Math.round((done / items.length) * 100);

  const toggle = (item) =>
    setReady((current) => {
      const next = new Set(current);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });

  const message = [
    "Hi Alisha Tours & Travels,",
    "I'd like help with a tourist visa file.",
    ...(missing.length && done
      ? ["", "Still to arrange:", ...missing.map((item) => `- ${item}`)]
      : []),
  ].join("\n");

  return (
    <section className="flex h-full flex-col rounded-[1.5rem] border border-line bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <p className="mt-1 text-sm text-ink-muted">Tick what you already have.</p>
        </div>
        <Ring percent={percent} label={`${done}/${items.length}`} />
      </div>

      <ul className="mt-5 flex-1 space-y-1.5">
        {items.map((item) => {
          const on = ready.has(item);
          return (
            <li key={item}>
              <button
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(item)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left text-[0.9375rem] leading-snug transition-colors",
                  on ? "bg-brand-50 text-ink" : "text-ink-soft hover:bg-mist-50"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                    on ? "border-brand-700 bg-brand-700 text-white" : "border-mist-300 bg-white"
                  )}
                >
                  {on ? <Check className="size-3" strokeWidth={3.5} aria-hidden="true" /> : null}
                </span>
                <span className={cn(on && "text-ink-muted line-through decoration-brand-300")}>{item}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft" aria-live="polite">
          {done === 0
            ? `${items.length} things a consulate reads.`
            : missing.length
              ? `${missing.length} still to arrange. We'll help with each one.`
              : "Everything ticked. Send us the trip and we'll check it line by line."}
        </p>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-whatsapp-ink transition-colors hover:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="size-4" />
          {missing.length && done ? "Ask about the rest" : "WhatsApp us"}
        </a>
      </div>
    </section>
  );
}

/** A small progress ring. */
function Ring({ percent, label }) {
  const r = 20;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative flex size-14 shrink-0 items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" strokeWidth="4" className="stroke-mist-100" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * percent) / 100}
          className={cn(
            "transition-[stroke-dashoffset] duration-500 ease-out",
            percent === 100 ? "stroke-sun" : "stroke-brand-600"
          )}
        />
      </svg>
      <span className="text-xs font-bold text-ink tabular-nums">{label}</span>
    </span>
  );
}
