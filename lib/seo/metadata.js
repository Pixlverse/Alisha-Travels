import { SITE } from "../site";

/**
 * Page metadata - one builder for every public page.
 *
 * WHY THIS EXISTS. Next merges metadata SHALLOWLY: a page that sets only a
 * title and description silently inherits the root layout's whole
 * `openGraph` and `twitter` objects - the homepage's title and URL. Shared on
 * WhatsApp or Facebook, /about/ previewed as the homepage. Every page now
 * gets its own complete set from here: title, description, canonical, Open
 * Graph (WhatsApp, Facebook, LinkedIn) and Twitter/X card, always with an
 * image.
 *
 * Titles: pass the page-specific part; the root template appends
 * " · Alisha Tours & Travels". A title that already contains the brand is
 * used as-is, so the name is never printed twice.
 */

export const DEFAULT_SHARE_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE.name} - ${SITE.tagline}`,
};

/**
 * A Cloudinary photo cropped by Cloudinary to the 1200×630 shape every
 * network previews, as a JPEG (WhatsApp ignores WebP/AVIF previews).
 * Any other URL is passed through unchanged.
 */
function shareImage(url, alt) {
  if (!url) return DEFAULT_SHARE_IMAGE;
  if (url.includes("res.cloudinary.com/") && url.includes("/upload/")) {
    return {
      url: url.replace("/upload/", "/upload/f_jpg,q_auto,w_1200,h_630,c_fill,g_auto/"),
      width: 1200,
      height: 630,
      alt: alt || SITE.name,
    };
  }
  return { url, alt: alt || SITE.name };
}

/**
 * @param {object}  o
 * @param {string}  o.title        page-specific title
 * @param {string} [o.description] falls back to the site description
 * @param {string}  o.path         canonical path, with trailing slash
 * @param {string} [o.image]       absolute or /public URL of a photo for this page
 * @param {string} [o.imageAlt]
 * @param {string} [o.type]        Open Graph type ("website" or "article")
 * @param {boolean}[o.noindex]     keep the page out of search results
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
}) {
  const hasBrand = title.includes(SITE.name);
  const fullTitle = hasBrand ? title : `${title} · ${SITE.name}`;
  const desc = (description || SITE.description).trim();
  const img = shareImage(image, imageAlt || title);

  return {
    title: hasBrand ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName: SITE.name,
      locale: "en_IN",
      url: path,
      title: fullTitle,
      description: desc,
      images: [img],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [img.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
