"use client";

import { Plus } from 'lucide-react';

interface TagProps {
  text: string;
  className?: string;
}

export function Tag({ text, className }: TagProps) {
  return (
    <div className={`inline-flex items-center gap-1 px-3 py-1 bg-foreground/7 backdrop-blur-2xl w-fit ${className}`}>
      <Plus className="size-4" />
      <span className="text-xs font-semibold uppercase text-white">
        {text}
      </span>
    </div>
  );
}
