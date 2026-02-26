import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/types/content";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechIcon from "@/components/tech-icon";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

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
  const isExternal = !!project.externalUrl;
  const finalHref = project.externalUrl || href;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition hover:-translate-y-1 hover:border-white/30 hover:shadow-glow",
        highlight && "border-white/20"
      )}
    >
      <Link
        href={finalHref}
        className="absolute inset-0 z-10"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="sr-only">{project.title}</span>
      </Link>
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />

        {/* Hover Reveal Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/20 backdrop-blur-[2px]">
          <div className="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md flex items-center gap-2">
            {ctaLabel}
            {isExternal && <ExternalLink className="h-3 w-3" />}
          </div>
        </div>
      </div>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            {project.title}
            {isExternal && <ExternalLink className="h-3.5 w-3.5 text-foreground/50" />}
          </h3>
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
      </CardContent>
    </Card>
  );
}
