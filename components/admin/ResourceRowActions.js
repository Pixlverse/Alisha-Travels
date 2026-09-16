"use client";

import RowActions from "./RowActions";
import { deleteResource } from "@/app/admin/[resource]/actions";

/**
 * RowActions wired to the generic content actions.
 *
 * The indirection is the same one ResourceFormShell needs: a Server Action
 * from a dynamic route segment is imported by a Client Component here rather
 * than handed down as a prop from the server page.
 */
export default function ResourceRowActions({ resourceKey, id, label, name, note }) {
  return (
    <RowActions
      editHref={`/admin/${resourceKey}/${id}/`}
      label={label}
      name={name}
      note={note}
      onDelete={() => deleteResource(resourceKey, id)}
    />
  );
}
