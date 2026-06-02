export const siteConfig = {
  name: "Thai Tai Nguyen",
  title: "Fashion Design Student | Technical Apparel Designer",
  tagline:
    "Transforming fashion concepts into production-ready garments through digital design and technical development.",
  shortStatement:
    "Bridging creativity and garment engineering through CLO3D, Gerber AccuMark, and apparel product development.",
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyenthaitai.work@gmail.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  behance: "https://behance.net/your-profile",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://thaitainguyen.vercel.app",
  ogImage: "/images/editorial/hero-editorial.svg",
  locale: "en_US",
} as const;
