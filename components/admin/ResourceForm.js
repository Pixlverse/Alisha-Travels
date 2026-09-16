"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AlertCircle, ExternalLink, Loader2, Save, Trash2 } from "lucide-react";

import ImageField from "./fields/ImageField";
import ImageListField from "./fields/ImageListField";
import ObjectListField from "./fields/ObjectListField";
import { StatusDot } from "./StatusBadge";
import StringListField from "./fields/StringListField";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { slugify } from "@/lib/slugify";
import { cn } from "@/lib/utils";

/**
 * One form for every content collection.
 *
 * The shape comes entirely from the registry in lib/admin/resources.js, so
 * adding a field to a schema is a one-line change there rather than an edit
 * across a list page, a create page and an edit page.
 *
 * Values are held in a single state object and posted through a Server Action.
 * Nothing is trusted from here: the action re-checks the session and the role,
 * and lib/admin/crud.js coerces every value back to the type the schema wants.
 */
export default function ResourceForm({
  resourceKey,
  label,
  sections,
  fields,
  initial = {},
  refOptions = {},
  previewPath,
  onSave,
  onDelete,
  canDelete = true,
}) {
  const router = useRouter();
  const [values, setValues] = useState(() => normalise(fields, initial));
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [deleting, startDelete] = useTransition();

  const isNew = !initial?._id;

  const set = (name, value) => setValues((current) => ({ ...current, [name]: value }));

  const grouped = useMemo(() => {
    const map = new Map(sections.map((section) => [section, []]));
    for (const field of fields) {
      const section = field.section || "Basics";
      if (!map.has(section)) map.set(section, []);
      map.get(section).push(field);
    }
    return [...map.entries()].filter(([, list]) => list.length);
  }, [fields, sections]);

  const submit = (event) => {
    event.preventDefault();
    setError("");

    startTransition(async () => {
      const result = await onSave(initial?._id || null, values);
      if (!result?.ok) {
        setError(result?.error || "Could not save.");
        // Scroll the message into view — on a long form it is otherwise
        // announced at the bottom of a page the editor is not looking at.
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      router.push(`/admin/${resourceKey}/`);
      router.refresh();
    });
  };

  const remove = () => {
    startDelete(async () => {
      const result = await onDelete(initial._id);
      if (!result?.ok) {
        setError(result?.error || "Could not delete.");
        return;
      }
      router.push(`/admin/${resourceKey}/`);
      router.refresh();
    });
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      {error ? (
        <p
          role="alert"
          className="flex gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-ink"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
          {error}
        </p>
      ) : null}

      {grouped.map(([section, list]) => (
        <fieldset key={section} className="rounded-xl border border-line bg-white p-5">
          <legend className="px-2 text-xs font-bold tracking-wide text-muted-foreground uppercase">
            {section}
          </legend>

          <div className="mt-3 grid gap-5 sm:grid-cols-2">
            {list.map((field) => (
              <div
                key={field.name}
                className={cn(
                  "space-y-1.5",
                  ["textarea", "stringList", "objectList", "imageList", "image"].includes(field.type) &&
                    "sm:col-span-2"
                )}
              >
                <Label htmlFor={`field-${field.name}`}>
                  {field.label}
                  {field.required ? <span className="text-destructive"> *</span> : null}
                </Label>

                <FieldControl
                  field={field}
                  value={values[field.name]}
                  onChange={(value) => set(field.name, value)}
                  values={values}
                  refOptions={refOptions}
                />

                {field.help ? (
                  <p className="text-xs leading-relaxed text-muted-foreground">{field.help}</p>
                ) : null}
              </div>
            ))}
          </div>
        </fieldset>
      ))}

      {/* Actions */}
      <div className="sticky bottom-0 flex flex-wrap items-center gap-3 border-t border-line bg-mist-50/95 py-4 backdrop-blur">
        <Button type="submit" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Saving…
            </>
          ) : (
            <>
              <Save className="size-4" aria-hidden="true" />
              {isNew ? `Create ${label.toLowerCase()}` : "Save changes"}
            </>
          )}
        </Button>

        <Button asChild variant="ghost">
          <Link href={`/admin/${resourceKey}/`}>Cancel</Link>
        </Button>

        {!isNew && previewPath ? (
          <Button asChild variant="outline" size="sm">
            <a href={previewPath} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" aria-hidden="true" />
              View on the site
            </a>
          </Button>
        ) : null}

        {!isNew && canDelete ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="button" variant="ghost" size="sm" className="ml-auto text-destructive">
                <Trash2 className="size-4" aria-hidden="true" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this {label.toLowerCase()}?</AlertDialogTitle>
                <AlertDialogDescription>
                  This cannot be undone, and the page will stop existing on the public site
                  immediately. If you only want to hide it, set its status to Draft instead.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep it</AlertDialogCancel>
                <AlertDialogAction
                  onClick={remove}
                  disabled={deleting}
                  className="bg-destructive text-white hover:bg-destructive/90"
                >
                  {deleting ? "Deleting…" : "Delete permanently"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : null}
      </div>
    </form>
  );
}

function FieldControl({ field, value, onChange, values, refOptions }) {
  const id = `field-${field.name}`;

  switch (field.type) {
    case "textarea":
      return (
        <Textarea
          id={id}
          rows={field.rows || 4}
          maxLength={field.maxLength}
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          required={field.required}
        />
      );

    case "number":
      return (
        <Input
          id={id}
          type="number"
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          required={field.required}
        />
      );

    case "checkbox":
      return (
        <span className="flex h-9 items-center">
          <Checkbox
            id={id}
            checked={Boolean(value)}
            onCheckedChange={(checked) => onChange(checked === true)}
          />
        </span>
      );

    case "date":
      return (
        <Input
          id={id}
          type="date"
          value={value ? String(value).slice(0, 10) : ""}
          onChange={(event) => onChange(event.target.value)}
          required={field.required}
        />
      );

    case "select": {
      // The status field carries the dashboard's colour vocabulary here too —
      // this is where the state is actually set, so it is the one select worth
      // marking. Every other select is a plain list of choices.
      const showDot = field.name === "status";

      return (
        <Select value={value ? String(value) : ""} onValueChange={onChange}>
          <SelectTrigger id={id} className="w-full">
            <span className="flex items-center gap-2">
              {showDot && value ? <StatusDot status={value} /> : null}
              <SelectValue placeholder="Choose…" />
            </span>
          </SelectTrigger>
          <SelectContent>
            {field.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <span className="flex items-center gap-2">
                  {showDot ? <StatusDot status={option.value} /> : null}
                  {option.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    case "ref": {
      const options = refOptions[field.optionsFrom] || [];
      return (
        <Select value={value ? String(value) : ""} onValueChange={onChange}>
          <SelectTrigger id={id} className="w-full">
            <SelectValue placeholder="Choose…" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
                {option.status === "draft" ? " — draft" : ""}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    case "slug":
      return (
        <div className="flex gap-2">
          <Input
            id={id}
            value={value ?? ""}
            onChange={(event) => onChange(event.target.value)}
            required={field.required}
            className="font-mono text-sm"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onChange(slugify(values[field.from] || ""))}
            disabled={!values[field.from]}
          >
            From {field.from}
          </Button>
        </div>
      );

    case "image":
      return <ImageField id={id} value={value} onChange={onChange} folder={field.folder} />;

    case "imageList":
      return <ImageListField id={id} value={value} onChange={onChange} folder={field.folder} />;

    case "stringList":
      return <StringListField id={id} value={value} onChange={onChange} />;

    case "objectList":
      return <ObjectListField id={id} field={field} value={value} onChange={onChange} />;

    default:
      return (
        <Input
          id={id}
          value={value ?? ""}
          maxLength={field.maxLength}
          onChange={(event) => onChange(event.target.value)}
          required={field.required}
        />
      );
  }
}

/** Fill in sensible empties so controls are never uncontrolled on first render. */
function normalise(fields, initial) {
  const values = {};
  for (const field of fields) {
    const raw = initial?.[field.name];

    switch (field.type) {
      case "stringList":
      case "imageList":
      case "objectList":
        values[field.name] = Array.isArray(raw) ? raw : [];
        break;
      case "checkbox":
        values[field.name] = Boolean(raw);
        break;
      case "ref":
        values[field.name] = raw?._id ? String(raw._id) : raw ? String(raw) : "";
        break;
      case "image":
        values[field.name] = raw || null;
        break;
      case "date":
        values[field.name] = raw ? String(raw).slice(0, 10) : "";
        break;
      case "number":
        values[field.name] = raw ?? "";
        break;
      default:
        values[field.name] = raw ?? "";
    }
  }
  return values;
}
