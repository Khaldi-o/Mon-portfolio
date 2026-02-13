import { getSkills } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import SkillsGrid from "@/components/skills-grid";

export default async function SkillsPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const items = await getSkills(locale);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Skills"
        title={locale === "fr" ? "Compétences" : "Skills"}
        description={
          locale === "fr"
            ? "Une toolbox BI, data engineering et IA appliquée."
            : "A BI, data engineering and applied AI toolbox."
        }
      />
      <SkillsGrid items={items} />
    </div>
  );
}
