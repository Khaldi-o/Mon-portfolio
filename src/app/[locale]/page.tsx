import Link from "next/link";
import { getContact, getHomeData, getProjects } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import HomeHero from "@/components/home-hero";
import DataJourney from "@/components/data-journey";
import ProjectCard from "@/components/project-card";
import ImpactGrid from "@/components/impact-grid";
import ToolboxStrip from "@/components/toolbox-strip";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/reveal";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const base = `/${locale}`;
  const home = await getHomeData(locale);
  const projects = await getProjects(locale);
  const featured = projects.filter((project) => project.featured).slice(0, 4);
  const contact = await getContact(locale);
  const labels =
    locale === "fr"
      ? {
          journeyEyebrow: "Data Journey",
          journeyTitle: "Raw → Pipeline → Model → Dashboard → Decision",
          journeyDescription:
            "Chaque étape est conçue pour accélérer la décision et maximiser l’impact.",
          featuredEyebrow: "Featured",
          featuredTitle: "Projets sélectionnés",
          featuredDescription: "Des cas concrets BI, Dataiku, Azure et IA.",
          impactEyebrow: "Proof of Impact",
          impactTitle: "Problème → Action → Résultat",
          impactDescription:
            "Un format court pour capturer les gains métiers.",
          toolboxEyebrow: "Toolbox",
          toolboxTitle: "Stack & outils",
          toolboxDescription:
            "Des outils BI et data engineering choisis pour la fiabilité.",
          ctaEyebrow: "Disponible pour échanger",
          ctaTitle: "Prêt à construire votre prochain produit data ?",
          ctaContact: "Contact",
          ctaCv: "Télécharger CV"
        }
      : {
          journeyEyebrow: "Data Journey",
          journeyTitle: "Raw → Pipeline → Model → Dashboard → Decision",
          journeyDescription:
            "Each step is designed to accelerate decisions and impact.",
          featuredEyebrow: "Featured",
          featuredTitle: "Selected projects",
          featuredDescription: "BI, Dataiku, Azure and AI case studies.",
          impactEyebrow: "Proof of Impact",
          impactTitle: "Problem → Action → Result",
          impactDescription: "A short format to capture business gains.",
          toolboxEyebrow: "Toolbox",
          toolboxTitle: "Stack & tools",
          toolboxDescription:
            "BI and data engineering tools chosen for reliability.",
          ctaEyebrow: "Available to chat",
          ctaTitle: "Ready to build your next data product?",
          ctaContact: "Contact",
          ctaCv: "Download CV"
        };

  return (
    <div className="space-y-20">
      <Reveal>
        <HomeHero
          eyebrow={home.hero.eyebrow}
          title={home.hero.title}
          punchline={home.hero.punchline}
          ctaPrimary={home.hero.ctaPrimary}
          ctaSecondary={home.hero.ctaSecondary}
          primaryHref={`${base}/projects`}
          secondaryHref={`${base}/contact`}
        />
      </Reveal>

      <Reveal>
        <section className="space-y-6">
          <SectionHeading
            eyebrow={labels.journeyEyebrow}
            title={labels.journeyTitle}
            description={labels.journeyDescription}
          />
          <DataJourney steps={home.dataJourney} />
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-6">
          <SectionHeading
            eyebrow={labels.featuredEyebrow}
            title={labels.featuredTitle}
            description={labels.featuredDescription}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                href={`${base}/projects/${project.slug}`}
                highlight
                ctaLabel={
                  locale === "fr" ? "Voir le case study" : "View case study"
                }
              />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-6">
          <SectionHeading
            eyebrow={labels.impactEyebrow}
            title={labels.impactTitle}
            description={labels.impactDescription}
          />
          <ImpactGrid items={home.impacts} />
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-6">
          <SectionHeading
            eyebrow={labels.toolboxEyebrow}
            title={labels.toolboxTitle}
            description={labels.toolboxDescription}
          />
          <ToolboxStrip items={home.toolbox} />
        </section>
      </Reveal>

      <Reveal>
        <section className="flex flex-col items-start justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              {labels.ctaEyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {labels.ctaTitle}
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={`mailto:${contact.email}`}>{labels.ctaContact}</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={contact.cv}>{labels.ctaCv}</Link>
            </Button>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
