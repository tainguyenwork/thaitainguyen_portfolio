import type { Project } from "@/types/project";
export const projects: Project[] = [
  {
    id: "1",
    slug: "mens-outdoor-jacket-clo3d-gerber",
    title: "Application of CLO3D and Gerber AccuMark in Men's Outdoor Jacket Development",
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
        alt: "Technical flat sketch of outdoor jacket",
        caption: "Technical sketch — front & back views",
      },
      {
        src: "/images/projects/jacket/gallery-2.svg",
        alt: "CLO3D simulation render",
        caption: "CLO3D digital prototype",
      },
      {
        src: "/images/projects/jacket/gallery-3.svg",
        alt: "Pattern pieces layout",
        caption: "Gerber AccuMark pattern development",
      },
      {
        src: "/images/projects/jacket/gallery-4.svg",
        alt: "Fit evaluation documentation",
        caption: "Fit evaluation & construction notes",
      },
    ],

    sections: [
      {
        id: "research",
        content:
          "Research focused on active outdoor use, layering systems, and competitor benchmarks for weather protection, mobility, and durability in similar market segments.",
        images: [
          {
            src: "/images/projects/jacket/gallery-1.svg",
            alt: "Outdoor jacket research references",
            caption: "Research & reference analysis",
          },
        ],
      },
      {
        id: "technical-flats",
        content:
          "Technical flats defined construction zones, seam types, pocket placement, and hardware positions for factory communication and sample development.",
        images: [
          {
            src: "/images/projects/jacket/gallery-1.svg",
            alt: "Technical flat sketches",
            caption: "Technical sketch — front & back views",
          },
        ],
      },
      {
        id: "clo3d-development",
        content:
          "CLO3D simulations validated fit, articulation at stress points, and fabric behavior before physical prototyping, reducing sample iterations.",
        images: [
          {
            src: "/images/projects/jacket/gallery-2.svg",
            alt: "CLO3D simulation render",
            caption: "CLO3D digital prototype",
          },
        ],
      },
      {
        id: "pattern-development",
        content:
          "Gerber AccuMark pattern pieces were developed for industrial production, including grading logic and marker efficiency considerations.",
        images: [
          {
            src: "/images/projects/jacket/gallery-3.svg",
            alt: "Pattern pieces layout",
            caption: "Gerber AccuMark pattern development",
          },
        ],
      },
      {
        id: "final-outcome",
        content:
          "The final outcome combines a production-aligned tech pack, validated digital prototype, and fit documentation ready for factory handoff.",
        images: [
          {
            src: "/images/projects/jacket/gallery-4.svg",
            alt: "Fit evaluation documentation",
            caption: "Fit evaluation & construction notes",
          },
        ],
      },
      {
        id: "reflection",
        content:
          "This project strengthened my ability to move from concept to production-ready documentation, combining creative direction with technical precision.",
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
        alt: "Collection moodboard",
        caption: "Moodboard — spring summer inspiration",
      },
      {
        src: "/images/projects/gown/gallery-2.svg",
        alt: "Color story palette",
        caption: "Color story development",
      },
      {
        src: "/images/projects/gown/gallery-3.svg",
        alt: "Silhouette exploration sketches",
        caption: "Silhouette development",
      },
      {
        src: "/images/projects/gown/gallery-4.svg",
        alt: "Final evening gown designs",
        caption: "Final design renderings",
      },
    ],

    sections: [


      {
        id: "research",
        content:
          "Primary research examined seasonal evening wear, runway references, and target wearer contexts.",

        images: [
          {
            src: "/images/projects/gown/gallery-1.svg",
            alt: "Research board",
            caption: "Research references",
          },
        ],
      },
      {
        id: "moodboard",
        content:
          "The moodboard draws from botanical forms, natural light, and refined evening wear references.",

        images: [
          {
            src: "/images/projects/gown/gallery-1.svg",
            alt: "Collection moodboard",
            caption: "Moodboard — spring summer inspiration",
          },
        ],
      },
      {
        id: "color-story",
        content:
          "A restrained palette of ivory, blush, sage, and charcoal supports seasonal luxury.",

        images: [
          {
            src: "/images/projects/gown/gallery-2.svg",
            alt: "Color story palette",
            caption: "Color story development",
          },
        ],
      },
      {
        id: "material-selection",
        content:
          "Fabric selection prioritized drape, hand-feel, and evening-appropriate structure.",

        images: [
          {
            src: "/images/projects/gown/gallery-2.svg",
            alt: "Material swatches",
            caption: "Material & trim selection",
          },
        ],
      },
      {
        id: "technical-flats",
        content:
          "Technical flats documented construction zones and seam placement.",

        images: [
          {
            src: "/images/projects/gown/gallery-3.svg",
            alt: "Technical flats",

            caption: "Technical flats & construction",
          },
        ],
      },
      {
        id: "final-outcome",
        content:
          "Final designs present completed evening gown range ready for portfolio review.",

        images: [
          {
            src: "/images/projects/gown/gallery-4.svg",
            alt: "Final designs",

            caption: "Final design renderings",
          },
        ],
      },
      {
        id: "reflection",
        content:
          "The collection reinforced balance between narrative design and technical clarity.",

      },
    ],
  },
];


export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectFilters = [

  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Womenswear", value: "womenswear" },
  { label: "Experimental", value: "experimental" },
];
