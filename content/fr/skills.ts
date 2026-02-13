import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis",
    level: "Confirmé",
    items: ["SQL", "Exploration", "Data quality", "Storytelling", "Statistiques"],
    highlights: ["Analyse métier", "KPIs actionnables"],
  },
  {
    title: "BI & Dataviz",
    level: "Confirmé",
    items: ["Power BI", "QlikSense", "DAX", "Modélisation", "UX dashboard"],
    highlights: ["Design KPI", "Mise en production"],
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
    highlights: ["Pipelines robustes", "Automatisation"],
  },
  {
    title: "Dataiku",
    level: "Confirmé",
    items: ["Recipes", "Automation", "Monitoring", "Data prep"],
    highlights: ["Industrialisation", "Qualité des flux"],
  },
  {
    title: "IA & Prototypage",
    level: "Junior",
    items: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "OpenAI API"],
    highlights: ["Curiosité IA", "Prototypes rapides"],
  }
];
