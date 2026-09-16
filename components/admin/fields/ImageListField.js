"use client";

import ImageField from "./ImageField";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

/** An ordered set of Cloudinary assets — a destination or package gallery. */
export default function ImageListField({ id, value = [], onChange, folder, help }) {
  const items = Array.isArray(value) ? value : [];

  const update = (index, next) => {
    const copy = [...items];
    if (next === null) copy.splice(index, 1);
    else copy[index] = next;
    onChange(copy);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={`${item?.publicId || item?.url || "image"}-${index}`} className="rounded-lg border border-line p-3">
          <ImageField
            id={`${id}-${index}`}
            value={item}
            folder={folder}
            onChange={(next) => update(index, next)}
          />
        </div>
      ))}

      <div className="rounded-lg border border-dashed border-line p-3">
        <ImageField
          id={`${id}-new`}
          value={null}
          folder={folder}
          onChange={(next) => next && onChange([...items, next])}
          help="Pick a file to add it to the gallery."
        />
      </div>

      {help ? <p className="text-xs text-muted-foreground">{help}</p> : null}
    </div>
  );
}
