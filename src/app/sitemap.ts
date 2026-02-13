import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getProjects } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://example.com";
  const staticPaths = [
    "",
    "/projects",
    "/experience",
    "/skills",
    "/certifications",
    "/about",
    "/contact"
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date()
      });
    }

    const projects = await getProjects(locale);
    projects.forEach((project) => {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(project.date)
      });
    });
  }

  return entries;
}
