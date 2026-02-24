import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const resolvedLocale: Locale = locales.includes(locale as any)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../content/${resolvedLocale}/messages.json`))
      .default,
  };
});
