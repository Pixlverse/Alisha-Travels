"use client";

import EnquiryDialog from "./EnquiryDialog";
import { PlaneGlyph, RouteBody, routeClass } from "./EnquiryRoute";

/**
 * The "Enquire now" route card.
 *
 * This exists because of the server/client boundary, not because the markup
 * needed its own file: EnquiryDialog takes a `renderTrigger` function, and a
 * function cannot be handed from a Server Component to a Client Component
 * ("Functions cannot be passed directly to Client Components"). EnquiryCta is
 * a Server Component — it loads the destination and service lists itself — so
 * the trigger has to be created on the client side of the line. Everything
 * here arrives as plain serialisable props.
 */
export default function EnquiryRouteCard({ dark = true, label = "Enquire now", detail, ...dialogProps }) {
  return (
    <EnquiryDialog
      {...dialogProps}
      renderTrigger={({ open }) => (
        <button type="button" onClick={open} className={routeClass(dark, true)}>
          <RouteBody
            dark={dark}
            icon={<PlaneGlyph className="size-5" />}
            iconClass={dark ? "bg-white text-brand-800" : "bg-brand-700 text-white"}
            label={label}
            detail={detail}
          />
        </button>
      )}
    />
  );
}
