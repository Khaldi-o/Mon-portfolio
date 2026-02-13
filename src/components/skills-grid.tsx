import type { SkillCategory } from "@/types/content";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechBadge from "@/components/tech-badge";

export default function SkillsGrid({ items }: { items: SkillCategory[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((category) => (
        <Card key={category.title}>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>
              <Badge tone="accent">{category.level}</Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
            <ul className="space-y-2 text-sm text-foreground/70">
              {category.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[color:var(--accent-2)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
