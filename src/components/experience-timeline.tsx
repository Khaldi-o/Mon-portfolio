"use client";

import Link from "next/link";
import { useState } from "react";
import type { Experience } from "@/types/content";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechBadge from "@/components/tech-badge";
import { useRecruiterMode } from "@/components/recruiter-mode-provider";

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
  const { enabled } = useRecruiterMode();

  return (
    <div className="relative space-y-8">
      <span className="absolute left-3 top-0 hidden h-full w-px bg-white/10 md:block" />
      {items.map((item, index) => (
        <div key={item.role + index} className="relative md:pl-10">
          <span className="absolute left-0 top-8 hidden h-3 w-3 rounded-full border border-white/20 bg-[color:var(--surface-strong)] md:block" />
          <ExperienceCard
            item={item}
            recruiter={enabled}
            labels={labels}
            projectMap={projectMap}
            basePath={basePath}
          />
        </div>
      ))}
    </div>
  );
}

function ExperienceCard({
  item,
  recruiter,
  labels,
  projectMap,
  basePath
}: {
  item: Experience;
  recruiter: boolean;
  labels: {
    clientPrefix: string;
    impact: string;
    tech: string;
    highlights: string;
  };
  projectMap: Record<string, string>;
  basePath: string;
}) {
  const [value, setValue] = useState(recruiter ? "impact" : "tech");

  return (
    <Card className="border-white/10">
      <CardContent className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              {item.dates}
            </p>
            <h3 className="text-xl font-semibold text-white">
              {item.role} · {item.company}
            </h3>
            {item.client ? (
              <p className="text-sm text-foreground/70">
                {labels.clientPrefix} {item.client}
              </p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            {item.stackTags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>
        </div>

        <p className="text-sm text-foreground/70">{item.context}</p>

        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="impact">{labels.impact}</TabsTrigger>
            <TabsTrigger value="tech">{labels.tech}</TabsTrigger>
          </TabsList>
          <TabsContent value="impact">
            <ul className="space-y-2 text-sm text-foreground/80">
              {item.impactBullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="tech">
            <ul className="space-y-2 text-sm text-foreground/80">
              {item.techBullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        {item.relatedProjects.length > 0 ? (
          <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            {labels.highlights}
            <div className="mt-2 flex flex-wrap gap-2 text-xs normal-case tracking-normal text-foreground/80">
              {item.relatedProjects.map((slug) => (
                <Link
                  key={slug}
                  href={`${basePath}/${slug}`}
                  className="rounded-full border border-white/10 px-3 py-1 transition hover:border-white/30 hover:text-white"
                >
                  {projectMap[slug] ?? slug}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
