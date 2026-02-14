import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Terminal } from "lucide-react";

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
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 md:p-12 lg:p-16">
      {/* Background Tech Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(112,0,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(0,240,255,0.15),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/generic/grid-pattern.svg')] opacity-20 mask-image-gradient-to-b" />

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md">
            <Terminal className="h-3 w-3" />
            {eyebrow}
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
            {punchline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group bg-cyan-500 text-black hover:bg-cyan-400">
              <Link href={primaryHref}>
                {ctaPrimary}
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Link href={secondaryHref}>{ctaSecondary}</Link>
            </Button>
          </div>
        </div>

        {/* Visual Content (Profile Image) */}
        <div className="relative mx-auto w-full max-w-md lg:mr-0">
          {/* Tech Ring/Glow behind image */}
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-sm">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/profile/profile.png"
                alt="Omar Khaldi"
                fill
                className="object-cover object-top transition duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Overlay Gradient at bottom for text readability if needed or style */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Tech Badge */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-cyan-300">Role</span>
                  <span className="font-mono text-xs font-bold text-white">Data Engineer & BI</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="flex flex-col text-right">
                  <span className="text-[10px] uppercase tracking-wider text-purple-300">Stack</span>
                  <span className="font-mono text-xs font-bold text-white">Azure • Python • PowerBI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-cyan-500/20 bg-cyan-500/5 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-purple-500/20 bg-purple-500/5 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
