import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { Info } from "lucide-react";

interface ProjectDetailBiDashboardsProps {
    locale: string;
}

const DashboardImage = ({ src, alt, className = "", aspect = "aspect-auto" }: { src: string; alt: string; className?: string; aspect?: string }) => (
    <div className={`mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10 transition-all duration-500 hover:shadow-cyan-500/20 ${className}`}>
        <div className={`relative group ${aspect}`}>
            {/* Subtle glow/blur effect around the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
        </div>
    </div>
);

export default function ProjectDetailBiDashboards({ locale }: { locale: string }) {
    const isFr = locale === "fr";

    const content = {
        header: {
            eyebrow: isFr ? "PROJETS DATA" : "DATA PROJECTS",
            description: isFr
                ? "Une sélection de quelques projets en Data Engineering, Analytics et BI."
                : "A selection of projects in Data Engineering, Analytics, and BI."
        },
        warning: isFr
            ? "Les données présentées sont anonymisées et simulées à des fins de démonstration."
            : "The data presented is anonymized and simulated for demonstration purposes.",
        project1: {
            title: isFr ? "PROJET 1 — Pilotage des sinistres (Qlik Sense / Oracle)" : "PROJECT 1 — Claims Steering (Qlik Sense / Oracle)",
            contextTitle: isFr ? "Contexte et objectif" : "Context and Objective",
            contextDesc: isFr
                ? "Mise en place d’un socle de données centralisé et restitution de tableaux de de bord Qlik sense pour le pilotage technique et le suivi des KPIs liés aux sinistres."
                : "Implementation of a centralized data foundation and Qlik Sense dashboards for technical steering and tracking of claims-related KPIs.",
            missionsTitle: isFr ? "Missions :" : "Missions:",
            missions: isFr ? [
                "Construction du socle de données sous Oracle (structuration, normalisation des formats, règles de calcul)",
                "Développement des dashboards Qlik Sense à partir du socle Oracle",
                "Développement de scripts Qlik : chargement init (chargement complet) et delta (chargements incrémentaux), transformation, aggrégation, etc.",
                "Fiabiliser les indicateurs, harmoniser les calculs et améliorer la lisibilité des tableaux de bord pour les équipes métier."
            ] : [
                "Construction of the data foundation under Oracle (structuring, format normalization, calculation rules)",
                "Development of Qlik Sense dashboards from the Oracle foundation",
                "Development of Qlik scripts: init load (full load) and delta (incremental loads), transformation, aggregation, etc.",
                "Reliability of indicators, harmonization of calculations, and improvement of dashboard readability for business teams."
            ]
        },
        project2: {
            title: isFr ? "PROJET 2 — Suivi des flux passagers (Aéroports de Paris)" : "PROJECT 2 — Passenger Flow Tracking (Aéroports de Paris)",
            contextTitle: isFr ? "Contexte" : "Context",
            contextDesc: isFr
                ? "Projet de mise en place d’une solution de prédiction et suivi des flux passagers pour le pilotage opérationnel des zones des aéroports de paris"
                : "Project to implement a solution for predicting and tracking passenger flows for the operational steering of Paris airport zones",
            pipeline: {
                title: isFr ? "Architecture & Pipeline Data" : "Architecture & Data Pipeline",
                desc: isFr
                    ? "Participation à la mise en place d’un pipeline de données pour la collecte, le streaming, le stockage et la transformation de données multi-sources. Les données sont stockées en couche Bronze, converties en Parquet, puis contrôlées via des règles de data profiling avant alimentation de la couche Silver, puis préparés pour alimenter la couche gold avec des données pour le model de prédiction , puis les outputs seront exploités dans la visualisation en tant réél."
                    : "Participation in setting up a data pipeline for collection, streaming, storage, and transformation of multi-source data. Data is stored in the Bronze layer, converted to Parquet, then controlled via data profiling rules before feeding the Silver layer, and then prepared to feed the Gold layer with data for the prediction model, then the outputs are exploited in real-time visualization."
            },
            streaming: {
                title: isFr ? "Ingestion & Streaming vers la BI" : "Ingestion & Streaming to BI",
                desc: isFr
                    ? "Participation à la mise en place d’un flux d’ingestion en quasi temps réel depuis Azure vers Power BI pour l’alimentation de dashboards opérationnels."
                    : "Participation in setting up a nearly real-time ingestion flow from Azure to Power BI for feeding operational dashboards."
            },
            dashboard: {
                title: isFr ? "Dashboard de pilotage des flux passagers" : "Passenger Flow Steering Dashboard",
                desc: isFr
                    ? "Conception d’un dashboard interactif représentant les zones de l’aéroport, avec suivi des volumes de passagers par zone et par période. Mise en place d’indicateurs de moyenne hebdomadaire et d’alertes sur les zones à forte affluence prévue."
                    : "Design of an interactive dashboard representing airport zones, with tracking of passenger volumes by zone and period. Implementation of weekly average indicators and alerts for high-traffic zones."
            }
        },
        project4: {
            title: isFr ? "PROJET 4 — Synthèse des feedbacks internes (Survey Analytics)" : "PROJECT 4 — Internal Feedback Synthesis (Survey Analytics)",
            contextTitle: isFr ? "Contexte" : "Context",
            contextDesc: isFr
                ? "Projet de BI et d’analyse de données pour la synthèse des feedbacks collaborateurs issus d’enquêtes internes récurrentes."
                : "BI and data analysis project for the synthesis of employee feedback from recurring internal surveys.",
            dashboard: {
                title: isFr ? "Analyse & Dashboard des enquêtes internes" : "Analysis & Internal Survey Dashboard",
                desc: isFr
                    ? "Mise en place d’un processus d’analyse des résultats d’enquêtes internes. Extraction de mots-clés récurrents à partir des textes via des scripts Python, formatage des données, puis consolidation des données dans des indicateurs de satisfaction, d’engagement et de participation. Le reporting est mis à jour de façon mensuelle via un processus planifié automatisé."
                    : "Implementation of an internal survey results analysis process. Extraction of recurring keywords from texts via Python scripts, data formatting, then consolidation of data into satisfaction, engagement, and participation indicators. Reporting is updated monthly via an automated scheduled process."
            }
        }
    };

    return (
        <div className="space-y-24 pb-20">
            {/* Header Section */}
            <header className="space-y-6 text-center">
                <div className="mx-auto inline-block">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase">
                        {content.header.eyebrow}
                    </h2>
                    <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                </div>
                <p className="mx-auto max-w-2xl text-xl font-medium text-white/90">
                    {content.header.description}
                </p>

                {/* Warning Message */}
                <div className="mx-auto max-w-fit flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 px-6 py-3 text-sm text-amber-200/80 backdrop-blur-sm">
                    <Info className="h-5 w-5 text-amber-400 shrink-0" />
                    <span>{content.warning}</span>
                </div>
            </header>

            {/* Project 1 */}
            <section className="space-y-12">
                <div className="text-center">
                    <SectionTitle>{content.project1.title}</SectionTitle>
                </div>

                <DashboardImage
                    src="/images/projects/data/img1.png"
                    alt="Pilotage des sinistres Dashboard"
                    className="max-w-3xl"
                />

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-6 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-white flex items-center justify-center lg:justify-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {content.project1.contextTitle}
                        </h3>
                        <p className="text-base leading-relaxed text-foreground/70">
                            {content.project1.contextDesc}
                        </p>
                    </div>
                    <div className="space-y-6 text-center lg:text-left">
                        <h3 className="text-xl font-semibold text-white flex items-center justify-center lg:justify-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {content.project1.missionsTitle}
                        </h3>
                        <ul className="space-y-3 inline-block text-left">
                            {content.project1.missions.map((mission, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-foreground/70">
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500/50" />
                                    {mission}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Two images in same line - ensuring same size with aspect ratio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DashboardImage
                        src="/images/projects/data/screen1.png"
                        alt="Dashboard Screen 1"
                        aspect="aspect-video"
                    />
                    <DashboardImage
                        src="/images/projects/data/screen2.png"
                        alt="Dashboard Screen 2"
                        aspect="aspect-video"
                    />
                </div>
            </section>

            {/* Project 2 */}
            <section className="space-y-16 pt-8 border-t border-white/5">
                <div className="text-center">
                    <SectionTitle>{content.project2.title}</SectionTitle>
                </div>

                <div className="space-y-10 flex flex-col items-center text-center">
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <h3 className="text-xl font-semibold text-white">
                            {content.project2.contextTitle}
                        </h3>
                        <p className="text-base leading-relaxed text-foreground/70">
                            {content.project2.contextDesc}
                        </p>
                    </div>

                    <div className="space-y-8 flex flex-col items-center">
                        <div className="w-full flex flex-col md:flex-row gap-4 items-center mb-4">
                            <div className="h-8 w-1 bg-cyan-500 rounded-full hidden md:block" />
                            <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
                                🔹 {content.project2.pipeline.title}
                            </h4>
                        </div>
                        <DashboardImage
                            src="/images/projects/data/architecture.png"
                            alt="Data Pipeline Architecture"
                            className="max-w-4xl"
                        />
                        <p className="text-sm leading-relaxed text-foreground/70 max-w-3xl bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                            {content.project2.pipeline.desc}
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2 items-start">
                        <div className="space-y-8">
                            <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
                                🔹 {content.project2.streaming.title}
                            </h4>
                            <DashboardImage
                                src="/images/projects/data/img2.png"
                                alt="Streaming Dashboard"
                                aspect="aspect-video"
                            />
                            <p className="text-sm leading-relaxed text-foreground/70">
                                {content.project2.streaming.desc}
                            </p>
                        </div>
                        <div className="space-y-8">
                            <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
                                🔹 {content.project2.dashboard.title}
                            </h4>
                            <DashboardImage
                                src="/images/projects/data/img3.png"
                                alt="Passenger Flow Dashboard"
                                aspect="aspect-video"
                            />
                            <p className="text-sm leading-relaxed text-foreground/70">
                                {content.project2.dashboard.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project 4 */}
            <section className="space-y-16 pt-8 border-t border-white/5">
                <div className="text-center">
                    <SectionTitle>{content.project4.title}</SectionTitle>
                </div>

                <div className="space-y-10 flex flex-col items-center text-center">
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <h3 className="text-xl font-semibold text-white">
                            {content.project4.contextTitle}
                        </h3>
                        <p className="text-base leading-relaxed text-foreground/70">
                            {content.project4.contextDesc}
                        </p>
                    </div>

                    <div className="space-y-8 flex flex-col items-center">
                        <div className="w-full flex flex-col items-center mb-4">
                            <h4 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
                                🔹 {content.project4.dashboard.title}
                            </h4>
                        </div>
                        <DashboardImage
                            src="/images/projects/data/img4.png"
                            alt="Internal Feedback Dashboard"
                            className="max-w-4xl"
                        />
                        <p className="text-sm leading-relaxed text-foreground/70 max-w-3xl bg-white/5 p-6 rounded-2xl border border-white/10">
                            {content.project4.dashboard.desc}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
