import type { Metadata } from "next";
import { FadeUp } from "@/components/motion/fade-up";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { SectionHeading } from "@/components/layout/section-heading";
import { SkillCard } from "@/components/skills/skill-card";
import { aboutTimeline } from "@/data/timeline";
import { skillCategories } from "@/data/skills";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: `Learn about ${siteConfig.name}'s fashion design background, technical apparel expertise, and digital workflow.`,
  path: "/about",
});

const bioTopics = [
  {
    title: "Fashion Design Foundation",
    text: "Trained in fashion design, illustration, and collection development, with an interest in transforming concepts into visually compelling garments through research and creative exploration.",
  },
  {
    title: "Garment Construction & Pattern Making",
    text: "Passionate about understanding how fit, pattern engineering, and construction details contribute to the final quality and functionality of a garment.",
  },
  {
    title: "Product Development",
    text: "Interested in the relationship between design and execution, from concept development and material selection to garment construction and production preparation.",
  },
  {
    title: "Digital Fashion Workflow",
    text: "Experienced in using CLO3D and Gerber AccuMark to support pattern development, digital prototyping, and technical communication throughout the design process.",
  },
  {
    title: "Garment Construction & Pattern Making",
    text: "Passionate about understanding how fit, pattern engineering, and construction details contribute to the final quality and functionality of a garment.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-neutral-200 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
          <SectionHeading
  label="About"
  title={siteConfig.name}
/>  
          </FadeUp>
          <FadeUp delay={0.15} className="mt-16 max-w-5xl">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
  <p>
    Hi, I'm Thai Tai Nguyen, a Fashion Design student with a strong interest in
    technical apparel development, digital prototyping, and garment engineering.
    My work focuses on bridging creativity and functionality through the use of
    CLO3D, Gerber AccuMark, and contemporary design methodologies.
  </p>

  <p>
    I am particularly interested in translating concepts into production-ready
    garments, exploring the relationship between silhouette, materials,
    construction, and digital workflows. Through projects ranging from technical
    outerwear to conceptual womenswear, I aim to create designs that are both
    visually compelling and technically refined.
  </p>

  <p>
    Currently, I am expanding my expertise in fashion design, 3D garment
    visualization, pattern development, and apparel product development while
    pursuing opportunities to contribute to innovative and forward-thinking
    fashion teams.
  </p>
</div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading label="Biography" title="Design Philosophy" />
          </RevealOnScroll>
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-16">
            {bioTopics.map((topic, i) => (
              <RevealOnScroll key={topic.title} direction={i % 2 === 0 ? "up" : "left"}>
                <article>
                  <h3 className="font-serif text-2xl">{topic.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {topic.text}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-black md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <SectionHeading label="Journey" title="Timeline" />
          </FadeUp>
          <div className="relative mt-16">
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-neutral-200 md:left-1/2 md:block dark:bg-neutral-800"
              aria-hidden
            />
            <div className="space-y-16">
              {aboutTimeline.map((item, i) => (
                <FadeUp key={item.year} delay={i * 0.1}>
                  <div
                    className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                      i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="md:text-right">
                      <p className="font-serif text-4xl text-muted-foreground/50">
                        {item.year}
                      </p>
                    </div>
                    <div className="border-l border-neutral-300 pl-8 md:border-0 md:pl-0 dark:border-neutral-700">
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              label="Expertise"
              title="Skills"
              description="Organized across fashion design, technical development, software, and professional competencies."
            />
          </FadeUp>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, i) => (
              <SkillCard key={category.title} category={category} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
