"use client";

import ResourceForm from "./ResourceForm";
import { deleteResource, saveResource } from "@/app/admin/[resource]/actions";

/**
 * Binds the generic form to the generic Server Actions.
 *
 * Server Actions cannot be handed to a Client Component as bare props from a
 * dynamic route without this indirection, and keeping the binding in one place
 * means the form itself stays unaware of which resource it is editing beyond
 * the key it was given.
 */
export default function ResourceFormShell({ resourceKey, ...props }) {
  return (
    <ResourceForm
      resourceKey={resourceKey}
      onSave={(id, values) => saveResource(resourceKey, id, values)}
      onDelete={(id) => deleteResource(resourceKey, id)}
      {...props}
    />
  );
}
