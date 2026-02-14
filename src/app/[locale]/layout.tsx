import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Locale, locales } from "@/i18n/config";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import RecruiterModeProvider from "@/components/recruiter-mode-provider";
import ArtisticAccents from "@/components/artistic-accents";

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
        <div className="min-h-screen text-foreground relative overflow-x-hidden">
          {/* Background Layer */}
          <div className="fixed inset-0 bg-background -z-20" />

          {/* Artistic Accents Layer */}
          <ArtisticAccents />

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <SiteHeader />
            <main className="relative px-4 pb-24 pt-10 sm:px-8 lg:px-16 flex-grow">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </RecruiterModeProvider>
    </NextIntlClientProvider>
  );
}
