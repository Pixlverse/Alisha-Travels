import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

/**
 * Type pairing — Fraunces + Figtree.
 *
 * Fraunces is a variable old-style display serif with a soft, slightly wonky
 * personality. It reads as warm and editorial rather than corporate, and its
 * italic carries the destination names and the accent phrase in the hero
 * headline without needing a third family.
 *
 * Figtree is the body face, picked because the client asked for the register
 * Airbnb uses. Airbnb's own type is Cereal, which is proprietary; Figtree is
 * the closest freely-licensed equivalent — a geometric sans with the same low
 * stroke contrast, wide apertures and slightly softened terminals, and it is
 * the family most commonly used as a Cereal stand-in. It carries body copy,
 * navigation, forms, prices and the whole admin dashboard.
 *
 * Two families only, and it is worth keeping it that way. A handwriting face
 * (Caveat) was added here briefly for the loader's tagline and then removed when
 * the client asked for the body font instead — worth knowing, because the loader
 * shows on every full page load, so anything it needs is fetched on every visit
 * rather than on some rare page.
 *
 * Both are self-hosted by next/font (no request ever leaves for Google) and
 * both are variable, so the whole site's type costs two font files.
 */
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  // Only the weights the design actually uses, to keep the subset small.
  weight: ["400", "500", "600", "700"],
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — IATA Accredited Travel Agency in Kerala`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: false, email: false },
};

export const viewport = {
  themeColor: "#0a9ddb",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    /**
     * `data-scroll-behavior="smooth"` is required in Next 16: without it Next
     * no longer neutralises our global `scroll-behavior: smooth` during route
     * transitions, and every navigation would animate a long scroll to the top.
     */
    <html
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
