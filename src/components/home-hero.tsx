import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeroProps = {
  eyebrow: string;
  title: string;
  punchline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  primaryHref: string;
  secondaryHref: string;
};

export default function HomeHero({
  eyebrow,
  title,
  punchline,
  ctaPrimary,
  ctaSecondary,
  primaryHref,
  secondaryHref
}: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glow">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(94,234,212,0.18),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.2),transparent_55%)]" />
      <p className="text-xs uppercase tracking-[0.4em] text-foreground/70">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-foreground/80 sm:text-lg">
        {punchline}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href={primaryHref}>{ctaPrimary}</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link href={secondaryHref}>{ctaSecondary}</Link>
        </Button>
      </div>
    </section>
  );
}
