import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/types/content";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechIcon from "@/components/tech-icon";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: ProjectMeta;
  href: string;
  highlight?: boolean;
  ctaLabel?: string;
};

export default function ProjectCard({
  project,
  href,
  highlight,
  ctaLabel = "Voir le case study"
}: ProjectCardProps) {
  const stackPreview = project.stack.slice(0, 4);
  const extraCount = project.stack.length - stackPreview.length;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition hover:-translate-y-1 hover:border-white/30 hover:shadow-glow",
        highlight && "border-white/20"
      )}
    >
      <Link href={href} className="absolute inset-0 z-10">
        <span className="sr-only">{project.title}</span>
      </Link>
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="text-sm text-foreground/70">{project.summary}</p>
        </div>
        <div className="flex items-center gap-2">
          {stackPreview.map((item) => (
            <div
              key={item}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5"
              title={item}
            >
              <TechIcon name={item} className="text-[color:var(--accent)]" />
            </div>
          ))}
          {extraCount > 0 ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-foreground/70">
              +{extraCount}
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
          {ctaLabel}
        </p>
      </CardContent>
    </Card>
  );
}
