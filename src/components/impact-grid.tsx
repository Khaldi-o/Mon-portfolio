"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Impact = {
  title: string;
  description: string;
  badge?: string;
  image?: string;
  hasModal?: boolean;
};

export default function ImpactGrid({ items }: { items: Impact[] }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Navigation Arrows */}
      <div className="absolute -left-4 top-1/2 z-20 -translate-y-11 opacity-0 transition-opacity group-hover/carousel:opacity-100 hidden md:block">
        <button
          onClick={() => scroll("left")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md hover:bg-black/70 hover:border-purple-500/50 transition-all shadow-xl"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute -right-4 top-1/2 z-20 -translate-y-11 opacity-0 transition-opacity group-hover/carousel:opacity-100 hidden md:block">
        <button
          onClick={() => scroll("right")}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md hover:bg-black/70 hover:border-purple-500/50 transition-all shadow-xl"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {items.map((item, index) => {
          const imageSrc = item.image || "/images/generic/kpi.png";

          return (
            <div
              key={index}
              className={cn(
                "group relative h-full min-w-[300px] flex-shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 md:min-w-[340px] flex flex-col items-center text-center",
                item.hasModal && "cursor-pointer"
              )}
              onClick={() => {
                if (item.hasModal) {
                  setSelectedImage(imageSrc);
                }
              }}
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl" />
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Border Gradient Line */}
              <div className="absolute inset-0 z-0 rounded-3xl p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-purple-500/40 via-transparent to-transparent" />

              <div className="mb-6 flex w-full overflow-hidden rounded-2xl bg-black/40 shadow-inner relative h-48 md:h-56">
                <Image
                  src={imageSrc}
                  alt={item.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4 relative z-10 flex flex-col items-center">
                {item.badge && (
                  <span className="inline-block rounded-full bg-cyan-400 px-4 py-1.5 text-xs font-bold text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    {item.badge}
                  </span>
                )}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fade indicators */}
      <div className="absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
      <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity" />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Certification Full View"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
