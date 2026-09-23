import { SITE } from "@/lib/site";
import { ORG_ID } from "@/lib/seo/schema";

/**
 * `Service` node for the Global visa pages.
 *
 * serviceSchema() in schema.js is built around a Service document from the
 * database and its /services/<slug>/ URL. These pages are static routes with
 * their own nested URLs, so they describe themselves here instead, with the
 * same shape and the same provider reference.
 */
export function visaServiceSchema({ href, name, description, areaServed = "India" }) {
  const url = `${SITE.url.replace(/\/$/, "")}${href}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: areaServed },
    serviceType: "Visa application assistance",
  };
}
