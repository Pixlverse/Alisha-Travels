import Image from "next/image";
import { formatDate } from "@/lib/format";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

const SOURCE_LABEL = {
  google: "Google review",
  justdial: "JustDial review",
  direct: "Shared with us directly",
};

export default function TestimonialCard({ testimonial, className }) {
  const { name, location, tourTaken, rating, quote, photo, source, date } = testimonial;

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-3xl border border-line bg-white p-6",
        className
      )}
    >
      <StarRating value={rating} />

      <blockquote className="mt-4 flex-1">
        <p className="text-[0.9375rem] leading-relaxed text-ink-soft">“{quote}”</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        {photo?.url ? (
          <Image
            src={photo.url}
            alt={photo.alt || name}
            width={44}
            height={44}
            className="size-11 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 font-display text-lg font-semibold text-brand-700"
          >
            {name.charAt(0)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate font-sans text-sm font-semibold text-ink">{name}</p>
          <p className="truncate text-xs text-ink-muted">
            {[tourTaken, location].filter(Boolean).join(" · ")}
          </p>
        </div>
      </figcaption>

      <p className="mt-3 text-[0.6875rem] text-ink-muted">
        {SOURCE_LABEL[source] || "Review"}
        {date ? ` · ${formatDate(date)}` : ""}
      </p>
    </figure>
  );
}
