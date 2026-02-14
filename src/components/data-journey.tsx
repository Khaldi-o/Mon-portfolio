"use client";

import * as React from "react";
import { 
  Database, 
  Workflow, 
  BrainCircuit, 
  LayoutDashboard, 
  Lightbulb, 
  ArrowRight,
  CheckCircle2,
  Terminal,
  Cpu,
  LineChart 
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

// Technical details for each step to show "geeky" side
const techDetails: Record<string, any> = {
  Raw: {
    label: "Ingestion",
    code: "SELECT * FROM source_logs LIMIT 1000",
    tools: ["Postgres", "S3", "Kafka"],
    stats: "10TB+ Processed"
  },
  Pipeline: {
    label: "Transformation",
    code: "df.groupBy('user_id').agg(sum('amount'))",
    tools: ["dbt", "Spark", "Airflow"],
    stats: "99.9% SLI"
  },
  Model: {
    label: "Inference",
    code: "model.predict(X_test, batch_size=32)",
    tools: ["PyTorch", "sklearn", "MLflow"],
    stats: "AUC 0.92"
  },
  Dashboard: {
    label: "Visualization",
    code: "return plot(data, kind='bar', x='date')",
    tools: ["Tableau", "React", "D3.js"],
    stats: "<200ms Latency"
  },
  Decision: {
    label: "Action",
    code: "if risk_score > 0.8: trigger_alert()",
    tools: ["Slack API", "Jira", "Webhook"],
    stats: "$1.2M Impact"
  }
};

export default function DataJourney({ steps }: { steps: Step[] }) {
  const [active, setActive] = React.useState(0);
  
  // Auto-advance if not interacted with? Maybe better to keep it manual for exploration.
  // Let's stick to manual for now to allow reading.

  return (
    <div className="relative w-full">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 blur-3xl -z-10 rounded-3xl" />
      
      <div className="flex flex-col gap-12 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl md:p-12">
        {/* Pipeline Visualizer */}
        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row md:gap-4">
            
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-white/5 md:block">
             <motion.div 
               className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
               layoutId="pipeline-line"
               initial={{ width: "0%" }}
               animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
               transition={{ type: "spring", stiffness: 50, damping: 20 }}
             />
          </div>

          {steps.map((step, index) => {
            const Icon = iconMap[step.title] || Database;
            const isActive = index === active;
            const isCompleted = index < active;

            return (
              <div key={step.title} className="relative z-10 flex flex-col items-center gap-4">
                <button
                  onClick={() => setActive(index)}
                  className={cn(
                    "group relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-300 md:h-20 md:w-20",
                    isActive 
                      ? "border-cyan-400 bg-cyan-950/30 text-cyan-400 shadow-[0_0_30px_-5px_var(--color-cyan-500)] mobile-active-ring"
                      : isCompleted
                      ? "border-purple-500/50 bg-purple-900/10 text-purple-400"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/30 hover:bg-white/10"
                  )}
                >
                  <Icon className={cn("h-6 w-6 md:h-8 md:w-8", isActive && "animate-pulse")} />
                  
                  {/* Status Indicator */}
                  <div className={cn(
                    "absolute -right-1 -top-1 h-3 w-3 rounded-full border border-black transition-colors",
                    isActive ? "bg-cyan-400" : isCompleted ? "bg-purple-500" : "bg-white/10"
                  )} />
                </button>
                
                <span className={cn(
                  "text-xs font-bold uppercase tracking-wider transition-colors md:text-sm",
                  isActive ? "text-cyan-400" : "text-muted-foreground"
                )}>
                  {step.title}
                </span>
                
                {/* Mobile Connecting Line (Vertical) - Handled via flex gap mostly, maybe add a line later if needed */}
              </div>
            );
          })}
        </div>

        {/* Active Step Details */}
        <div className="grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-cyan-400">0{active + 1}</span>
                            <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                                {steps[active].title}
                            </h3>
                        </div>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            {steps[active].description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {techDetails[steps[active].title]?.tools.map((tool: string) => (
                            <span key={tool} className="rounded px-2.5 py-1 text-xs font-medium bg-white/5 text-white border border-white/10">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Geeky Metric/Code Block */}
            <AnimatePresence mode="wait">
                 <motion.div
                    key={`details-${active}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 p-1"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
                    
                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <div className="flex gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500/20" />
                            </div>
                            <span className="font-mono text-[10px] text-muted-foreground">
                                {techDetails[steps[active].title]?.label}.py
                            </span>
                        </div>
                        
                        <div className="font-mono text-sm text-cyan-300">
                             <span className="text-purple-400">def</span> <span className="text-yellow-200">process_step</span>():
                             <br />
                             &nbsp;&nbsp;<span className="text-muted-foreground"># {techDetails[steps[active].title]?.label} logic</span>
                             <br />
                             &nbsp;&nbsp;<span className="text-white">{techDetails[steps[active].title]?.code}</span>
                        </div>

                        <div className="mt-4 flex items-center gap-4 rounded-lg bg-cyan-950/10 p-3 border border-cyan-500/10">
                            <ActivityIcon type={steps[active].title} className="h-5 w-5 text-cyan-400" />
                            <div>
                                <div className="text-[10px] uppercase text-muted-foreground">Performance Metric</div>
                                <div className="font-mono text-sm font-bold text-white">
                                    {techDetails[steps[active].title]?.stats}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ActivityIcon({ type, className }: { type: string, className?: string }) {
    switch (type) {
        case 'Raw': return <Database className={className} />;
        case 'Pipeline': return <Terminal className={className} />;
        case 'Model': return <Cpu className={className} />;
        case 'Dashboard': return <LineChart className={className} />;
        case 'Decision': return <CheckCircle2 className={className} />;
        default: return <ArrowRight className={className} />;
    }
}
