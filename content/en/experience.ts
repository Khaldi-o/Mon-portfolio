import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    role: "Data Analyst Consultant",
    company: "Extia",
    companyLogo: "/images/company/extia.png",
    dates: "Jan 2025 – Dec 2025",
    context:
      "Data modernization and insurance reporting redesign.",
    impactBullets: [
      "Implemented ETL/ELT workflows using SSIS and Dataiku for data integration and preparation.",
      "Migrated 2 insurance projects (health/savings) from SAS to Dataiku: flow migration, transformations and quality controls.",
      "Built an Oracle data foundation (structuring, format normalization, calculation rules) feeding restitution layers.",
      "Redesigned Qlik Sense dashboards from the Oracle foundation for technical monitoring and KPI tracking.",
      "Optimized SQL queries and improved loading/reporting performance, implemented quality controls and documentation.",
    ],
    techBullets: [],
    stackTags: ["SQL", "Python", "Dataiku", "SSIS", "QlikSense", "Power BI", "Oracle", "Confluence"],
    relatedProjects: ["bi-dashboards"],
  },
  {
    role: "Data Analyst (Apprenticeship)",
    company: "Fujitsu",
    companyLogo: "/images/company/fujitsu.png",
    dates: "Jun 2022 – Sep 2024",
    context:
      "Data-driven passenger traffic forecasting at airports.",
    impactBullets: [
      "Developed a data pipeline for airport passenger traffic forecasting to optimize on-site team allocation.",
      "Integrated API/JSON/Parquet sources, stored on Azure, with preparation and orchestration in Dataiku (datasets, flows, automations).",
      "Designed real-time Power BI dashboards for flow monitoring and KPI tracking, contributed to production deployment and maintenance.",
      "Built streaming and reporting apps for ITSM ticket monitoring.",
      "Contributed to Azure infrastructure deployment and workflow automation via Power Automate.",
      "Developed GenAI app (RAG) for a medical use case, integrating LLM APIs and fine-tuning.",
    ],
    techBullets: [],
    stackTags: ["SQL", "Python", "Pandas", "Numpy", "Dataiku", "Power BI", "Power Automate", "React", "Azure", "Docker", "Git"],
    relatedProjects: ["bi-dashboards"],
  },
  {
    role: "Data Developer (Apprenticeship)",
    company: "Atos",
    companyLogo: "/images/company/atos.png",
    dates: "Jun 2021 – May 2022",
    context:
      "Decision support and automation through reporting and HR tooling.",
    impactBullets: [
      "Designed and developed advanced Excel tools (VBA, Power Query) for data automation and analysis.",
      "Analyzed and visualized financial KPIs (billing and forecasts) for business monitoring.",
      "Contributed to managerial decision support via Excel/Power BI dashboards and reporting.",
      "Participated in developing an HR planning application.",
    ],
    techBullets: [],
    stackTags: ["Excel", "VBA", "SQL Server", "Power BI", "JavaScript", "NodeJs", "Jira"],
    relatedProjects: [],
  },
];
