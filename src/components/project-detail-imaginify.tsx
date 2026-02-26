import Image from "next/image";
import { Github } from "lucide-react";
import SectionTitle from "@/components/section-title";
import TechStackGrid from "@/components/tech-stack-grid";

const steps = [
    {
        number: "01",
        title: { fr: "Authentification", en: "Authentication" },
        description: {
            fr: "L'utilisateur crée un compte ou se connecte pour accéder aux fonctionnalités de génération de contenu.",
            en: "The user creates an account or logs in to access content generation features.",
        },
        image: "/images/projects/imaginify/auth.png",
        imageAlt: "Imaginify - Authentification",
    },
    {
        number: "02",
        title: { fr: "Formulaire de génération", en: "Generation Form" },
        description: {
            fr: "L'utilisateur renseigne le réseau social cible, le sujet, le style, la langue et la taille du contenu souhaité.",
            en: "The user fills in the target social network, subject, style, language, and desired content size.",
        },
        image: "/images/projects/imaginify/forms.png",
        imageAlt: "Imaginify - Formulaire de génération",
    },
    {
        number: "03",
        title: { fr: "Résultat généré", en: "Generated Result" },
        description: {
            fr: "L'application génère du texte et des visuels pour 6 posts. L'utilisateur peut prévisualiser, sauvegarder et choisir lequel publier.",
            en: "The application generates text and visuals for 6 posts. Users can preview, save, and choose which one to publish.",
        },
        image: "/images/projects/imaginify/result.png",
        imageAlt: "Imaginify - Résultat généré",
    },
];

export default function ProjectDetailImaginify({ locale }: { locale: string }) {
    const isFr = locale === "fr";

    return (
        <div className="space-y-20">
            {/* Intro */}
            <section className="space-y-6 flex flex-col items-center text-center">
                <SectionTitle>{isFr ? "Objectif du projet" : "Project Objective"}</SectionTitle>
                <p className="max-w-3xl text-base leading-relaxed text-foreground/80">
                    {isFr
                        ? "Imaginify est une application fullStack (React + FastAPI) qui permet de générer rapidement du contenu réseaux sociaux à partir d'un besoin utilisateur. L'objectif est de simplifier la création de posts professionnels et engageants en quelques clics."
                        : "Imaginify is a full-stack application (React + FastAPI) that enables rapid generation of social media content — text and visuals — from a user brief. The goal is to simplify the creation of professional, engaging posts in just a few clicks."}
                </p>
            </section>

            {/* Methodology */}
            <section className="space-y-8 flex flex-col items-center">
                <SectionTitle>{isFr ? "Méthodologie" : "Methodology"}</SectionTitle>

                <div className="mt-4 space-y-16">
                    {steps.map((step) => (
                        <div key={step.number} className="space-y-6">
                            {/* Step Header */}
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-base font-bold text-cyan-400">
                                    {step.number}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-white">
                                        {isFr ? step.title.fr : step.title.en}
                                    </h3>
                                    <p className="max-w-2xl text-sm leading-relaxed text-foreground/70">
                                        {isFr ? step.description.fr : step.description.en}
                                    </p>
                                </div>
                            </div>

                            {/* Step Image — constrained & centered */}
                            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
                                <Image
                                    src={step.image}
                                    alt={step.imageAlt}
                                    width={900}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="space-y-6 flex flex-col items-center">
                <SectionTitle>Stack technique</SectionTitle>
                <div className="mt-4 flex flex-col items-center">
                    <TechStackGrid items={["React", "Docker"]} />
                    {/* Additional items without logos */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {["Python", "FastAPI", "GenAI"].map((tech) => (
                            <div
                                key={tech}
                                className="group flex flex-col items-center gap-2.5 transition-transform hover:-translate-y-1"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-2.5 text-lg font-bold text-foreground/40 shadow-sm backdrop-blur-sm transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] md:h-16 md:w-16">
                                    {tech.charAt(0)}
                                </div>
                                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-cyan-400">
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GitHub CTA */}
            <div className="flex justify-center">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:from-white/10 hover:to-white/15 hover:shadow-lg hover:-translate-y-0.5"
                >
                    <Github className="h-5 w-5" />
                    {isFr ? "Voir le projet sur GitHub" : "View project on GitHub"}
                </a>
            </div>
        </div>
    );
}
