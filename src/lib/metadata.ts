import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description = siteConfig.tagline,
  path = "",
  image = siteConfig.ogImage,
}: PageMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.title}`;

  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
