"use client";

import { MessageSquareText, Phone } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import { PRIMARY_PHONE } from "@/lib/site";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * Sticky mobile action bar — Call / WhatsApp / Enquire.
 *
 * Persistent across the whole public site on small viewports. The legacy site
 * had neither a WhatsApp CTA nor a sticky call bar, which for an Indian travel
 * agency is the single biggest conversion gap in the audit.
 *
 * Hidden from `lg` upwards, where the header's Call button and the in-page CTAs
 * are always within reach. Body clearance comes from the `.has-action-bar`
 * class applied in app/(site)/layout.js.
 *
 * The WhatsApp number is not written here — it comes from lib/whatsapp.js,
 * which reads it from lib/site.js.
 */
export default function StickyActionBar() {
  const items = [
    {
      key: "call",
      href: `tel:${PRIMARY_PHONE.tel}`,
      label: "Call",
      sub: PRIMARY_PHONE.display,
      icon: <Phone className="size-5" aria-hidden="true" />,
      className: "text-brand-800",
    },
    {
      key: "whatsapp",
      href: whatsappLink(),
      label: "WhatsApp",
      sub: "Chat now",
      icon: <WhatsAppIcon className="size-5" />,
      className: "text-whatsapp-text",
      external: true,
    },
    {
      key: "enquire",
      href: "/contact/",
      label: "Enquire",
      sub: "Free quote",
      icon: <MessageSquareText className="size-5" aria-hidden="true" />,
      className: "text-brand-600",
    },
  ];

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <nav aria-label="Quick contact" className="grid grid-cols-3">
        {items.map((item) => (
          <a
            key={item.key}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors active:bg-mist-100"
          >
            <span className={item.className}>{item.icon}</span>
            <span className="text-[0.6875rem] font-semibold text-ink">{item.label}</span>
            <span className="sr-only">{item.sub}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
