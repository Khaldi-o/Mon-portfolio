import type { Certification } from "@/types/content";
import { BadgeCheck, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CertificationsGrid({
  items
}: {
  items: Certification[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((cert) => (
        <Card key={cert.title}>
          <CardContent className="space-y-3">
            <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
            {cert.issuer ? (
              <p className="text-sm text-foreground/70">{cert.issuer}</p>
            ) : null}
            <div className="flex items-center gap-2 text-sm text-foreground/80">
              {cert.status.toLowerCase().includes("obtenu") ||
              cert.status.toLowerCase().includes("earned") ? (
                <BadgeCheck className="h-4 w-4 text-[color:var(--accent)]" />
              ) : (
                <Clock className="h-4 w-4 text-[color:var(--accent-2)]" />
              )}
              <Badge tone="accent">{cert.status}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
