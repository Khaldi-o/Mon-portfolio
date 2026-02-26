import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight, Terminal } from "lucide-react";
import HeroBackground3D from "@/components/hero-background-3d";

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
  title, // Keeping title in props but ignoring it in render for the hardcoded visual effect user wanted
  ctaPrimary,
  ctaSecondary,
  primaryHref,
  secondaryHref
}: HeroProps) {
  return (
    <section className="relative overflow-visible rounded-[40px] border border-white/10 p-8 shadow-2xl shadow-cyan-500/10 md:p-12 lg:p-16 group">
      {/* 3D Premium Background */}
      <HeroBackground3D />

      {/* Subtle overlay to ensure text contrast */}
      <div className="absolute inset-0 z-0 bg-white/5 rounded-[40px] pointer-events-none" />

      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(6,182,212,0.3)]">
            <Terminal className="h-3 w-3" />
            {eyebrow}
          </div>

          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl drop-shadow-2xl">
            {title}
          </h1>

          <div className="max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Transformer la <span className="relative inline-block px-1 mx-1 group">
              <span className="absolute inset-0 -skew-y-2 bg-cyan-500/90 rounded-sm" />
              <span className="relative z-10 font-bold text-black selection:bg-black selection:text-cyan-500">donnée brute</span>
            </span> en <span className="relative inline-block px-1 mx-1 group">
              <span className="absolute inset-0 skew-y-1 bg-cyan-400/90 rounded-sm" />
              <span className="relative z-10 font-bold text-black selection:bg-black selection:text-cyan-400">insights décisionnels</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group bg-cyan-500 text-black hover:bg-cyan-400 border-none shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)]">
              <Link href={primaryHref}>
                {ctaPrimary}
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105">
              <Link href={secondaryHref}>{ctaSecondary}</Link>
            </Button>
          </div>
        </div>

        {/* Visual Content (Profile Image) */}
        <div className="relative mx-auto w-full max-w-md lg:mr-0 isolate">
          {/* Tech Ring/Glow behind image - REDUCED INTENSITY & HOMOGENEOUS COLORS */}
          <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-[40px] bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-cyan-500/30 blur-2xl opacity-40" />

          {/* Gradient Border Container - CYAN & PURPLE */}
          <div className="relative rounded-[34px] p-[2px] bg-gradient-to-br from-cyan-400 via-purple-500 to-cyan-500">
            <div className="relative overflow-hidden rounded-[32px] bg-black/40 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/profile/profile.jpg"
                  alt="Omar Khaldi"
                  fill
                  className="object-cover object-top transition duration-700 hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Overlay Gradient at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              </div>

              {/* Floating Tech Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold">Role</span>
                    <span className="font-mono text-xs font-bold text-white tracking-tight">Data Analyst / Data Engineer</span>
                  </div>
                  <div className="h-8 w-px bg-white/20" />
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] uppercase tracking-wider text-purple-400 font-bold">Expertise</span>
                    <span className="font-mono text-xs font-bold text-white tracking-tight">Data · Analytics · BI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements - REDUCED GLOW & HOMOGENEOUS COLORS */}
          <div className="absolute -right-10 -top-10 -z-20 h-[250px] w-[250px] rounded-full bg-cyan-500/20 blur-[60px] mix-blend-screen" />
          <div className="absolute -bottom-10 -left-10 -z-20 h-[250px] w-[250px] rounded-full bg-purple-500/15 blur-[60px] mix-blend-screen" />
        </div>
      </div>
    </section>
  );
}

