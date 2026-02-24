import Image from "next/image";
import SectionTitle from "@/components/section-title";
import TechStackGrid from "@/components/tech-stack-grid";

export default function ProjectDetailSqte({ locale }: { locale: string }) {
    const isFr = locale === "fr";

    return (
        <div className="space-y-20">
            {/* About the Association */}
            <section className="space-y-5">
                <SectionTitle>{isFr ? "L'association" : "The Association"}</SectionTitle>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
                    {isFr
                        ? "\"Sans Que Tu Erres\" (SQTE) est une association socio-culturelle fondée en 2018 à Mantes-La-Ville (78). Elle accompagne et forme un public divers dans la création et la production de contenus autour de trois pôles : Audiovisuel, Musique et Média. Sa mission : transmettre le savoir-faire artistique, développer la confiance en soi et accompagner ses membres dans leurs projets créatifs."
                        : "\"Sans Que Tu Erres\" (SQTE) is a socio-cultural association founded in 2018 in Mantes-La-Ville, France. It trains and supports diverse audiences in content creation and production across three pillars: Audiovisual, Music, and Media. Its mission: transmit artistic expertise, build self-confidence, and support members in their creative projects."}
                </p>
                <div className="flex flex-wrap gap-3">
                    {[
                        { fr: "🎬 Audiovisuel", en: "🎬 Audiovisual" },
                        { fr: "🎵 Musique", en: "🎵 Music" },
                        { fr: "📰 Média", en: "📰 Media" },
                    ].map((pole) => (
                        <span
                            key={pole.fr}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white"
                        >
                            {isFr ? pole.fr : pole.en}
                        </span>
                    ))}
                </div>
            </section>

            {/* Project Objective */}
            <section className="space-y-5">
                <SectionTitle>{isFr ? "Objectif du projet" : "Project Objective"}</SectionTitle>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/80">
                    {isFr
                        ? "Conception et développement d'un site internet vitrine pour centraliser la communication de l'association et renforcer sa visibilité en ligne."
                        : "Design and development of a showcase website to centralize the association's communication and strengthen its online presence."}
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {(isFr
                        ? [
                            "Promouvoir les dernières actualités et projets",
                            "Attirer de nouveaux adhérents",
                            "Développer les partenariats",
                            "Susciter des collaborations inter-associations",
                            "Faciliter les dons et le mécénat",
                        ]
                        : [
                            "Promote latest news and projects",
                            "Attract new members",
                            "Develop partnerships",
                            "Foster inter-association collaborations",
                            "Facilitate donations and sponsorships",
                        ]
                    ).map((objective) => (
                        <div
                            key={objective}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/80"
                        >
                            <span className="mr-2 text-cyan-400">→</span>
                            {objective}
                        </div>
                    ))}
                </div>
            </section>

            {/* Screenshot */}
            <section className="space-y-6">
                <SectionTitle>{isFr ? "Aperçu du site" : "Website Preview"}</SectionTitle>
                <div className="mx-auto mt-4 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
                    <Image
                        src="/images/projects/sqte/Home.jpg"
                        alt="SQTE - Page d'accueil"
                        width={900}
                        height={500}
                        className="w-full object-cover"
                    />
                </div>
            </section>

            {/* Tech Stack */}
            <section className="space-y-6">
                <SectionTitle>Stack technique</SectionTitle>
                <div className="mt-4">
                    <TechStackGrid items={["React"]} />
                    <div className="mt-6 flex flex-wrap gap-3">
                        {["Next.js", "Tailwind CSS"].map((tech) => (
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

            {/* Link Notice */}
            <div className="mx-auto max-w-2xl rounded-2xl border border-amber-500/20 bg-amber-500/5 px-8 py-5 text-center">
                <p className="text-sm text-amber-200/80">
                    {isFr
                        ? "🔗 Le site n'est pas encore mis en ligne par l'association. Le lien sera ajouté ici dès qu'il sera disponible."
                        : "🔗 The website has not yet been deployed by the association. The link will be added here as soon as it becomes available."}
                </p>
            </div>
        </div>
    );
}
