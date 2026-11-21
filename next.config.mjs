/** @type {import('next').NextConfig} */
const nextConfig = {
  // STANDALONE IS OPT-IN. `output: "standalone"` makes Next trace the server's
  // dependencies and emit a self-contained .next/standalone — which is what
  // the DigitalOcean App Platform container runs (`npm start` boots
  // .next/standalone/server.js), and what scripts/postbuild.js completes.
  //
  // It is also what breaks the build on Vercel. Vercel compiles with its own
  // output adapter and traces dependencies its own way, so the standalone
  // assembly step goes looking for a manifest that was never written:
  //
  //   Error: ENOENT: no such file or directory, open
  //   '/vercel/path0/.next/next-server.js.nft.json'
  //
  // — and it lands AFTER the app has compiled successfully, so it reads as a
  // code fault rather than a config one.
  //
  // This was first written as `process.env.VERCEL ? undefined : "standalone"`,
  // which failed on Vercel anyway: their system variables are only present in
  // the build when "Automatically expose System Environment Variables" is on,
  // so the config cannot rely on being able to recognise the host it is
  // running on. Detection was the wrong shape for the problem.
  //
  // So the default is now the portable one — no standalone bundle, which every
  // managed host is happy with — and the container build opts in by setting
  // STANDALONE_BUILD=1 (see .do/app.yaml). A host that says nothing gets a
  // build that works.
  output: process.env.STANDALONE_BUILD === "1" ? "standalone" : undefined,

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
    // WebP only. AVIF encoding in sharp is several times heavier in memory
    // and CPU, and on the 1 GB App Platform instance it pushed RAM to 90%
    // ("Degraded"). WebP is within a few percent on photographs.
    formats: ["image/webp"],
    // The default list tops out at 3840px, which a full-width hero on a
    // high-density laptop asks for - a several-hundred-KB photo nobody can
    // tell from the 2048 one. Capping here keeps heroes light everywhere.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Optimized images are cached on disk; keep them for 30 days so each
    // photo is resized once, not again every 4 hours (Cloudinary URLs are
    // immutable - a new upload gets a new URL).
    minimumCacheTTL: 2592000,
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
      // The drafted immigration page was replaced by the client's emigration one.
      { source: "/services/immigration-services", destination: "/services/emigration-services/", permanent: true },
      // One visa page: the footer's old "Global tourist visa" service page
      // goes to the Global Visa section the menu links to.
      { source: "/services/global-tourist-visa", destination: "/services/global-visa/", permanent: true },
      // Customized packages replaced by newer proposals of a different length.
      { source: "/packages/fascinating-bali-5d4n", destination: "/packages/bali-nusa-penida-6d5n/", permanent: true },
      { source: "/packages/charm-of-pattaya-bangkok-4d3n", destination: "/packages/pattaya-bangkok-5d4n/", permanent: true },
      { source: "/packages/dubai-the-city-of-dreams-4d3n", destination: "/packages/dubai-city-of-dreams-5d4n/", permanent: true },
      // The legacy payment URL now goes to the Razorpay page.
      { source: "/payment", destination: "/pay/", permanent: false },
    ];
  },
};

export default nextConfig;
