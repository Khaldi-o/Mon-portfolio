import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-foreground/80 shadow-[0_0_24px_rgba(79,209,197,0.08)]",
  {
    variants: {
      tone: {
        default: "text-foreground/80",
        accent: "border-white/15 bg-white/10 text-white",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, tone, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ tone, className }))} {...props} />;
}

export { Badge, badgeVariants };
