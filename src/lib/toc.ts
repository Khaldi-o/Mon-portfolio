export type TocItem = {
  id: string;
  title: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export function extractToc(source: string): TocItem[] {
  return source
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", "").trim())
    .filter(Boolean)
    .map((title) => ({
      title,
      id: slugify(title)
    }));
}
