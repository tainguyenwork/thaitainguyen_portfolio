"use client";

import { cn } from "@/lib/utils";
import {
  projectFilters,
  type ProjectCategory,
} from "@/data/projects";

type ProjectFilterProps = {
  active: ProjectCategory;
  onChange: (category: ProjectCategory) => void;
};

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-3"
      role="tablist"
      aria-label="Filter projects"
    >
      {projectFilters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          role="tab"
          aria-selected={active === filter.value}
          onClick={() => onChange(filter.value)}
          className={cn(
            "border px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-300",
            active === filter.value
              ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
              : "border-neutral-300 bg-transparent text-foreground hover:border-black dark:border-neutral-700 dark:hover:border-white",
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
