import Image from "next/image";
import { cn } from "@/lib/utils";

const logoMap: Record<string, string> = {
    Docker: "/images/technos/Docker_Logo.png",
    React: "/images/technos/ReactJs_Logo.png",
    SQL: "/images/technos/sql_logo.png",
    "Power BI": "/images/technos/Power_BI.png",
    QlikSense: "/images/technos/QlikSense_Logo.png",
    Dataiku: "/images/technos/Dataiku_logo.png",
    "Vue.js": "/images/technos/Vue.js_Logo.png",
    VueJS: "/images/technos/Vue.js_Logo.png",
    ETL: "/images/technos/ETL_Logo.png",
    "Data Modeling": "/images/technos/Data_modelling_logo.png",
};

const fallbackLogo = "/images/technos/generique.svg";

export default function TechStackGrid({ items }: { items: string[] }) {
    return (
        <div className="flex flex-wrap items-center gap-5 md:gap-8">
            {items.map((item) => {
                const logoSrc = logoMap[item] || fallbackLogo;

                return (
                    <div
                        key={item}
                        className="group flex flex-col items-center gap-2.5 transition-transform hover:-translate-y-1"
                    >
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-2.5 shadow-sm backdrop-blur-sm transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] md:h-16 md:w-16">
                            <Image
                                src={logoSrc}
                                alt={item}
                                width={48}
                                height={48}
                                className={cn(
                                    "h-full w-full object-contain transition-all duration-300 group-hover:scale-110",
                                    logoSrc === fallbackLogo && "opacity-50 grayscale group-hover:grayscale-0"
                                )}
                            />
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-cyan-400">
                            {item}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
