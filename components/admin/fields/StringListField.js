"use client";

import { GripVertical, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * A list of plain strings — inclusions, exclusions, highlights, bullet points.
 * Order matters and is the order they render on the site, so rows can be moved.
 */
export default function StringListField({ id, value = [], onChange, help }) {
  const items = Array.isArray(value) ? value : [];

  const set = (index, next) => {
    const copy = [...items];
    copy[index] = next;
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

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="flex flex-col">
            <button
              type="button"
              onClick={() => move(index, -1)}
              disabled={index === 0}
              className="px-1 text-xs text-muted-foreground disabled:opacity-30"
              aria-label={`Move item ${index + 1} up`}
            >
              ▲
            </button>
            <button
              type="button"
              onClick={() => move(index, 1)}
              disabled={index === items.length - 1}
              className="px-1 text-xs text-muted-foreground disabled:opacity-30"
              aria-label={`Move item ${index + 1} down`}
            >
              ▼
            </button>
          </span>
          <Input
            id={index === 0 ? id : undefined}
            value={item}
            onChange={(event) => set(index, event.target.value)}
            className="flex-1"
          />
          <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
            <span className="sr-only">Remove item {index + 1}</span>
            <Trash2 className="size-4" aria-hidden="true" />
          </Button>
        </div>
      ))}

      <Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, ""])}>
        <Plus className="size-4" aria-hidden="true" />
        Add item
      </Button>

      {help ? <p className="text-xs text-muted-foreground">{help}</p> : null}
    </div>
  );
}
