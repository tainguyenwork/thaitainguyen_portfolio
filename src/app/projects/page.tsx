"use client";

import { useMemo, useState } from "react";
import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilter } from "@/components/projects/project-filter";
import { projects, type ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-neutral-200 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              label="Portfolio"
              title="Projects"
              description="Detailed case studies in technical apparel, conceptual womenswear, and garment engineering — prepared for industry applications and academic portfolio review."
            />
          </FadeUp>
          <FadeUp delay={0.15} className="mt-12">
            <ProjectFilter active={filter} onChange={setFilter} />
          </FadeUp>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 lg:gap-20">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">
              No projects in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
