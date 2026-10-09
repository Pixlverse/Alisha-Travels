import { v2 as cloudinary } from "cloudinary";

/**
 * Cloudinary is the single home for every image (and gallery video) on the site: destination
 * heroes, package galleries, testimonial portraits, gallery items and anything
 * an admin uploads. This module is shared by the seed script and the admin
 * upload route so credentials and folder conventions live in one place.
 *
 * Configure with either:
 *   CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
 * or the three separate variables:
 *   CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET
 */

let configured = false;

function configure() {
  if (configured) return;

  if (process.env.CLOUDINARY_URL) {
    // The SDK reads CLOUDINARY_URL from the environment automatically.
    cloudinary.config({ secure: true });
  } else {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      secure: true,
    });
  }
  configured = true;
}

export function isCloudinaryConfigured() {
  return Boolean(
    process.env.CLOUDINARY_URL ||
      (process.env.CLOUDINARY_CLOUD_NAME &&
        process.env.CLOUDINARY_API_KEY &&
        process.env.CLOUDINARY_API_SECRET)
  );
}

/** Folder convention: alisha/<section>, e.g. alisha/destinations. */
export const CLOUDINARY_FOLDERS = {
  destinations: "alisha/destinations",
  packages: "alisha/packages",
  gallery: "alisha/gallery",
  testimonials: "alisha/testimonials",
  team: "alisha/team",
  services: "alisha/services",
  campaigns: "alisha/campaigns",
  misc: "alisha/misc",
};

/**
 * Upload a Buffer (admin dashboard file upload) to Cloudinary.
 * Returns { url, publicId, width, height }.
 */
export function uploadBuffer(buffer, { folder = CLOUDINARY_FOLDERS.misc, publicId, tags = [] } = {}) {
  configure();

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        tags,
        resource_type: "image",
        overwrite: true,
        // Strip metadata and let Cloudinary pick the best format/quality for
        // the requesting browser. next/image handles responsive sizing on top.
        quality: "auto",
        fetch_format: "auto",
      },
      (error, result) => (error ? reject(error) : resolve(toAsset(result)))
    );
    stream.end(buffer);
  });
}

/**
 * Upload from a remote URL or local path. The seed script uses this to pull
 * placeholder photography into the client's own Cloudinary account so that
 * development content does not depend on a third-party host staying up.
 */
export async function uploadFromSource(source, options = {}) {
  configure();
  const result = await cloudinary.uploader.upload(source, {
    folder: options.folder || CLOUDINARY_FOLDERS.misc,
    public_id: options.publicId,
    tags: options.tags || [],
    overwrite: options.overwrite !== false,
    resource_type: "image",
  });
  return toAsset(result);
}

export async function deleteAsset(publicId, { resourceType = "image" } = {}) {
  configure();
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}

/**
 * Signed parameters for a browser-direct upload.
 *
 * Videos go straight from the admin's browser to Cloudinary instead of through
 * our upload route: a phone video is easily 50 MB, which is past what a
 * serverless request body accepts and pointless to buffer in our own memory.
 * The signature is what keeps this admin-only — it is minted by an
 * authenticated route, covers the folder and timestamp, and expires an hour
 * after `timestamp`.
 */
export function signUpload({ folder = CLOUDINARY_FOLDERS.misc, tags = [] } = {}) {
  configure();
  const { cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret } = cloudinary.config();
  const params = { folder, tags: tags.join(","), timestamp: Math.round(Date.now() / 1000) };
  const signature = cloudinary.utils.api_sign_request(params, apiSecret);
  return { ...params, signature, apiKey, cloudName };
}

function toAsset(result) {
  return {
    url: result.secure_url,
    publicId: result.public_id,
    resourceType: result.resource_type,
    width: result.width,
    height: result.height,
    duration: result.duration,
    format: result.format,
  };
}

/**
 * Build a transformed delivery URL from an existing Cloudinary URL without a
 * round trip to the API. Handy for OG images and fixed-crop thumbnails.
 * Non-Cloudinary URLs (e.g. seeded stock photos) are returned untouched.
 */
export function cloudinaryTransform(url, transformation) {
  if (!url || !url.includes("/upload/")) return url;
  return url.replace("/upload/", `/upload/${transformation}/`);
}

export { cloudinary };
