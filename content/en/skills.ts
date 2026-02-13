import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis",
    level: "Confirmed",
    items: ["SQL", "Exploration", "Data quality", "Storytelling", "Statistics"],
    highlights: ["Business analysis", "Actionable KPIs"],
  },
  {
    title: "BI & Dataviz",
    level: "Confirmed",
    items: ["Power BI", "QlikSense", "DAX", "Modeling", "Dashboard UX"],
    highlights: ["KPI design", "Production delivery"],
  },
  {
    title: "Data Engineering",
    level: "Junior+",
    items: [
      "Azure Synapse/Blob",
      "ETL",
      "Git",
      "Docker",
      "CI/CD",
      "SQL Server",
      "Postgres"
    ],
    highlights: ["Robust pipelines", "Automation"],
  },
  {
    title: "Dataiku",
    level: "Confirmed",
    items: ["Recipes", "Automation", "Monitoring", "Data prep"],
    highlights: ["Industrialization", "Flow quality"],
  },
  {
    title: "AI & Prototyping",
    level: "Junior",
    items: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "OpenAI API"],
    highlights: ["AI curiosity", "Rapid prototyping"],
  }
];
