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
  objectives?: string[];
  process?: string[];
  software?: string[];
  metrics?: { label: string; value: string }[];
  lessons?: string[];
  sections?: {
    title: string;
    content: string;
    images?: { src: string; alt: string }[];
  }[];
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
    reflection:
      "This project strengthened my ability to move from concept to production-ready documentation, combining creative direction with the precision required for technical apparel roles.",
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
    heroImage: "/images/projects/gown/hero.svg",
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
        title: "Moodboard",
        content:
          "Research drew from botanical forms, natural light, and refined evening wear references to establish an editorial yet wearable direction.",
        images: [
          { src: "/images/projects/gown/gallery-1.svg", alt: "Moodboard" },
        ],
      },
      {
        title: "Color Story",
        content:
          "A restrained palette of ivory, blush, sage, and deep charcoal supports seasonal freshness while maintaining luxury restraint.",
        images: [
          { src: "/images/projects/gown/gallery-2.svg", alt: "Color story" },
        ],
      },
      {
        title: "Silhouette Development",
        content:
          "Explored column, A-line, and draped bodice proportions to balance movement with structural clarity for evening contexts.",
        images: [
          {
            src: "/images/projects/gown/gallery-3.svg",
            alt: "Silhouette sketches",
          },
        ],
      },
      {
        title: "Technical Drawings & Final Designs",
        content:
          "Technical flats documented construction zones, seam placement, and finishing standards alongside final illustrated designs.",
        images: [
          { src: "/images/projects/gown/gallery-4.svg", alt: "Final designs" },
        ],
      },
    ],
    reflection:
      "The collection reinforced my interest in balancing creative narrative with the technical clarity required for real-world garment development.",
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
    sections: [
      {
        title: "Technical Sketches",
        content:
          "Detailed flats documenting seam types, topstitching, and functional zones for performance-oriented garments.",
      },
      {
        title: "Pattern Engineering",
        content:
          "Studies in panel reduction, articulation, and grading logic for complex outerwear components.",
      },
      {
        title: "Construction Analysis",
        content:
          "Breakdown of assembly sequences, reinforcement points, and quality checkpoints for factory communication.",
      },
      {
        title: "Material Exploration",
        content:
          "Evaluation of shell fabrics, membranes, and trim compatibility for technical end-use requirements.",
      },
    ],
    reflection:
      "These studies form a laboratory for refining the engineering mindset essential to technical designer and product development roles.",
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
