"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { embedUrl } from "@/lib/video";

/**
 * The campaign film.
 *
 * Nothing is embedded until somebody presses play — a YouTube iframe costs
 * around a megabyte and sets third-party cookies on a visitor who never asked
 * for the video, which is why the still is a field on the campaign rather than
 * something we need the player to give us.
 *
 * WITH NO VIDEO it renders a reserved frame instead of nothing. That is
 * deliberate and it is what the client asked for: the campaign area has to
 * show that a film belongs there before there is a film to show. The frame
 * replaces itself with the real player the moment a Campaign video URL is
 * saved in the dashboard, so it cannot outlive its own purpose — and if the
 * client would rather show nothing in the meantime, this component is the one
 * place to change that.
 */
export default function CampaignFilm({ videoUrl, still, alt = "", title, className }) {
  const [playing, setPlaying] = useState(false);
  const embed = embedUrl(videoUrl);

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-[1.25rem] bg-brand-900 ring-1 ring-white/15",
        className
      )}
    >
      {playing && embed ? (
        <iframe
          src={embed}
          title={title ? `Campaign video: ${title}` : "Campaign video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <>
          {still ? (
            <Image
              src={still}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 30rem, 92vw"
              quality={60}
              className={cn("object-cover", !embed && "opacity-45 grayscale")}
            />
          ) : null}

          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgb(6_18_25/0.72),rgb(6_18_25/0.15)_60%)]"
          />

          {embed ? (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 flex size-full cursor-pointer items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset focus-visible:outline-none"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                <Play className="ml-0.5 size-6 fill-current" aria-hidden="true" />
              </span>
              <span className="sr-only">Play the campaign video{title ? `: ${title}` : ""}</span>
            </button>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span
                aria-hidden="true"
                className="flex size-14 items-center justify-center rounded-full bg-white/12 text-white/70 ring-1 ring-white/25"
              >
                <Play className="ml-0.5 size-5 fill-current" />
              </span>
              <p className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-white/70 uppercase">
                Campaign film
              </p>
              <p className="text-sm text-white/60">Coming soon</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
