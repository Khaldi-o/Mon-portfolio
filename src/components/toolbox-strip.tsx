import Image from "next/image";
import { cn } from "@/lib/utils";

const logoMap: Record<string, string> = {
  "Docker": "/images/technos/Docker_Logo.png",
  "React": "/images/technos/ReactJs_Logo.png",
  "SQL": "/images/technos/sql_logo.png",
  "Power BI": "/images/technos/Power_BI.png",
  "QlikSense": "/images/technos/QlikSense_Logo.png",
  "Dataiku": "/images/technos/Dataiku_logo.png",
  "Azure": "/images/technos/Azure.png",
  "Python": "/images/technos/python.png",
  "Git": "/images/technos/git.png",
  "Spark": "/images/technos/spark.png",
  "Vue.js": "/images/technos/Vue.js_Logo.png",
  "ETL": "/images/technos/ETL_Logo.png",
  "Data Modeling": "/images/technos/Data_modelling_logo.png",
  "GenAI": "/images/technos/genai.png",
};

// Fallback for others or if specific logo is missing from map
const fallbackLogo = "/images/technos/generique.svg";

export default function ToolboxStrip({ items }: { items: string[] }) {
  // Split items into chunks of 7
  const rows = [];
  for (let i = 0; i < items.length; i += 7) {
    rows.push(items.slice(i, i + 7));
  }

  return (
    <div className="relative w-full overflow-hidden space-y-10">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {row.map((item) => {
            const logoSrc = logoMap[item] || fallbackLogo;

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
      ))}
    </div>
  );
}
