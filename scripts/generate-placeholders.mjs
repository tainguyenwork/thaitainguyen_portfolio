import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";

const images = [
  { path: "public/images/editorial/hero-editorial.svg", label: "Editorial", sub: "Fashion Portfolio" },
  { path: "public/images/projects/jacket/cover.svg", label: "Project 01", sub: "Outdoor Jacket" },
  { path: "public/images/projects/jacket/hero.svg", label: "Hero", sub: "CLO3D · AccuMark" },
  { path: "public/images/projects/jacket/gallery-1.svg", label: "01", sub: "Technical Sketch" },
  { path: "public/images/projects/jacket/gallery-2.svg", label: "02", sub: "CLO3D Simulation" },
  { path: "public/images/projects/jacket/gallery-3.svg", label: "03", sub: "Pattern Development" },
  { path: "public/images/projects/jacket/gallery-4.svg", label: "04", sub: "Fit Evaluation" },
  { path: "public/images/projects/gown/cover.svg", label: "Project 02", sub: "Evening Gown" },
  { path: "public/images/projects/gown/hero.svg", label: "Hero", sub: "SS Collection" },
  { path: "public/images/projects/gown/gallery-1.svg", label: "01", sub: "Moodboard" },
  { path: "public/images/projects/gown/gallery-2.svg", label: "02", sub: "Color Story" },
  { path: "public/images/projects/gown/gallery-3.svg", label: "03", sub: "Silhouette" },
  { path: "public/images/projects/gown/gallery-4.svg", label: "04", sub: "Final Design" },
  { path: "public/images/projects/studies/cover.svg", label: "Project 03", sub: "Technical Studies" },
  { path: "public/images/projects/studies/hero.svg", label: "Hero", sub: "Garment Engineering" },
  { path: "public/images/projects/studies/gallery-1.svg", label: "01", sub: "Technical Sketch" },
  { path: "public/images/projects/studies/gallery-2.svg", label: "02", sub: "Pattern Engineering" },
  { path: "public/images/projects/studies/gallery-3.svg", label: "03", sub: "Construction" },
  { path: "public/images/projects/studies/gallery-4.svg", label: "04", sub: "Materials" },
  { path: "public/og-image.jpg", label: "OG", sub: "Placeholder", isJpg: true },
];

function svg(label, sub) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1500" viewBox="0 0 1200 1500" fill="none">
  <rect width="1200" height="1500" fill="#F0F0F0"/>
  <rect x="80" y="80" width="1040" height="1340" stroke="#D9D9D9" stroke-width="1"/>
  <line x1="80" y1="750" x2="1120" y2="750" stroke="#D9D9D9" stroke-width="1"/>
  <line x1="600" y1="80" x2="600" y2="1420" stroke="#D9D9D9" stroke-width="1"/>
  <text x="600" y="720" text-anchor="middle" font-family="Georgia, serif" font-size="48" fill="#111111">${label}</text>
  <text x="600" y="780" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" letter-spacing="6" fill="#666666">${sub.toUpperCase()}</text>
  <text x="600" y="1380" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" letter-spacing="4" fill="#999999">REPLACE WITH YOUR IMAGE</text>
</svg>`;
}

for (const img of images) {
  const full = join(process.cwd(), img.path);
  mkdirSync(dirname(full), { recursive: true });
  if (img.isJpg) {
    writeFileSync(full.replace(".jpg", ".svg"), svg(img.label, img.sub));
    writeFileSync(full.replace(".jpg", ".txt"), "Replace public/og-image.jpg with a 1200x630 image for Open Graph.");
  } else {
    writeFileSync(full, svg(img.label, img.sub));
  }
}

console.log(`Generated ${images.length} placeholder assets.`);
