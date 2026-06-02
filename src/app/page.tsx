"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/fade-up";
import { ImageZoom } from "@/components/motion/image-zoom";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = projects.filter(() => true);


  return (
    <>
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,#f8f8f8_0%,#f0f0f0_50%,#f8f8f8_100%)] dark:bg-[linear-gradient(180deg,#0a0a0a_0%,#111_50%,#0a0a0a_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 80px)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-[11px] font-medium uppercase tracking-[0.35em] text-muted-foreground"
          >
            Portfolio — {siteConfig.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            THAI TAI
            <br />
            NGUYEN
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 max-w-xl"
          >
            <p className="font-serif text-xl md:text-2xl">
              Fashion Design Student
            </p>
            <p className="mt-1 font-serif text-xl text-muted-foreground md:text-2xl">
              Technical Apparel Development
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {siteConfig.shortStatement}
          </motion.p>
      <motion.div
                className="mt-6 flex gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>• CLO3D + Gerber workflow</p>
                <p>• Outdoor & Technical Apparel</p>
                <p>• 3+ Real Development Projects</p>
        </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">Download Resume</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
          <Button variant="ghost" asChild>
  <Link href="/projects">Explore Case Studies →</Link>
</Button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 md:block"
            aria-hidden
          >
            <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-black md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              label="Selected Work"
              title="Production-Ready Design"
              description="Case studies spanning technical outdoor development, conceptual womenswear, and garment engineering studies."
            />
          </FadeUp>
          <div className="mb-10 text-sm text-muted-foreground">
  Selected projects representing technical execution, garment engineering, and production workflow.
</div>
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <FadeUp className="mt-16 text-center">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeUp>
              <SectionHeading
                label="Approach"
                title="Where Creativity Meets Engineering"
                description={siteConfig.tagline}
              />
              <div className="mt-10 grid grid-cols-2 gap-8">
                {[
                  { label: "CLO3D", desc: "Digital prototyping" },
                  { label: "AccuMark", desc: "Pattern engineering" },
                  { label: "Tech Packs", desc: "Production docs" },
                  { label: "Fit Analysis", desc: "Garment evaluation" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-serif text-2xl">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <ImageZoom
                src="/images/editorial/hero-editorial.svg"
                alt="Editorial fashion portfolio placeholder"
                aspectRatio="4/5"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-24 dark:border-neutral-800 dark:bg-black md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeUp>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Open to Opportunities
            </p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl">
              Let&apos;s build the next garment together.
            </h2>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
