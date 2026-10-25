import { Resend } from "resend";
import { enquiryFields } from "./enquiry";
import { EMAILS, SITE } from "./site";

/**
 * Transactional e-mail through Resend.
 *
 * A hard rule runs through this file: **e-mail failure must never fail an
 * enquiry.** The lead is already written to MongoDB by the time anything here
 * runs, so if Resend is down, unconfigured, or the domain is not verified yet,
 * we record the reason on the Enquiry document and return. The visitor still
 * gets a success screen because, as far as the business is concerned, they
 * succeeded — the lead is in the dashboard.
 *
 * Sender domain: alishatravels.in. See README > E-mail for the DNS records
 * Resend needs before anything actually leaves.
 */

let client = null;

function resend() {
  if (!process.env.RESEND_API_KEY) return null;
  client ??= new Resend(process.env.RESEND_API_KEY);
  return client;
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.ENQUIRY_FROM_EMAIL);
}

const FROM = () =>
  process.env.ENQUIRY_FROM_EMAIL || `${SITE.name} <enquiries@alishatravels.in>`;

const TO = () =>
  (process.env.ENQUIRY_TO_EMAIL || EMAILS.primary)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

/* -------------------------------------------------------------------------- */
/*  Templates                                                                  */
/* -------------------------------------------------------------------------- */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(title, bodyHtml) {
  // Inline styles only - e-mail clients strip <style> blocks unpredictably.
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#f1f1f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#10202a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #dcdee1;">
    <tr><td style="background:#005c75;padding:20px 28px;">
      <span style="color:#ffffff;font-size:17px;font-weight:700;letter-spacing:-0.01em;">${escapeHtml(SITE.name)}</span>
      <span style="color:#ade1f7;font-size:13px;display:block;margin-top:2px;">${escapeHtml(SITE.tagline)}</span>
    </td></tr>
    <tr><td style="padding:28px;">
      <h1 style="margin:0 0 16px;font-size:19px;line-height:1.3;">${escapeHtml(title)}</h1>
      ${bodyHtml}
    </td></tr>
    <tr><td style="padding:18px 28px;background:#fafafb;border-top:1px solid #dcdee1;font-size:12px;color:#6a7a86;">
      ${escapeHtml(SITE.name)} · IATA accredited · Kottayam, Kerala<br>
      <a href="${SITE.url}" style="color:#0a80b6;">${escapeHtml(SITE.url.replace(/^https?:\/\//, ""))}</a>
    </td></tr>
  </table></body></html>`;
}

function fieldsTable(enquiry) {
  const rows = enquiryFields(enquiry)
    .map(
      ([label, value]) =>
        `<tr>
           <td style="padding:7px 0;font-size:13px;color:#6a7a86;width:130px;vertical-align:top;">${escapeHtml(label)}</td>
           <td style="padding:7px 0;font-size:14px;color:#10202a;font-weight:600;">${escapeHtml(value)}</td>
         </tr>`
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" width="100%">${rows}</table>`;
}

/* -------------------------------------------------------------------------- */
/*  Senders                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Notifies the business. Returns { sent, error } - never throws, because the
 * caller has already saved the lead and must not roll it back.
 */
export async function sendEnquiryNotification(enquiry) {
  const api = resend();
  if (!api || !isEmailConfigured()) {
    return { sent: false, error: "Resend is not configured (RESEND_API_KEY / ENQUIRY_FROM_EMAIL)" };
  }

  const subject = enquiry.packageTitle
    ? `Enquiry: ${enquiry.packageTitle} - ${enquiry.name}`
    : enquiry.destinationName
      ? `Enquiry: ${enquiry.destinationName} - ${enquiry.name}`
      : `Website enquiry - ${enquiry.name}`;

  const html = shell(
    "A new enquiry just came in",
    `${fieldsTable(enquiry)}
     ${
       enquiry.message
         ? `<div style="margin-top:20px;padding:16px;background:#eef9fe;border-radius:10px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(enquiry.message)}</div>`
         : ""
     }
     <p style="margin:22px 0 0;font-size:13px;color:#6a7a86;">
       Received ${escapeHtml(new Date(enquiry.createdAt || Date.now()).toLocaleString("en-IN"))}${
         enquiry.source ? ` from ${escapeHtml(enquiry.source)}` : ""
       }.
     </p>
     <p style="margin:16px 0 0;">
       <a href="${SITE.url}/admin/enquiries/" style="display:inline-block;background:#0a9ddb;color:#fff;text-decoration:none;padding:11px 20px;border-radius:999px;font-size:14px;font-weight:600;">Open in the dashboard</a>
     </p>`
  );

  try {
    const { error } = await api.emails.send({
      from: FROM(),
      to: TO(),
      // So a reply from the inbox goes straight back to the traveller.
      replyTo: enquiry.email || undefined,
      subject,
      html,
      text: `${subject}\n\n${enquiryFields(enquiry).map(([l, v]) => `${l}: ${v}`).join("\n")}${enquiry.message ? `\n\n${enquiry.message}` : ""}`,
    });
    if (error) return { sent: false, error: error.message || String(error) };
    return { sent: true };
  } catch (err) {
    return { sent: false, error: err?.message || String(err) };
  }
}

/**
 * Acknowledgement to the traveller. Best-effort and non-blocking: if it fails
 * the business notification above is what actually matters.
 */
export async function sendEnquiryConfirmation(enquiry) {
  const api = resend();
  if (!api || !isEmailConfigured() || !enquiry.email) return { sent: false };

  const html = shell(
    `Thank you, ${enquiry.name.split(" ")[0]} - we have your enquiry`,
    `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;">
       A real person is reading this, not an autoresponder. You will hear back from one of us,
       usually the same working day.
     </p>
     <p style="margin:0 0 20px;font-size:15px;line-height:1.65;">Here is what you sent us:</p>
     ${fieldsTable(enquiry)}
     ${
       enquiry.message
         ? `<div style="margin-top:20px;padding:16px;background:#eef9fe;border-radius:10px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(enquiry.message)}</div>`
         : ""
     }
     <p style="margin:22px 0 0;font-size:14px;line-height:1.65;">
       In a hurry? Call us on <a href="tel:+919562921818" style="color:#0a80b6;font-weight:600;">+91 95629 21818</a>
       or message the same number on WhatsApp.
     </p>`
  );

  try {
    const { error } = await api.emails.send({
      from: FROM(),
      to: [enquiry.email],
      replyTo: EMAILS.primary,
      subject: `We have your enquiry - ${SITE.name}`,
      html,
    });
    if (error) return { sent: false, error: error.message || String(error) };
    return { sent: true };
  } catch (err) {
    return { sent: false, error: err?.message || String(err) };
  }
}

/* -------------------------------------------------------------------------- */
/*  Payments                                                                   */
/* -------------------------------------------------------------------------- */

const PURPOSE_LABELS = {
  advance: "Advance",
  balance: "Balance",
  full: "Full payment",
  other: "Payment",
};

function paymentRows(payment) {
  const amount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(payment.amount / 100);
  return [
    ["Amount", amount],
    ["For", PURPOSE_LABELS[payment.purpose] || "Payment"],
    ["Booking", payment.bookingRef],
    ["Name", payment.name],
    ["Phone", payment.phone],
    ["E-mail", payment.email],
    ["Paid by", payment.method ? payment.method.toUpperCase() : ""],
    ["Payment ID", payment.razorpayPaymentId],
    ["Paid on", new Date(payment.paidAt || Date.now()).toLocaleString("en-IN")],
    ["Note", payment.note],
  ].filter(([, value]) => value);
}

function rowsTable(rows) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" width="100%">${rows
    .map(
      ([label, value]) =>
        `<tr>
           <td style="padding:7px 0;font-size:13px;color:#6a7a86;width:130px;vertical-align:top;">${escapeHtml(label)}</td>
           <td style="padding:7px 0;font-size:14px;color:#10202a;font-weight:600;">${escapeHtml(value)}</td>
         </tr>`
    )
    .join("")}</table>`;
}

/** Tells the business a payment landed. Never throws. */
export async function sendPaymentNotification(payment) {
  const api = resend();
  if (!api || !isEmailConfigured()) return { sent: false, error: "Resend is not configured" };

  const rows = paymentRows(payment);
  const subject = `Payment received: ${rows[0][1]} - ${payment.name}`;
  try {
    const { error } = await api.emails.send({
      from: FROM(),
      to: TO(),
      replyTo: payment.email || undefined,
      subject,
      html: shell(
        "A payment just came in",
        `${rowsTable(rows)}
         <p style="margin:22px 0 0;">
           <a href="${SITE.url}/admin/payments/" style="display:inline-block;background:#0a9ddb;color:#fff;text-decoration:none;padding:11px 20px;border-radius:999px;font-size:14px;font-weight:600;">Open in the dashboard</a>
         </p>`
      ),
      text: `${subject}\n\n${rows.map(([l, v]) => `${l}: ${v}`).join("\n")}`,
    });
    if (error) return { sent: false, error: error.message || String(error) };
    return { sent: true };
  } catch (err) {
    return { sent: false, error: err?.message || String(err) };
  }
}

/** The traveller's receipt. Best-effort, like the enquiry acknowledgement. */
export async function sendPaymentReceipt(payment) {
  const api = resend();
  if (!api || !isEmailConfigured() || !payment.email) return { sent: false };

  const rows = paymentRows(payment);
  try {
    await api.emails.send({
      from: FROM(),
      to: payment.email,
      subject: `Payment received - ${SITE.name}`,
      html: shell(
        `Thank you, ${payment.name.split(" ")[0]} - your payment is received`,
        `<p style="margin:0 0 20px;font-size:15px;line-height:1.65;">
           Keep this e-mail as your receipt. We have recorded the payment against your booking,
           and will be in touch if anything else is needed.
         </p>
         ${rowsTable(rows)}`
      ),
      text: `Payment received\n\n${rows.map(([l, v]) => `${l}: ${v}`).join("\n")}`,
    });
    return { sent: true };
  } catch {
    return { sent: false };
  }
}
