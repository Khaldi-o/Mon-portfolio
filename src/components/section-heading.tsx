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
  className,
  align = "center" // Default to center as requested
}: SectionHeadingProps & { align?: "left" | "center" }) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto flex max-w-3xl flex-col items-center text-center" : "",
        className
      )}
    >
      {eyebrow ? (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className={cn("h-px w-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400", align === "center" && "hidden")} />
          <p className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            {eyebrow}
          </p>
          <span className={cn("h-px w-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400", align === "center" && "hidden")} />
        </div>
      ) : null}

      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl drop-shadow-lg">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
