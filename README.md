# Thai Tai Nguyen — Fashion Design Portfolio

A luxury editorial fashion portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Features

- Editorial luxury aesthetic (COS / Acne Studios inspired)
- Fully responsive, mobile-first layout
- Dark mode support
- Project filtering and detailed case study pages
- SEO metadata, Open Graph, sitemap, and structured data
- Framer Motion animations (fade up, scroll reveal, image zoom)
- Scroll progress indicator and back-to-top button

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **shadcn/ui** components
- **Lucide Icons**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Personal info** — Edit `src/lib/site-config.ts` with your email, LinkedIn, Behance, and GitHub URLs.
2. **Images** — Replace SVG placeholders in `public/images/` with your project photography and renders.
   - **Hero:** `public/images/projects/{slug}/hero.jpg` (or `.png`) — set `heroImage` in `src/data/projects.ts`
   - **Case study sections:** add images per section in `caseStudy[].images` (e.g. moodboard, color story, CLO3D). See `spring-summer-evening-gown` in `src/data/projects.ts` for the full section list (Overview, Research, Moodboard, Color Story, Material Selection, Technical Flats, Final Outcome, Reflection).
3. **Resume PDF** — Replace `public/resume/thai-tai-nguyen-resume.pdf` with your actual CV.
4. **OG image** — Add `public/og-image.jpg` (1200×630) and update `ogImage` in site config.
5. **Deploy URL** — Update `siteConfig.url` for production SEO.

## Project Structure

```
src/
├── app/              # Pages (Home, About, Projects, Experience, Resume, Contact)
├── components/       # UI, layout, motion, project, skills, contact
├── data/             # Projects, experience, skills, resume content
└── lib/              # Utils, metadata, site config
public/
├── images/           # Project and editorial images
└── resume/           # Downloadable PDF
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Deploy — no extra configuration required.

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Development server   |
| `npm run build`| Production build     |
| `npm run start`| Production server    |
| `npm run lint` | ESLint               |

## License

Private portfolio — all rights reserved.
