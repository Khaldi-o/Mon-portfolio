"use client";

import * as React from "react";
import {
  Database,
  Workflow,
  BrainCircuit,
  LayoutDashboard,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  BarChart3,
  Target
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

const iconMap: Record<string, any> = {
  Raw: Database,
  Pipeline: Workflow,
  Model: BrainCircuit,
  Dashboard: LayoutDashboard,
  Decision: Lightbulb,
};

const stepColors: Record<string, string> = {
  Raw: "from-purple-500 to-purple-700",
  Pipeline: "from-blue-500 to-blue-700",
  Model: "from-green-500 to-green-700",
  Dashboard: "from-yellow-400 to-yellow-600",
  Decision: "from-red-500 to-red-700",
};

const stepTextColors: Record<string, string> = {
  Raw: "text-purple-400",
  Pipeline: "text-blue-400",
  Model: "text-green-400",
  Dashboard: "text-yellow-400",
  Decision: "text-red-400",
};

const stepBgColors: Record<string, string> = {
  Raw: "bg-purple-500/10 border-purple-500/20",
  Pipeline: "bg-blue-500/10 border-blue-500/20",
  Model: "bg-green-500/10 border-green-500/20",
  Dashboard: "bg-yellow-500/10 border-yellow-500/20",
  Decision: "bg-red-500/10 border-red-500/20",
};

const techDetails: Record<string, any> = {
  Raw: {
    stack: ["Python", "SQL", "Apache Spark (Streaming)", "Azure Blob Storage", "Azure Data Factory", "SSIS"],
    scope: ["Ingestion", "Batch & Streaming", "Data profiling", "Schema validation", "Raw zone"],
    icon: Database
  },
  Pipeline: {
    stack: ["Apache Spark (Batch)", "Python", "SQL", "Dataiku", "SSIS", "Azure Data Factory"],
    scope: ["ETL / ELT", "Data cleaning", "Transformations", "Business rules", "Silver / Gold tables"],
    icon: Workflow
  },
  Model: {
    stack: ["Python", "SQL", "DAX", "MLflow", "FastAPI"],
    scope: ["Feature engineering", "KPIs", "Scoring", "Aggregations", "Training / Inference"],
    icon: BrainCircuit
  },
  Dashboard: {
    stack: ["Power BI", "Qlik Sense", "DAX", "SQL"],
    scope: ["Data visualization", "KPIs", "Exploration", "Monitoring", "Decision support"],
    icon: LayoutDashboard
  },
  Decision: {
    stack: ["Power BI", "FastAPI", "React", "Azure SQL"],
    scope: ["Insights", "Business actions", "Monitoring", "Optimization", "Impact"],
    icon: Lightbulb
  }
};

export default function DataJourney({ steps }: { steps: Step[] }) {
  const [active, setActive] = React.useState(0);
  const activeStep = steps[active].title;
  const activeDetail = techDetails[activeStep];
  const colorClass = stepTextColors[activeStep];

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 blur-3xl -z-10 rounded-3xl" />

      <div className="flex flex-col gap-10 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl md:p-12">
        {/* Pipeline Navigation */}
        <div className="relative flex flex-wrap items-center justify-center gap-4 md:flex-row md:justify-between md:gap-2">

          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-white/5 md:block">
            <motion.div
              className={cn("h-full bg-gradient-to-r", stepColors[activeStep])}
              animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = iconMap[step.title] || Database;
            const isActive = index === active;
            const isCompleted = index < active;
            const currentStepColor = stepColors[step.title];

            return (
              <div key={step.title} className="relative z-10 flex flex-col items-center gap-3">
                <button
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300 md:h-20 md:w-20",
                    isActive
                      ? cn("border-white/20 bg-gradient-to-br text-white shadow-lg", currentStepColor)
                      : isCompleted
                        ? "border-white/10 bg-white/5 text-white/40"
                        : "border-white/5 bg-white/5 text-white/20 hover:border-white/20 hover:text-white/40"
                  )}
                >
                  <Icon className={cn("h-6 w-6 md:h-8 md:w-8", isActive && "scale-110 transition-transform")} />
                </button>

                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest transition-colors md:text-xs",
                  isActive ? stepTextColors[step.title] : "text-white/20"
                )}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Blueprint Panel */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-2 lg:gap-10"
            >
              {/* Left Column: Stack */}
              <div className={cn("rounded-2xl border p-6 transition-colors md:p-8", stepBgColors[activeStep])}>
                <div className="mb-6 flex items-center gap-3">
                  <div className={cn("flex h-8 w-8 items-center justify-center rounded-lg bg-white/10", colorClass)}>
                    <Layers className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Stack</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeDetail.stack.map((item: string) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Scope */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-cyan-400">
                    <Target className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/90">Scope</h4>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {activeDetail.scope.map((item: string) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 transition-all hover:border-white/10"
                    >
                      <div className={cn("h-1.5 w-1.5 rounded-full shrink-0", colorClass.replace("text-", "bg-"))} />
                      <span className="text-sm font-medium text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
