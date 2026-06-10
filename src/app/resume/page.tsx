import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { FadeUp } from "@/components/motion/fade-up";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { resumeData } from "@/data/resume";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description: `Professional resume of ${siteConfig.name} — fashion design student and technical apparel designer.`,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="pb-24 md:pb-32">
      <section className="border-b border-neutral-200 py-24 dark:border-neutral-800 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <FadeUp>
              <SectionHeading
                label="CV"
                title="Resume"
                description="A concise overview of education, experience, and technical competencies."
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <Button asChild size="lg">
                <a href="/resume/ThaiTaiNguyen_CV_FashionDesign.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeUp>
            <div className="border border-neutral-200 bg-white p-10 md:p-16 dark:border-neutral-800 dark:bg-black">
              <header className="text-center">
                <h2 className="font-serif text-4xl">{siteConfig.name}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {siteConfig.title}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {siteConfig.location} · {siteConfig.email}
                </p>
              </header>

              <Separator className="my-12 bg-neutral-200 dark:bg-neutral-800" />

              <ResumeSection title="Profile">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {resumeData.profile}
                </p>
              </ResumeSection>

              <ResumeSection title="Education">
                {resumeData.education.map((edu) => (
                  <div key={edu.institution} className="mb-6 last:mb-0">
                    <div className="flex flex-wrap justify-between gap-2">
                      <h4 className="font-medium">{edu.institution}</h4>
                      <span className="text-xs text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </ResumeSection>

              <ResumeSection title="Experience">
                {experiences.map((exp) => (
                  <div key={exp.id} className="mb-8 last:mb-0">
                    <div className="flex flex-wrap justify-between gap-2">
                      <h4 className="font-medium">{exp.company}</h4>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm">{exp.position}</p>
                    <ul className="mt-3 space-y-2">
                      {exp.responsibilities.slice(0, 3).map((r) => (
                        <li
                          key={r}
                          className="text-sm text-muted-foreground"
                        >
                          — {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ResumeSection>

              <ResumeSection title="Selected Projects">
                {projects.map((p) => (
                  <div key={p.id} className="mb-4 last:mb-0">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="font-medium transition-opacity hover:opacity-60"
                    >
                      {p.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      {p.subtitle}
                    </p>
                  </div>
                ))}
              </ResumeSection>

              <ResumeSection title="Skills">
                <div className="grid gap-6 sm:grid-cols-2">
                  {skillCategories.map((cat) => (
                    <div key={cat.title}>
                      <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        {cat.title}
                      </h4>
                      <p className="mt-2 text-sm">
                        {cat.skills.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Languages">
                <div className="flex flex-wrap gap-8">
                  {resumeData.languages.map((lang) => (
                    <div key={lang.name}>
                      <p className="font-medium">{lang.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {lang.level}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Achievements">
                <ul className="space-y-2">
                  {resumeData.achievements.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground">
                      — {a}
                    </li>
                  ))}
                </ul>
              </ResumeSection>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 last:mb-0">
      <h3 className="mb-6 font-serif text-2xl">{title}</h3>
      {children}
    </section>
  );
}
