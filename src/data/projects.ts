import type { ProjectCaseStudySection } from "@/data/project-sections";

export type ProjectCategory =
  | "technical"
  | "womenswear"
  | "experimental"
  | "all";

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  tags: string[];
  coverImage: string;
  heroImage: string;
  gallery: { src: string; alt: string; caption?: string }[];
  /** Ordered case-study sections (Overview → Reflection) */
  caseStudy?: ProjectCaseStudySection[];
  objectives?: string[];
  process?: string[];
  software?: string[];
  metrics?: { label: string; value: string }[];
  lessons?: string[];
  /** @deprecated Use caseStudy with id "reflection" */
  reflection?: string;
};

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
    objectives: [
      "Digital prototyping to reduce physical sample iterations",
      "Industrial pattern development aligned with production standards",
      "Fit optimization for active outdoor movement",
      "Production readiness through documented tech specifications",
    ],
    process: [
      "Research",
      "Concept Development",
      "Technical Sketch",
      "Pattern Development",
      "CLO3D Simulation",
      "Fit Evaluation",
      "Final Development",
    ],
    software: ["CLO3D", "Gerber AccuMark", "Adobe Illustrator"],
    metrics: [
      { label: "Development Cycle", value: "12 Weeks" },
      { label: "Pattern Pieces", value: "24" },
      { label: "CLO3D Iterations", value: "6" },
      { label: "Fit Sessions", value: "3" },
    ],
    lessons: [
      "Early integration of CLO3D and AccuMark reduces downstream fit issues.",
      "Outdoor garments require articulated pattern engineering at key stress points.",
      "Clear tech pack communication bridges design intent and factory execution.",
    ],
    caseStudy: [
      {
        id: "overview",
        content:
          "This case study documents the end-to-end development of a men's outdoor jacket, from market research through digital simulation and industrial pattern engineering to production-ready documentation.",
        images: [
          {
            src: "/images/projects/jacket/hero.svg",
            alt: "Men's outdoor jacket hero",
            caption: "Project hero — technical outdoor jacket",
          },
        ],
      },
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
          "This project strengthened my ability to move from concept to production-ready documentation, combining creative direction with the precision required for technical apparel roles.",
      },
    ],
  },
  {
    id: "2",
    slug: "spring-summer-evening-gown",
    title: "Spring Summer Evening Gown Collection",
    subtitle: "Conceptual Womenswear",
    description:
      "A conceptual womenswear collection inspired by spring and summer elegance, exploring silhouette, color, and evening wear proportion.",
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
    caseStudy: [
      {
        id: "overview",
        content:
          "A spring–summer evening wear collection exploring elegance through proportion, surface, and restrained color — developed from research through final design presentation.",
        images: [
          {
            src: "/images/projects/gown/hero.png",
            alt: "Evening gown collection overview",
            caption: "Collection overview",
          },
        ],
      },
      {
        id: "research",
        content:
          "Primary research examined seasonal evening wear, runway references, and target wearer contexts to define a clear design direction for the collection.",
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
          "The moodboard draws from botanical forms, natural light, and refined evening wear references to establish an editorial yet wearable direction.",
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
          "A restrained palette of ivory, blush, sage, and deep charcoal supports seasonal freshness while maintaining luxury restraint.",
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
          "Fabric and trim selection prioritized drape, hand-feel, and evening-appropriate weight — balancing visual lightness with structural support at key zones.",
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
          "Technical flats documented construction zones, seam placement, and finishing standards for each silhouette in the range.",
        images: [
          {
            src: "/images/projects/gown/gallery-3.svg",
            alt: "Technical flat drawings",
            caption: "Technical flats & construction",
          },
        ],
      },
      {
        id: "final-outcome",
        content:
          "Final designs present the completed evening gown range with illustrated renderings and proportion studies ready for portfolio and academic review.",
        images: [
          {
            src: "/images/projects/gown/gallery-4.svg",
            alt: "Final evening gown designs",
            caption: "Final design renderings",
          },
        ],
      },
      {
        id: "reflection",
        content:
          "The collection reinforced my interest in balancing creative narrative with the technical clarity required for real-world garment development.",
      },
    ],
  },
  {
    id: "3",
    slug: "technical-apparel-studies",
    title: "Technical Apparel Development Studies",
    subtitle: "Garment Engineering Experiments",
    description:
      "Various experimental projects focused on garment engineering, apparel technology, and construction analysis.",
    category: "experimental",
    tags: ["Technical", "Pattern", "Construction"],
    coverImage: "/images/projects/studies/cover.svg",
    heroImage: "/images/projects/studies/hero.svg",
    gallery: [
      {
        src: "/images/projects/studies/gallery-1.svg",
        alt: "Technical construction sketch",
        caption: "Technical sketches",
      },
      {
        src: "/images/projects/studies/gallery-2.svg",
        alt: "Pattern engineering study",
        caption: "Pattern engineering",
      },
      {
        src: "/images/projects/studies/gallery-3.svg",
        alt: "Construction analysis diagram",
        caption: "Construction analysis",
      },
      {
        src: "/images/projects/studies/gallery-4.svg",
        alt: "Material exploration swatches",
        caption: "Material exploration",
      },
    ],
    caseStudy: [
      {
        id: "overview",
        content:
          "A series of garment engineering experiments exploring construction, pattern logic, and material performance for technical apparel contexts.",
        images: [
          {
            src: "/images/projects/studies/hero.svg",
            alt: "Technical apparel studies overview",
          },
        ],
      },
      {
        id: "research",
        content:
          "Research targeted performance garment categories, factory assembly constraints, and emerging material technologies.",
        images: [
          {
            src: "/images/projects/studies/gallery-1.svg",
            alt: "Technical research",
          },
        ],
      },
      {
        id: "technical-flats",
        content:
          "Detailed flats documenting seam types, topstitching, and functional zones for performance-oriented garments.",
        images: [
          {
            src: "/images/projects/studies/gallery-1.svg",
            alt: "Technical construction sketch",
            caption: "Technical sketches",
          },
        ],
      },
      {
        id: "pattern-development",
        content:
          "Studies in panel reduction, articulation, and grading logic for complex outerwear components.",
        images: [
          {
            src: "/images/projects/studies/gallery-2.svg",
            alt: "Pattern engineering study",
            caption: "Pattern engineering",
          },
        ],
      },
      {
        id: "material-selection",
        content:
          "Evaluation of shell fabrics, membranes, and trim compatibility for technical end-use requirements.",
        images: [
          {
            src: "/images/projects/studies/gallery-4.svg",
            alt: "Material exploration swatches",
            caption: "Material exploration",
          },
        ],
      },
      {
        id: "final-outcome",
        content:
          "Synthesized construction analysis and assembly sequences for factory-ready communication.",
        images: [
          {
            src: "/images/projects/studies/gallery-3.svg",
            alt: "Construction analysis diagram",
            caption: "Construction analysis",
          },
        ],
      },
      {
        id: "reflection",
        content:
          "These studies form a laboratory for refining the engineering mindset essential to technical designer and product development roles.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectFilters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Womenswear", value: "womenswear" },
  { label: "Experimental", value: "experimental" },
];
