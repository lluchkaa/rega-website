# Codebase rules

Follow [README.md](README.md). Executable policy lives in ESLint, TypeScript,
Prettier, Knip, dependency-cruiser and pnpm-workspace configuration. Update the
README when these conventions change.

- Run `pnpm check`, `pnpm build` and relevant browser tests before finishing.
- Keep static-export compatibility. Generate all supported locale paths at build
  time; do not introduce request-time APIs or deployment without a requirement.
- Use `@/` for application imports and preserve side-effect import order.
- Use Next Image and Next-based Link/navigation. Localized UI imports navigation
  from `@/i18n/navigation`; raw anchors/images are prohibited.
- Keep shared primitives in `src/components/uikit` and import their barrel from
  application code. Preserve shadcn settings and generated declaration style.
- Authored components use one `const Name: React.FC<Props>` per file, with a local
  `type Props` immediately above; async server components use the same form.
- Keep page entries focused on composition. Restrict dependencies based on actual
  module responsibilities. Do not invent stores or feature boundaries in advance.
- Import `cn` directly from its package. Add only used dependencies and use caret
  ranges. Keep pnpm lockfile and toolchain pin consistent.
- Test behavior through module interfaces. Keep Knip free of speculative entry
  points and unused-dependency exceptions. Do not add deployment jobs yet.
