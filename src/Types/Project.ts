export type ProjectCategory =
  | "all"
  | "technical"
  | "womenswear"
  | "experimental";

export type ProjectSection = {
  id: string;
  content: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

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

  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];

  sections: ProjectSection[];
};