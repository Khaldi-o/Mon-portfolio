import { getProjects } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import ProjectsGrid from "@/components/projects-grid";

export default async function ProjectsPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const projects = await getProjects(locale);
  const basePath = `/${locale}/projects`;

  const labels =
    locale === "fr"
      ? {
          title: "Projets",
          description:
            "Des case studies BI, Dataiku, Azure et IA, tous anonymisés si nécessaire.",
          searchLabel: "Rechercher",
          ctaLabel: "Voir le case study",
          emptyLabel: "Aucun résultat pour ces filtres.",
          sortTitle: "Tri",
          sortLabels: {
            featured: "Featured",
            recent: "Récent",
            complexity: "Complexité"
          }
        }
      : {
          title: "Projects",
          description:
            "BI, Dataiku, Azure and AI case studies, sanitized when needed.",
          searchLabel: "Search",
          ctaLabel: "View case study",
          emptyLabel: "No results for these filters.",
          sortTitle: "Sort",
          sortLabels: {
            featured: "Featured",
            recent: "Recent",
            complexity: "Complexity"
          }
        };

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title={labels.title}
        description={labels.description}
      />
      <ProjectsGrid
        projects={projects}
        basePath={basePath}
        ctaLabel={labels.ctaLabel}
        searchLabel={labels.searchLabel}
        sortTitle={labels.sortTitle}
        emptyLabel={labels.emptyLabel}
        sortLabels={labels.sortLabels}
      />
    </div>
  );
}
