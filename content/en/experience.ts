import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    role: "Data Analyst Consultant",
    company: "Extia",
    client: "Groupama",
    dates: "Dec 2024 – Present",
    context:
      "Data modernization mission and insurance reporting redesign.",
    impactBullets: [
      "SAS → Dataiku migration to stabilize processing.",
      "Decommissioned legacy SQL/Qlik reporting.",
      "Standardized insurance KPIs for business leadership."
    ],
    techBullets: [
      "Python/SQL ETL in Dataiku",
      "Qlik/Power BI dashboards",
      "Automated data quality checks"
    ],
    stackTags: ["Dataiku", "SQL", "Python", "QlikSense", "Power BI"],
    relatedProjects: ["qlik-events", "qlik-provisions"],
  },
  {
    role: "Data Analyst (Apprenticeship)",
    company: "Fujitsu",
    client: "Hub One / ADP",
    dates: "Jun 2022 – Aug 2024",
    context:
      "Passenger forecasting and operational monitoring initiatives.",
    impactBullets: [
      "ETL pipelines for multi-zone passenger forecasts.",
      "Real-time dashboards for field teams.",
      "Dataiku monitoring and Power Automate workflows."
    ],
    techBullets: [
      "Dataiku + SQL pipelines",
      "Power BI / DAX",
      "Data cleaning & anonymization"
    ],
    stackTags: ["Dataiku", "Power BI", "SQL", "Azure", "Power Automate"],
    relatedProjects: ["landside-cleaning", "powerbi-itsm"],
  },
  {
    role: "Data Developer (Apprenticeship)",
    company: "Atos",
    dates: "Jun 2021 – May 2022",
    context:
      "Decision support through Excel reporting and HR tooling.",
    impactBullets: [
      "Operational KPIs for teams.",
      "Excel reporting automation (VBA/PowerQuery).",
      "Internal HR planning app."
    ],
    techBullets: [
      "Advanced Excel (VBA, PowerQuery)",
      "KPI modeling",
      "Reporting automation"
    ],
    stackTags: ["Excel", "VBA", "PowerQuery"],
    relatedProjects: ["voice-of-people"],
  }
];
