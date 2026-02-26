import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getProjectBySlug, getProjectContent, getProjects } from "@/lib/content";
import { Locale, locales } from "@/i18n/config";
import { renderMdx } from "@/lib/mdx";
import { extractToc } from "@/lib/toc";
import CaseStudyLayout from "@/components/case-study-layout";
import { Badge } from "@/components/ui/badge";
import ProjectDetailFactai from "@/components/project-detail-factai";
import ProjectDetailImaginify from "@/components/project-detail-imaginify";
import ProjectDetailSqte from "@/components/project-detail-sqte";
import ProjectDetailBiDashboards from "@/components/project-detail-bi-dashboards";


const CUSTOM_SLUGS: Record<string, React.ComponentType<{ locale: string }>> = {
  factai: ProjectDetailFactai,
  "social-generator": ProjectDetailImaginify,
  "sqte-website": ProjectDetailSqte,
  "bi-dashboards": ProjectDetailBiDashboards,
};

export async function generateStaticParams() {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const projects = await getProjects(locale);
      return projects
        .filter((project) => !project.externalUrl)
        .map((project) => ({
          locale,
          slug: project.slug
        }));
    })
  );

  return entries.flat();
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = await getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  // If the project has an external URL, redirect there
  if (project.externalUrl) {
    redirect(project.externalUrl);
  }

  const CustomComponent = CUSTOM_SLUGS[slug];

  const source = CustomComponent ? null : await getProjectContent(locale, slug);
  const toc = source ? extractToc(source) : [];
  const mdx = source ? await renderMdx(source) : null;

  const labels =
    locale === "fr"
      ? {
        sanitized: "Anonymisé",
        public: "Public",
        toc: "Sommaire",
        comingSoon: "Case study détaillé disponible bientôt."
      }
      : {
        sanitized: "Sanitized",
        public: "Public",
        toc: "Contents",
        comingSoon: "Detailed case study coming soon."
      };

  return (
    <div className="space-y-10">
      {slug !== "bi-dashboards" && (
        <header className="space-y-6 py-12 text-center border-b border-white/10">
          <div className="mx-auto inline-block">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold mb-4">
              {project.title}
            </p>
            <h1 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl mb-4 font-bold">
              {project.title}
            </h1>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
          <p className="mx-auto max-w-3xl text-lg text-foreground/70 leading-relaxed italic">
            {project.summary}
          </p>
          {project.metrics && project.metrics.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-3 text-sm text-foreground/70 pt-4">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 transition-colors hover:border-cyan-500/30"
                >
                  {metric}
                </span>
              ))}
            </div>
          ) : null}
        </header>
      )}

      {/* Custom component for specific projects */}
      {CustomComponent ? (
        <CustomComponent locale={locale} />
      ) : (
        <>
          {project.gallery.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {project.gallery.map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={item}
                    alt={`${project.title} preview`}
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}

          {mdx ? (
            <CaseStudyLayout toc={toc} tocTitle={labels.toc}>
              {mdx}
            </CaseStudyLayout>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-foreground/70">
              {labels.comingSoon}
            </div>
          )}
        </>
      )}
    </div>
  );
}
