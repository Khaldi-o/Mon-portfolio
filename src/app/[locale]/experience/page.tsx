import { getExperiences, getProjects } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import ExperienceTimeline from "@/components/experience-timeline";

export default async function ExperiencePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const items = await getExperiences(locale);
  const projects = await getProjects(locale);
  const projectMap = Object.fromEntries(
    projects.map((project) => [project.slug, project.title])
  );
  const basePath = `/${locale}/projects`;
  const labels =
    locale === "fr"
      ? {
          clientPrefix: "Mission chez",
          impact: "Impact",
          tech: "Tech",
          highlights: "Realisations selectionnees:"
        }
      : {
          clientPrefix: "Client:",
          impact: "Impact",
          tech: "Tech",
          highlights: "Selected highlights:"
        };

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Experience"
        title={locale === "fr" ? "Experiences" : "Experience"}
        description={
          locale === "fr"
            ? "Missions orientees impact et livraison data."
            : "Impact-driven missions and data delivery."
        }
      />
      <ExperienceTimeline
        items={items}
        labels={labels}
        projectMap={projectMap}
        basePath={basePath}
      />
    </div>
  );
}
