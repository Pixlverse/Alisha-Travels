/** @type {import('next').NextConfig} */
const nextConfig = {
  // DigitalOcean App Platform runs this as a container. `standalone` emits
  // .next/standalone with only the files the server actually needs, which
  // keeps the image small and cold starts fast. See README > Deployment.
  output: "standalone",

  // The SEO-confirmed sitemap (see README > URL structure) is written with
  // trailing slashes on every path — /destinations/, /packages/honeymoon/ and
  // so on. Matching that exactly keeps canonicals, internal links and any
  // existing backlinks consistent, and Next 308-redirects the slashless form.
  trailingSlash: true,

  images: {
    remotePatterns: [
      // All production media lives in Cloudinary.
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Seed-only placeholder photography. scripts/seed.js pulls freely
      // licensed Wikimedia Commons images and, when Cloudinary credentials are
      // present, re-uploads them so production never hotlinks. This host
      // exists purely so `npm run seed` also works without Cloudinary, and can
      // be deleted once the client's own photography is in place.
      { protocol: "https", hostname: "thumb.wikimedia.org" },
    ],
    formats: ["image/avif", "image/webp"],
    // Next 16 narrowed the default to [75]. 60 is the rung the photography
    // actually uses — hero art and card art both — because at the sizes they
    // render the byte saving beats the fidelity loss, and the images are what
    // the LCP element competes with for bandwidth on 4G. 90 is kept for any
    // future case that needs it.
    qualities: [60, 75, 90],
  },

  // Legacy WordPress URLs that are still indexed and still collecting links.
  // Sourced from the site audit (alishatravels.md, section 14.4).
  async redirects() {
    return [
      { source: "/our-destinations", destination: "/destinations/", permanent: true },
      { source: "/fixed-departure-tours", destination: "/fixed-departures/", permanent: true },
      { source: "/memory-book", destination: "/gallery/", permanent: true },
      { source: "/portfolio/:path*", destination: "/gallery/", permanent: true },
      // The abandoned booking-theme tour pages map onto their destinations.
      { source: "/tour/dubai", destination: "/destinations/international/dubai/", permanent: true },
      { source: "/tour/singapore", destination: "/destinations/international/singapore/", permanent: true },
      { source: "/tour/malaysia", destination: "/destinations/international/malaysia/", permanent: true },
      // No payment module in this phase — send the traffic to a human instead.
      { source: "/payment", destination: "/contact/", permanent: false },
    ];
  },
};

export default nextConfig;
