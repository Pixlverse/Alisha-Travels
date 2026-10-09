import { cn } from "@/lib/utils";

/**
 * Renders the long-form body fields (service descriptions, the founder
 * profile, destination intros) as paragraphs.
 *
 * The content is plain text with blank lines between paragraphs — that is what
 * the seed writes and what the admin textarea will produce. Splitting on blank
 * lines keeps authoring simple and means nothing an admin types can inject
 * markup into the page.
 *
 * One piece of formatting is allowed: a paragraph that starts with "## " is a
 * subheading. Long stories (a campaign write-up) need section breaks, and this
 * is the smallest thing an admin can type that gives them one — still plain
 * text, still nothing that can inject markup.
 *
 * If the client later wants real formatting inside these fields, this is the
 * one place to swap in a Markdown renderer.
 */
export default function RichText({ text, className, size = "base" }) {
  if (!text) return null;

  const paragraphs = String(text)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (!paragraphs.length) return null;

  const sizes = {
    base: "text-base leading-relaxed",
    lg: "text-lg leading-relaxed sm:text-xl sm:leading-relaxed",
  };

  return (
    <div className={cn("space-y-5 text-ink-soft", sizes[size], className)}>
      {paragraphs.map((paragraph, index) =>
        paragraph.startsWith("## ") ? (
          <h2
            key={index}
            className="pt-5 text-balance-heading text-xl leading-snug font-bold tracking-[-0.01em] text-ink sm:text-2xl"
          >
            {paragraph.slice(3).trim()}
          </h2>
        ) : (
          <p key={index}>{paragraph}</p>
        )
      )}
    </div>
  );
}
