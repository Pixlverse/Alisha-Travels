"use client";

/**
 * Client-side submit path for every enquiry on the site.
 *
 * Two things this exists to get right:
 *
 * 1. **The record comes first.** We POST to /api/enquiries and wait for it
 *    before opening any channel. The server writes the lead to MongoDB before
 *    it replies, so a lead exists in the dashboard even if the visitor closes
 *    the WhatsApp tab without sending anything.
 *
 * 2. **Popup blockers.** Browsers only allow window.open() inside the user
 *    gesture that triggered it. By the time our fetch resolves, that gesture
 *    has expired and the call is blocked. So we open a blank tab synchronously
 *    on click and point it at the WhatsApp URL once the response lands. If the
 *    browser refuses even that, we fall back to navigating the current tab —
 *    the lead is saved either way, so the worst case is a lost page position,
 *    not a lost enquiry.
 */
export async function submitEnquiry(payload) {
  // Reserve the tab *now*, while the click is still trusted.
  const channelWindow =
    payload.channel === "whatsapp" && typeof window !== "undefined"
      ? window.open("", "_blank", "noopener,noreferrer")
      : null;

  let response;
  try {
    response = await fetch("/api/enquiries/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    channelWindow?.close();
    return {
      ok: false,
      error:
        "We could not reach the server. Check your connection, or call us on +91 95629 21818.",
    };
  }

  let result = {};
  try {
    result = await response.json();
  } catch {
    /* Non-JSON error page; handled by the !response.ok branch below. */
  }

  if (!response.ok || !result.ok) {
    channelWindow?.close();
    return {
      ok: false,
      error: result.error || "Something went wrong. Please try again, or call us.",
      fields: result.fields,
    };
  }

  if (payload.channel === "whatsapp" && result.whatsappUrl) {
    if (channelWindow && !channelWindow.closed) {
      channelWindow.location.href = result.whatsappUrl;
    } else {
      window.location.href = result.whatsappUrl;
    }
  }

  return result;
}
