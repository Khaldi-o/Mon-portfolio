import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    role: "Consultant Data Analyst",
    company: "Extia",
    client: "Groupama",
    dates: "Déc 2024 – Présent",
    context:
      "Mission orientée modernisation data et refonte des reportings assurance.",
    impactBullets: [
      "Migration SAS → Dataiku pour fiabiliser les traitements.",
      "Décommissionnement de reportings SQL/Qlik obsolètes.",
      "KPI assurance harmonisés pour la direction métier."
    ],
    techBullets: [
      "ETL Python/SQL dans Dataiku",
      "Modélisation et dashboards Qlik/Power BI",
      "Automatisation des contrôles qualité"
    ],
    stackTags: ["Dataiku", "SQL", "Python", "QlikSense", "Power BI"],
    relatedProjects: ["qlik-events", "qlik-provisions"],
  },
  {
    role: "Data Analyst (Alternance)",
    company: "Fujitsu",
    client: "Hub One / ADP",
    dates: "Juin 2022 – Août 2024",
    context:
      "Pilotage data pour la prévision passagers et le suivi opérationnel.",
    impactBullets: [
      "Pipelines ETL pour prévisions passagers multi-zones.",
      "Dashboards temps réel pour les équipes terrain.",
      "Monitoring Dataiku et automatisations Power Automate."
    ],
    techBullets: [
      "Dataiku + SQL pour pipelines",
      "Power BI / DAX pour la BI",
      "Data cleaning & anonymisation"
    ],
    stackTags: ["Dataiku", "Power BI", "SQL", "Azure", "Power Automate"],
    relatedProjects: ["landside-cleaning", "powerbi-itsm"],
  },
  {
    role: "Développeur Data (Alternance)",
    company: "Atos",
    dates: "Juin 2021 – Mai 2022",
    context:
      "Support à la décision via reporting Excel et outillage RH.",
    impactBullets: [
      "KPI opérationnels pour les équipes.",
      "Automatisation de reportings Excel (VBA/PowerQuery).",
      "App interne de planning RH."
    ],
    techBullets: [
      "Excel avancé (VBA, PowerQuery)",
      "Modélisation KPI",
      "Automatisation reporting"
    ],
    stackTags: ["Excel", "VBA", "PowerQuery"],
    relatedProjects: ["voice-of-people"],
  }
];
