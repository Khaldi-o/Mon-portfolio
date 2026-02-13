import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-[color:var(--accent)] via-[color:var(--accent-2)] to-[color:var(--accent-3)]" />
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
