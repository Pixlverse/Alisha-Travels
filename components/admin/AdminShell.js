"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  CalendarDays,
  HandHeart,
  Images,
  Inbox,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  MessageSquareQuote,
  Package,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { logoutAction } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Dashboard chrome.
 *
 * Uses shadcn/ui throughout, which is exactly the split the brief asks for:
 * the public site is bespoke, the dashboard is built from the component
 * library so it can move fast and stay consistent.
 *
 * The navigation is filtered by role here for usability, not for security —
 * every page and every Server Action re-checks the session and the role on the
 * server. Hiding a link is a courtesy, not a boundary.
 */
const NAV = [
  { href: "/admin/", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/enquiries/", label: "Enquiries", icon: Inbox, badge: "enquiries" },
  { section: "Content" },
  { href: "/admin/destinations/", label: "Destinations", icon: MapPin, adminOnly: true },
  { href: "/admin/packages/", label: "Packages", icon: Package, adminOnly: true },
  { href: "/admin/departures/", label: "Departures", icon: CalendarDays, adminOnly: true },
  { href: "/admin/services/", label: "Services", icon: Wrench, adminOnly: true },
  { href: "/admin/campaigns/", label: "Campaigns", icon: HandHeart, adminOnly: true },
  { href: "/admin/testimonials/", label: "Testimonials", icon: MessageSquareQuote, adminOnly: true },
  { href: "/admin/gallery/", label: "Gallery", icon: Images, adminOnly: true },
  { href: "/admin/offices/", label: "Offices", icon: Building2, adminOnly: true },
  { section: "Administration" },
  { href: "/admin/users/", label: "Team accounts", icon: Users, adminOnly: true },
];

export default function AdminShell({ session, newEnquiries = 0, children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isAdmin = session.role === "admin";

  const items = NAV.filter((item) => !item.adminOnly || isAdmin);

  const isActive = (item) =>
    item.exact ? pathname === item.href.replace(/\/$/, "") || pathname === item.href
      : pathname.startsWith(item.href.replace(/\/$/, ""));

  return (
    <div className="flex min-h-screen bg-mist-50">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 shrink-0 border-r border-line bg-white transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Link href="/admin/" className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-brand-500"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="#fff">
                <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
              </svg>
            </span>
            <span className="font-sans text-sm font-bold text-ink">Alisha Admin</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md p-1 text-muted-foreground lg:hidden"
          >
            <span className="sr-only">Close menu</span>
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Dashboard" className="flex flex-col gap-0.5 overflow-y-auto p-3">
          {items.map((item, index) =>
            item.section ? (
              <p
                key={`section-${index}`}
                className="mt-4 mb-1 px-3 text-[0.625rem] font-bold tracking-[0.14em] text-muted-foreground uppercase"
              >
                {item.section}
              </p>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item) ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item)
                    ? "bg-brand-50 text-brand-800"
                    : "text-ink-soft hover:bg-mist-100 hover:text-ink"
                )}
              >
                <item.icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="flex-1">{item.label}</span>
                {item.badge === "enquiries" && newEnquiries > 0 ? (
                  <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[0.625rem] font-bold text-white">
                    {newEnquiries}
                  </span>
                ) : null}
              </Link>
            )
          )}
        </nav>

        <div className="mt-auto border-t border-line p-3">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-800"
            >
              {session.name?.charAt(0)?.toUpperCase() || "?"}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-ink">{session.name}</span>
              <span className="block text-xs text-muted-foreground capitalize">{session.role}</span>
            </span>
          </div>
          <form action={logoutAction}>
            <Button type="submit" variant="ghost" size="sm" className="mt-1 w-full justify-start">
              <LogOut className="size-4" aria-hidden="true" />
              Sign out
            </Button>
          </form>
        </div>
      </aside>

      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
        />
      ) : null}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-3 border-b border-line bg-white px-4 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-md p-2 text-ink"
            aria-label="Open menu"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <span className="font-sans text-sm font-bold text-ink">Alisha Admin</span>
          <Link
            href="/"
            className="ml-auto text-xs font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            View site
          </Link>
        </header>

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
