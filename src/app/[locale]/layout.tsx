import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Locale, locales } from "@/i18n/config";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import RecruiterModeProvider from "@/components/recruiter-mode-provider";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <RecruiterModeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          <main className="relative px-4 pb-24 pt-10 sm:px-8 lg:px-16">
            {children}
          </main>
          <SiteFooter />
        </div>
      </RecruiterModeProvider>
    </NextIntlClientProvider>
  );
}
