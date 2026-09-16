import {
  BedDouble,
  Briefcase,
  Compass,
  FileCheck,
  GraduationCap,
  Mountain,
  Plane,
  ShieldCheck,
  Ticket,
} from "lucide-react";

/**
 * Services store an icon by name so an admin can pick one from a dropdown
 * without touching code. Anything unrecognised falls back to a compass rather
 * than rendering nothing.
 */
const ICONS = {
  Plane,
  BedDouble,
  ShieldCheck,
  Compass,
  Briefcase,
  GraduationCap,
  Mountain,
  FileCheck,
  Ticket,
};

export const SERVICE_ICON_NAMES = Object.keys(ICONS);

export default function ServiceIcon({ name, className = "size-5", strokeWidth }) {
  const Icon = ICONS[name] || Compass;
  // strokeWidth is passed through for the oversized watermark marks, where
  // lucide's default 2 renders as a heavy graphic rather than a texture.
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
