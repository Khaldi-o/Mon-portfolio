import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectContent, getProjects } from "@/lib/content";
import { Locale, locales } from "@/i18n/config";
import { renderMdx } from "@/lib/mdx";
import { extractToc } from "@/lib/toc";
import CaseStudyLayout from "@/components/case-study-layout";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const entries = await Promise.all(
    locales.map(async (locale) => {
      const projects = await getProjects(locale);
      return projects.map((project) => ({
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

  const source = await getProjectContent(locale, slug);
  const toc = source ? extractToc(source) : [];
  const mdx = source ? await renderMdx(source) : null;

  const labels =
    locale === "fr"
      ? {
          sanitized: "Anonymise",
          public: "Public",
          toc: "Sommaire",
          comingSoon: "Case study detaille disponible bientot."
        }
      : {
          sanitized: "Sanitized",
          public: "Public",
          toc: "Contents",
          comingSoon: "Detailed case study coming soon."
        };

  return (
    <div className="space-y-10">
      <header className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
          {project.confidentiality === "sanitized"
            ? labels.sanitized
            : labels.public}
        </p>
        <h1 className="font-display text-3xl text-white sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-base text-foreground/70">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} tone="accent">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        {project.metrics && project.metrics.length > 0 ? (
          <div className="flex flex-wrap gap-3 text-sm text-foreground/70">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-white/10 px-3 py-1"
              >
                {metric}
              </span>
            ))}
          </div>
        ) : null}
      </header>

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
    </div>
  );
}
