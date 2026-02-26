"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Experience } from "@/types/content";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechBadge from "@/components/tech-badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function ExperienceTimeline({
  items,
  labels,
  projectMap,
  basePath
}: {
  items: Experience[];
  labels: {
    clientPrefix: string;
    impact: string;
    tech: string;
    highlights: string;
  };
  projectMap: Record<string, string>;
  basePath: string;
}) {
  return (
    <div className="relative space-y-12">
      {/* Removed the left timeline border to allow true centering */}
      <div className="flex flex-col items-center space-y-12">
        {items.map((item, index) => (
          <div key={item.role + index} className="w-full relative flex justify-center">
            <ExperienceCard
              item={item}
              labels={labels}
              projectMap={projectMap}
              basePath={basePath}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({
  item,
  labels,
  projectMap,
  basePath
}: {
  item: Experience;
  labels: {
    clientPrefix: string;
    impact: string;
    tech: string;
    highlights: string;
  };
  projectMap: Record<string, string>;
  basePath: string;
}) {
  const [value, setValue] = useState("impact");

  return (
    <Card className="w-full max-w-4xl border-white/10 bg-white/5 transition-all hover:border-white/20">
      <CardContent className="space-y-8 p-6 md:p-10">
        {/* Centered Header with logo on the left of text */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
            {item.companyLogo && (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white/10 p-2 border border-white/10 shadow-inner md:h-20 md:w-20">
                <Image
                  src={item.companyLogo}
                  alt={item.company}
                  fill
                  className="object-contain p-2.5"
                />
              </div>
            )}
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400/80">
                {item.dates}
              </p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {item.role}
              </h3>
              <p className="text-lg font-medium text-foreground/80 sm:text-xl">
                {item.company} {item.client ? `· ${labels.clientPrefix} ${item.client}` : ""}
              </p>
            </div>
          </div>
        </div>

        <Tabs value={value} onValueChange={setValue} className="w-full max-w-2xl mx-auto">
          <TabsList className="h-11 w-full justify-start rounded-xl border border-white/10 bg-black/20 p-1">
            <TabsTrigger
              value="impact"
              className="flex-1 rounded-lg px-6 py-2 transition-all data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] data-[state=active]:ring-1 data-[state=active]:ring-cyan-500/30"
            >
              {labels.impact}
            </TabsTrigger>
            <TabsTrigger
              value="tech"
              className="flex-1 rounded-lg px-6 py-2 transition-all data-[state=active]:bg-cyan-500/10 data-[state=active]:text-cyan-400 data-[state=active]:shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)] data-[state=active]:ring-1 data-[state=active]:ring-cyan-500/30"
            >
              {labels.tech}
            </TabsTrigger>
          </TabsList>

          <div className="mt-8 min-h-[140px]">
            <TabsContent value="impact" className="focus-visible:outline-none">
              <ul className="space-y-4">
                {item.impactBullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm leading-relaxed text-foreground/80 md:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="tech" className="focus-visible:outline-none">
              <div className="flex flex-wrap justify-center gap-3">
                {item.stackTags.map((tag) => (
                  <TechBadge
                    key={tag}
                    name={tag}
                    className="border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/5"
                  />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>

        {item.relatedProjects.length > 0 ? (
          <div className="flex flex-col items-center space-y-4 pt-4 border-t border-white/5">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
              {labels.highlights}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {item.relatedProjects.map((slug) => (
                <Link
                  key={slug}
                  href={`${basePath}/${slug}`}
                  className="group flex flex-row items-center gap-2 rounded-xl bg-white text-black px-5 py-2.5 text-xs font-bold transition-all hover:bg-white/90 hover:scale-105 shadow-md"
                >
                  {projectMap[slug] ?? slug}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
