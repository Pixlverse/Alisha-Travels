"use client";

import { useState, useTransition } from "react";
import { KeyRound, Loader2, Trash2 } from "lucide-react";
import { deleteUser, resetUserPassword, setUserActive, setUserRole } from "./actions";
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
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import StatusBadge, { StatusDot } from "@/components/admin/StatusBadge";

export default function UserRow({ user, isSelf }) {
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const run = (action) =>
    startTransition(async () => {
      setError("");
      const result = await action();
      if (!result?.ok) setError(result?.error || "Could not save.");
    });

  return (
    <TableRow>
      <TableCell>
        <span className="block font-semibold text-ink">
          {user.name}
          {isSelf ? <span className="ml-2 text-xs font-normal text-muted-foreground">(you)</span> : null}
        </span>
        <span className="block text-xs text-muted-foreground">{user.email}</span>
        {error ? (
          <span role="alert" className="mt-1 block text-xs text-destructive">
            {error}
          </span>
        ) : null}
      </TableCell>

      <TableCell>
        <Select
          value={user.role}
          onValueChange={(role) => run(() => setUserRole(user._id, role))}
          disabled={isSelf || pending}
        >
          <SelectTrigger size="sm" className="w-[8rem]">
            <span className="flex items-center gap-2">
              <StatusDot status={user.role} />
              <SelectValue />
            </span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">
              <span className="flex items-center gap-2">
                <StatusDot status="admin" />
                Admin
              </span>
            </SelectItem>
            <SelectItem value="staff">
              <span className="flex items-center gap-2">
                <StatusDot status="staff" />
                Staff
              </span>
            </SelectItem>
          </SelectContent>
        </Select>
      </TableCell>

      <TableCell>
        <span className="flex items-center gap-2">
          <Switch
            checked={user.active}
            onCheckedChange={(next) => run(() => setUserActive(user._id, next))}
            disabled={isSelf || pending}
            aria-label={`${user.active ? "Deactivate" : "Activate"} ${user.name}`}
          />
          {/* A badge, matching every other state in the dashboard: green means
              the same thing on this row as it does on a service. */}
          <StatusBadge status={user.active ? "active" : "inactive"} />
          {pending ? <Loader2 className="size-3.5 animate-spin text-muted-foreground" /> : null}
        </span>
      </TableCell>

      <TableCell className="text-xs text-muted-foreground">
        {user.lastLoginAt
          ? new Date(user.lastLoginAt).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "Never"}
      </TableCell>

      <TableCell className="text-right">
        <span className="inline-flex gap-1">
          <ResetPasswordDialog user={user} onDone={setError} />
          {/* Was a native confirm(). The rest of the dashboard asks with an
              AlertDialog that names the record and offers the safer option, and
              a browser confirm in one corner of it read as an unfinished
              screen — as well as being the one dialog an editor can suppress
              by ticking "prevent this page creating more dialogues". */}
          {!isSelf ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  disabled={pending}
                >
                  <span className="sr-only">Delete {user.name}</span>
                  <Trash2 className="size-4" aria-hidden="true" />
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete {user.name}&rsquo;s account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    They lose access to the dashboard immediately and this cannot be undone. To
                    stop them signing in without removing the account, switch them to Inactive
                    instead.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep the account</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => run(() => deleteUser(user._id))}
                    className="bg-destructive text-white hover:bg-destructive/90"
                  >
                    Delete permanently
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : null}
        </span>
      </TableCell>
    </TableRow>
  );
}

function ResetPasswordDialog({ user, onDone }) {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const submit = () =>
    startTransition(async () => {
      const result = await resetUserPassword(user._id, password);
      if (!result?.ok) {
        setMessage(result?.error || "Could not save.");
        return;
      }
      setMessage("");
      setPassword("");
      setOpen(false);
      onDone?.("");
    });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <span className="sr-only">Reset password for {user.name}</span>
          <KeyRound className="size-4" aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reset password</DialogTitle>
          <DialogDescription>
            Sets a new password for {user.name}. Tell them out of band - it is not e-mailed, and it
            cannot be read back afterwards.
          </DialogDescription>
        </DialogHeader>

        <Input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 10 characters"
          autoComplete="new-password"
        />
        {message ? (
          <p role="alert" className="text-sm text-destructive">
            {message}
          </p>
        ) : null}

        <DialogFooter>
          <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={submit} disabled={pending || password.length < 10}>
            {pending ? "Saving…" : "Set password"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
