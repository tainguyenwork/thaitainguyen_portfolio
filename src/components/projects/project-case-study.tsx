import { FadeUp } from "@/components/motion/fade-up";
import { ImageZoom } from "@/components/motion/image-zoom";
import {
  getSectionTitle,
  type ProjectCaseStudySection,
} from "@/data/project-sections";

type ProjectCaseStudyProps = {
  sections: ProjectCaseStudySection[];
};

export function ProjectCaseStudy({ sections }: ProjectCaseStudyProps) {
  if (sections.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[12rem_1fr] lg:gap-16 xl:grid-cols-[14rem_1fr]">
          <nav
            className="mb-12 lg:sticky lg:top-28 lg:mb-0 lg:self-start"
            aria-label="Case study sections"
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Contents
            </p>
            <ul className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {sections.map((section) => {
                const title = getSectionTitle(section);
                return (
                  <li key={section.id} className="shrink-0 lg:shrink">
                    <a
                      href={`#${section.id}`}
                      className="block whitespace-nowrap border border-transparent px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:border-neutral-300 hover:text-foreground lg:whitespace-normal lg:border-0 lg:px-0 lg:py-1.5 lg:text-[11px] lg:tracking-[0.15em] dark:hover:border-neutral-700"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-24 md:space-y-32">
            {sections.map((section, i) => (
              <CaseStudyBlock key={section.id} section={section} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyBlock({
  section,
  index,
}: {
  section: ProjectCaseStudySection;
  index: number;
}) {
  const title = getSectionTitle(section);
  const images = section.images ?? [];

  return (
    <FadeUp delay={index * 0.05}>
      <article id={section.id} className="scroll-mt-28">
        <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {section.content}
        </p>

        {images.length > 0 && (
          <div
            className={
              images.length === 1
                ? "mt-10"
                : "mt-10 grid gap-8 sm:grid-cols-2"
            }
          >
            {images.map((image) => (
              <figure key={image.src}>
                <ImageZoom
                  src={image.src}
                  alt={image.alt}
                  aspectRatio={images.length === 1 ? "16/10" : "4/3"}
                />
                {image.caption && (
                  <figcaption className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </article>
    </FadeUp>
  );
}
