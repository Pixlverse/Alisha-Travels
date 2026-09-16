"use client";

import { useEffect } from "react";
import Button from "@/components/site/Button";
import TicketCard from "@/components/site/TicketCard";
import { PRIMARY_PHONE } from "@/lib/site";

/**
 * Route-level error boundary for the public site. A visitor who hits this is
 * usually mid-enquiry, so the priority is giving them a way to reach a human
 * rather than an apology — hence the phone number in the body copy and a
 * retry as the first action.
 *
 * Same boarding pass as the 404, different stub: one page told the visitor the
 * flight does not exist, this one that it did not take off.
 */
export default function SiteError({ error, reset }) {
  useEffect(() => {
    console.error("[site] unhandled error", error);
  }, [error]);

  return (
    <div className="relative isolate overflow-hidden bg-brand-900 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.14),transparent_55%)]"
      />
      {/* Fades the wash back to the flat --brand-900 the footer uses, so
          the band and the footer read as one surface. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-900"
      />

      <div className="relative z-10 container-page">
        <TicketCard
          stamp="Delayed"
          routeFrom="Your request"
          routeTo="This page"
          cause="The server did not return the page"
          heading="That did not load as it should have."
          code={["A", "K", "–", "5", "X", "X"]}
          reference="REF-UNAVAILABLE"
          actions={
            <>
              <Button onClick={reset} size="lg">
                Try again
              </Button>
              <Button href="/" variant="outline" size="lg">
                Back to the homepage
              </Button>
            </>
          }
        >
          Try again in a moment. If you were in the middle of an enquiry, call us on{" "}
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            className="font-medium text-brand-700 underline underline-offset-4"
          >
            {PRIMARY_PHONE.display}
          </a>{" "}
          and we will pick it up from there.
        </TicketCard>
      </div>
    </div>
  );
}
