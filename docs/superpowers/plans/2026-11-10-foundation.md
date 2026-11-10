# Website Foundation Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement task by task.

**Goal:** Establish a strict, tested, static Next.js foundation using highway-code conventions.

**Architecture:** App Router exports locale routes. Shared generated UIKit stays
independent of application code; ESLint and dependency-cruiser enforce boundaries.

**Tech Stack:** Next.js, next-intl, React, Tailwind 4, shadcn Base UI Nova, pnpm,
TypeScript, ESLint, Knip, Vitest, Playwright, Nix and direnv.

**Spec:** `docs/superpowers/specs/2026-11-10-foundation-design.md`

## Global Constraints

- Static export; English and Ukrainian; no deployment.
- Dependency ranges use `^`; Node 26 and pinned pnpm.
- Use `@/` imports, UIKit barrels, Next Image and Next-based navigation.
- Include the existing starter and all changes in the initial commit as requested.

## Review Focus

- Locale HTML must be correct before hydration and after direct reloads.
- Switching language must work without middleware or a runtime server.
- Unknown routes must remain missing, without SPA fallback.
- Async Next route exports must coexist with component style enforcement.
- Alias and relative imports must obey the same architecture boundaries.

### Task 1: Tooling and enforceable rules

- [x] Adapt ESLint, Prettier, TypeScript, Knip and pnpm policy from reference.
- [x] Add dependency-cruiser and regression tests for navigation/UIKit policies.
- [x] Add Nix shells, direnv, hooks and CI with no deployment.
- [x] Install dependencies; verify rule tests and architecture checks.

### Task 2: Static bilingual starter and UIKit

- [x] Add locale/navigation tests and verify missing behavior.
- [x] Configure static exports and next-intl request, routing and typed messages.
- [x] Add generated Button primitive and barrel, theme tokens and translated pages.
- [x] Enforce framework navigation and image usage; document component conventions.
- [x] Run unit tests, lint, types and Knip.

### Task 3: Export verification and documentation

- [x] Add Playwright tests for static locale HTML, switching, reloads and missing routes.
- [x] Build and run browser tests against `out/` through a plain static file server.
- [x] Run `pnpm check`, `pnpm build`, browser tests and Nix validation.
- [x] Review requirements and changes; report evidence and any remaining limits.

## Execution notes

- Retained the staged starter; the user subsequently requested committing all work.
- Used the supported Webpack production builder after Turbopack's worker port
  failed under this environment's sandbox; browser tests use the static export.
- Used `next/root-params` at runtime. Next 16.4.6 omits its generated locale
  signature for the route-group root layout; a narrow ambient declaration loaded
  first by TypeScript covers that upstream type-generation issue. No deprecated
  next-intl APIs or deprecation suppressions remain.
- Removed Intel macOS from the shell matrix after Nixpkgs reported that target
  unsupported. Apple Silicon, aarch64 Linux and x86_64 Linux flake checks pass.
- Independent read-only review identified a missing recommended accessibility
  ruleset in Next's preset. The regression failed before enabling the rules and
  passed afterward. No other actionable review findings remained.
