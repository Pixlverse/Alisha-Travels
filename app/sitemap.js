import { getDestinations } from "@/lib/data/destinations";
import { getPackages } from "@/lib/data/packages";
import { getServices } from "@/lib/data/content";
import { SITE } from "@/lib/site";

/**
 * Dynamic sitemap, served at /sitemap.xml.
 *
 * URLs carry a trailing slash to match `trailingSlash: true` in
 * next.config.mjs and the signed-off sitemap. Submitting the slashless form
 * would list URLs that 308-redirect, which wastes crawl budget.
 *
 * `/admin/*` is absent by construction — nothing under it is enumerated here,
 * and robots.js disallows it as well.
 */
export const revalidate = 3600;

const base = SITE.url.replace(/\/$/, "");
const url = (path) => `${base}${path}`;

export default async function sitemap() {
  const [destinations, packages, services] = await Promise.all([
    getDestinations(),
    getPackages({ limit: 500 }),
    getServices(),
  ]);

  const now = new Date();

  /** Static routes, with priorities reflecting how much they actually earn. */
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/destinations/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/destinations/international/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/destinations/domestic/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/packages/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/packages/honeymoon/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/packages/family/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/packages/group-tours/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/packages/corporate/", priority: 0.8, changeFrequency: "weekly" },
    // Departures change more often than anything else on the site.
    { path: "/fixed-departures/", priority: 0.9, changeFrequency: "daily" },
    { path: "/fixed-departures/international/", priority: 0.7, changeFrequency: "daily" },
    { path: "/fixed-departures/domestic/", priority: 0.7, changeFrequency: "daily" },
    { path: "/services/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/ramzi-mohammed-ali/", priority: 0.5, changeFrequency: "yearly" },
    { path: "/reviews/", priority: 0.6, changeFrequency: "weekly" },
    { path: "/gallery/", priority: 0.4, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.8, changeFrequency: "monthly" },
  ].map((route) => ({
    url: url(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const destinationRoutes = destinations.map((destination) => ({
    url: url(`/destinations/${destination.region}/${destination.slug}/`),
    lastModified: destination.updatedAt ? new Date(destination.updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const packageRoutes = packages.map((pkg) => ({
    url: url(`/packages/${pkg.slug}/`),
    lastModified: pkg.updatedAt ? new Date(pkg.updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: url(`/services/${service.slug}/`),
    lastModified: service.updatedAt ? new Date(service.updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...destinationRoutes, ...packageRoutes, ...serviceRoutes];
}
