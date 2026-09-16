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
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
