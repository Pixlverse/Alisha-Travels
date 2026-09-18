/**
 * Turns a YouTube or Vimeo share link into an embed URL.
 *
 * Admins paste whatever the share button gave them, so all the usual shapes
 * have to work: youtu.be/ID, /watch?v=ID, /shorts/ID, /embed/ID and
 * vimeo.com/ID. Anything else returns null and the caller renders a still with
 * the play button disabled rather than a broken frame — an unknown host is not
 * something to hand to an iframe.
 *
 * It lives here rather than inside VideoReviews because the campaign band uses
 * it too, and two copies of a URL parser are two chances to trust a host that
 * the other one rejects.
 */
export function embedUrl(url) {
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
