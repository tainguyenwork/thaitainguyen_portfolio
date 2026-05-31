"use client";

import { FadeUp } from "@/components/motion/fade-up";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkillCategory } from "@/data/skills";

type SkillCardProps = {
  category: SkillCategory;
  index: number;
};

export function SkillCard({ category, index }: SkillCardProps) {
  return (
    <FadeUp delay={index * 0.08}>
      <Card className="h-full transition-shadow duration-500 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
        <CardHeader>
          <CardTitle>{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </FadeUp>
  );
}
