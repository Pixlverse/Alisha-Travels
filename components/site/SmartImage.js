"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * next/image, with Cloudinary photos resized BY CLOUDINARY.
 *
 * Every destination, package and gallery photo lives in Cloudinary. Through
 * the default loader each of them was fetched, resized and re-encoded by the
 * app's own 1-vCPU container on first request - a destinations grid asks for
 * ~40 at once, so they queued for seconds, and sharp held most of the 1 GB of
 * RAM. Cloudinary already does this at its CDN edge: `f_auto` picks WebP/AVIF
 * per browser, `q_auto` picks the quality, `w_` the width, and the result is
 * cached worldwide after the first request.
 *
 * Anything that is not a Cloudinary URL - the logos and artwork in /public,
 * the Wikimedia stand-ins on the demo database - keeps Next's built-in
 * optimizer, so nothing else changes.
 *
 * A client component because a loader is a function, and functions cannot be
 * passed from server components to next/image.
 */
function cloudinaryLoader({ src, width, quality }) {
  const q = quality ? `q_${quality}` : "q_auto";
  return src.replace("/upload/", `/upload/f_auto,${q},w_${width},c_limit/`);
}

function isCloudinary(src) {
  return typeof src === "string" && src.includes("res.cloudinary.com/") && src.includes("/upload/");
}

/**
 * Lazy photos fade in once loaded instead of popping in row by row. Only
 * where it is safe: never on priority/eager images (the hero must paint at
 * once, and an opacity-0 server render would delay it until hydration), and
 * never where the caller sets its own opacity (e.g. the greyed campaign still).
 */
function canFade(props) {
  return !props.priority && props.loading !== "eager" && !/(^|\s)opacity-/.test(props.className || "");
}

export default function SmartImage({ alt, onLoad, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const fade = canFade(props);
  const className = fade
    ? `${props.className || ""} transition-opacity duration-500 ease-out ${loaded ? "opacity-100" : "opacity-0"}`
    : props.className;
  const handleLoad = (event) => {
    setLoaded(true);
    onLoad?.(event);
  };
  const loader = isCloudinary(props.src) && !props.unoptimized ? cloudinaryLoader : undefined;

  return (
    <Image alt={alt} {...props} className={className} onLoad={handleLoad} {...(loader ? { loader } : {})} />
  );
}
