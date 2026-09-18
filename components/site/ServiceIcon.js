import {
  BedDouble,
  BookUser,
  Briefcase,
  Car,
  Compass,
  FileCheck,
  GraduationCap,
  Mountain,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Ship,
  Stamp,
  Ticket,
  TrainFront,
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
  Stamp,
  Compass,
  Briefcase,
  GraduationCap,
  Mountain,
  FileCheck,
  Ticket,
  TrainFront,
  Car,
  Ship,
  BookUser,
  PlaneTakeoff,
};

export const SERVICE_ICON_NAMES = Object.keys(ICONS);

export default function ServiceIcon({ name, className = "size-5", strokeWidth }) {
  const Icon = ICONS[name] || Compass;
  // strokeWidth is passed through for the oversized watermark marks, where
  // lucide's default 2 renders as a heavy graphic rather than a texture.
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
