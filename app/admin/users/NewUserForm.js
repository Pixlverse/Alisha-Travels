"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, Check, Loader2, UserPlus } from "lucide-react";
import { createUser } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewUserForm() {
  const [state, formAction] = useActionState(createUser, {});

  return (
    <form action={formAction} className="rounded-xl border border-line bg-white p-5">
      <h2 className="text-sm font-bold text-ink">Add a team account</h2>
      <p className="mt-1 text-xs text-muted-foreground">
        There is no public signup. Accounts only exist because an admin created them here.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-1.5">
          <Label htmlFor="new-name">Name</Label>
          <Input id="new-name" name="name" required autoComplete="off" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="new-email">Email</Label>
          <Input id="new-email" name="email" type="email" required autoComplete="off" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="new-password">Password</Label>
          <Input
            id="new-password"
            name="password"
            type="text"
            required
            minLength={10}
            autoComplete="new-password"
            placeholder="At least 10 characters"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="new-role">Role</Label>
          <select
            id="new-role"
            name="role"
            defaultValue="staff"
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
          >
            <option value="staff">Staff - enquiries only</option>
            <option value="admin">Admin - full access</option>
          </select>
        </div>
      </div>

      {state?.error ? (
        <p role="alert" className="mt-3 flex gap-2 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {state.error}
        </p>
      ) : null}
      {state?.success ? (
        <p className="mt-3 flex gap-2 text-sm text-emerald-600">
          <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {state.success}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="mt-4" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          Creating…
        </>
      ) : (
        <>
          <UserPlus className="size-4" aria-hidden="true" />
          Create account
        </>
      )}
    </Button>
  );
}
