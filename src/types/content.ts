export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  featured: boolean;
  date: string;
  stack: string[];
  coverImage: string;
  gallery: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  confidentiality: "public" | "sanitized";
  metrics?: string[];
};

export type Experience = {
  role: string;
  company: string;
  client?: string;
  dates: string;
  context: string;
  impactBullets: string[];
  techBullets: string[];
  stackTags: string[];
  relatedProjects: string[];
};

export type SkillCategory = {
  title: string;
  level: "Junior" | "Confirmé" | "Avancé" | "Junior+" | "Confirmed" | "Advanced";
  items: string[];
  highlights: string[];
};

export type Certification = {
  title: string;
  status: "Obtenu" | "En cours" | "Earned" | "In progress";
  issuer?: string;
};
