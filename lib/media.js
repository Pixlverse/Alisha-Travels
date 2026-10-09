/**
 * Client-safe helpers for gallery media. Kept out of lib/cloudinary.js because
 * that module loads the Cloudinary Node SDK, which must never reach a browser
 * bundle.
 */

export function isVideo(media) {
  return media?.resourceType === "video";
}

/**
 * A still frame for a Cloudinary video, used as the poster in the grid and
 * before playback. Swapping the extension for .jpg is Cloudinary's documented
 * way to ask for a frame; `so_0` pins it to the first one.
 */
export function videoPoster(url) {
  if (!url || !url.includes("/video/upload/")) return "";
  return url
    .replace("/video/upload/", "/video/upload/so_0/")
    .replace(/\.[a-z0-9]+(\?.*)?$/i, ".jpg");
}

/**
 * Playback URL. `f_auto` lets Cloudinary transcode to whatever the viewer's
 * browser plays — an iPhone .mov will not play in Chrome as uploaded — and
 * `q_auto` keeps the file size sensible on mobile data.
 */
export function videoSrc(url) {
  if (!url || !url.includes("/video/upload/")) return url;
  return url.replace("/video/upload/", "/video/upload/f_auto,q_auto/");
}
