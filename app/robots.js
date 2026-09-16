import { SITE } from "@/lib/site";

/**
 * Served at /robots.txt.
 *
 * `/admin/` and `/api/` are disallowed. That is a crawl instruction, not
 * access control — the dashboard is protected by proxy.js, the layout session
 * check and per-action role checks, and would be just as safe if this file did
 * not exist.
 */
export default function robots() {
  const base = SITE.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          // Filtered listing views are the same inventory in a different
          // order; the canonical unfiltered pages are what should rank.
          "/packages/?*",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
