import Image from "next/image";
import { getAbout } from "@/lib/content";
import { Locale } from "@/i18n/config";
import SectionHeading from "@/components/section-heading";

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const about = await getAbout(locale);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="About"
        title={locale === "fr" ? "À propos" : "About"}
        description={about.headline}
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4 text-base text-foreground/75">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <Image
            src="/images/portrait-placeholder.svg"
            alt="Portrait placeholder"
            width={900}
            height={1100}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
