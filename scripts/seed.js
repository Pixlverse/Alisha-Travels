/**
 * Development seed script.
 * -----------------------------------------------------------------------
 *   npm run seed            upsert everything (safe to re-run)
 *   npm run seed -- --reset delete the seeded content collections first
 *
 * What it does, in order:
 *   1. Loads .env.local (falling back to .env).
 *   2. Connects to MongoDB.
 *   3. Resolves every placeholder image. If Cloudinary credentials are present
 *      each image is uploaded once into the client's own Cloudinary account and
 *      the returned secure_url is stored; if not, the source URL is stored so
 *      the site still renders locally.
 *   4. Upserts destinations → packages → departures → services → testimonials
 *      → gallery items → offices.
 *   5. Creates or updates the initial admin account from SEED_ADMIN_* env vars
 *      and prints the credentials ONCE.
 *
 * Everything is matched on a natural key (slug, or package + departure date),
 * so re-running updates in place rather than creating duplicates.
 *
 * IMPORTANT: this is development content. Production content should be entered
 * through /admin/ — see the README. `--reset` never touches the Enquiry or
 * AdminUser collections, so real leads and real logins survive a reseed.
 *
 * TO EXTEND: edit the files in scripts/seed-data/ and re-run. New entries are
 * inserted, existing ones are updated.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import mongoose from "mongoose";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

// .env.local wins; .env is the fallback. dotenv never overwrites a variable
// that is already set, so a real environment (App Platform) always wins.
dotenv.config({ path: [path.join(root, ".env.local"), path.join(root, ".env")], quiet: true });

const { connectToDatabase } = await import("../lib/db.js");
const { isCloudinaryConfigured, uploadFromSource, CLOUDINARY_FOLDERS } = await import("../lib/cloudinary.js");
const { hashPassword } = await import("../lib/password.js");
const {
  Destination,
  Package,
  Departure,
  Service,
  CategoryPage,
  Campaign,
  Testimonial,
  GalleryItem,
  Office,
  AdminUser,
} = await import("../models/index.js");

const { destinations } = await import("./seed-data/destinations.js");
const { packages } = await import("./seed-data/packages.js");
const { services } = await import("./seed-data/services.js");
const { campaigns, testimonials, galleryItems, offices } = await import("./seed-data/content.js");
const { categoryPages } = await import("./seed-data/category-pages.js");

const RESET = process.argv.includes("--reset");

/* -------------------------------------------------------------------------- */
/*  Image resolution                                                           */
/* -------------------------------------------------------------------------- */

const useCloudinary = isCloudinaryConfigured();
/** source URL → resolved image object, so a shared image uploads only once. */
const imageCache = new Map();

/** Derive a stable Cloudinary public_id from the source filename. */
function publicIdFor(url) {
  const file = decodeURIComponent(url.split("/").pop() || "image");
  return file
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^\d+px-/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 60);
}

async function resolveImage(image, folder) {
  if (!image || !image.url) return image;
  if (imageCache.has(image.url)) {
    // Keep this call site's alt text; only the hosting details are shared.
    return { ...imageCache.get(image.url), alt: image.alt || "" };
  }

  let resolved = { url: image.url, alt: image.alt || "" };

  if (useCloudinary) {
    try {
      const asset = await uploadFromSource(image.url, {
        folder,
        publicId: publicIdFor(image.url),
        tags: ["seed", "placeholder"],
      });
      resolved = {
        url: asset.url,
        publicId: asset.publicId,
        width: asset.width,
        height: asset.height,
        alt: image.alt || "",
      };
      process.stdout.write(".");
    } catch (err) {
      console.warn(`\n  ! Cloudinary upload failed for ${image.url}\n    ${err.message}\n    Falling back to the source URL.`);
    }
  }

  imageCache.set(image.url, { ...resolved, alt: undefined });
  return resolved;
}

async function resolveGallery(list, folder) {
  const out = [];
  for (const item of list || []) out.push(await resolveImage(item, folder));
  return out;
}

/* -------------------------------------------------------------------------- */
/*  Upsert helpers                                                             */
/* -------------------------------------------------------------------------- */

async function upsertBySlug(Model, doc) {
  return Model.findOneAndUpdate(
    { slug: doc.slug },
    { $set: doc },
    { upsert: true, returnDocument: "after", setDefaultsOnInsert: true, runValidators: true }
  );
}

/* -------------------------------------------------------------------------- */
/*  Run                                                                        */
/* -------------------------------------------------------------------------- */

async function main() {
  console.log("\nAlisha Tours & Travels — seeding development content\n");
  console.log(
    useCloudinary
      ? "Cloudinary is configured: placeholder images will be uploaded to your account."
      : "Cloudinary is NOT configured: placeholder images will be referenced from\ntheir source URLs. Set CLOUDINARY_URL (or the three CLOUDINARY_* variables)\nand re-run to move them into your own account."
  );

  await connectToDatabase();
  console.log(`\nConnected to ${mongoose.connection.name}\n`);

  if (RESET) {
    console.log("--reset: clearing seeded content collections");
    console.log("         (Enquiry and AdminUser are deliberately left alone)");
    await Promise.all([
      Destination.deleteMany({}),
      Package.deleteMany({}),
      Departure.deleteMany({}),
      Service.deleteMany({}),
      CategoryPage.deleteMany({}),
      Campaign.deleteMany({}),
      Testimonial.deleteMany({}),
      GalleryItem.deleteMany({}),
      Office.deleteMany({}),
    ]);
  }

  /* --- Destinations ------------------------------------------------------ */
  process.stdout.write("Destinations ");
  const destinationIdBySlug = new Map();
  for (const source of destinations) {
    const doc = {
      ...source,
      heroImage: await resolveImage(source.heroImage, CLOUDINARY_FOLDERS.destinations),
      gallery: await resolveGallery(source.gallery, CLOUDINARY_FOLDERS.destinations),
      status: "active",
    };
    const saved = await upsertBySlug(Destination, doc);
    destinationIdBySlug.set(source.slug, saved._id);
  }
  console.log(` ${destinations.length} ✓`);

  /* --- Packages and their departures ------------------------------------- */
  process.stdout.write("Packages     ");
  let departureCount = 0;
  for (const source of packages) {
    const { destinationSlug, departures = [], ...rest } = source;
    const destinationId = destinationIdBySlug.get(destinationSlug);
    if (!destinationId) {
      console.warn(`\n  ! Package "${source.slug}" references unknown destination "${destinationSlug}" — skipped.`);
      continue;
    }

    const doc = {
      ...rest,
      destination: destinationId,
      heroImage: await resolveImage(source.heroImage, CLOUDINARY_FOLDERS.packages),
      gallery: await resolveGallery(source.gallery, CLOUDINARY_FOLDERS.packages),
      status: "active",
    };
    const savedPackage = await upsertBySlug(Package, doc);

    for (const dep of departures) {
      const departureDate = new Date(`${dep.departureDate}T00:00:00.000Z`);
      // Derive the return date from the package duration when not given, so a
      // departure never has to repeat information the package already holds.
      const returnDate =
        dep.returnDate
          ? new Date(`${dep.returnDate}T00:00:00.000Z`)
          : new Date(departureDate.getTime() + (savedPackage.durationDays - 1) * 86400000);

      await Departure.findOneAndUpdate(
        { package: savedPackage._id, departureDate },
        {
          $set: {
            package: savedPackage._id,
            departureDate,
            returnDate,
            price: dep.price ?? savedPackage.priceFrom,
            seatsTotal: dep.seatsTotal ?? 0,
            seatsRemaining: dep.seatsRemaining ?? 0,
            boardingCity: dep.boardingCity || "",
            notes: dep.notes || "",
            status: "active",
          },
        },
        { upsert: true, returnDocument: "after", setDefaultsOnInsert: true, runValidators: true }
      );
      departureCount += 1;
    }
  }
  console.log(` ${packages.length} ✓  (${departureCount} departures)`);

  /* --- Services ---------------------------------------------------------- */
  for (const source of services) {
    await upsertBySlug(Service, { ...source, status: "active" });
  }
  console.log(`Services      ${services.length} ✓`);

  /* --- Package category pages -------------------------------------------- */
  /* The editorial content above /packages/<category>/ — see
     models/CategoryPage.js. A category with no document here keeps the
     original heading-and-grid layout. */
  for (const source of categoryPages) {
    await upsertBySlug(CategoryPage, { ...source, status: "active" });
  }
  console.log(`Category page ${categoryPages.length} ✓`);

  /* --- Campaigns --------------------------------------------------------- */
  for (const source of campaigns) {
    await upsertBySlug(Campaign, { ...source, status: "active" });
  }
  console.log(`Campaigns     ${campaigns.length} ✓`);

  /* --- Testimonials ------------------------------------------------------ */
  for (const source of testimonials) {
    await Testimonial.findOneAndUpdate(
      { name: source.name, quote: source.quote },
      { $set: { ...source, date: new Date(source.date), status: "active" } },
      { upsert: true, returnDocument: "after", setDefaultsOnInsert: true, runValidators: true }
    );
  }
  console.log(`Testimonials  ${testimonials.length} ✓`);

  /* --- Gallery ----------------------------------------------------------- */
  process.stdout.write("Gallery      ");
  for (const source of galleryItems) {
    const image = await resolveImage(source.image, CLOUDINARY_FOLDERS.gallery);
    await GalleryItem.findOneAndUpdate(
      { caption: source.caption },
      { $set: { ...source, image, status: "active" } },
      { upsert: true, returnDocument: "after", setDefaultsOnInsert: true, runValidators: true }
    );
  }
  console.log(` ${galleryItems.length} ✓`);

  /* --- Offices ----------------------------------------------------------- */
  for (const source of offices) {
    await upsertBySlug(Office, { ...source, status: "active" });
  }
  console.log(`Offices       ${offices.length} ✓`);

  /* --- Initial admin account --------------------------------------------- */
  await seedAdminUser();

  console.log("\nDone. Start the dev server with `npm run dev`.\n");
  await mongoose.disconnect();
}

async function seedAdminUser() {
  const email = (process.env.SEED_ADMIN_EMAIL || "").trim().toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD || "";
  const name = process.env.SEED_ADMIN_NAME || "Alisha Admin";

  if (!email || !password) {
    console.log(
      "\nAdmin        — skipped.\n" +
        "  Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in .env.local and re-run\n" +
        "  to create the first dashboard login."
    );
    return;
  }

  const existing = await AdminUser.findOne({ email });
  const passwordHash = await hashPassword(password);

  if (existing) {
    existing.name = name;
    existing.passwordHash = passwordHash;
    existing.role = "admin";
    existing.active = true;
    await existing.save();
  } else {
    await AdminUser.create({ name, email, passwordHash, role: "admin", active: true });
  }

  // Printed once, here, and never stored anywhere the app can read back.
  console.log("\n" + "─".repeat(64));
  console.log("  ADMIN LOGIN — shown once, change the password after first use");
  console.log("─".repeat(64));
  console.log(`  URL       http://localhost:3000/admin/login/`);
  console.log(`  Email     ${email}`);
  console.log(`  Password  ${password}`);
  console.log(`  Role      admin`);
  console.log("─".repeat(64));
}

main().catch(async (err) => {
  console.error("\nSeed failed:\n", err);
  await mongoose.disconnect().catch(() => {});
  process.exitCode = 1;
});
