import { NextResponse } from "next/server";
import { z } from "zod";

import { connectToDatabase } from "@/lib/db";
import { recordSuccessfulPayment } from "@/lib/payments";
import {
  capturePayment,
  fetchPayment,
  isSuccessfulPayment,
  verifyCheckoutSignature,
} from "@/lib/razorpay";
import { PRIMARY_PHONE } from "@/lib/site";

/**
 * POST /api/payments/verify
 *
 * The checkout's success callback lands here with three values. The signature
 * proves they came from Razorpay for OUR order; the payment is then fetched
 * back from Razorpay so its status and amount come from them, not the
 * browser. Only then is the Payment marked paid. The webhook does the same
 * independently, so a traveller who closes the tab mid-redirect is still
 * recorded.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const payloadSchema = z.object({
  orderId: z.string().trim().min(1).max(64),
  paymentId: z.string().trim().min(1).max(64),
  signature: z.string().trim().min(1).max(256),
});

const FAILED = `We could not confirm this payment. If money has left your account, it will either be confirmed shortly or refunded automatically - call us on ${PRIMARY_PHONE.display} and we will check.`;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed request" }, { status: 400 });
  }

  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success || !verifyCheckoutSignature(parsed.data)) {
    return NextResponse.json({ ok: false, error: FAILED }, { status: 400 });
  }
  const { orderId, paymentId } = parsed.data;

  try {
    await connectToDatabase();

    const fetched = await fetchPayment(paymentId);
    if (fetched.order_id !== orderId) {
      return NextResponse.json({ ok: false, error: FAILED }, { status: 400 });
    }
    const rzpPayment = await capturePayment(fetched);
    if (!isSuccessfulPayment(rzpPayment)) {
      return NextResponse.json({ ok: false, error: FAILED }, { status: 400 });
    }

    const payment = await recordSuccessfulPayment(orderId, rzpPayment);
    if (!payment) {
      return NextResponse.json({ ok: false, error: FAILED }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      receipt: {
        paymentId: payment.razorpayPaymentId,
        amount: payment.amount,
        method: payment.method,
        bookingRef: payment.bookingRef,
        email: payment.email,
        paidAt: payment.paidAt,
      },
    });
  } catch (error) {
    console.error("[payments] verify failed:", error);
    return NextResponse.json({ ok: false, error: FAILED }, { status: 502 });
  }
}
