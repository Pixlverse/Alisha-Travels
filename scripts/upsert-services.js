/**
 * Upsert named services from scripts/seed-data/services.js - and nothing else.
 *
 *   MONGODB_URI="<production uri>" node scripts/upsert-services.js emigration-services
 *
 * For a database that already has content edited in the dashboard, where a
 * full `npm run seed` would overwrite those edits. Each slug given is written
 * from the seed data; slugs that seed.js retires (RETIRED, below) are removed.
 *
 * Without MONGODB_URI in the environment it uses .env.local, like the seed.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import mongoose from "mongoose";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
dotenv.config({ path: [path.join(root, ".env.local"), path.join(root, ".env")], quiet: true });

const { connectToDatabase } = await import("../lib/db.js");
const { Service } = await import("../models/index.js");
const { services } = await import("./seed-data/services.js");

/** Old slug -> the service that replaced it. Keep in step with seed.js. */
const RETIRED = { "immigration-services": "emigration-services" };

const slugs = process.argv.slice(2);
if (!slugs.length) {
  console.error("Name at least one service slug, e.g. emigration-services");
  process.exit(1);
}

const host = (process.env.MONGODB_URI || "").replace(/^.*@/, "").replace(/^mongodb(\+srv)?:\/\//, "").split("/")[0];
console.log(`\nDatabase: ${host || "(unset)"}\n`);

await connectToDatabase();

for (const slug of slugs) {
  const source = services.find((service) => service.slug === slug);
  if (!source) {
    console.error(`  ✗ ${slug} - not in seed-data/services.js`);
    process.exitCode = 1;
    continue;
  }
  const existed = await Service.exists({ slug });
  await Service.findOneAndUpdate(
    { slug },
    { $set: { ...source, status: "active" } },
    { upsert: true, setDefaultsOnInsert: true, runValidators: true }
  );
  console.log(`  ✓ ${slug} ${existed ? "updated" : "created"}`);

  for (const [old, replacement] of Object.entries(RETIRED)) {
    if (replacement !== slug) continue;
    const { deletedCount } = await Service.deleteMany({ slug: old });
    if (deletedCount) console.log(`  ✓ ${old} removed (replaced by ${slug})`);
  }
}

await mongoose.disconnect();
