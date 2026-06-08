import type { Project, ProjectCategory } from "@/types/project";

export type { Project, ProjectCategory };
export type ProjectFilterCategory = ProjectCategory | "all";

export const projects: Project[] = [
  {
    id: "1",
    slug: "mens-outdoor-jacket-clo3d-gerber",
    title:
      "Application of CLO3D and Gerber AccuMark in Men's Outdoor Jacket Development",
    subtitle: "Technical Apparel Development",
    description:
      "A technical apparel development project integrating digital garment simulation and industrial pattern engineering for a men's outdoor jacket.",

    category: "technical",
    tags: ["CLO3D", "Gerber AccuMark", "Outdoor", "Technical"],

    coverImage: "/images/projects/jacket/cover.svg",
    heroImage: "/images/projects/jacket/hero.svg",

    gallery: [
      {
        src: "/images/projects/jacket/gallery-1.svg",
        alt: "Technical sketch",
        caption: "Technical sketch — front & back views",
      },
      {
        src: "/images/projects/jacket/gallery-2.svg",
        alt: "CLO3D render",
        caption: "CLO3D digital prototype",
      },
    ],

    sections: [
      {
        id: "research",
        content:
          "Research focused on outdoor performance, mobility, and weather protection.",
      },
      {
        id: "technical-flats",
        content:
          "Technical flats define seam placement and construction zones.",
      },
      {
        id: "clo3d",
        content:
          "CLO3D simulation validated fit before physical prototyping.",
      },
      {
        id: "final",
        content: "Final tech pack prepared for production handoff.",
      },
    ],

    objectives: [
      "Reduce physical sampling through digital prototyping",
      "Improve fit accuracy using CLO3D",
      "Create production-ready tech pack",
    ],

    process: [
      "Research",
      "Technical Sketch",
      "Pattern Making",
      "CLO3D Simulation",
      "Final Development",
    ],

    software: ["CLO3D", "Gerber AccuMark", "Adobe Illustrator"],

    metrics: [
      { label: "Weeks", value: "12" },
      { label: "Iterations", value: "6" },
    ],

    lessons: [
      "Digital prototyping reduces production errors significantly",
    ],
  },

  {
    id: "2",
    slug: "spring-summer-evening-gown",
    title: "Spring Summer Evening Gown Collection",
    subtitle: "Conceptual Womenswear",
    description:
      "A conceptual womenswear collection inspired by spring and summer elegance.",

    category: "womenswear",
    tags: ["Womenswear", "Collection", "Evening Wear"],

    coverImage: "/images/projects/gown/cover.svg",
    heroImage: "/images/projects/gown/hero.png",

    gallery: [
      {
        src: "/images/projects/gown/gallery-1.svg",
        alt: "Moodboard",
        caption: "Moodboard inspiration",
      },
      {
        src: "/images/projects/gown/gallery-2.svg",
        alt: "Color palette",
        caption: "Color story",
      },
    ],

    sections: [
      {
        id: "research",
        content:
          "Research explored evening wear trends and runway references.",
      },
      {
        id: "moodboard",
        content:
          "Moodboard combines botanical and luxury aesthetics.",
      },
      {
        id: "final",
        content:
          "Final gown collection prepared for portfolio.",
      },
    ],

    objectives: [
      "Explore silhouette development",
      "Develop cohesive color story",
    ],

    process: [
      "Research",
      "Moodboard",
      "Sketching",
      "Final Design",
    ],

    software: ["Adobe Illustrator"],

    lessons: [
      "Balance between creativity and structure is essential",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectFilters: { label: string; value: ProjectFilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Womenswear", value: "womenswear" },
  { label: "Experimental", value: "experimental" },
] as const;
