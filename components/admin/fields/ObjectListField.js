"use client";

import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StringListField from "./StringListField";

/**
 * Repeating groups of fields: itinerary days, FAQs, attractions, office phone
 * numbers. Each row is a <details> so a twelve-day itinerary stays navigable
 * instead of becoming a wall of inputs.
 *
 * Sub-fields may themselves be lists — `stringList` for bullets, `objectList`
 * for a block's cards — which is what lets a service page's body be edited as
 * blocks of blocks. The recursion is bounded by the field config, and
 * coerceValue() in lib/admin/crud.js already recurses the same way on save.
 */
export default function ObjectListField({ id, field, value = [], onChange, help }) {
  const items = Array.isArray(value) ? value : [];

  const set = (index, name, next) => {
    const copy = [...items];
    copy[index] = { ...copy[index], [name]: next };
    onChange(copy);
  };
  const remove = (index) => onChange(items.filter((_, i) => i !== index));
  const move = (index, delta) => {
    const target = index + delta;
    if (target < 0 || target >= items.length) return;
    const copy = [...items];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    onChange(copy);
  };

  const blank = () =>
    Object.fromEntries(
      field.of.map((sub) => {
        if (sub.type === "checkbox") return [sub.name, false];
        if (sub.type === "stringList" || sub.type === "objectList") return [sub.name, []];
        if (sub.type === "select") return [sub.name, sub.options?.[0]?.value ?? ""];
        return [sub.name, ""];
      })
    );

  const summaryOf = (item, index) => {
    const first = field.of.find((sub) => sub.type === "text" || sub.type === "number");
    const text = first ? item?.[first.name] : "";
    return text ? String(text) : `${field.itemLabel || "Item"} ${index + 1}`;
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <details
          key={index}
          className="group rounded-lg border border-line bg-white"
          open={items.length <= 2}
        >
          <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2.5 [&::-webkit-details-marker]:hidden">
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-ink">
              {summaryOf(item, index)}
            </span>
            <span className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  move(index, -1);
                }}
                disabled={index === 0}
                className="px-1 text-xs text-muted-foreground disabled:opacity-30"
                aria-label="Move up"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  move(index, 1);
                }}
                disabled={index === items.length - 1}
                className="px-1 text-xs text-muted-foreground disabled:opacity-30"
                aria-label="Move down"
              >
                ▼
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  remove(index);
                }}
                className="px-1 text-muted-foreground hover:text-destructive"
                aria-label="Remove"
              >
                <Trash2 className="size-4" aria-hidden="true" />
              </button>
            </span>
          </summary>

          <div className="grid gap-3 border-t border-line p-3 sm:grid-cols-2">
            {field.of.map((sub) => (
              <div
                key={sub.name}
                className={
                  ["textarea", "stringList", "objectList"].includes(sub.type)
                    ? "sm:col-span-2 space-y-1.5"
                    : "space-y-1.5"
                }
              >
                <Label htmlFor={`${id}-${index}-${sub.name}`} className="text-xs">
                  {sub.label}
                  {sub.required ? <span className="text-destructive"> *</span> : null}
                </Label>

                {sub.type === "textarea" ? (
                  <Textarea
                    id={`${id}-${index}-${sub.name}`}
                    rows={sub.rows || 3}
                    value={item?.[sub.name] ?? ""}
                    onChange={(event) => set(index, sub.name, event.target.value)}
                  />
                ) : sub.type === "select" ? (
                  <Select
                    value={item?.[sub.name] ? String(item[sub.name]) : ""}
                    onValueChange={(next) => set(index, sub.name, next)}
                  >
                    <SelectTrigger id={`${id}-${index}-${sub.name}`} className="w-full">
                      <SelectValue placeholder="Choose…" />
                    </SelectTrigger>
                    <SelectContent>
                      {sub.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : sub.type === "stringList" ? (
                  <StringListField
                    id={`${id}-${index}-${sub.name}`}
                    value={item?.[sub.name] ?? []}
                    onChange={(next) => set(index, sub.name, next)}
                  />
                ) : sub.type === "objectList" ? (
                  <ObjectListField
                    id={`${id}-${index}-${sub.name}`}
                    field={sub}
                    value={item?.[sub.name] ?? []}
                    onChange={(next) => set(index, sub.name, next)}
                  />
                ) : sub.type === "checkbox" ? (
                  <span className="flex h-9 items-center">
                    <Checkbox
                      id={`${id}-${index}-${sub.name}`}
                      checked={Boolean(item?.[sub.name])}
                      onCheckedChange={(checked) => set(index, sub.name, checked === true)}
                    />
                  </span>
                ) : (
                  <Input
                    id={`${id}-${index}-${sub.name}`}
                    type={sub.type === "number" ? "number" : "text"}
                    value={item?.[sub.name] ?? ""}
                    onChange={(event) => set(index, sub.name, event.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </details>
      ))}

      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, blank()])}>
        <Plus className="size-4" aria-hidden="true" />
        Add {(field.itemLabel || "item").toLowerCase()}
      </Button>

      {help ? <p className="text-xs text-muted-foreground">{help}</p> : null}
    </div>
  );
}
