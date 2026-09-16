"use client";

import { useRouter } from "next/navigation";

import RowActions from "@/components/admin/RowActions";
import { deleteEnquiry } from "./actions";

/**
 * RowActions wired to the enquiry actions.
 *
 * `onDeleted` lets the detail page leave for the list once the record it is
 * showing has gone; on the list itself a refresh is enough.
 */
export default function EnquiryRowActions({ id, name, editHref = null, onDeleted }) {
  const router = useRouter();

  return (
    <RowActions
      editHref={editHref}
      label="enquiry"
      name={`${name}'s enquiry`}
      note="This deletes the enquiry and its notes permanently. If the lead simply did not convert, set its status to Lost instead — that keeps the record and the reporting."
      onDelete={async () => {
        const result = await deleteEnquiry(id);
        if (result?.ok && onDeleted) router.push("/admin/enquiries/");
        return result;
      }}
    />
  );
}
