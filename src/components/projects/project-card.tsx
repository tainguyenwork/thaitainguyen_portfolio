"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ImageZoom } from "@/components/motion/image-zoom";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

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
        {/* IMAGE */}
        <ImageZoom
          src={project.coverImage}
          alt={project.title}
          aspectRatio="4/5"
        />

        {/* CONTENT */}
        <div className="mt-4">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {project.subtitle}
          </p>

          <h3 className="mt-1 font-serif text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
