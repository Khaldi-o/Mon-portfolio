import Image from "next/image";
import { Github } from "lucide-react";
import SectionTitle from "@/components/section-title";
import TechStackGrid from "@/components/tech-stack-grid";

const steps = [
    {
        number: "01",
        title: { fr: "Ingestion", en: "Ingestion" },
        description: {
            fr: "L'utilisateur soumet un lien YouTube ou upload un fichier média (audio/vidéo) via l'interface React. La requête est envoyée au backend Python Flask (POST /api/transcribe).",
            en: "The user submits a YouTube link or uploads a media file (audio/video) through the React interface. The request is sent to the Python Flask backend (POST /api/transcribe).",
        },
        image: "/images/projects/factai/forms.png",
        imageAlt: "FactAI - Formulaire d'entrée",
    },
    {
        number: "02",
        title: { fr: "Pré-traitement & Transcription", en: "Processing & Transcription" },
        description: {
            fr: "Le média est converti en WAV via ffmpeg. Si la source est YouTube, l'audio est téléchargé via yt-dlp. La transcription est effectuée via Tafrigh + Wit.ai, avec segmentation intelligente des phrases pour structurer le contenu en idées cohérentes.",
            en: "Media is converted to WAV via ffmpeg. For YouTube sources, audio is downloaded via yt-dlp. Transcription is performed via Tafrigh + Wit.ai, with intelligent sentence segmentation to structure content into coherent ideas.",
        },
        image: "/images/projects/factai/table_verif.png",
        imageAlt: "FactAI - Tableau de vérification",
    },
    {
        number: "03",
        title: { fr: "Vérification & Score", en: "Verification & Score" },
        description: {
            fr: "Chaque affirmation extraite est vérifiée via Azure OpenAI. Les résultats sont présentés dans un tableau clair : Information, Vérification, Description (avec sources). Un score global de fiabilité est calculé et affiché.",
            en: "Each extracted claim is verified via Azure OpenAI. Results are displayed in a clear table: Information, Verification, Description (with sources). An overall reliability score is computed and displayed.",
        },
        image: "/images/projects/factai/score.png",
        imageAlt: "FactAI - Score de fiabilité",
    },
];

const techItems = ["React", "Docker"];
// Python, Flask, Azure OpenAI don't have logos in /images/technos/ - they'll use the fallback

export default function ProjectDetailFactai({ locale }: { locale: string }) {
    const isFr = locale === "fr";

    return (
        <div className="space-y-20">
            {/* Intro */}
            <section className="space-y-5">
                <SectionTitle>{isFr ? "Objectif du projet" : "Project Objective"}</SectionTitle>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
                    {isFr
                        ? "FactAI est une application de vérification de faits (Fact-checking) à partir d'un fichier média (audio/vidéo) ou d'une URL YouTube. L'utilisateur indique un lien YouTube ou uploade un fichier local, l'application transcrit le contenu, extrait les informations clés, puis affiche un tableau de vérification lisible avec un score de fiabilité."
                        : "FactAI is a fact-checking application that works from media files (audio/video) or YouTube URLs. The user provides a YouTube link or uploads a local file, the application transcribes the content, extracts key information, then displays a readable verification table with a reliability score."}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                        {isFr ? "Audio/Vidéo → Informations vérifiables" : "Audio/Video → Verifiable information"}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                        {isFr ? "Information → Vérification → Sources" : "Information → Verification → Sources"}
                    </span>
                </div>
            </section>

            {/* Methodology */}
            <section className="space-y-8">
                <SectionTitle>{isFr ? "Méthodologie" : "Methodology"}</SectionTitle>

                <div className="mt-4 space-y-16">
                    {steps.map((step) => (
                        <div key={step.number} className="space-y-6">
                            {/* Step Header */}
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-base font-bold text-cyan-400">
                                    {step.number}
                                </div>
                                <div className="space-y-2 pt-0.5">
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
            <section className="space-y-6">
                <SectionTitle>Stack technique</SectionTitle>
                <div className="mt-4">
                    <TechStackGrid items={["React", "Docker"]} />
                    {/* Additional items without logos */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        {["Python", "Flask", "Azure OpenAI"].map((tech) => (
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
