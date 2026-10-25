import "server-only";

import crypto from "node:crypto";

/**
 * Razorpay, over its REST API - three calls and two signature checks do not
 * justify an SDK dependency.
 *
 *   RAZORPAY_KEY_ID          rzp_test_... / rzp_live_... (public; sent to the checkout)
 *   RAZORPAY_KEY_SECRET      signs API calls and checkout signatures - server only
 *   RAZORPAY_WEBHOOK_SECRET  the secret typed in when adding the webhook in the
 *                            Razorpay dashboard - server only
 *
 * Test keys and live keys are separate pairs; switching from one to the other
 * is only a change of these variables.
 */

const API = "https://api.razorpay.com/v1";

/**
 * LIVE KEYS ARE LOCKED UNTIL PRODUCTION. A live key (rzp_live_...) only works
 * when RAZORPAY_LIVE_PAYMENTS is also set to "on", so a live key pasted into a
 * demo or preview deployment by mistake switches payments OFF rather than
 * taking real money. Test keys (rzp_test_...) always work, and only ever move
 * sandbox money with Razorpay's test cards and UPI IDs.
 */
export function isLiveKey() {
  return (process.env.RAZORPAY_KEY_ID || "").startsWith("rzp_live_");
}

export function isTestMode() {
  return (process.env.RAZORPAY_KEY_ID || "").startsWith("rzp_test_");
}

export function isRazorpayConfigured() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) return false;
  if (isLiveKey()) return process.env.RAZORPAY_LIVE_PAYMENTS === "on";
  return isTestMode();
}

export function razorpayKeyId() {
  return process.env.RAZORPAY_KEY_ID || "";
}

async function call(path, { method = "GET", body } = {}) {
  const auth = Buffer.from(
    `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
  ).toString("base64");

  const response = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Basic ${auth}`,
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const reason = data?.error?.description || `Razorpay responded ${response.status}`;
    throw new Error(reason);
  }
  return data;
}

/** https://razorpay.com/docs/api/orders/create/ - `amount` is in paise. */
export function createOrder({ amount, receipt, notes }) {
  return call("/orders", {
    method: "POST",
    body: { amount, currency: "INR", receipt, notes },
  });
}

export function fetchPayment(paymentId) {
  return call(`/payments/${encodeURIComponent(paymentId)}`);
}

/**
 * Captures an "authorized" payment, which otherwise only HOLDS the money and
 * is refunded by Razorpay after a few days. Accounts set to automatic capture
 * never need this; this makes the site independent of that dashboard setting.
 * Returns the payment as it stands afterwards.
 */
export async function capturePayment(payment) {
  if (payment?.status !== "authorized") return payment;
  try {
    return await call(`/payments/${encodeURIComponent(payment.id)}/capture`, {
      method: "POST",
      body: { amount: payment.amount, currency: payment.currency || "INR" },
    });
  } catch (error) {
    // Already captured by the other path (verify vs webhook) - re-read it.
    const latest = await fetchPayment(payment.id);
    if (latest.status === "captured") return latest;
    throw error;
  }
}

function hmac(secret, payload) {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""));
  const right = Buffer.from(String(b || ""));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

/** The signature the checkout hands back: HMAC(order_id + "|" + payment_id). */
export function verifyCheckoutSignature({ orderId, paymentId, signature }) {
  if (!process.env.RAZORPAY_KEY_SECRET) return false;
  return safeEqual(hmac(process.env.RAZORPAY_KEY_SECRET, `${orderId}|${paymentId}`), signature);
}

/** X-Razorpay-Signature on a webhook: HMAC of the raw, unparsed body. */
export function verifyWebhookSignature(rawBody, signature) {
  if (!process.env.RAZORPAY_WEBHOOK_SECRET) return false;
  return safeEqual(hmac(process.env.RAZORPAY_WEBHOOK_SECRET, rawBody), signature);
}

/** Only a captured payment is money received. */
export function isSuccessfulPayment(payment) {
  return payment?.status === "captured";
}
