"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ImageZoom } from "@/components/motion/image-zoom";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <ImageZoom
          src={project.coverImage}
          alt={project.title}
          aspectRatio="3/4"
          className="mb-6"
        />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.subtitle}
            </p>
            <h3 className="font-serif text-xl leading-snug md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
