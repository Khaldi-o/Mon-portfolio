import Link from "next/link";
import { getContact, getExperiences, getHomeData, getProjects } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import HomeHero from "@/components/home-hero";
import DataJourney from "@/components/data-journey";
import ProjectCard from "@/components/project-card";
import ImpactGrid from "@/components/impact-grid";
import ExperienceTimeline from "@/components/experience-timeline";
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
  const experiences = await getExperiences(locale);

  const labels =
    locale === "fr"
      ? {
        journeyEyebrow: "Data Journey",
        featuredEyebrow: "Featured",
        featuredTitle: "Projets sélectionnés",
        featuredDescription: "Des cas concrets BI, Dataiku, Azure et IA.",
        impactEyebrow: "Proof of Impact",
        impactTitle: "Problème → Action → Résultat",
        impactDescription:
          "Un format court pour capturer les gains métiers.",
        experienceEyebrow: "Career Path",
        experienceTitle: "Expériences professionnelles",
        experienceDescription: "Un parcours axé sur la valeur data et l'excellence technique.",
        experienceLabels: {
          clientPrefix: "Client :",
          impact: "Impact & Missions",
          tech: "Stack Technique",
          highlights: "Projets liés"
        },
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
        featuredEyebrow: "Featured",
        featuredTitle: "Selected projects",
        featuredDescription: "BI, Dataiku, Azure and AI case studies.",
        impactEyebrow: "Proof of Impact",
        impactTitle: "Problem → Action → Result",
        impactDescription: "A short format to capture business gains.",
        experienceEyebrow: "Career Path",
        experienceTitle: "Work Experience",
        experienceDescription: "A journey focused on data value and technical excellence.",
        experienceLabels: {
          clientPrefix: "Client:",
          impact: "Impact & Missions",
          tech: "Tech Stack",
          highlights: "Related Projects"
        },
        toolboxEyebrow: "Toolbox",
        toolboxTitle: "Stack & tools",
        toolboxDescription:
          "BI and data engineering tools chosen for reliability.",
        ctaEyebrow: "Available to chat",
        ctaTitle: "Ready to build your next data product?",
        ctaContact: "Contact",
        ctaCv: "Download CV"
      };

  const projectMap = Object.fromEntries(
    projects.map((p) => [p.slug, p.title])
  );

  return (
    <main className="container mx-auto max-w-8xl px-4 py-8 md:px-8 md:py-12">
      <div className="space-y-24">
        {/* 1. Hero */}
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

        {/* 2. Experience */}
        <Reveal>
          <section className="space-y-12">
            <SectionHeading
              eyebrow={labels.experienceEyebrow}
              title={labels.experienceTitle}
              description={labels.experienceDescription}
            />
            <ExperienceTimeline
              items={experiences}
              labels={labels.experienceLabels}
              projectMap={projectMap}
              basePath={`${base}/projects`}
            />
          </section>
        </Reveal>

        {/* 3. Data Journey */}
        <Reveal>
          <section className="space-y-12">
            <SectionHeading
              eyebrow={labels.journeyEyebrow}
              title=""
              description=""
            />
            <DataJourney steps={home.dataJourney} />
          </section>
        </Reveal>

        {/* 4. Featured Projects */}
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

        {/* 5. Toolbox */}
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

        {/* 6. Proof of Impact */}
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

        {/* 7. CTA */}
        <Reveal>
          <section className="flex flex-col items-center justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 text-center md:flex-row md:items-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                {labels.ctaEyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {labels.ctaTitle}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400">
                <Link href={`mailto:${contact.email}`}>{labels.ctaContact}</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="border border-white/10 hover:bg-white/5">
                <Link href={contact.cv}>{labels.ctaCv}</Link>
              </Button>
            </div>
          </section>
        </Reveal>
      </div>
    </main >
  );
}
