import { siteConfig } from "@/lib/site-config";
import { projects } from "@/data/projects";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.tagline,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    sameAs: [siteConfig.linkedin, siteConfig.behance, siteConfig.github],
    url: siteConfig.url,
    knowsAbout: [
      "Fashion Design",
      "Technical Apparel Design",
      "CLO3D",
      "Gerber AccuMark",
      "Apparel Product Development",
    ],
  };

  const creativeWorkSchema = projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: { "@type": "Person", name: siteConfig.name },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkSchema),
        }}
      />
    </>
  );
}
