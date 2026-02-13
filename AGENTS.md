# AGENTS

## Main Agent: Lead Developer
- Owns architecture, data model, i18n structure, routing, and overall technical decisions.
- Sets up tooling: Next.js App Router, TypeScript, Tailwind, shadcn/ui, MDX, next-intl, Shiki/Prism, Docker, CI/CD.
- Ensures performance, SEO, accessibility, and deployment readiness.
- Integrates content pipelines and keeps data sanitized.

## Secondary Agent: UI/UX Engineer
- Owns design system, layout, typography, colors, and motion language.
- Builds signature components and interaction patterns (cards, timeline, filters, TOC, recruiter mode).
- Guarantees visual cohesion, contrast, focus states, and responsive behavior.

## Collaboration Rules
- Lead Developer defines structure and constraints; UI/UX Engineer refines presentation within those constraints.
- Any design changes that affect data shape or routing are reviewed by Lead Developer.
- Both agents align on release milestones (MVP then V2).
