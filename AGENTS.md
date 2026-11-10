# Codebase rules

Follow [README.md](README.md). Executable policy lives in ESLint, TypeScript,
Prettier, Knip, dependency-cruiser and pnpm-workspace configuration. Update the
README when these conventions change.

- Run `pnpm check`, `pnpm build` and relevant browser tests before finishing.
- Keep static-export compatibility. Generate all supported locale paths at build
  time; do not introduce request-time APIs or deployment without a requirement.
- Use `@/` for application imports and preserve side-effect import order.
- Use Next Image and Next-based Link/navigation. Localized UI imports navigation
  from `@/i18n/navigation`; audit links/navigation and use next-intl for localized
  paths. Raw anchors/images are prohibited.
- Keep shared primitives in `src/components/uikit` and import their barrel from
  application code. Preserve shadcn settings and generated declaration style.
  Sort exports in UIKit and other barrel files alphabetically by source filename/path.
  Combine shadcn Link styling with the next-intl Link implementation when
  available.
- Authored components use one `const Name: React.FC<Props>` per file, with a local
  `type Props` immediately above; async server components use the same form.
- Keep page entries focused on composition. Restrict dependencies based on actual
  module responsibilities. Do not invent stores or feature boundaries in advance.
  If global state is needed, use Zustand with persistence over local/session
  storage through `src/stores/persistence`.
- Import `cn` directly from its package. Add only used dependencies and use caret
  ranges. Keep pnpm lockfile and toolchain pin consistent.
- Test behavior through module interfaces. Keep Knip free of speculative entry
  points and unused-dependency exceptions. Do not add deployment jobs yet.
- TODO: evaluate and add `next-sitemap` for sitemap generation.
- TODO: audit existing links and navigation for next-intl Link usage.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
