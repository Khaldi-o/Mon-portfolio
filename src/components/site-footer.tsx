"use client";

import { useTranslations } from "next-intl";

export default function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/5 bg-background/90 px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-foreground/70 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg text-white">Omar Khaldi</p>
          <p>{t("tagline")}</p>
        </div>
        <div className="flex gap-6">
          <span>{t("location")}</span>
          <span>{t("availability")}</span>
        </div>
      </div>
    </footer>
  );
}
