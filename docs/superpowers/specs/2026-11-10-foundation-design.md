# Website foundation

Set up the fresh Next.js App Router repository for static hosting, with the
compatible conventions from `../highway-code`. Support English and Ukrainian.

## Approach

Retain Next.js rather than copying the reference's Vite/React Router stack.
Export every locale at build time with next-intl and no request middleware.
Use `/en/` and `/uk/`, with a static language chooser at `/`. Use Next Image
without its server optimizer and locale-aware navigation built on Next Link.
This avoids requiring a runtime server or hosting redirects.

Adopt strict TypeScript, type-aware ESLint, import ordering, component declaration
rules, Base UI shadcn Nova primitives in `src/components/uikit`, direct `cn`
imports, Prettier, Knip, pnpm install policy, Git hooks, and quality CI. Add
dependency-cruiser to check cycles and enforce shared UI dependency direction.
Keep Next route components compatible with async server components and required
framework exports. Do not copy Vite refresh rules, quiz features, stores, or
deployment jobs.

Use Node 26 and pinned pnpm tooling with caret dependency ranges. Copy the
reference's Nix input lock and provide macOS/Linux development shells with direnv.
Keep generated primitives intact and install only dependencies actually used.

## Verification

Rule tests must catch raw anchors/images, native controls, invalid component
declarations and restricted imports. Unit tests check locale/navigation behavior
and translation parity. Browser tests run against the exported files, checking
both languages, switching, direct loads, assets and missing routes. CI runs
formatting, lint, types, unused code, architecture, unit tests, export build,
browser tests and flake validation. No deployment is configured.

## Scope

Keep this a foundation and a minimal translated starter, without inventing a
product design. Include the existing staged starter in the initial commit as
subsequently requested. Do not publish.
