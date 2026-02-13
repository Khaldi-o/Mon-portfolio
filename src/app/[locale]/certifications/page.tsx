import { getCertifications } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";
import CertificationsGrid from "@/components/certifications-grid";

export default async function CertificationsPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const items = await getCertifications(locale);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Certifications"
        title={locale === "fr" ? "Certifications" : "Certifications"}
        description={
          locale === "fr"
            ? "Formations et certifications en cours."
            : "Training and certifications in progress."
        }
      />
      <CertificationsGrid items={items} />
    </div>
  );
}
