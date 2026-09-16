"use client";

import { useState, useTransition } from "react";
import { Check, Loader2 } from "lucide-react";
import { updateEnquiryNotes } from "@/app/admin/enquiries/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

/**
 * Internal notes on a lead — what was said on the call, what was quoted, when
 * to follow up. Never shown to the traveller.
 */
export default function NotesEditor({ id, initial = "" }) {
  const [value, setValue] = useState(initial);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const dirty = value !== initial && !saved;

  const save = () => {
    setError("");
    startTransition(async () => {
      const result = await updateEnquiryNotes(id, value);
      if (!result?.ok) {
        setError(result?.error || "Could not save.");
        return;
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    });
  };

  return (
    <div className="space-y-3">
      <Textarea
        rows={6}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setSaved(false);
        }}
        placeholder="What was discussed, what was quoted, when to follow up…"
      />
      <div className="flex items-center gap-3">
        <Button type="button" onClick={save} disabled={pending || (!dirty && !error)} size="sm">
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Saving…
            </>
          ) : (
            "Save notes"
          )}
        </Button>
        {saved ? (
          <span className="inline-flex items-center gap-1.5 text-sm text-emerald-600">
            <Check className="size-4" aria-hidden="true" />
            Saved
          </span>
        ) : null}
        {error ? (
          <span role="alert" className="text-sm text-destructive">
            {error}
          </span>
        ) : null}
      </div>
    </div>
  );
}
