"use client";

import * as React from "react";
import { BarChart3, Database, Gauge, Table2, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

export default function DataJourney({ steps }: { steps: Step[] }) {
  const [active, setActive] = React.useState(0);
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Raw: Database,
    Pipeline: Workflow,
    Model: Table2,
    Dashboard: BarChart3,
    Decision: Gauge
  };

  return (
    <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:grid-cols-[2fr_1fr]">
      <div className="flex flex-wrap gap-3">
        {steps.map((step, index) => {
          const Icon = iconMap[step.title];
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition",
                index === active
                  ? "border-transparent bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)] text-[#05080d]"
                  : "border-white/10 text-foreground/70 hover:border-white/30 hover:text-white"
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
              {step.title}
            </button>
          );
        })}
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-foreground/80">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {steps[active]?.title}
        </p>
        <p className="mt-3 text-base text-white">
          {steps[active]?.description}
        </p>
      </div>
    </div>
  );
}
