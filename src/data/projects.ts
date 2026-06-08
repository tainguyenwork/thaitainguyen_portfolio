import type { Project, ProjectCategory } from "@/types/project";

export type { ProjectCategory };

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
          "Research focused on outdoor performance, layering systems, and market benchmarks.",
      },
      {
        id: "technical-flats",
        content:
          "Technical flats defined construction zones and seam placements.",
      },
      {
        id: "clo3d",
        content:
          "CLO3D simulation validated fit and fabric behavior before production.",
      },
      {
        id: "final",
        content:
          "Final tech pack and prototype ready for production handoff.",
      },
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
        caption: "Spring summer inspiration",
      },
      {
        src: "/images/projects/gown/gallery-2.svg",
        alt: "Color palette",
        caption: "Color story development",
      },
    ],

    sections: [
      {
        id: "research",
        content: "Research on evening wear references and runway trends.",
      },
      {
        id: "moodboard",
        content: "Moodboard explores botanical and luxury evening aesthetics.",
      },
      {
        id: "final",
        content: "Final gown collection ready for portfolio presentation.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectFilters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Womenswear", value: "womenswear" },
  { label: "Experimental", value: "experimental" },
];
