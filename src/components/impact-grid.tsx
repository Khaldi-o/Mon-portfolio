import { Sparkles, Target, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Impact = {
  title: string;
  description: string;
};

export default function ImpactGrid({ items }: { items: Impact[] }) {
  const icons = [Target, ShieldCheck, Sparkles];
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
        <Card key={item.title} className="border-white/10">
          <CardContent className="space-y-3">
            <Icon className="h-5 w-5 text-[color:var(--accent)]" />
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              {item.title}
            </p>
            <p className="text-base text-white">{item.description}</p>
          </CardContent>
        </Card>
        );
      })}
    </div>
  );
}
