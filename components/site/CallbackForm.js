"use client";

import { useState } from "react";
import { AlertCircle, Check, Loader2, PhoneCall } from "lucide-react";
import { submitEnquiry } from "@/lib/submitEnquiry";

/**
 * "Want us to call you?" — the mini lead capture from the reference tour page.
 *
 * Two fields only, because that is the whole promise: leave a number, get a
 * call back. It goes through the same path as the full form — the lead is
 * written to MongoDB before WhatsApp opens — so a request recorded here is a
 * request the dashboard knows about, even if the visitor never sends the
 * message.
 */
export default function CallbackForm({ packageTitle, packageSlug, destinationSlug, source }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    const result = await submitEnquiry({
      name,
      phone,
      email: "",
      channel: "whatsapp",
      enquiryType: "tours",
      tourType: "customized",
      packageSlug,
      destinationSlug,
      message: "Requested a callback.",
      source,
      sourceLabel: packageTitle || "",
    });

    if (!result.ok) {
      setStatus("error");
      setError(result.error || "Something went wrong.");
      return;
    }
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="print:hidden">
        <p className="flex items-start gap-2.5 rounded-xl bg-brand-50 p-4 text-[0.8125rem] leading-relaxed text-brand-900">
          <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
          <span>
            Got it, {name.split(" ")[0]}. We have your number and someone will ring you back -
            usually the same working day.
          </span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="print:hidden">
      <h2 className="flex items-center gap-2 font-sans text-sm font-semibold text-ink">
        <PhoneCall className="size-4 text-brand-500" aria-hidden="true" />
        Want us to call you?
      </h2>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">
        Leave a number and a person rings you back - usually the same working day.
      </p>

      <div className="mt-3 grid gap-2">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-400/25"
          />
        </label>
        <label className="block">
          <span className="sr-only">Your phone number</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="Phone number"
            className="h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink outline-none placeholder:text-ink-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-400/25"
          />
        </label>
        {error ? (
          <p role="alert" className="flex gap-2 text-xs leading-relaxed text-destructive">
            <AlertCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-brand-800 text-sm font-semibold text-white transition-colors hover:bg-brand-900 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Request a callback"
          )}
        </button>
      </div>
    </form>
  );
}
