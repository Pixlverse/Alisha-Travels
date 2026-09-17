import { cpSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Completes the standalone bundle.
 *
 * `output: 'standalone'` in next.config.mjs makes Next trace exactly the files
 * the server imports and emit a self-contained `.next/standalone` with its own
 * `server.js` and a pruned `node_modules`. What it deliberately does NOT trace
 * is `.next/static` and `public`, because in a CDN-fronted deployment those are
 * served by the CDN and copying them would be waste.
 *
 * We have no CDN in front of App Platform — the Node process serves everything
 * — so they have to be copied in. Without this step the site boots and answers
 * 200 with no CSS, no fonts and no images, which is a very confusing failure to
 * debug because nothing errors.
 *
 * This runs as `postbuild`, so plain `npm run build` produces a bundle that is
 * ready to start. Node's `fs.cpSync` rather than `cp -r` so the build does not
 * depend on a Unix shell.
 *
 * NOT EVERY HOST PRODUCES A STANDALONE BUNDLE. Vercel compiles the app with its
 * own output adapter and never writes .next/standalone, and this script used to
 * exit(1) when the directory was missing — which killed the build a second
 * after it had compiled successfully, on a host where there is nothing for this
 * step to do. Missing is therefore a SKIP, not a failure: the only real error
 * here is a standalone bundle that exists but is incomplete, and that is what
 * the copy below prevents.
 *
 * Deliberately not gated on process.env.VERCEL. A missing bundle means there is
 * nothing to complete wherever we are, and hard-coding one provider's variable
 * would only move the same failure to the next host that does the same thing.
 */

const standalone = ".next/standalone";

if (!existsSync(standalone)) {
  console.log(
    "[postbuild] No .next/standalone bundle — nothing to complete. " +
      "That is expected on hosts that build with their own output adapter (Vercel, Netlify); " +
      "for a self-hosted build, check that STANDALONE_BUILD=1 is set — see next.config.mjs."
  );
  process.exit(0);
}

for (const [from, to] of [
  [".next/static", join(standalone, ".next/static")],
  ["public", join(standalone, "public")],
]) {
  if (!existsSync(from)) {
    console.warn(`[postbuild] ${from} does not exist — skipping.`);
    continue;
  }
  cpSync(from, to, { recursive: true, force: true });
  console.log(`[postbuild] ${from} -> ${to}`);
}
