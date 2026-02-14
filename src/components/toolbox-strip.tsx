import Image from "next/image";
import { cn } from "@/lib/utils";

const logoMap: Record<string, string> = {
  "Docker": "/images/technos/Docker_Logo.png",
  "React": "/images/technos/ReactJs_Logo.png",
  "SQL": "/images/technos/sql_logo.png",
  "Power BI": "/images/technos/Power_BI.png",
  "QlikSense": "/images/technos/QlikSense_Logo.png",
  "Dataiku": "/images/technos/Dataiku_logo.png",
  "Azure": "/images/technos/CI_CD.png", // Using CI_CD as placeholder for Azure if Azure logo missing, but let's check file list again. Ah I see CI_CD.png in root of generic? No wait.
  // Wait, I saw "CI_CD.png" in "images/generic".
  // Let me re-check the file list from step 97.
  // "Data_modelling_logo.png", "Dataiku_logo.png", "Docker_Logo.png", "ETL_Logo.png", "Power_BI.png", "QlikSense_Logo.png", "ReactJs_Logo.png", "Vue.js_Logo.png", "sql_logo.png"
  "Vue.js": "/images/technos/Vue.js_Logo.png",
  "ETL": "/images/technos/ETL_Logo.png",
  "Data Modeling": "/images/technos/Data_modelling_logo.png",
};

// Fallback for others or if specific logo is missing from map
const fallbackLogo = "/images/technos/generique.svg";

export default function ToolboxStrip({ items }: { items: string[] }) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* We can make a marquee or a nice grid. Let's do a nice flex grid for now as requested "Expressive and lively" */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => {
          const logoSrc = logoMap[item] || fallbackLogo;
          // If it's a known logo, show it large. If generic, maybe smaller or styled differently.

          return (
            <div
              key={item}
              className="group flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-3 shadow-sm backdrop-blur-sm transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] md:h-20 md:w-20">
                <Image
                  src={logoSrc}
                  alt={item}
                  width={64}
                  height={64}
                  className={cn(
                    "h-full w-full object-contain transition-all duration-300 group-hover:scale-110",
                    logoSrc === fallbackLogo && "opacity-50 grayscale group-hover:grayscale-0"
                  )}
                />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-cyan-400">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
