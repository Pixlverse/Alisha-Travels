import { Plus } from "lucide-react";

/**
 * FAQ accordion.
 *
 * Built on native <details>/<summary> rather than a JavaScript accordion, for
 * three reasons: it works before hydration and without JavaScript, the browser
 * gives us the keyboard and screen-reader behaviour for free, and the answers
 * are present in the server HTML — which is what makes the FAQPage structured
 * data in phase 12 honest rather than a claim about content that only appears
 * after a click.
 */
export default function Faqs({ faqs = [], title = "Frequently asked questions", id }) {
  if (!faqs.length) return null;

  return (
    <section id={id} aria-labelledby={id ? `${id}-heading` : undefined}>
      <h2
        id={id ? `${id}-heading` : undefined}
        className="text-2xl font-semibold text-ink sm:text-3xl"
      >
        {title}
      </h2>

      <div className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map((faq, index) => (
          <details key={`${faq.question}-${index}`} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              <h3 className="font-sans text-base font-semibold text-ink sm:text-lg">
                {faq.question}
              </h3>
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-transform duration-200 group-open:rotate-45 group-open:border-brand-300 group-open:text-brand-600"
              >
                <Plus className="size-4" />
              </span>
            </summary>
            <div className="pb-5 text-[0.9375rem] leading-relaxed text-ink-soft">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
