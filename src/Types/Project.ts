export type Project = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
  
    tags: string[];
  
    coverImage: string;
    heroImage: string;
  
    gallery: {
      src: string;
      alt: string;
      caption?: string;
    }[];
  
    objectives?: string[];
    process?: string[];
    software?: string[];
  
    metrics?: {
      label: string;
      value: string;
    }[];
  
    lessons?: string[];
  };