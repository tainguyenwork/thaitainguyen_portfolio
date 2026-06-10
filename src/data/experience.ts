export type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: "lotus-textile",
    company: "Lotus Textile & Garment Co., Ltd",
    position: "Technical Development Intern",
    period: "06/2025 — 08/2025",
    location: "Vietnam",
    responsibilities: [
      "Garment development support across sample and production stages",
      "Technical documentation for styles entering development",
      "Production workflow understanding from pattern to finished garment",
      "Pattern review and alignment with design intent",
      "Sample evaluation for fit, construction, and quality standards",
    ],
  },
  {
    id: "gerber-leader",
    company: "Academic Project",
    position: "Fashion Designer & Pattern Maker",
    period: "2023 — 2024",
    responsibilities: [
      "Conducted trend research and developed the collection concept.",
      "Created mood boards, color palettes, and material selections.",
      "Developed digital patterns using Gerber AccuMark.",
      "Produced 3D garment simulations and fit evaluations in CLO3D.",
      "Prepared technical documentation and specification sheets."  
    ],
  },
];
