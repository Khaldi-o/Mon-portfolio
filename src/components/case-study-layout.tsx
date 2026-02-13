import type { TocItem } from "@/lib/toc";
import ScrollProgress from "@/components/scroll-progress";

export default function CaseStudyLayout({
  toc,
  tocTitle = "Sommaire",
  children
}: {
  toc: TocItem[];
  tocTitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <ScrollProgress />
      <div className="grid gap-10 lg:grid-cols-[3fr_1fr]">
        <article className="prose prose-invert max-w-none prose-headings:font-display prose-h2:mt-10 prose-h2:text-2xl prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-white prose-a:text-[color:var(--accent-2)]">
          {children}
        </article>
        {toc.length > 0 ? (
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-foreground/70">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                {tocTitle}
              </p>
              <nav className="mt-3 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block transition hover:text-white"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
