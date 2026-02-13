import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Boxes,
  Cloud,
  Cpu,
  Database,
  FileText,
  Gauge,
  GitBranch,
  Layers,
  Package,
  Server,
  Sparkles,
  Table2,
  Terminal,
  Workflow,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const directMap: Record<string, LucideIcon> = {
  SQL: Database,
  "Power BI": BarChart3,
  QlikSense: BarChart3,
  Dataiku: Boxes,
  Azure: Cloud,
  Python: Terminal,
  ETL: Workflow,
  Docker: Package,
  "CI/CD": GitBranch,
  Git: GitBranch,
  Postgres: Database,
  "SQL Server": Server,
  "OpenAI API": Sparkles,
  OpenCV: Cpu,
  MediaPipe: Bot,
  TensorFlow: Cpu,
  DAX: FileText,
  "Data Modeling": Table2,
  "KPI Design": Gauge,
  "Power Automate": Workflow,
  React: Layers,
  VueJS: Layers,
  FastAPI: Zap,
  "Data Prep": Workflow
};

const matchRules: Array<[RegExp, LucideIcon]> = [
  [/sql/i, Database],
  [/power bi/i, BarChart3],
  [/qlik/i, BarChart3],
  [/dataiku/i, Boxes],
  [/azure|synapse|blob/i, Cloud],
  [/python/i, Terminal],
  [/etl|pipeline/i, Workflow],
  [/docker|container/i, Package],
  [/git|ci\/cd/i, GitBranch],
  [/postgres|mysql|database/i, Database],
  [/server/i, Server],
  [/openai|ai|ml/i, Sparkles],
  [/opencv|tensorflow|model/i, Cpu],
  [/dax|kpi/i, Gauge],
  [/dashboard|bi/i, BarChart3],
  [/api/i, Zap],
  [/react|vue/i, Layers]
];

function pickIcon(name: string): LucideIcon {
  if (directMap[name]) {
    return directMap[name];
  }

  const match = matchRules.find(([pattern]) => pattern.test(name));
  return match ? match[1] : Database;
}

export default function TechIcon({
  name,
  className
}: {
  name: string;
  className?: string;
}) {
  const Icon = pickIcon(name);
  return <Icon className={cn("h-4 w-4", className)} aria-hidden />;
}
