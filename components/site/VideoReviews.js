"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

/**
 * Video reviews.
 *
 * Nothing is embedded until somebody asks for it. A grid of six YouTube iframes
 * costs roughly a megabyte and sets third-party cookies on a visitor who has
 * not pressed play — so each card is a still image and a button, and the iframe
 * is created only for the one that is clicked. That is also why the still is a
 * field on the review: without it the page would need the iframe just to show a
 * thumbnail, which is the cost we are avoiding.
 *
 * The written quote stays under every card. If a video is pulled, or a network
 * blocks the host entirely, the review is still a review.
 */
export default function VideoReviews({ reviews }) {
  const [playing, setPlaying] = useState(null);

  return (
    <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => {
        const embed = embedUrl(review.videoUrl);
        const still = review.videoThumbnail?.url || review.photo?.url;
        const isPlaying = playing === review._id;

        return (
          <li
            key={review._id}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white"
          >
            <div className="relative aspect-video bg-brand-900">
              {isPlaying && embed ? (
                <iframe
                  src={embed}
                  title={`Video review from ${review.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(review._id)}
                  disabled={!embed}
                  className="group absolute inset-0 size-full cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-default"
                >
                  {still ? (
                    <Image
                      src={still}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 88vw"
                      quality={60}
                      className="object-cover"
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgb(6_18_25/0.75),transparent_55%)]"
                  />

                  <span
                    className={cn(
                      "absolute inset-0 flex items-center justify-center",
                      !embed && "opacity-40"
                    )}
                  >
                    <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                      <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
                    </span>
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <span className="block text-base font-semibold text-white">{review.name}</span>
                    {review.tourTaken ? (
                      <span className="mt-0.5 block text-xs text-white/75">{review.tourTaken}</span>
                    ) : null}
                  </span>

                  <span className="sr-only">Play the video review from {review.name}</span>
                </button>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <StarRating value={review.rating} size="sm" />
              <p className="mt-3 line-clamp-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-soft">
                {review.quote}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Turns a YouTube or Vimeo share link into an embed URL.
 *
 * Admins paste whatever the share button gave them, so all the usual shapes
 * have to work: youtu.be/ID, /watch?v=ID, /shorts/ID, /embed/ID and
 * vimeo.com/ID. Anything else returns null and the card renders as a still
 * with the play button disabled rather than as a broken frame — an unknown
 * host is not something to hand to an iframe.
 */
function embedUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      const id =
        parsed.searchParams.get("v") ||
        parsed.pathname.split("/").filter(Boolean).slice(-1)[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1` : null;
    }

    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = parsed.pathname.split("/").filter(Boolean).slice(-1)[0];
      return /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
    }
  } catch {
    return null;
  }

  return null;
}
