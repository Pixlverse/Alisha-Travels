"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

/**
 * Edit and Delete on a table row.
 *
 * Both actions existed before this component and neither was findable. Editing
 * meant knowing that the first column was a link; deleting meant opening the
 * record, scrolling past a long form and finding a ghost button at the bottom.
 * An editor looking at a list could reasonably conclude the dashboard was
 * read-only — which is exactly what happened.
 *
 * DELETE ALWAYS CONFIRMS, and the dialog names the record rather than saying
 * "this item", because on a table of twenty rows the wrong row is the whole
 * risk. It also points at the softer option: nearly everything here has a
 * Draft status, which takes a page off the site without destroying it.
 *
 * Presentational only — `onDelete` is supplied by a thin wrapper that knows
 * which Server Action to call, so this file stays unaware of the collection.
 */
export default function RowActions({
  editHref,
  label,
  name,
  onDelete,
  note,
  canDelete = true,
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const remove = () => {
    setError("");
    startTransition(async () => {
      const result = await onDelete();
      if (!result?.ok) {
        setError(result?.error || "Could not delete.");
        return;
      }
      router.refresh();
    });
  };

  return (
    <div className="flex items-center justify-end gap-1">
      {/* The message lives beside the row, not in a toast: a refused delete is
          usually "this still has departures on it", which is only useful if you
          can see which row it came from. */}
      {error ? (
        <span role="alert" className="mr-2 max-w-[18rem] text-xs text-destructive">
          {error}
        </span>
      ) : null}

      {editHref ? (
        <Button asChild variant="ghost" size="sm">
          <Link href={editHref}>
            <Pencil className="size-3.5" aria-hidden="true" />
            Edit
          </Link>
        </Button>
      ) : null}

      {canDelete ? (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              disabled={pending}
            >
              {pending ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Trash2 className="size-4" aria-hidden="true" />
              )}
              <span className="sr-only">Delete {name}</span>
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete {name}?</AlertDialogTitle>
              <AlertDialogDescription>
                {note ||
                  `This removes the ${label.toLowerCase()} permanently and it stops existing on the public site immediately. If you only want to hide it, set its status to Draft instead.`}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep it</AlertDialogCancel>
              <AlertDialogAction
                onClick={remove}
                className="bg-destructive text-white hover:bg-destructive/90"
              >
                Delete permanently
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : null}
    </div>
  );
}
