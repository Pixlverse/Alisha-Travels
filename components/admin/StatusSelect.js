"use client";

import { useState, useTransition } from "react";
import { Check, Loader2 } from "lucide-react";
import { updateEnquiryStatus } from "@/app/admin/enquiries/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatusDot, statusToken } from "./StatusBadge";
import { ENQUIRY_STATUSES } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Inline status change, available to both roles.
 *
 * Optimistic in the loose sense: the select shows the new value immediately
 * and reverts if the Server Action reports a failure, so working through a
 * list of leads never stalls on a round trip.
 */
export default function StatusSelect({ id, status, className }) {
  const [value, setValue] = useState(status);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  const change = (next) => {
    const previous = value;
    setValue(next);
    setError("");

    startTransition(async () => {
      const result = await updateEnquiryStatus(id, next);
      if (!result?.ok) {
        setValue(previous);
        setError(result?.error || "Could not save.");
        return;
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 1600);
    });
  };

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {/* The dot, not a coloured control: a select tinted five different ways
          down a list of leads reads as five different controls. The dot says
          where the lead is, the select still looks like a select. */}
      <Select value={value} onValueChange={change} disabled={pending}>
        <SelectTrigger size="sm" className="w-[9.5rem]">
          <span className="flex items-center gap-2">
            <StatusDot status={value} />
            <SelectValue />
          </span>
        </SelectTrigger>
        <SelectContent>
          {ENQUIRY_STATUSES.map((option) => (
            <SelectItem key={option} value={option}>
              <span className="flex items-center gap-2">
                <StatusDot status={option} />
                {statusToken(option).label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {pending ? (
        <Loader2 className="size-3.5 animate-spin text-muted-foreground" aria-hidden="true" />
      ) : saved ? (
        <Check className="size-3.5 text-emerald-600" aria-hidden="true" />
      ) : null}

      {error ? (
        <span role="alert" className="text-xs text-destructive">
          {error}
        </span>
      ) : null}
    </span>
  );
}
