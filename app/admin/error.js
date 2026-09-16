"use client";

import { useEffect } from "react";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Error boundary for the dashboard. Staff hitting a permission wall are
 * redirected to /admin/denied/ instead, so anything landing here is a genuine
 * fault worth showing the detail of — this is an internal tool, and the person
 * reading it can pass the message to whoever maintains the site.
 */
export default function AdminError({ error, reset }) {
  useEffect(() => {
    console.error("[admin] unhandled error", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <TriangleAlert className="size-6" aria-hidden="true" />
      </span>

      <h1 className="mt-5 text-xl font-bold text-ink">Something went wrong.</h1>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Nothing you were editing has been lost unless you had already saved it. Try again, and if
        it keeps happening pass this message on:
      </p>

      <p className="mt-3 rounded-lg bg-mist-100 p-3 text-left font-mono text-xs break-words text-ink-soft">
        {error?.message || "Unknown error"}
        {error?.digest ? ` (${error.digest})` : ""}
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/">Back to the overview</Link>
        </Button>
      </div>
    </div>
  );
}
