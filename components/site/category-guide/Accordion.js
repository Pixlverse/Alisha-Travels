import { Plus } from "lucide-react";

/**
 * Cards as an accordion: titles only until one is opened. Built on native
 * <details>, so it works without JavaScript, is keyboard accessible for free,
 * and the text stays in the page for search. The first one starts open so
 * the reader sees what is inside before deciding to open the rest.
 */
export default function Accordion({ items }) {
  return (
    <div className="mt-7 grid gap-3 lg:grid-cols-2 lg:items-start">
      {items.map((item, index) => (
        <details
          key={item.title}
          open={index === 0}
          className="group rounded-2xl bg-white ring-1 ring-line transition-shadow duration-300 open:shadow-md open:ring-brand-200 hover:ring-brand-200"
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
            <span className="font-mono text-xs font-bold text-brand-600 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-base font-semibold text-ink">{item.title}</span>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-700 group-open:text-white">
              <Plus className="size-4" aria-hidden="true" />
            </span>
          </summary>
          <div className="px-5 pb-5 pl-[3.25rem]">
            {item.tag ? (
              <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
                {item.tag}
              </p>
            ) : null}
            <p className="text-[0.9375rem] leading-relaxed text-ink-soft">{item.text}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
