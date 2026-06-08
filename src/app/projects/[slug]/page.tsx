import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { FadeUp } from "@/components/motion/fade-up";
import { ImageZoom } from "@/components/motion/image-zoom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { projects, getProjectBySlug } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

/* ---------------- TYPES ---------------- */

type Props = {
  params: {
    slug: string;
  };
};

/* ---------------- METADATA ---------------- */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${params.slug}`,
    image: project.coverImage,
  });
}

/* ---------------- STATIC PARAMS ---------------- */

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

/* ---------------- PAGE ---------------- */

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <article className="pb-24">
      {/* BACK BUTTON */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              All Projects
            </Link>
          </Button>
        </div>
      </section>

      {/* HEADER */}
      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {project.subtitle}
            </p>

            <h1 className="mt-2 font-serif text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ImageZoom
            src={project.heroImage}
            alt={project.title}
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* OBJECTIVES */}
      {project.objectives && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-4xl">
                Objectives
              </h2>

              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {project.objectives.map((obj, i) => (
                  <li
                    key={obj}
                    className="flex gap-4 border-l pl-6"
                  >
                    <span className="text-sm text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed">{obj}</p>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </section>
      )}

      {/* PROCESS */}
      {project.process && (
        <section className="border-y py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-4xl">
                Process
              </h2>

              <ol className="mt-10 flex flex-wrap gap-3">
                {project.process.map((step, i) => (
                  <li
                    key={step}
                    className="border px-4 py-2 text-xs uppercase tracking-widest"
                  >
                    {String(i + 1).padStart(2, "0")} {step}
                  </li>
                ))}
              </ol>
            </FadeUp>

            {/* SOFTWARE */}
            {project.software && (
              <div className="mt-10">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Software
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.software.map((sw) => (
                    <Badge key={sw} variant="outline">
                      {sw}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* GALLERY */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl">
              Gallery
            </h2>
          </FadeUp>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {project.gallery.map((img) => (
              <figure key={img.src}>
                <ImageZoom
                  src={img.src}
                  alt={img.alt}
                  aspectRatio="4/5"
                />

                {img.caption && (
                  <figcaption className="mt-3 text-xs text-muted-foreground">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-16 text-center">
        <Button asChild variant="outline">
          <Link href="/projects">View More Projects</Link>
        </Button>
      </section>
    </article>
  );
}
