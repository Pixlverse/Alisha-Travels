import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A country flag, cropped to a circle.
 *
 * The files are 80px-wide PNGs in /public/flags, named by lower-case ISO
 * 3166 code (plus `eu`). They are around 1KB each, so they are served as-is
 * rather than through the image optimiser, which would only add a round trip.
 *
 * Decorative by default: every flag on the visa pages sits next to the
 * country's name, so a screen reader announcing it would say it twice.
 */
export default function Flag({ code, className, label }) {
  return (
    <Image
      src={`/flags/${code}.png`}
      alt={label || ""}
      aria-hidden={label ? undefined : true}
      width={48}
      height={48}
      unoptimized
      className={cn(
        "size-6 shrink-0 rounded-full object-cover ring-1 ring-black/10",
        className
      )}
    />
  );
}

/** Overlapping flags, like an avatar stack. */
export function FlagStack({ codes = [], className, flagClassName }) {
  return (
    <span className={cn("flex items-center -space-x-2", className)}>
      {codes.map((code) => (
        <Flag
          key={code}
          code={code}
          // The white ring separates overlapping discs; the hairline shadow
          // outside it keeps mostly-white flags (France, Ireland, Japan)
          // from dissolving into a white card.
          className={cn(
            "size-7 ring-2 ring-white shadow-[0_0_0_3px_rgba(16,32,42,0.12)]",
            flagClassName
          )}
        />
      ))}
    </span>
  );
}
