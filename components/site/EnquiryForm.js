"use client";

import { useState } from "react";
import { AlertCircle, Check, Loader2, Mail, Send } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Button from "./Button";
import { BUDGET_RANGES, PRIMARY_PHONE } from "@/lib/site";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { cn } from "@/lib/utils";

/**
 * The site's enquiry form.
 *
 * This is the rebuild of the legacy "Book Your Trip Now!" form, whose defect
 * register the audit set out in full:
 *
 *   - Three duplicate "Return Ticket" fields, one per ticket type. There is
 *     one of everything here; the conditional tree branches, it does not
 *     repeat itself.
 *   - A destination list hardcoded to three stale options while the site
 *     advertised many more. `destinations` and `services` below come from the
 *     database on every render.
 *   - No travel dates, no passenger count, no budget. All three are here.
 *   - Name, e-mail and phone were not in the rendered markup at all, so it is
 *     not clear the old form could even be replied to. All three are required
 *     and always visible.
 *
 * Submission goes through lib/submitEnquiry.js, which POSTs to
 * /api/enquiries and waits for the write to MongoDB to succeed BEFORE opening
 * WhatsApp or sending through Resend. That ordering is the point of the whole
 * flow: a lead exists in the dashboard whether or not the visitor completes
 * the hand-off.
 */
export default function EnquiryForm({
  destinations = [],
  services = [],
  packageTitle = "",
  packageSlug = "",
  destinationSlug = "",
  source = "",
  sourceLabel = "",
  // Seeds the message box. Used by the "somewhere else?" block on
  // /destinations/, which asks for the place in its own input and hands the
  // sentence over rather than making the visitor type it twice.
  initialMessage = "",
  // Pins the Send button and its note to the bottom of the scroll container.
  // Set by EnquiryDialog, NOT on /contact/: there the form sits in the page
  // flow, and a sticky action bar would ride up the page over the fields it
  // belongs to.
  stickyActions = false,
  className,
}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "tours",
    tourType: "customized",
    destination: destinationSlug,
    serviceType: "",
    from: "",
    to: "",
    adults: "2",
    children: "0",
    budgetRange: "",
    message: initialMessage,
  });
  const [channel, setChannel] = useState("whatsapp");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  // Honeypot. Never shown, never focusable — anything in it came from a bot.
  const [website, setWebsite] = useState("");

  const set = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  const isTours = values.enquiryType === "tours";

  const destinationName =
    destinations.find((d) => d.slug === values.destination)?.name || "";

  const submit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");
    setFieldErrors({});

    const result = await submitEnquiry({
      name: values.name,
      email: values.email,
      phone: values.phone,
      channel,
      enquiryType: values.enquiryType,
      tourType: isTours ? values.tourType : "",
      destinationSlug: isTours ? values.destination : "",
      packageSlug,
      serviceType: isTours ? "" : values.serviceType,
      travelDates: { from: values.from, to: values.to },
      adults: isTours ? values.adults : 0,
      children: isTours ? values.children : 0,
      budgetRange: isTours ? values.budgetRange : "",
      message: values.message,
      source,
      sourceLabel,
      website,
    });

    if (!result.ok) {
      setStatus("error");
      setError(result.error || "Something went wrong.");
      setFieldErrors(result.fields || {});
      return;
    }

    setStatus("done");
    setResult(result);
  };

  /* ------------------------------ Success ------------------------------- */
  if (status === "done") {
    return (
      // pb when sticky: the dialog's scroll container has no bottom padding of
      // its own, on the assumption that the action bar provides it, and this
      // screen has no action bar.
      <div className={cn("text-center", stickyActions && "pb-6 sm:pb-8", className)}>
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Check className="size-7" aria-hidden="true" />
        </span>

        <h3 className="mt-5 text-xl font-semibold text-ink" role="status">
          Thank you, {values.name.split(" ")[0]} - we have it.
        </h3>

        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
          {channel === "whatsapp"
            ? "Your enquiry is logged with us, and WhatsApp should have opened in a new tab. If it did not, use the button below."
            : result?.emailSent
              ? "Your enquiry is logged and on its way to our inbox. A person will reply, usually the same working day."
              : "Your enquiry is logged with us. A person will reply, usually the same working day."}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {channel === "whatsapp" && result?.whatsappUrl ? (
            <Button href={result.whatsappUrl} variant="whatsapp">
              <WhatsAppIcon className="size-5" />
              Open WhatsApp
            </Button>
          ) : null}
          <Button href={`tel:${PRIMARY_PHONE.tel}`} variant="outline">
            Or call {PRIMARY_PHONE.display}
          </Button>
        </div>

        <p className="mt-6 text-xs text-ink-muted">
          Reference {result?.id ? result.id.slice(-6).toUpperCase() : "-"}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate={false} className={cn("relative space-y-6", className)}>
      {packageTitle ? (
        <p className="flex items-start gap-3 rounded-2xl bg-brand-50 p-4 text-[0.9375rem] leading-snug text-brand-900">
          <Send className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
          <span>
            Enquiring about <strong className="font-semibold">{packageTitle}</strong>. Change
            anything below if that is not quite it.
          </span>
        </p>
      ) : null}

      {/* --- Always visible ------------------------------------------------ */}
      <fieldset className="space-y-4">
        <legend className="sr-only">Your details</legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" required>
            <input
              type="text"
              required
              autoComplete="name"
              value={values.name}
              onChange={set("name")}
              placeholder="Who should we ask for?"
              className={INPUT}
            />
          </Field>

          <Field label="Phone" required hint="We'll call or WhatsApp this number">
            <input
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
              placeholder="+91 …"
              className={INPUT}
            />
          </Field>
        </div>

        <Field label="Email" required>
          <input
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={INPUT}
          />
        </Field>
      </fieldset>

      {/* --- Branch: tours or other services -------------------------------- */}
      <fieldset>
        <legend className={LABEL}>What is this about?</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <Choice
            name="enquiryType"
            value="tours"
            checked={isTours}
            onChange={set("enquiryType")}
            title="Tours & packages"
            body="A holiday, a group departure, a honeymoon"
          />
          <Choice
            name="enquiryType"
            value="other-services"
            checked={!isTours}
            onChange={set("enquiryType")}
            title="Other services"
            body="Tickets, hotels, insurance, attestation"
          />
        </div>
      </fieldset>

      {isTours ? (
        <fieldset className="space-y-4">
          <legend className="sr-only">Trip details</legend>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Tour type">
              <select value={values.tourType} onChange={set("tourType")} className={INPUT}>
                <option value="customized">Customized - built around us</option>
                <option value="fixed">Fixed departure - join a group</option>
              </select>
            </Field>

            <Field label="Destination">
              <select value={values.destination} onChange={set("destination")} className={INPUT}>
                <option value="">Not sure yet - help me choose</option>
                <optgroup label="International">
                  {destinations
                    .filter((d) => d.region === "international")
                    .map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name}
                      </option>
                    ))}
                </optgroup>
                <optgroup label="Domestic">
                  {destinations
                    .filter((d) => d.region === "domestic")
                    .map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.name}
                      </option>
                    ))}
                </optgroup>
              </select>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Travelling from" hint="Approximate is fine">
              <input type="date" value={values.from} onChange={set("from")} className={INPUT} />
            </Field>
            <Field label="Returning">
              <input
                type="date"
                value={values.to}
                onChange={set("to")}
                min={values.from || undefined}
                className={INPUT}
              />
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Adults">
              <input
                type="number"
                min="1"
                max="200"
                inputMode="numeric"
                value={values.adults}
                onChange={set("adults")}
                className={INPUT}
              />
            </Field>
            <Field label="Children">
              <input
                type="number"
                min="0"
                max="100"
                inputMode="numeric"
                value={values.children}
                onChange={set("children")}
                className={INPUT}
              />
            </Field>
            <Field label="Budget per person">
              <select value={values.budgetRange} onChange={set("budgetRange")} className={INPUT}>
                {BUDGET_RANGES.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </fieldset>
      ) : (
        <Field label="Which service?">
          <select value={values.serviceType} onChange={set("serviceType")} className={INPUT}>
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>
      )}

      <Field label="Anything else we should know?" hint="Optional">
        <textarea
          rows={4}
          value={values.message}
          onChange={set("message")}
          placeholder="Who's travelling, what matters to you, anything we should plan around."
          className={cn(INPUT, "h-auto py-3 leading-relaxed")}
        />
      </Field>

      {/* --- Channel -------------------------------------------------------- */}
      <fieldset>
        <legend className={LABEL}>How would you like us to reply?</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <Choice
            name="channel"
            value="whatsapp"
            checked={channel === "whatsapp"}
            onChange={(event) => setChannel(event.target.value)}
            title="WhatsApp"
            body="Fastest - usually within the hour"
            icon={<WhatsAppIcon className="size-4 text-whatsapp-text" />}
          />
          <Choice
            name="channel"
            value="email"
            checked={channel === "email"}
            onChange={(event) => setChannel(event.target.value)}
            title="Email"
            body="A written quote you can keep"
            icon={<Mail className="size-4 text-brand-600" aria-hidden="true" />}
          />
        </div>
      </fieldset>

      {/* Honeypot. Hidden from sight, from assistive tech and from the tab
          order — a human never fills it in, so anything here is a bot and the
          API discards the submission silently. */}
      <div aria-hidden="true" className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Do not fill this in
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </label>
      </div>

      {error ? (
        <p
          role="alert"
          className="flex gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-[0.9375rem] leading-relaxed text-ink"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          <span>
            {error}
            {Object.keys(fieldErrors).length ? (
              <span className="mt-1 block text-sm text-ink-soft">
                {Object.values(fieldErrors).join(" ")}
              </span>
            ) : null}
          </span>
        </p>
      ) : null}

      {/*
        The action bar. When sticky, it bleeds to the edges of the dialog's
        padded body with -mx / px pairs that mirror EnquiryDialog's px-6 sm:px-8
        — change one and change the other, or the bar will float short of the
        dialog's sides. The top border and opaque fill are what stop the fields
        showing through as they scroll underneath.
      */}
      <div
        className={cn(
          "space-y-4",
          stickyActions &&
            // No negative BOTTOM margin. With -mb-6 the sticky element's margin
            // box hung 24px past its border box, so `bottom: 0` parked the bar
            // 24px short of the scrollport and the fields scrolled visibly
            // through the gap underneath it. Only the horizontal bleed is
            // wanted; the container drops its own bottom padding instead.
            "sticky bottom-0 -mx-6 border-t border-line bg-white px-6 pt-5 pb-6 sm:-mx-8 sm:px-8 sm:pb-8"
        )}
      >
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand-700 px-8 text-base font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              {channel === "whatsapp" ? (
                <WhatsAppIcon className="size-5" />
              ) : (
                <Send className="size-4" aria-hidden="true" />
              )}
              Send enquiry
            </>
          )}
        </button>

        <p className="text-center text-xs leading-relaxed text-ink-muted">
          No payment is taken on this site. You get a written quote and a named person to talk to.
        </p>
      </div>
    </form>
  );
}

const INPUT =
  "h-12 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-400/25";

const LABEL = "block text-[0.8125rem] font-semibold text-ink";

function Field({ label, hint, required, children }) {
  return (
    <label className="block">
      <span className={LABEL}>
        {label}
        {required ? (
          <span className="ml-1 text-brand-600" aria-hidden="true">
            *
          </span>
        ) : null}
        {hint ? <span className="ml-2 font-normal text-ink-muted">{hint}</span> : null}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </label>
  );
}

function Choice({ name, value, checked, onChange, title, body, icon }) {
  return (
    <label
      className={cn(
        "flex cursor-pointer flex-col gap-1 rounded-2xl border p-4 transition-colors",
        checked ? "border-brand-500 bg-brand-50" : "border-line bg-white hover:border-brand-300"
      )}
    >
      <span className="flex items-center gap-2">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="size-4 accent-brand-500"
        />
        {icon}
        <span className="text-sm font-semibold text-ink">{title}</span>
      </span>
      <span className="pl-6 text-xs leading-snug text-ink-muted">{body}</span>
    </label>
  );
}
