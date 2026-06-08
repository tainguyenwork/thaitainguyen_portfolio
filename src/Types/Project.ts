export type ProjectCategory =
  | "technical"
  | "womenswear"
  | "experimental";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  id: string;
  content: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  category: ProjectCategory;
  tags: string[];
  coverImage: string;
  heroImage: string;
  gallery: GalleryImage[];
  objectives?: string[];
  process?: string[];
  software?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  lessons?: string[];
  sections?: ProjectSection[];
};
