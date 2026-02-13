"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/config";

const toggleLocale = (locale: Locale) => (locale === "fr" ? "en" : "fr");

export default function LocaleSwitch() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname() || "/";
  const nextLocale = toggleLocale(locale);

  const href = pathname.startsWith(`/${locale}`)
    ? pathname.replace(`/${locale}`, `/${nextLocale}`)
    : `/${nextLocale}${pathname}`;

  return (
    <Button variant="outline" size="sm" asChild>
      <Link href={href} aria-label={t("switchLabel", { locale: nextLocale })}>
        {nextLocale.toUpperCase()}
      </Link>
    </Button>
  );
}
