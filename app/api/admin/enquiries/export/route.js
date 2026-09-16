import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getAllEnquiriesForExport } from "@/lib/data/enquiries";
import { ENQUIRY_STATUS_LABELS } from "@/lib/data/enquiries";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * CSV export of the enquiry list, honouring whatever filters are on the page.
 *
 * CSV rather than a CRM integration — that is the scope boundary for this
 * phase. The columns match what a follow-up call actually needs.
 */

const COLUMNS = [
  ["Received", (e) => new Date(e.createdAt).toISOString()],
  ["Name", (e) => e.name],
  ["Phone", (e) => e.phone],
  ["Email", (e) => e.email],
  ["Status", (e) => ENQUIRY_STATUS_LABELS[e.status] || e.status],
  ["Channel", (e) => e.channel],
  ["Type", (e) => e.enquiryType],
  ["Tour type", (e) => e.tourType],
  ["Destination", (e) => e.destinationName],
  ["Package", (e) => e.packageTitle],
  ["Service", (e) => e.serviceType],
  ["Travel from", (e) => (e.travelDates?.from ? String(e.travelDates.from).slice(0, 10) : "")],
  ["Travel to", (e) => (e.travelDates?.to ? String(e.travelDates.to).slice(0, 10) : "")],
  ["Adults", (e) => e.adults],
  ["Children", (e) => e.children],
  ["Budget", (e) => e.budgetRange],
  ["Message", (e) => e.message],
  ["Internal notes", (e) => e.adminNotes],
  ["Source", (e) => e.source],
  ["Email sent", (e) => (e.emailSentAt ? new Date(e.emailSentAt).toISOString() : "")],
  ["Email error", (e) => e.emailError],
];

/**
 * Excel treats a cell beginning with =, +, - or @ as a formula. A lead whose
 * name or message starts with one of those would execute on open, so the value
 * is prefixed with a single quote. This is CSV injection, and it matters here
 * because every value in this file came from a stranger on the internet.
 */
function csvCell(value) {
  if (value === null || value === undefined) return "";
  let text = String(value);
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET(request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const params = request.nextUrl.searchParams;
  const filters = {
    status: params.get("status") || "",
    channel: params.get("channel") || "",
    search: params.get("search") || "",
    from: params.get("from") || "",
    to: params.get("to") || "",
  };

  const enquiries = await getAllEnquiriesForExport(filters);

  const lines = [COLUMNS.map(([header]) => csvCell(header)).join(",")];
  for (const enquiry of enquiries) {
    lines.push(COLUMNS.map(([, read]) => csvCell(read(enquiry))).join(","));
  }

  // BOM so Excel opens UTF-8 correctly — without it ₹ and accented names break.
  const body = `﻿${lines.join("\r\n")}`;
  const stamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="alisha-enquiries-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
