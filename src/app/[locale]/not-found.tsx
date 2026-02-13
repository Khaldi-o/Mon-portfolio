import Link from "next/link";
import { defaultLocale, Locale } from "@/i18n/config";
import { Button } from "@/components/ui/button";

export default async function NotFound({
  params
}: {
  params?: Promise<{ locale: Locale }>;
}) {
  const resolved = (await params)?.locale ?? defaultLocale;
  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
        404
      </p>
      <h1 className="text-2xl font-semibold text-white">
        {resolved === "fr"
          ? "Page introuvable"
          : "Page not found"}
      </h1>
      <Button asChild>
        <Link href={`/${resolved}`}>
          {resolved === "fr" ? "Retour a l'accueil" : "Back home"}
        </Link>
      </Button>
    </div>
  );
}
