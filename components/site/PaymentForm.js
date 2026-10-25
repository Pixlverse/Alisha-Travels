"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check, Loader2, LockKeyhole } from "lucide-react";
import Button from "./Button";
import { PRIMARY_PHONE } from "@/lib/site";
import { cn } from "@/lib/utils";

const CHECKOUT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

const PURPOSES = [
  { value: "advance", label: "Advance" },
  { value: "balance", label: "Balance" },
  { value: "full", label: "Full payment" },
  { value: "other", label: "Other" },
];

const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

/**
 * The "Pay now" form on /pay/.
 *
 * 1. POST the details to /api/payments/order, which creates the Razorpay
 *    order on the server and records the attempt.
 * 2. Open Razorpay's checkout on that order (UPI, cards, net banking, wallets).
 * 3. Hand the checkout's result to /api/payments/verify, which checks the
 *    signature and asks Razorpay itself before showing the receipt.
 *
 * The checkout script is loaded on the first click rather than with the page,
 * so the page itself stays as light as the rest of the site.
 *
 * `initial` pre-fills from the URL, so staff can send a traveller a ready
 * link: /pay/?ref=004946&amount=25000&purpose=balance
 */
export default function PaymentForm({ initial = {} }) {
  const [values, setValues] = useState({
    name: initial.name || "",
    phone: initial.phone || "",
    email: initial.email || "",
    bookingRef: initial.ref || "",
    purpose: PURPOSES.some((p) => p.value === initial.purpose) ? initial.purpose : "advance",
    amount: initial.amount || "",
    note: "",
    website: "",
  });
  const [state, setState] = useState("idle"); // idle | working | done
  const [error, setError] = useState("");
  const [fields, setFields] = useState({});
  const [receipt, setReceipt] = useState(null);

  // The confirmation replaces a long form, so bring it into view.
  const doneRef = useRef(null);
  useEffect(() => {
    if (state === "done") doneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [state]);

  const set = (key) => (event) => setValues((current) => ({ ...current, [key]: event.target.value }));

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setFields({});
    setState("working");

    try {
      const [loaded, response] = await Promise.all([
        loadCheckout(),
        fetch("/api/payments/order/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, amount: String(values.amount).replace(/[,\s]/g, "") }),
        }),
      ]);
      const order = await response.json().catch(() => ({}));

      if (!response.ok || !order.ok) {
        setFields(order.fields || {});
        throw new Error(order.error || "We could not start the payment.");
      }
      if (!loaded) {
        throw new Error("The payment window could not load. Check your connection and try again.");
      }

      const checkout = new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "Alisha Tours & Travels",
        description: values.bookingRef ? `Booking ${values.bookingRef}` : "Travel booking payment",
        prefill: order.prefill,
        theme: { color: "#005c75" },
        handler: (result) => verify(result),
        modal: {
          // Closing the window is not an error; it just puts the form back.
          ondismiss: () => setState((current) => (current === "done" ? current : "idle")),
        },
      });
      checkout.on("payment.failed", (failure) => {
        setError(
          failure?.error?.description
            ? `${failure.error.description} No money has been taken - you can try again.`
            : "The payment did not go through. No money has been taken - you can try again."
        );
      });
      checkout.open();
    } catch (err) {
      setError(err.message);
      setState("idle");
    }
  }

  async function verify(result) {
    setState("working");
    try {
      const response = await fetch("/api/payments/verify/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: result.razorpay_order_id,
          paymentId: result.razorpay_payment_id,
          signature: result.razorpay_signature,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error);
      setReceipt(data.receipt);
      setState("done");
    } catch (err) {
      setError(
        err.message ||
          `We could not confirm the payment. Call us on ${PRIMARY_PHONE.display} and we will check.`
      );
      setState("idle");
    }
  }

  if (state === "done" && receipt) {
    return (
      <div ref={doneRef} className="scroll-mt-28 text-center" role="status">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <Check className="size-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-ink">
          Payment received - thank you.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
          {INR.format(receipt.amount / 100)}
          {receipt.bookingRef ? ` towards booking ${receipt.bookingRef}` : ""} is confirmed.
          {receipt.email ? ` A receipt is on its way to ${receipt.email}.` : ""}
        </p>
        <dl className="mx-auto mt-6 max-w-sm space-y-2 rounded-2xl bg-mist-50 p-5 text-left text-sm">
          <Row label="Payment ID" value={receipt.paymentId} />
          {receipt.method ? <Row label="Paid by" value={receipt.method.toUpperCase()} /> : null}
          <Row label="Date" value={new Date(receipt.paidAt).toLocaleString("en-IN")} />
        </dl>
        <p className="mt-5 text-xs text-ink-muted">
          Keep the payment ID for your records.
        </p>
      </div>
    );
  }

  const working = state === "working";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required error={fields.name}>
          <input className={INPUT} value={values.name} onChange={set("name")} autoComplete="name" required />
        </Field>
        <Field label="Phone" required error={fields.phone}>
          <input className={INPUT} value={values.phone} onChange={set("phone")} type="tel" autoComplete="tel" inputMode="tel" required />
        </Field>
        <Field label="E-mail" hint="for your receipt" error={fields.email}>
          <input className={INPUT} value={values.email} onChange={set("email")} type="email" autoComplete="email" />
        </Field>
        <Field label="Booking reference" hint="or trip name" error={fields.bookingRef}>
          <input className={INPUT} value={values.bookingRef} onChange={set("bookingRef")} placeholder="e.g. 004946 or Dubai, 12 Jan" />
        </Field>
      </div>

      <fieldset>
        <legend className={LABEL}>This payment is</legend>
        <div className="mt-1.5 flex flex-wrap gap-2">
          {PURPOSES.map((purpose) => (
            <label
              key={purpose.value}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                values.purpose === purpose.value
                  ? "border-brand-500 bg-brand-50 text-brand-800"
                  : "border-line bg-white text-ink-soft hover:border-brand-300"
              )}
            >
              <input
                type="radio"
                name="purpose"
                value={purpose.value}
                checked={values.purpose === purpose.value}
                onChange={set("purpose")}
                className="sr-only"
              />
              {purpose.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Amount" required error={fields.amount}>
        <span className="relative block">
          <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-sm font-semibold text-ink-muted">
            ₹
          </span>
          <input
            className={cn(INPUT, "pl-8 text-base font-semibold")}
            value={values.amount}
            onChange={set("amount")}
            inputMode="decimal"
            placeholder="0"
            required
          />
        </span>
      </Field>

      <Field label="Anything we should know?" error={fields.note}>
        <textarea
          className={cn(INPUT, "h-24 py-3")}
          value={values.note}
          onChange={set("note")}
          maxLength={500}
        />
      </Field>

      {/* Honeypot - hidden from people, filled in by bots. */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {error ? (
        <p role="alert" className="flex items-start gap-2 rounded-xl bg-red-50 p-3.5 text-sm text-red-800">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={working}>
          {working ? (
            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
          ) : (
            <LockKeyhole className="size-5" aria-hidden="true" />
          )}
          {working ? "Opening secure payment…" : amountLabel(values.amount)}
        </Button>
        <p className="text-xs leading-relaxed text-ink-muted">
          UPI, cards and net banking, processed by Razorpay.
          <br />
          Your card details never reach our servers.
        </p>
      </div>
    </form>
  );
}

function amountLabel(amount) {
  const n = Number(String(amount).replace(/,/g, ""));
  return n > 0 ? `Pay ${INR.format(n)}` : "Pay now";
}

/** Inserts Razorpay's checkout script once; resolves false if it cannot load. */
function loadCheckout() {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${CHECKOUT_SRC}"]`);
    const script = existing || document.createElement("script");
    script.addEventListener("load", () => resolve(true));
    script.addEventListener("error", () => resolve(false));
    if (!existing) {
      script.src = CHECKOUT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  });
}

const INPUT =
  "h-12 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-400/25";

const LABEL = "block text-[0.8125rem] font-semibold text-ink";

function Field({ label, hint, required, error, children }) {
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
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-ink-muted">{label}</dt>
      <dd className="font-semibold break-all text-ink">{value}</dd>
    </div>
  );
}
