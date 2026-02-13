"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LocaleSwitch from "@/components/locale-switch";
import RecruiterModeToggle from "@/components/recruiter-mode-toggle";

const navItems = [
  { key: "home", href: "" },
  { key: "projects", href: "/projects" },
  { key: "experience", href: "/experience" },
  { key: "skills", href: "/skills" },
  { key: "certifications", href: "/certifications" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const base = `/${locale}`;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-8 lg:px-16">
        <Link
          href={`${base}`}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-white"
        >
          Omar Khaldi
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-foreground/80 lg:flex">
          {navItems.map((item) => {
            const href = `${base}${item.href}`;
            const active = pathname === href || pathname?.startsWith(`${href}/`);
            return (
              <Link
                key={item.key}
                href={href}
                className={cn(
                  "relative transition hover:text-white",
                  active &&
                    "text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-[color:var(--accent)] after:via-[color:var(--accent-2)] after:to-[color:var(--accent-3)]"
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition hover:border-white/30 hover:text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <RecruiterModeToggle />
          <LocaleSwitch />
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-background/95 px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-foreground/80">
            {navItems.map((item) => {
              const href = `${base}${item.href}`;
              const active = pathname === href || pathname?.startsWith(`${href}/`);
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={cn(
                    "transition hover:text-white",
                    active && "text-white"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
