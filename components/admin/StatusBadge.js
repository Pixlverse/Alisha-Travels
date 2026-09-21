import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Every state the dashboard shows, in one place.
 *
 * There were three separate vocabularies here — the lead pipeline had colours,
 * content status fell through to the pipeline's grey "lost" style (so Active
 * and Draft rendered identically), and departure availability was styled with
 * ad-hoc classes in the list renderer. Three tabs, three conventions, and the
 * one an editor looks at most told them nothing.
 *
 * So the whole dashboard reads from this map, and the colours mean the same
 * thing wherever they appear:
 *
 *   EMERALD   live, won, going ahead        active · confirmed · upcoming
 *   SUN       waiting on somebody           draft · quoted · sold out
 *   BRAND     new, or a role with power     new · contacted · admin
 *   MIST      over, or switched off         lost · expired · staff · inactive
 *
 * Only emerald is not from the site palette. It earns its place: "this is
 * live" is the one state where a blue would be read as decoration rather than
 * as a signal, and it was already used for the availability text and the saved
 * tick before this file existed.
 *
 * `dot` is the same token as a 6px circle, for the places a full badge is too
 * heavy — inside the status select, and on the dashboard's pipeline tiles.
 */
export const STATUS_TOKENS = {
  /* Lead pipeline: New → Contacted → Quoted → Confirmed / Lost */
  new: { label: "New", badge: "bg-brand-500 text-white", dot: "bg-brand-500" },
  contacted: { label: "Contacted", badge: "bg-brand-100 text-brand-800", dot: "bg-brand-300" },
  quoted: { label: "Quoted", badge: "bg-sun/25 text-sun-deep", dot: "bg-sun" },
  confirmed: {
    label: "Confirmed",
    badge: "bg-emerald-100 text-emerald-800",
    dot: "bg-emerald-500",
  },
  lost: { label: "Lost", badge: "bg-mist-200 text-ink-muted", dot: "bg-mist-300" },

  /* Content: is this on the public site or not */
  active: { label: "Active", badge: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  draft: { label: "Draft", badge: "bg-sun/25 text-sun-deep", dot: "bg-sun" },

  /* Departures */
  upcoming: { label: "Upcoming", badge: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  "sold-out": { label: "Sold out", badge: "bg-sun/25 text-sun-deep", dot: "bg-sun" },
  expired: { label: "Expired", badge: "bg-mist-200 text-ink-muted", dot: "bg-mist-300" },

  /* Dashboard accounts */
  admin: { label: "Admin", badge: "bg-brand-100 text-brand-800", dot: "bg-brand-500" },
  staff: { label: "Staff", badge: "bg-mist-200 text-ink-muted", dot: "bg-mist-300" },
  inactive: { label: "Deactivated", badge: "bg-mist-200 text-ink-muted", dot: "bg-mist-300" },
};

/** Falls back to the neutral token rather than rendering nothing. */
export function statusToken(status) {
  return (
    STATUS_TOKENS[status] || {
      label: String(status || "-").replace("-", " "),
      badge: "bg-mist-200 text-ink-muted",
      dot: "bg-mist-300",
    }
  );
}

export default function StatusBadge({ status, className }) {
  const token = statusToken(status);

  return (
    <Badge className={cn("border-transparent font-semibold capitalize", token.badge, className)}>
      {token.label}
    </Badge>
  );
}

/** The same token as a dot, for controls where a badge would be too much. */
export function StatusDot({ status, className }) {
  return (
    <span
      aria-hidden="true"
      className={cn("size-2 shrink-0 rounded-full", statusToken(status).dot, className)}
    />
  );
}
