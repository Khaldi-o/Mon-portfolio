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
import { MoveRight, Mail, Linkedin, Github } from "lucide-react";
import CopyEmailCard from "@/components/copy-email-card";


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
        featuredEyebrow: "Projets",
        featuredTitle: "Projets sélectionnés",
        featuredDescription: "",
        impactEyebrow: "Certifications",
        impactTitle: "Certifications",
        impactDescription: "",
        experienceEyebrow: "Carrière",
        experienceTitle: "Expériences professionnelles",
        experienceDescription: "",
        experienceLabels: {
          clientPrefix: "Client :",
          impact: "Impact & Missions",
          tech: "Stack Technique",
          highlights: "Projets liés"
        },
        toolboxEyebrow: "Compétences",
        toolboxTitle: "Stack & outils",
        toolboxDescription: "",
        ctaEyebrow: "Disponible pour échanger",
        ctaTitle: "Prêt à construire votre prochain produit data ?",
        ctaContact: "Contact",
        ctaCv: "Télécharger CV"
      }
      : {
        journeyEyebrow: "Data Journey",
        featuredEyebrow: "Projects",
        featuredTitle: "Selected projects",
        featuredDescription: "",
        impactEyebrow: "Certifications",
        impactTitle: "Certifications",
        impactDescription: "",
        experienceEyebrow: "Career Path",
        experienceTitle: "Work Experience",
        experienceDescription: "",
        experienceLabels: {
          clientPrefix: "Client:",
          impact: "Impact & Missions",
          tech: "Tech Stack",
          highlights: "Related Projects"
        },
        toolboxEyebrow: "Toolbox",
        toolboxTitle: "Stack & tools",
        toolboxDescription: "",
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
            secondaryHref="#contact"
          />
        </Reveal>

        {/* 2. Experience */}
        <Reveal>
          <section id="experience" className="space-y-12 scroll-mt-24">
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
          <section id="journey" className="space-y-12 scroll-mt-24">
            <SectionHeading
              eyebrow={labels.journeyEyebrow}
              title="End-to-End Data Workflow"
              description=""
            />
            <DataJourney steps={home.dataJourney} />
          </section>
        </Reveal>

        {/* 4. Featured Projects */}
        <Reveal>
          <section id="projects" className="space-y-6 scroll-mt-24">
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
                    locale === "fr" ? "Voir le projet" : "View project"
                  }
                />
              ))}
            </div>

            <div className="flex justify-center pt-8">
              <Button asChild size="lg" variant="outline" className="group border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all rounded-2xl px-8">
                <Link href={`${base}/projects`} className="flex items-center gap-2">
                  <span>{locale === "fr" ? "Voir plus de projets" : "View more projects"}</span>
                  <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
                </Link>
              </Button>
            </div>
          </section>
        </Reveal>

        {/* 5. Toolbox */}
        <Reveal>
          <section id="toolbox" className="space-y-6 scroll-mt-24">
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
          <section id="certifications" className="space-y-6 scroll-mt-24">
            <SectionHeading
              eyebrow={labels.impactEyebrow}
              title={labels.impactTitle}
              description={labels.impactDescription}
            />
            <ImpactGrid items={home.impacts} />
          </section>
        </Reveal>

        {/* 7. CTA / Professional Contact Zone */}
        <Reveal>
          <section id="contact" className="space-y-12">
            <SectionHeading
              eyebrow="Contact"
              title={locale === "fr" ? "Contact" : "Contact"}
              description=""
            />
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5" />

              <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
                <div className="space-y-4 text-center lg:text-left">
                  <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400">
                    {labels.ctaEyebrow}
                  </p>
                  <h3 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    {locale === "fr" ? "Construisons ensemble" : "Let's build together"}
                  </h3>
                </div>

                <div className="flex flex-col gap-6 w-full max-w-md">
                  {/* Vertical Social Links */}
                  <div className="flex flex-col gap-4">
                    {/* Email */}
                    <CopyEmailCard email={contact.email} label="Email" />

                    {/* LinkedIn */}

                    <Link
                      href={contact.linkedin || "https://www.linkedin.com/in/omarkhaldi/"}
                      target="_blank"
                      className="group flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-[#0077b5]/30"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 transition-colors group-hover:bg-[#0077b5] group-hover:text-white">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">LinkedIn</span>
                        <span className="font-bold text-white group-hover:text-[#0077b5] transition-colors">linkedin.com/in/omarkhaldi</span>
                      </div>
                    </Link>

                    {/* GitHub */}
                    <Link
                      href={contact.github || "https://github.com/Khaldi-o"}
                      target="_blank"
                      className="group flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/30"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 transition-colors group-hover:bg-white group-hover:text-black">
                        <Github className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">GitHub</span>
                        <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">github.com/Khaldi-o</span>
                      </div>
                    </Link>
                  </div>

                  <div className="pt-4">
                    <Button asChild size="lg" variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 rounded-2xl px-8 transition-all hover:scale-[1.02]">
                      <Link href={contact.cv} target="_blank" rel="noopener noreferrer">
                        {labels.ctaCv}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main >
  );
}
