"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { isVideo, videoPoster, videoSrc } from "@/lib/media";
import { embedUrl } from "@/lib/video";

/**
 * A campaign's photographs and reels: uploads first, then reel links.
 *
 * A column on a wide screen, where the campaign page floats it beside the
 * story; a swipeable rail on a phone, where a column of portrait reels would
 * push the story several screens down.
 *
 * Every upload keeps the shape it was filmed or shot in (mediaSchema stores
 * width and height). A reel link has no file to measure, so it gets a 9:16
 * frame, and its iframe is built only once somebody presses play — the same
 * rule as the video reviews.
 */
export default function CampaignMedia({ media = [], reelLinks = [], title, className }) {
  const links = reelLinks.map(embedUrl).filter(Boolean);
  if (!media.length && !links.length) return null;

  return (
    <ul
      className={cn(
        "-mx-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {media.map((item) => (
        <li
          key={item.publicId || item.url}
          className="w-[68vw] max-w-[17rem] shrink-0 snap-start overflow-hidden rounded-[1.25rem] bg-mist-100 lg:w-full lg:max-w-none"
        >
          {isVideo(item) ? (
            <video
              src={videoSrc(item.url)}
              poster={videoPoster(item.url) || undefined}
              controls
              playsInline
              preload="none"
              aria-label={item.alt || `Video from ${title}`}
              className="block h-auto w-full bg-black"
              style={item.width && item.height ? { aspectRatio: `${item.width} / ${item.height}` } : undefined}
            />
          ) : item.width && item.height ? (
            <Image
              src={item.url}
              alt={item.alt || ""}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1024px) 22rem, 68vw"
              quality={65}
              className="block h-auto w-full"
            />
          ) : (
            <span className="relative block aspect-[4/5]">
              <Image
                src={item.url}
                alt={item.alt || ""}
                fill
                sizes="(min-width: 1024px) 22rem, 68vw"
                quality={65}
                className="object-cover"
              />
            </span>
          )}
        </li>
      ))}

      {links.map((embed) => (
        <li
          key={embed}
          className="w-[68vw] max-w-[17rem] shrink-0 snap-start lg:w-full lg:max-w-none"
        >
          <ReelLink embed={embed} title={title} />
        </li>
      ))}
    </ul>
  );
}

function ReelLink({ embed, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-brand-900">
      {playing ? (
        <iframe
          src={embed}
          title={`Reel from ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex size-full cursor-pointer flex-col items-center justify-center gap-3 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-inset focus-visible:outline-none"
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-white/95 text-brand-800 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
            <Play className="ml-0.5 size-5 fill-current" aria-hidden="true" />
          </span>
          <span className="font-sans text-[0.6875rem] font-bold tracking-[0.18em] text-white/80 uppercase">
            Watch the reel
          </span>
        </button>
      )}
    </div>
  );
}
