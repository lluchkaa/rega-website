# REGA website

Next.js App Router, React, TypeScript, Tailwind CSS 4 and next-intl. The site
currently exports static files; it requires no Next.js runtime server.

## Development

Use Node.js 26 and the pnpm version pinned in `package.json`:

```sh
nix develop
# Or, with direnv installed:
direnv allow
pnpm install
pnpm dev
```

`flake.nix` provides Node 26 and pnpm for Apple Silicon macOS and x86_64/aarch64
Linux. `flake.lock` pins the same Nixpkgs input as `../highway-code`.
`pnpm-workspace.yaml` enforces engine and peer compatibility, saves dependency
ranges with `^`, and explicitly permits required native install scripts. The
`packageManager` toolchain version stays exact for reproducible installs.

## Static export and languages

```sh
pnpm build
pnpm preview
```

The build writes `out/`, including `sitemap.xml`, its sitemap index, and
`robots.txt`. `next-sitemap` reads the static export so every generated locale
route is listed; the noindex UIKit pages are excluded. Preview serves those
files at <http://127.0.0.1:4173>; `next start` is not used. The production build
uses Next's supported Webpack option so builds do not require Turbopack's local
worker port.

- `/` is a static language chooser.
- `/en/` and `/uk/` are generated at build time, with translated metadata/content
  and the correct HTML language even without JavaScript.
- `src/i18n/routing.ts` defines supported locales. Messages live in
  `src/messages/{en,uk}.json`; `src/i18n/global.d.ts` types locales and keys.
- Locale pages use `Link` from `@/i18n/navigation`, which wraps Next Link. Add
  next-intl's `useRouter`, `usePathname` or `redirect` exports to this module when
  needed. The root chooser and global 404 use Next Link with explicit locale URLs.
  Audit all links and navigation when adding routes; use next-intl navigation
  exports for localized paths so locale handling is preserved.
- `src/i18n/request.ts` reads the locale through `next/root-params`. New pages
  can call next-intl directly without `setRequestLocale`. Next 16.4's type
  generator incorrectly treats the unlocalized route-group layout as an ancestor
  of the locale layout, although its runtime loader discovers them correctly.
  A narrow `locale(): Promise<string | undefined>` declaration in
  `src/i18n/root-params.d.ts` covers the missing generated type; remove it when Next
  fixes generation. TypeScript loads this declaration first via `files`, before
  Next's ambient placeholder. Locale validation remains in the request configuration.
- Every locale is enumerated by `generateStaticParams`; no middleware, runtime
  locale detection, cookies or server redirects are needed. The locale cookie
  is disabled because the URL is the source of truth.
- Use `Image` from `next/image`. `images.unoptimized` preserves static-host
  compatibility; image optimization can be configured later with a custom loader.
- Raw `<a>` and `<img>` elements fail lint, including inside UIKit. Use Next's
  navigation APIs instead of React Router or the legacy `next/router`.

Use only features supported by static exports. Request-time server APIs, Server
Actions, API routes and runtime redirects require reconsidering this setup.
The experimental global-not-found option supplies an independent static 404 for
both root layouts. Configure the eventual static host to use `404.html` for misses.
No hosting or deployment workflow is configured.

## Components and imports

shadcn/ui uses Base UI, Nova, REGA orange theme tokens and React Server Components.
Generator configuration lives in `components.json`; global theme tokens live in
`src/styles/globals.css`.

```sh
pnpm exec shadcn add dialog
```

Generated primitives stay in flat files under `src/components/uikit`. Add named
exports to its `index.ts` in alphabetical order by source filename/path, then run the checks. All
other barrel files follow the same ordering. Application code imports from
`@/components/uikit`; generated primitives may import each other directly.
For link styling, use shadcn's `Link` primitive when available together with
next-intl's `Link` implementation from `@/i18n/navigation`.
Import `cn` from its package. CVA owns variants. Add dependencies only when used;
Knip checks unused dependencies and files while preserving generated UIKit export
and type surfaces.

Application components use one declaration per file, a local `type Props`
immediately above `const Name: React.FC<Props> = (...) => ...`, and explicit
type-only React imports. No-prop components use `React.FC`. Async server
components use the same form; Next route metadata and static-param exports stay
alongside their route component. Generated shadcn files retain their original
style and are exempt from the declaration and 100-line function limits.

Use UIKit for native button, input, select, textarea, progress and dialog controls.
Style navigation links with `buttonVariants` rather than turning actions into
links. Semantic HTML and SVG are available for page content.

Keep route entries focused on composition. Page-local components live beside
pages. Promote UI to `src/components` when shared. Group related implementation
files behind an explicit named-export `index.ts`; standalone components need no
wrapper folder. Use `@/` for application imports. Shared UI cannot depend on page
implementation; UIKit cannot depend on application UI/state/hooks/i18n. Stores,
when introduced, cannot depend on UI or route entries. Browser storage access is
reserved for `src/stores/persistence`; tests may access it directly.
If global state is needed, use Zustand with persistence through the existing
`src/stores/persistence` boundary, backed by local or session storage as the
feature requires.

## Follow-up tasks

- Audit existing links and navigation to ensure localized routes use
  `@/i18n/navigation` and preserve locale handling.

ESLint and dependency-cruiser enforce these boundaries for both aliases and
relative paths. Only add feature-specific boundaries once those features exist.

## Quality checks

| Command                       | Purpose                                                    |
| ----------------------------- | ---------------------------------------------------------- |
| `pnpm format`                 | Format supported project files                             |
| `pnpm format:check`           | Check formatting                                           |
| `pnpm lint` / `pnpm lint:fix` | Type-aware ESLint; warnings fail                           |
| `pnpm typecheck`              | Generate Next route types and check TypeScript             |
| `pnpm knip`                   | Find unused files, exports and dependencies                |
| `pnpm deps:check`             | Check cycles, dependency direction and package resolution  |
| `pnpm test`                   | Vitest behavior tests and local ESLint rule tests          |
| `pnpm test:e2e`               | Playwright against the built static export                 |
| `pnpm check`                  | Formatting, lint, types, Knip, architecture and unit tests |
| `pnpm check:fix`              | Apply lint/format fixes and run remaining checks           |

TypeScript enables strict checking, checked indexed access, exact optional
properties, unused locals/parameters and switch fallthrough checks. ESLint adds
strict typed rules, React Hooks, Next core web vitals, accessibility, exhaustive
switches, explicit type imports, mandatory braces and strict equality. Unused
inline config and disable comments fail. Next's ESLint preset currently requires
ESLint 9 through its React/accessibility plugin peers.

Imports are grouped as Node builtins, packages, `@/` modules, relative tooling,
and assets, then alphabetized. Named import members are sorted. Duplicate,
self and cyclic imports fail. Side-effect imports retain their execution order.
Prettier uses single quotes, no semicolons, LF, two spaces, trailing commas and
Tailwind class sorting in `cn`/`cva` calls.

Husky installs a pre-commit hook that runs lint-staged: ESLint fixes and Prettier
on staged code, Prettier on other supported staged files. Run the project-wide
checks before finishing changes:

```sh
pnpm check
pnpm build
pnpm test:e2e
nix flake check --all-systems --no-update-lock-file
```

Browser tests cover initial static HTML in both languages without JavaScript,
locale switching, reloads, image loading and missing routes. Locally they use
installed Google Chrome; CI installs Playwright Chromium. Traces and reports are
ignored by Git. GitHub Actions runs app checks and flake validation concurrently
on pushes, pull requests and manual dispatches, with frozen pnpm installation
and cancellation of stale runs. It does not deploy.

## REGA design foundation

`src/styles/globals.css` defines orange semantic tokens for warm light surfaces and
charcoal dark surfaces. CSS follows system preference without JavaScript. The theme
control adds explicit light/dark/system choices; Zustand persists the preference
through `src/stores/persistence`. Storage failures fall back to session memory.

Shared application components live in `src/components/site`; domain-free shadcn
primitives stay in UIKit. `/en/uikit/` and `/uk/uikit/` showcase the tokens and
components and carry noindex metadata. Navigation preserves the active locale and
page when switching languages. All current commercial course slugs are generated
at build time; unknown courses return 404.

Original HTML, text extracts and research manifests live only in gitignored
`.ignore/original-rega/`. Never import them into application code or parse them at
build time. Production copy is deliberately authored in locale messages and course
content modules. Selected production photographs live in `public/images/`. The
homepage training photo comes from [REGA’s school listing on EduSearch](https://edusearch.com.ua/lviv/school/rega-avtoshkola).

The first redesign covers training, gifts, school information and contact pages.
Legacy news/gallery archives, polls and road-rules content need a separate editorial
review. Contact actions use phone/email; no order, payment or message backend is
configured. Source prices/promotions must be reconfirmed before publication.
