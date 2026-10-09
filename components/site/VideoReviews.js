"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import ScrollRow from "./ScrollRow";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";
import { isVideo, videoPoster, videoSrc } from "@/lib/media";
import { embedUrl } from "@/lib/video";

/**
 * Video reviews.
 *
 * REEL-SHAPED. Almost every one of these is filmed upright on a phone — an
 * Instagram reel, a YouTube Short, or a clip sent over WhatsApp — so each
 * frame is 9:16. In a landscape frame a portrait video plays as a narrow strip
 * between two black bars. Portrait cards at grid width are taller than the
 * screen, so they sit on a swipeable rail at a fixed width instead.
 *
 * Nothing is embedded until somebody asks for it. A rail of six YouTube iframes
 * costs roughly a megabyte and sets third-party cookies on a visitor who has
 * not pressed play — so each card is a still image and a button, and the iframe
 * (or <video>, for an uploaded file) is created only for the one that is
 * clicked. That is also why the still is a field on the review.
 *
 * The written quote stays under every card. If a video is pulled, or a network
 * blocks the host entirely, the review is still a review.
 */
const CARD_WIDTH = "w-[15rem] shrink-0 sm:w-[16.5rem]";

export default function VideoReviews({ reviews = [], ...heading }) {
  const [playing, setPlaying] = useState(null);

  /*
    RESERVED FRAMES when there are none yet.

    This band used not to render at all without videos, so the space the
    client asked to keep for video reviews did not exist on the page and
    looked like it had never been built. Empty frames say the section is real
    and waiting, without inventing a review to fill them — the one thing that
    must not happen here. They disappear the moment a video review is saved in
    the dashboard.

    To go back to hiding the band entirely, return null here.
  */
  if (!reviews.length) {
    return (
      <ScrollRow {...heading} label="Video reviews" itemClassName={CARD_WIDTH}>
        {[0, 1, 2, 3].map((slot) => (
          <div
            key={slot}
            className="overflow-hidden rounded-3xl border border-dashed border-line bg-white"
          >
            <div className="relative flex aspect-[9/16] flex-col items-center justify-center gap-3 bg-mist-50 px-6 text-center">
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full bg-white text-brand-300 ring-1 ring-line"
              >
                <Play className="ml-0.5 size-5 fill-current" />
              </span>
              <p className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-ink-muted uppercase">
                Video review
              </p>
              <p className="text-sm text-ink-muted">
                {slot === 0 ? "Filmed reviews from travellers go here." : "Coming soon."}
              </p>
            </div>
          </div>
        ))}
      </ScrollRow>
    );
  }

  return (
    <ScrollRow {...heading} label="Video reviews" itemClassName={CARD_WIDTH}>
      {reviews.map((review) => {
        const embed = embedUrl(review.videoUrl);
        // The uploaded file plays only when there is no usable link.
        const file = !embed && isVideo(review.videoFile) ? review.videoFile.url : "";
        const playable = Boolean(embed || file);
        const still =
          review.videoThumbnail?.url || (file && videoPoster(file)) || review.photo?.url;
        const isPlaying = playing === review._id;

        return (
          <article
            key={review._id}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white"
          >
            <div className="relative aspect-[9/16] bg-brand-900">
              {isPlaying && embed ? (
                <iframe
                  src={embed}
                  title={`Video review from ${review.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 size-full"
                />
              ) : isPlaying && file ? (
                <video
                  src={videoSrc(file)}
                  poster={still || undefined}
                  controls
                  autoPlay
                  playsInline
                  className="absolute inset-0 size-full bg-black object-contain"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(review._id)}
                  disabled={!playable}
                  className="group absolute inset-0 size-full cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-default"
                >
                  {still ? (
                    <Image
                      src={still}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 16.5rem, 15rem"
                      quality={60}
                      className="object-cover"
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgb(6_18_25/0.8),transparent_45%)]"
                  />

                  <span
                    className={cn(
                      "absolute inset-0 flex items-center justify-center",
                      !playable && "opacity-40"
                    )}
                  >
                    <span className="flex size-14 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                      <Play className="ml-0.5 size-5 fill-current" aria-hidden="true" />
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

            <div className="flex flex-1 flex-col p-4">
              <StarRating value={review.rating} size="sm" />
              <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {review.quote}
              </p>
            </div>
          </article>
        );
      })}
    </ScrollRow>
  );
}
