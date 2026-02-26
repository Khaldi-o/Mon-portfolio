"use client";

import * as React from "react";
import type { ProjectMeta } from "@/types/content";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type ProjectsGridProps = {
  projects: ProjectMeta[];
  basePath: string;
  ctaLabel: string;
  searchLabel: string;
  sortTitle: string;
  sortLabels: {
    featured: string;
    recent: string;
    complexity: string;
  };
  emptyLabel: string;
};

type SortKey = "featured" | "recent" | "complexity";

export default function ProjectsGrid({
  projects,
  basePath,
  ctaLabel,
  searchLabel,
  sortTitle,
  sortLabels,
  emptyLabel
}: ProjectsGridProps) {
  const [query, setQuery] = React.useState("");
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [sortKey, setSortKey] = React.useState<SortKey>("featured");

  const tags = React.useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => unique.add(tag));
    });
    return Array.from(unique).sort();
  }, [projects]);

  const filtered = React.useMemo(() => {
    const matches = projects.filter((project) => {
      const matchesQuery =
        query.trim().length === 0 ||
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.summary.toLowerCase().includes(query.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));
      return matchesQuery && matchesTags;
    });

    const sorted = [...matches].sort((a, b) => {
      if (sortKey === "featured") {
        return Number(b.featured) - Number(a.featured);
      }
      if (sortKey === "recent") {
        return b.date.localeCompare(a.date);
      }
      return b.stack.length - a.stack.length;
    });

    return sorted;
  }, [projects, query, selectedTags, sortKey]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-8">
      <div className="w-full">
        <label className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {searchLabel}
        </label>
        <div className="relative mt-2">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="SQL, Power BI, Dataiku..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={cn(
              "rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] transition",
              selectedTags.includes(tag)
                ? "border-transparent bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] text-[#05080d]"
                : "border-white/10 text-foreground/70 hover:border-white/30 hover:text-white"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              href={`${basePath}/${project.slug}`}
              highlight={project.featured}
              ctaLabel={ctaLabel}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-foreground/70">
          {emptyLabel}
        </div>
      )}
    </div>
  );
}
