import { EMAILS, OFFICES, PRIMARY_PHONE, SITE, SOCIAL } from "../site";

/**
 * JSON-LD builders.
 *
 * The legacy site had no structured data at all. Everything here describes
 * something a visitor can actually see on the page — that is the rule Google
 * applies, and it is also the honest test: if the markup claims a price, a
 * rating or an FAQ, the page renders it.
 *
 * Entities are given stable `@id` values so they can reference each other
 * instead of being repeated. The organisation is defined once on the homepage
 * and pointed at from everywhere else.
 */

const absolute = (path = "/") =>
  path.startsWith("http") ? path : `${SITE.url.replace(/\/$/, "")}${path}`;

export const ORG_ID = `${SITE.url.replace(/\/$/, "")}/#organization`;
export const WEBSITE_ID = `${SITE.url.replace(/\/$/, "")}/#website`;
const officeId = (slug) => `${SITE.url.replace(/\/$/, "")}/contact/#office-${slug}`;

/* -------------------------------------------------------------------------- */
/*  Organisation and offices                                                   */
/* -------------------------------------------------------------------------- */

/**
 * The business itself. `TravelAgency` is a subtype of LocalBusiness, so this
 * carries the contact and rating detail; each physical office is a separate
 * LocalBusiness node below, because an office is a distinct place with its own
 * address, phone numbers and opening hours. There is one office — see the note
 * on OFFICES in lib/site.js.
 */
export function travelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: absolute("/"),
    description: SITE.description,
    slogan: SITE.tagline,
    foundingDate: String(SITE.founded),
    founder: { "@type": "Person", name: SITE.founder },
    logo: {
      "@type": "ImageObject",
      url: absolute("/images/alisha-official-logo.png"),
      width: 2542,
      height: 1374,
    },
    image: absolute("/images/alisha-official-logo.png"),
    email: EMAILS.primary,
    telephone: PRIMARY_PHONE.tel,
    priceRange: "₹₹",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICES[0].address,
      addressLocality: OFFICES[0].locality,
      addressRegion: OFFICES[0].region,
      postalCode: OFFICES[0].postalCode,
      addressCountry: "IN",
    },
    /**
     * The rating the site displays on /reviews/ and quotes across the pages.
     * Only included because those reviews are actually rendered — a rating in
     * markup that the page does not show is the kind of thing that gets
     * structured data ignored altogether.
     */
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(SITE.rating.value),
      reviewCount: String(SITE.rating.count),
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram].filter(Boolean),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Accreditation",
      name: "IATA Accredited Agent",
      recognizedBy: {
        "@type": "Organization",
        name: "International Air Transport Association",
      },
    },
    contactPoint: [PRIMARY_PHONE].map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.tel,
      contactType: phone.label,
      areaServed: "IN",
      availableLanguage: ["en", "ml", "hi"],
    })),
  };
}

/** One node per physical office, from the Office collection. */
export function officeSchema(office) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": officeId(office.slug),
    name: `${SITE.name} - ${office.name}`,
    parentOrganization: { "@id": ORG_ID },
    url: absolute("/contact/"),
    image: absolute("/images/alisha-official-logo.png"),
    email: office.email,
    telephone: office.phones?.[0]?.number || PRIMARY_PHONE.tel,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.locality,
      addressRegion: office.region || "Kerala",
      postalCode: office.postalCode,
      addressCountry: "IN",
    },
    ...(office.geo?.lat && office.geo?.lng
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: office.geo.lat,
            longitude: office.geo.lng,
          },
        }
      : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    ...(office.mapLink ? { hasMap: office.mapLink } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absolute("/"),
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

/* -------------------------------------------------------------------------- */
/*  Breadcrumbs                                                                */
/* -------------------------------------------------------------------------- */

/**
 * `items` is the same array the visible <Breadcrumbs> renders, so the two can
 * never disagree about the trail. Home is prepended here exactly as the
 * component prepends it on screen.
 */
export function breadcrumbSchema(items = []) {
  const trail = [{ label: "Home", href: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      // The last crumb has no href — schema.org allows omitting `item` there.
      ...(item.href ? { item: absolute(item.href) } : {}),
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*  Content types                                                              */
/* -------------------------------------------------------------------------- */

/**
 * A package is a `TouristTrip` — the type that describes an itinerary with a
 * price, which is what these are. `Product` would also validate, but it
 * describes a thing you buy off a shelf and would misrepresent a trip that is
 * rebuilt around each traveller.
 */
export function touristTripSchema(pkg) {
  const price = pkg.priceFrom;

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": absolute(`/packages/${pkg.slug}/#trip`),
    name: pkg.title,
    description: pkg.summary || pkg.metaDescription || "",
    url: absolute(`/packages/${pkg.slug}/`),
    ...(pkg.heroImage?.url ? { image: pkg.heroImage.url } : {}),
    provider: { "@id": ORG_ID },
    ...(pkg.durationDays
      ? { subjectOf: { "@type": "CreativeWork", name: `${pkg.durationDays}-day itinerary` } }
      : {}),
    ...(pkg.destination?.name
      ? {
          itinerary: {
            "@type": "ItemList",
            numberOfItems: pkg.itinerary?.length || pkg.durationDays || undefined,
            itemListElement: (pkg.itinerary || []).map((day) => ({
              "@type": "ListItem",
              position: day.day,
              item: {
                "@type": "TouristDestination",
                name: day.title,
                ...(day.description ? { description: day.description } : {}),
              },
            })),
          },
        }
      : {}),
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            price: String(price),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: absolute(`/packages/${pkg.slug}/`),
            // No online purchase — the conversion is an enquiry, and saying so
            // is more honest than implying a checkout that does not exist.
            availableAtOrFrom: { "@id": ORG_ID },
          },
        }
      : {}),
  };
}

/** A destination page is a `TouristDestination`. */
export function touristDestinationSchema(destination) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": absolute(`/destinations/${destination.region}/${destination.slug}/#destination`),
    name: destination.name,
    description: destination.metaDescription || destination.tagline || "",
    url: absolute(`/destinations/${destination.region}/${destination.slug}/`),
    ...(destination.heroImage?.url ? { image: destination.heroImage.url } : {}),
    ...(destination.country
      ? { containedInPlace: { "@type": "Country", name: destination.country } }
      : {}),
    ...(destination.topAttractions?.length
      ? {
          touristAttraction: destination.topAttractions.map((attraction) => ({
            "@type": "TouristAttraction",
            name: attraction.title,
            ...(attraction.description ? { description: attraction.description } : {}),
          })),
        }
      : {}),
    includesAttraction: undefined,
  };
}

/**
 * FAQs.
 *
 * Note for whoever maintains this: since August 2023 Google shows FAQ rich
 * results only for well-known authoritative government and health sites, so
 * this will not produce stars-and-accordions in Google's results for a travel
 * agency. It is still worth emitting — other search engines and assistants
 * consume it, and it costs nothing. Do not remove it expecting rich results
 * to appear; do not expect them either.
 *
 * Only ever called where the answers are actually rendered on the page, which
 * they are: the accordion uses native <details>, so the text is in the HTML.
 */
export function faqSchema(faqs = []) {
  if (!faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** A service page is an `Offer` on a named `Service`. */
export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absolute(`/services/${service.slug}/#service`),
    name: service.title,
    description: service.shortDescription,
    url: absolute(`/services/${service.slug}/`),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: service.title,
  };
}

/**
 * The /reviews/ page.
 *
 * This EXTENDS the organisation node rather than restating it: same `@id`,
 * only the `review` array added. Consumers merge nodes that share an `@id`, so
 * the name, URL and aggregateRating already declared sitewide are inherited.
 * Repeating them here would work too, but it invites the two copies to drift.
 */
export function reviewsSchema(testimonials = []) {
  if (!testimonials.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": ORG_ID,
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: { "@type": "Person", name: testimonial.name },
      datePublished: testimonial.date
        ? new Date(testimonial.date).toISOString().slice(0, 10)
        : undefined,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(testimonial.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: testimonial.quote,
      ...(testimonial.tourTaken ? { itemReviewed: { "@type": "TouristTrip", name: testimonial.tourTaken } } : {}),
    })),
  };
}
