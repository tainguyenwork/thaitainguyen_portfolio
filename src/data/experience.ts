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
    period: "2024 — Present",
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
    company: "Gerber Software Team Leader",
    position: "Peer Learning Lead",
    period: "2023 — 2024",
    responsibilities: [
      "Led peer learning sessions for Gerber AccuMark fundamentals",
      "Guided students through pattern digitization and grading workflows",
      "Developed software learning materials and practice briefs",
      "Organized hands-on activities for industrial pattern engineering",
    ],
  },
];
