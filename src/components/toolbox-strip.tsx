import TechBadge from "@/components/tech-badge";

export default function ToolboxStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <TechBadge key={item} name={item} />
      ))}
    </div>
  );
}
