import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/db";
import { recordFailedPayment, recordSuccessfulPayment } from "@/lib/payments";
import { capturePayment, verifyWebhookSignature } from "@/lib/razorpay";

/**
 * POST /api/payments/webhook - Razorpay's server-to-server notice.
 *
 * Set up in the Razorpay dashboard (Accounts & Settings -> Webhooks) with the
 * URL https://<site>/api/payments/webhook/, the events payment.authorized,
 * payment.captured, payment.failed and order.paid, and a secret that also goes in
 * RAZORPAY_WEBHOOK_SECRET.
 *
 * This is the record of last resort: the browser callback can be lost to a
 * closed tab or a dropped connection, the webhook is retried by Razorpay until
 * it gets a 2xx. The signature is checked against the RAW body, so it is read
 * as text before anything parses it.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  const raw = await request.text();
  if (!verifyWebhookSignature(raw, request.headers.get("x-razorpay-signature"))) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  let event;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payment = event?.payload?.payment?.entity;
  const orderId = payment?.order_id || event?.payload?.order?.entity?.id;
  if (!orderId) return NextResponse.json({ ok: true });

  try {
    await connectToDatabase();

    if ((event.event === "payment.captured" || event.event === "order.paid") && payment) {
      await recordSuccessfulPayment(orderId, payment);
    } else if (event.event === "payment.authorized" && payment) {
      // Held, not received: capture it (the customer may have closed the tab
      // before the checkout could call /verify), then record it.
      const captured = await capturePayment(payment);
      if (captured.status === "captured") await recordSuccessfulPayment(orderId, captured);
    } else if (event.event === "payment.failed" && payment) {
      await recordFailedPayment(orderId, payment.error_description || payment.error_code);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    // A 5xx makes Razorpay retry, which is what we want if the database blinked.
    console.error("[payments] webhook failed:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
