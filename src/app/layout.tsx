import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { defaultLocale } from "@/i18n/config";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Khaldi | Data Analyst & BI + Data Engineer",
  description:
    "Portfolio data premium: pipeline, modèle, dashboard, décision. Double casquette Data Analyst/BI et Data Engineer junior.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Omar Khaldi | Data Analyst & BI + Data Engineer",
    description:
      "Portfolio data premium: pipeline, modèle, dashboard, décision. Double casquette Data Analyst/BI et Data Engineer junior.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
