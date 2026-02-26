import Image from "next/image";
import { cn } from "@/lib/utils";

type Impact = {
  title: string;
  description: string;
};

// Map illustrations to index or title if possible, but since title varies by locale, we might need a fixed order or pass type.
// For now, let's assume the order corresponds to: Problem -> Action -> Result (or similar logical flow).
// Actually, looking at page.tsx, it's "Problem -> Action -> Result".
// Let's use:
// 1. Pipeline.png (Problem/Process?) - Maybe Pipeline for Action
// 2. Dashboard.png (Result/Visualization?)
// 3. kpi.png (Result/Metrics?)

// Let's assign them by index for simplicity as they are generic "Impact" illustrations.
const illustrations = [
  "/images/generic/pipeline.png", // Action / Process
  "/images/generic/Dashboard.png", // Visualization
  "/images/generic/kpi.png"       // Metric
];

export default function ImpactGrid({ items }: { items: Impact[] }) {
  return (
    <div className="relative group/carousel">
      {/* Scrollable Container */}
      <div className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory">
        {items.map((item, index) => {
          const imageSrc = illustrations[index % illustrations.length];

          return (
            <div
              key={index}
              className="group relative h-full min-w-[300px] flex-shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 md:min-w-[calc(33.333%-1rem)] xl:min-w-[calc(25%-1.125rem)]"
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-xl" />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Border Gradient Line */}
              <div className="absolute inset-0 z-0 rounded-3xl p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-cyan-500/50 via-transparent to-transparent" />

              <div className="mb-6 flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-black/20 p-4 shadow-inner">
                <Image
                  src={imageSrc}
                  alt={item.title}
                  width={200}
                  height={160}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-lg font-medium leading-relaxed text-white">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fade indicators */}
      <div className="absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
    </div>
  );
}
