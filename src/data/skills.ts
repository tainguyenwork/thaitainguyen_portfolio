export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Fashion Design",
    skills: [
      "Fashion Illustration",
      "Collection Development",
      "Design Research",
      "Moodboard Creation",
    ],
  },
  {
    title: "Technical Design",
    skills: [
      "Tech Pack Development",
      "Pattern Making",
      "Garment Construction",
      "Fit Analysis",
    ],
  },
  {
    title: "Software",
    skills: [
      "CLO3D",
      "Gerber AccuMark",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
  },
  {
    title: "Other",
    skills: [
      "Team Leadership",
      "Project Management",
      "Communication",
      "Presentation",
    ],
  },
];
