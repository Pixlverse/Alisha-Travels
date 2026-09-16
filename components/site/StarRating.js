import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Star rating. Renders real stars for a real number — the legacy site shipped
 * a rating widget stuck at zero, which is worse than showing nothing.
 */
export default function StarRating({ value = 5, size = "sm", className, showValue = false }) {
  const rounded = Math.round(value);
  const dimension = size === "lg" ? "size-5" : "size-4";

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span className="sr-only">{value} out of 5 stars</span>
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={cn(dimension, index < rounded ? "fill-sun text-sun" : "text-mist-300")}
          />
        ))}
      </span>
      {showValue ? (
        <span className="ml-1 font-sans text-sm font-semibold text-ink" aria-hidden="true">
          {value.toFixed(1)}
        </span>
      ) : null}
    </span>
  );
}
