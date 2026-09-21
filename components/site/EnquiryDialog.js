"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import Button from "./Button";
import { cn } from "@/lib/utils";

/**
 * "Enquire now", anywhere on the site.
 *
 * Opens the full enquiry form in place rather than sending the visitor to
 * /contact/ and making them re-explain which package they were reading. The
 * form is pre-scoped to whatever page opened it, and the same
 * write-to-MongoDB-first flow applies.
 *
 * Built on a native <dialog>, so focus trapping, Escape and the backdrop come
 * from the browser rather than from hand-rolled key handling.
 */
export default function EnquiryDialog({
  label = "Enquire now",
  variant = "primary",
  size = "lg",
  className,
  destinations = [],
  services = [],
  packageTitle = "",
  packageSlug = "",
  destinationSlug = "",
  source = "",
  sourceLabel = "",
  title = "Tell us where you want to go.",
  lead = "Fill in as much or as little as you know - dates and budget can be approximate.",
  // Seeds the form's message box. Read fresh on every open, because the form
  // is mounted only while the dialog is open (see below) — a form rendered
  // once at page load would have frozen the first value it ever saw.
  initialMessage = "",
  // Optional replacement for the default pill trigger, called with { open }.
  // The conversion block renders its three routes as cards rather than
  // buttons, and one of those cards has to open this dialog.
  renderTrigger,
}) {
  const dialogRef = useRef(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const onClose = () => setOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  // The page behind a modal must not scroll.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /*
    Opening is a state change, and an effect does the showModal(). The obvious
    version — setOpen(true) and dialogRef.current.showModal() in the same
    handler — reads the ref inside a callback that is now handed to
    renderTrigger DURING render, which react-hooks/refs correctly rejects: a
    function passed down at render time may be called at render time, and a ref
    read then is not guaranteed to see the mounted node. Driving it off state
    keeps every ref access inside an effect or an event handler.
  */
  const openDialog = useCallback(() => setOpen(true), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      {renderTrigger ? (
        renderTrigger({ open: openDialog })
      ) : (
        <Button onClick={openDialog} variant={variant} size={size} className={className}>
          {label}
        </Button>
      )}

      <dialog
        ref={dialogRef}
        aria-label="Send an enquiry"
        /*
          m-auto is what centres this, and its absence is why the dialog opened
          hard against the top-left corner. A modal <dialog> is centred by the
          UA stylesheet's `margin: auto` — and Tailwind's preflight resets
          `margin: 0` on every element, which silently cancels it. Nothing in
          the JS was wrong.
        */
        className="m-auto w-[min(42rem,calc(100vw-1.5rem))] rounded-3xl bg-transparent p-0 backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {/*
          A flex column with ONE scrolling child, rather than one box that
          scrolls whole. Before this the heading, the fields and the Send button
          all scrolled together inside a max-h-[85vh] box, so on a laptop the
          button sat somewhere below the fold of the dialog itself and the form
          looked like it had no way to submit. Now the title stays put, the
          fields scroll, and the form's action bar sticks to the bottom edge —
          see stickyActions in EnquiryForm.
        */}
        <div className="relative flex max-h-[85vh] flex-col rounded-3xl bg-white">
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/80 text-ink-muted transition-colors hover:bg-mist-100 hover:text-ink"
          >
            <span className="sr-only">Close</span>
            <X className="size-5" aria-hidden="true" />
          </button>

          <div className="shrink-0 px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
            <h2 className={cn("pr-10 text-2xl leading-tight font-semibold text-ink")}>{title}</h2>
            <p className="mt-2 pr-10 text-[0.9375rem] leading-relaxed text-ink-soft">{lead}</p>
          </div>

          {/* No bottom padding: the form's sticky action bar supplies it. With
              padding here the bar could not reach the container's bottom edge,
              and a strip of scrolling fields showed underneath it. The success
              screen pads itself for the same reason — see EnquiryForm. */}
          <div className="min-h-0 flex-1 overflow-y-auto px-6 sm:px-8">
            {/* Mounted only while open, so every opening starts from a clean
                form rather than showing the previous submission's success
                screen. */}
            {open ? (
              <EnquiryForm
                destinations={destinations}
                services={services}
                packageTitle={packageTitle}
                packageSlug={packageSlug}
                destinationSlug={destinationSlug}
                source={source}
                sourceLabel={sourceLabel}
                initialMessage={initialMessage}
                stickyActions
              />
            ) : null}
          </div>
        </div>
      </dialog>
    </>
  );
}
