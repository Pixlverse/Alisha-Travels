import Link from "next/link";
import { CreditCard, Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { requireSession } from "@/lib/auth";
import { PAYMENT_STATUS_LABELS, getPayments } from "@/lib/data/payments";
import { telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";
export const metadata = { title: "Payments" };

const PER_PAGE = 25;

const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

const PURPOSE = { advance: "Advance", balance: "Balance", full: "Full payment", other: "Other" };

const STATUS_STYLE = {
  paid: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  created: "bg-mist-100 text-ink-soft ring-line",
  failed: "bg-red-50 text-red-800 ring-red-200",
};

/**
 * Every online payment from /pay/, newest first. Read-only on purpose: the
 * money moved in Razorpay, and refunds or captures are done in the Razorpay
 * dashboard, which this list links to by payment ID.
 */
export default async function PaymentsPage({ searchParams }) {
  await requireSession();

  const params = await searchParams;
  const filters = { status: params?.status || "", search: params?.search || "" };
  const page = Math.max(1, Number(params?.page) || 1);

  const { payments, total, pages, paid } = await getPayments(filters, { page, perPage: PER_PAGE });

  const query = (patch) => {
    const next = new URLSearchParams();
    for (const [key, value] of Object.entries({ ...filters, ...patch })) {
      if (value) next.set(key, value);
    }
    const string = next.toString();
    return string ? `?${string}` : "";
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-ink">Payments</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {paid.count} paid online · {INR.format(paid.amount / 100)} received in total
        </p>
      </header>

      <nav aria-label="Filter by status" className="flex flex-wrap gap-2">
        {[["", "All"], ["paid", "Paid"], ["created", "Not completed"], ["failed", "Failed"]].map(
          ([value, label]) => (
            <Link
              key={label}
              href={query({ status: value, page: "" })}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                filters.status === value
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-line bg-white text-ink-soft hover:border-brand-300"
              )}
            >
              {label}
            </Link>
          )
        )}
      </nav>

      <form className="flex flex-wrap items-end gap-3 rounded-xl border border-line bg-white p-4">
        <label className="min-w-[14rem] flex-1">
          <span className="mb-1.5 block text-xs font-semibold text-ink">Search</span>
          <Input
            name="search"
            defaultValue={filters.search}
            placeholder="Name, phone, booking ref, payment ID…"
          />
        </label>
        {filters.status ? <input type="hidden" name="status" value={filters.status} /> : null}
        <Button type="submit">
          <Filter className="size-4" aria-hidden="true" />
          Apply
        </Button>
      </form>

      {payments.length ? (
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Who</TableHead>
                <TableHead>For</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Razorpay</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment._id}>
                  <TableCell className="align-top text-xs whitespace-nowrap text-muted-foreground">
                    {new Date(payment.paidAt || payment.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell className="align-top">
                    <span className="block font-semibold text-ink">{payment.name}</span>
                    <a
                      href={telHref(payment.phone)}
                      className="block text-xs text-muted-foreground hover:text-brand-700"
                    >
                      {payment.phone}
                    </a>
                    {payment.email ? (
                      <span className="block text-xs text-muted-foreground">{payment.email}</span>
                    ) : null}
                  </TableCell>
                  <TableCell className="max-w-[16rem] align-top text-sm">
                    <span className="block font-medium text-ink">
                      {PURPOSE[payment.purpose] || "Payment"}
                      {payment.bookingRef ? ` · ${payment.bookingRef}` : ""}
                    </span>
                    {payment.note ? (
                      <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                        {payment.note}
                      </span>
                    ) : null}
                  </TableCell>
                  <TableCell className="text-right align-top font-semibold whitespace-nowrap text-ink">
                    {INR.format(payment.amount / 100)}
                    {payment.method ? (
                      <span className="block text-xs font-normal text-muted-foreground uppercase">
                        {payment.method}
                      </span>
                    ) : null}
                  </TableCell>
                  <TableCell className="align-top">
                    <span
                      className={cn(
                        "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1",
                        STATUS_STYLE[payment.status]
                      )}
                    >
                      {PAYMENT_STATUS_LABELS[payment.status] || payment.status}
                    </span>
                    {payment.failureReason ? (
                      <span className="mt-1 block max-w-[12rem] text-xs text-muted-foreground">
                        {payment.failureReason}
                      </span>
                    ) : null}
                  </TableCell>
                  <TableCell className="align-top font-mono text-xs text-muted-foreground">
                    {payment.razorpayPaymentId ? (
                      <a
                        href={`https://dashboard.razorpay.com/app/payments/${payment.razorpayPaymentId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-700 hover:underline"
                      >
                        {payment.razorpayPaymentId}
                      </a>
                    ) : (
                      payment.razorpayOrderId
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-line bg-white p-10 text-center">
          <CreditCard className="mx-auto size-8 text-muted-foreground" aria-hidden="true" />
          <p className="mt-3 font-semibold text-ink">No payments {filters.status || filters.search ? "match this view" : "yet"}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Payments made on the website&apos;s Pay Now page appear here.
          </p>
        </div>
      )}

      {pages > 1 ? (
        <nav aria-label="Pagination" className="flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Page {page} of {pages} · {total} payments
          </p>
          <div className="flex gap-2">
            {page > 1 ? (
              <Button asChild variant="outline" size="sm">
                <Link href={query({ page: String(page - 1) })}>Previous</Link>
              </Button>
            ) : null}
            {page < pages ? (
              <Button asChild variant="outline" size="sm">
                <Link href={query({ page: String(page + 1) })}>Next</Link>
              </Button>
            ) : null}
          </div>
        </nav>
      ) : null}
    </div>
  );
}
