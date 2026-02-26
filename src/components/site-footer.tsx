"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export default function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/5 bg-background/90 px-4 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-sm text-foreground/70 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/images/generic/monlogo.png"
            alt="Omar Khaldi Logo"
            width={56}
            height={56}
            className="rounded-lg shadow-glow-purple"
          />
          <div>
            <p className="font-display text-lg text-white font-bold">Omar Khaldi</p>
            <p className="opacity-60 text-xs">{t("tagline")}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex gap-6">
            <span>{t("location")}</span>
            <span>{t("availability")}</span>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
            <Link
              href="https://linkedin.com/in/omarkhaldi"
              target="_blank"
              className="text-foreground/50 hover:text-[#0077b5] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/Khaldi-o"
              target="_blank"
              className="text-foreground/50 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
