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

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return createMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
    image: project.coverImage,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const hasReflectionSection = project.caseStudy?.some(
    (s) => s.id === "reflection",
  );
  const legacyReflection =
    project.reflection && !hasReflectionSection ? project.reflection : null;

  return (
    <article className="pb-24 md:pb-32">
      <section className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Button asChild variant="ghost" size="sm" className="-ml-2">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Projects
            </Link>
          </Button>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {project.subtitle}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </FadeUp>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8" id="hero-image">
          <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Hero Image
          </p>
          <ImageZoom
            src={project.heroImage}
            alt={project.title}
            aspectRatio="16/9"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {project.objectives && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-4xl">Objectives</h2>
              <ul className="mt-10 grid gap-6 md:grid-cols-2">
                {project.objectives.map((obj, i) => (
                  <li
                    key={obj}
                    className="flex gap-4 border-l border-neutral-300 pl-6 dark:border-neutral-700"
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

      {project.process && (
        <section className="border-y border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-black md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-4xl">Process</h2>
              <ol className="mt-12 flex flex-wrap gap-4">
                {project.process.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 border border-neutral-200 px-5 py-3 dark:border-neutral-800"
                  >
                    <span className="text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs uppercase tracking-[0.15em]">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </FadeUp>
            {project.software && (
              <div className="mt-12">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Software Used
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl">Gallery</h2>
          </FadeUp>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {project.gallery.map((image, i) => (
              <FadeUp key={image.src} delay={i * 0.08}>
                <figure>
                  <ImageZoom
                    src={image.src}
                    alt={image.alt}
                    aspectRatio="4/5"
                  />
                  {image.caption && (
                    <figcaption className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {project.metrics && (
        <section className="border-y border-neutral-200 bg-white py-16 dark:border-neutral-800 dark:bg-black md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp>
              <h2 className="font-serif text-3xl md:text-4xl">
                Project Metrics
              </h2>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-serif text-4xl md:text-5xl">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {(project.lessons || legacyReflection) && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {project.lessons && (
                <FadeUp>
                  <h2 className="font-serif text-3xl">Lessons Learned</h2>
                  <ul className="mt-8 space-y-6">
                    {project.lessons.map((lesson) => (
                      <li
                        key={lesson}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              )}
              {legacyReflection && (
                <FadeUp delay={0.1}>
                  <h2 className="font-serif text-3xl">Reflection</h2>
                  <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                    {legacyReflection}
                  </p>
                </FadeUp>
              )}
            </div>
          </div>
        </section>
      )}

      <Separator className="mx-auto max-w-7xl bg-neutral-200 dark:bg-neutral-800" />

      <section className="py-16 text-center">
        <FadeUp>
          <Button asChild variant="outline">
            <Link href="/projects">View More Projects</Link>
          </Button>
        </FadeUp>
      </section>
    </article>
  );
}
