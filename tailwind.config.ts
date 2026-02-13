import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        "surface-glow": "var(--surface-glow)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(94, 234, 212, 0.18)",
        "glow-strong": "0 0 60px rgba(139, 92, 246, 0.24)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(1200px 800px at 10% -10%, rgba(79,209,197,0.16), transparent 60%), radial-gradient(900px 600px at 90% 10%, rgba(167,139,250,0.18), transparent 65%)",
        "soft-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
