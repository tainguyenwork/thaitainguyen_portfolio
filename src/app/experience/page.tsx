import type { Metadata } from "next";
import { FadeUp } from "@/components/motion/fade-up";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { SectionHeading } from "@/components/layout/section-heading";
import { experiences } from "@/data/experience";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Professional experience in technical garment development and Gerber AccuMark peer education.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-neutral-200 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              label="Career"
              title="Experience"
              description="Industry internship and leadership roles that bridge technical apparel development with collaborative learning."
            />
          </FadeUp>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <RevealOnScroll key={exp.id} direction={i % 2 === 0 ? "up" : "left"}>
                <article className="grid gap-8 border-b border-neutral-200 pb-24 last:border-0 dark:border-neutral-800 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {exp.period}
                    </p>
                    <h2 className="mt-4 font-serif text-3xl leading-snug">
                      {exp.company}
                    </h2>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.15em]">
                      {exp.position}
                    </p>
                    {exp.location && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div className="lg:col-span-8">
                    <ul className="space-y-4">
                      {exp.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-px w-8 shrink-0 bg-neutral-400 dark:bg-neutral-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
