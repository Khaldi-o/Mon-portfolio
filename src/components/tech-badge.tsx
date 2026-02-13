import TechIcon from "@/components/tech-icon";
import { cn } from "@/lib/utils";

export default function TechBadge({
  name,
  className
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.06em] text-foreground/80",
        className
      )}
    >
      <TechIcon name={name} className="text-[color:var(--accent)]" />
      {name}
    </span>
  );
}
