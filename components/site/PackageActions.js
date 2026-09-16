"use client";

import { useState } from "react";
import { Check, Download, Mail, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The Share / Download / Email row from the reference tour page.
 *
 * Every control here does something real:
 *   - Share uses the Web Share API where the browser has it (which is most
 *     mobile browsers) and falls back to copying the URL to the clipboard.
 *   - Download links to the package's PDF when one has been uploaded. When
 *     there isn't one it prints instead, and the print stylesheet in
 *     globals.css strips the site chrome so "Save as PDF" produces a clean
 *     itinerary. That is deliberate: a disabled or dead download button would
 *     repeat the legacy site's habit of shipping controls that go nowhere.
 *   - Email opens the visitor's mail client with the itinerary link and a
 *     subject already filled in.
 */
export default function PackageActions({ title, pdfUrl, className }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // The visitor dismissed the share sheet — fall through to copying.
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* Clipboard blocked; nothing useful to do beyond leaving the URL bar. */
    }
  };

  const mailtoHref = () => {
    const url = typeof window === "undefined" ? "" : window.location.href;
    const subject = encodeURIComponent(`Itinerary: ${title}`);
    const body = encodeURIComponent(
      `Thought this might be worth a look —\n\n${title}\n${url}\n\nAlisha Tours & Travels`
    );
    return `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <Action onClick={share} icon={copied ? Check : Share2} label={copied ? "Link copied" : "Share"} />

      {pdfUrl ? (
        <Action
          href={pdfUrl}
          icon={Download}
          label="Download PDF"
          external
        />
      ) : (
        <Action onClick={() => window.print()} icon={Download} label="Save as PDF" />
      )}

      <Action href={mailtoHref()} icon={Mail} label="Email itinerary" />
    </div>
  );
}

function Action({ href, onClick, icon: Icon, label, external }) {
  const classes =
    "inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-[0.8125rem] font-semibold text-ink-soft transition-colors hover:border-brand-300 hover:text-brand-700 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:outline-none";

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <Icon className="size-4 text-brand-500" aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      <Icon className="size-4 text-brand-500" aria-hidden="true" />
      {label}
    </button>
  );
}
