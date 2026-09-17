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
