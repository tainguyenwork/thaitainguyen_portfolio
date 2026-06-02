/** Standard fashion portfolio case-study section IDs */
export type ProjectSectionId =
  | "overview"
  | "research"
  | "moodboard"
  | "color-story"
  | "material-selection"
  | "technical-flats"
  | "clo3d-development"
  | "pattern-development"
  | "final-outcome"
  | "reflection";

export type ProjectCaseStudySection = {
  id: ProjectSectionId;
  /** Override default label when needed */
  title?: string;
  content: string;
  images?: { src: string; alt: string; caption?: string }[];
};

export const PROJECT_SECTION_LABELS: Record<ProjectSectionId, string> = {
  overview: "Overview",
  research: "Research",
  moodboard: "Moodboard",
  "color-story": "Color Story",
  "material-selection": "Material Selection",
  "technical-flats": "Technical Flats",
  "clo3d-development": "CLO3D Development",
  "pattern-development": "Pattern Development",
  "final-outcome": "Final Outcome",
  reflection: "Reflection",
};

export function getSectionTitle(section: ProjectCaseStudySection): string {
  return section.title ?? PROJECT_SECTION_LABELS[section.id];
}
