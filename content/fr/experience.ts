import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    role: "Consultant Data Analyst",
    company: "Extia",
    companyLogo: "/images/company/extia.png",
    dates: "Jan 2025 – Déc 2025",
    context:
      "Modernisation data et refonte des reportings assurance.",
    impactBullets: [
      "Mise en place de workflows ETL/ELT sous SSIS et Dataiku pour l'intégration et la préparation de données.",
      "Migration de 2 projets assurance (santé/prévoyance) de SAS vers Dataiku : reprise des flux, transformations et contrôles qualité.",
      "Construction d'un socle de données Oracle (structuration, normalisation des formats, règles de calcul) et alimentation des couches de restitution.",
      "Refonte et restitution de tableaux de bord Qlik Sense à partir du socle Oracle pour le pilotage technique et le suivi des KPIs.",
      "Optimisation de requêtes SQL et amélioration des performances (temps de chargement / reporting), mise en place de contrôles qualité et documentation.",
    ],
    techBullets: [],
    stackTags: ["SQL", "Python", "Dataiku", "SSIS", "QlikSense", "Power BI", "Oracle", "Confluence"],
    relatedProjects: ["bi-dashboards"],
  },
  {
    role: "Data Analyst (Alternance)",
    company: "Fujitsu",
    companyLogo: "/images/company/fujitsu.png",
    dates: "Juin 2022 – Sep 2024",
    context:
      "Pilotage data et prévision trafic passagers aéroportuaire.",
    impactBullets: [
      "Développement d'une pipeline data pour la prévision du trafic passagers aéroportuaire afin d'optimiser l'allocation des équipes sur site.",
      "Intégration de sources API/JSON/Parquet, stockage sur Azure, préparation et orchestration sous Dataiku (datasets, flows, automatisations).",
      "Conception de dashboards Power BI (temps réel) pour le pilotage des flux et le suivi des KPI, contribution à la mise en production et à la maintenance.",
      "Conception d'apps de streaming et de reporting pour le suivi des tickets ITSM.",
      "Contribution au déploiement d'une infra Azure et à l'automatisation de workflows via Power Automate.",
      "Développement d'app GenAI (RAG) pour un use case du secteur médical, intégration d'APIs LLM et fine-tuning.",
    ],
    techBullets: [],
    stackTags: ["SQL", "Python", "Pandas", "Numpy", "Dataiku", "Power BI", "Power Automate", "React", "Azure", "Docker", "Git"],
    relatedProjects: ["bi-dashboards"],
  },
  {
    role: "Développeur de données (Alternance)",
    company: "Atos",
    companyLogo: "/images/company/atos.png",
    dates: "Juin 2021 – Mai 2022",
    context:
      "Support à la décision et automatisation via reporting et outillage RH.",
    impactBullets: [
      "Conception et développement d'outils Excel avancés (VBA, Power Query) pour l'automatisation et l'analyse de données.",
      "Analyse et visualisation de KPI financiers (facturations et prévisions) pour le pilotage de l'activité.",
      "Contribution au support à la décision managériale via des tableaux de bord et reportings Excel/Power BI.",
      "Participation au développement d'une application RH de planification.",
    ],
    techBullets: [],
    stackTags: ["Excel", "VBA", "SQL Server", "Power BI", "JavaScript", "NodeJs", "Jira"],
    relatedProjects: [],
  },
];
