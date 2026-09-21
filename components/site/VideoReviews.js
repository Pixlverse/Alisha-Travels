"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";
import { embedUrl } from "@/lib/video";

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
export default function VideoReviews({ reviews = [] }) {
  const [playing, setPlaying] = useState(null);

  /*
    RESERVED FRAMES when there are none yet.

    This band used not to render at all without videos, so the space the
    client asked to keep for video reviews did not exist on the page and
    looked like it had never been built. Three empty frames say the section is
    real and waiting, without inventing a review to fill them — the one thing
    that must not happen here. They disappear the moment a video review is
    saved in the dashboard.

    To go back to hiding the band entirely, return null here.
  */
  if (!reviews.length) {
    return (
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((slot) => (
          <li
            key={slot}
            className="overflow-hidden rounded-3xl border border-dashed border-line bg-white"
          >
            <div className="relative flex aspect-video flex-col items-center justify-center gap-3 bg-mist-50">
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full bg-white text-brand-300 ring-1 ring-line"
              >
                <Play className="ml-0.5 size-5 fill-current" />
              </span>
              <p className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-ink-muted uppercase">
                Video review
              </p>
            </div>
            <div className="p-5">
              <p className="text-sm text-ink-muted">
                {slot === 0
                  ? "Filmed reviews from travellers go here - the written ones are above."
                  : "Coming soon."}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

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
