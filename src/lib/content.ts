import fs from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/i18n/config";
import type {
  ProjectMeta,
  Experience,
  SkillCategory,
  Certification
} from "@/types/content";

export async function getHomeData(locale: Locale) {
  const module = await import(`../../content/${locale}/home`);
  return module.home as {
    hero: {
      eyebrow: string;
      title: string;
      punchline: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    dataJourney: { title: string; description: string }[];
    impacts: { title: string; description: string }[];
    toolbox: string[];
  };
}

export async function getProjects(locale: Locale): Promise<ProjectMeta[]> {
  const module = await import(`../../content/${locale}/projects/index`);
  return module.projects as ProjectMeta[];
}

export async function getProjectBySlug(
  locale: Locale,
  slug: string
): Promise<ProjectMeta | null> {
  const projects = await getProjects(locale);
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getProjectContent(locale: Locale, slug: string) {
  const mdxPath = path.join(
    process.cwd(),
    "content",
    locale,
    "projects",
    `${slug}.mdx`
  );

  try {
    return await fs.readFile(mdxPath, "utf-8");
  } catch {
    return null;
  }
}

export async function getExperiences(locale: Locale): Promise<Experience[]> {
  const module = await import(`../../content/${locale}/experience`);
  return module.experiences as Experience[];
}

export async function getSkills(locale: Locale): Promise<SkillCategory[]> {
  const module = await import(`../../content/${locale}/skills`);
  return module.skillCategories as SkillCategory[];
}

export async function getCertifications(
  locale: Locale
): Promise<Certification[]> {
  const module = await import(`../../content/${locale}/certifications`);
  return module.certifications as Certification[];
}

export async function getAbout(locale: Locale) {
  const module = await import(`../../content/${locale}/about`);
  return module.about as { headline: string; paragraphs: string[] };
}

export async function getContact(locale: Locale) {
  const module = await import(`../../content/${locale}/contact`);
  return module.contact as {
    email: string;
    linkedin: string;
    github: string;
    cv: string;
  };
}
