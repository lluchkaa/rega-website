# REGA redesign implementation plan

> **For agentic workers:** Use superpowers:subagent-driven-development for page work.

**Goal:** Build REGA's orange-branded foundation and fresh public pages.

**Architecture:** Static Next.js locale pages share an application shell and shadcn
primitives. Reviewed source facts become authored bilingual content; the ignored
reference archive is never an application dependency.

**Tech Stack:** Existing Next.js, React, next-intl, Tailwind and shadcn Base UI.

**Spec:** docs/superpowers/specs/2026-11-10-rega-redesign-design.md

## Global constraints

- Keep static export, both locales, existing root language chooser and import rules.
- Orange is the primary brand color, with accessible light and dark themes.
- Reference files remain only in .ignore/original-rega/.
- No deployment or invented working forms, reviews, prices or claims.
- Primary agent owns shared components, message integration, styles and tests.

## Review focus

- Static HTML and navigation remain useful with JavaScript disabled.
- Theme preference survives reload and tolerates unavailable storage.
- Mobile navigation works by keyboard and fits narrow Ukrainian text.
- Locale switching preserves the current page.
- Every visible destination is exported, and images load locally.

## Task 1: Shared foundation and course example

Files: src/styles/globals.css; src/components/uikit/_; src/components/site/_;
src/stores/persistence/theme.ts; src/app/[locale]/layout.tsx;
src/app/[locale]/uikit/_; src/app/[locale]/initial_course/_;
src/messages/{en,uk}.json; tests/redesign.spec.ts.

- [x] Add browser expectations for navigation, system/manual themes, persistence,
      current-page locale switching and no-JavaScript course content. Verify failure.
- [x] Establish orange semantic tokens, shadcn cards/badges/accordion, theme control,
      header/footer and shared PageIntro / ContactCta components.
- [x] Build localized UI showcase and beginner course with source-backed facts.
- [x] Verify typecheck/lint and a static build before page delegation.

Interfaces: shared components exported from @/components/site. PageIntro accepts
eyebrow, title, description strings; ContactCta has no props. Shell wraps all locale
pages. UIKit consumers import @/components/uikit. New page agents supply translation
fragments under .ignore/ for primary-agent integration, not shared-message edits.

## Task 2: Homepage and course catalogue

Files: src/app/[locale]/page.tsx; src/app/[locale]/home/_;
src/app/[locale]/courses/_.

- [x] Delegate new homepage and course discovery pages, consuming Task 1 interfaces.
- [x] Use genuine local training photography and source-backed course categories.
- [x] Review composition, responsive layout and destinations.

## Task 3: Gifts and contacts

Files: src/app/[locale]/gifts/_; src/app/[locale]/contacts/_.

- [x] Delegate authored gift and contact pages using saved gift/contact references.
- [x] Offer real phone/email actions, accurate locations and source-backed hours.
- [x] Review bilingual content and contact behavior; no fake submission forms.

## Task 4: About and remaining course pages

Files: src/app/[locale]/about/_; src/app/[locale]/[course]/_;
src/content/courses.ts.

- [x] Delegate about page and the remaining current course detail routes.
- [x] Enumerate supported slugs at build time, with unknown courses returning 404.
- [x] Keep authored bilingual content independent from archived source files.

## Task 5: Integration and verification

Files: src/messages/{en,uk}.json; tests/_.spec.ts; README.md; public/images/_.

- [x] Integrate translation fragments and review all links and page metadata.
- [x] Update existing browser assertions for the real homepage; add route coverage.
- [x] Run pnpm check, pnpm build, pnpm test:e2e and flake validation.
- [x] Inspect desktop/mobile and both themes with browser screenshots.
- [x] Request independent review, resolve material findings and report limitations.

Legacy road-rules, polls and news/gallery archives remain editorial follow-up;
do not claim a complete archive migration. Leave changes reviewable in the checkout
without committing, merging, pushing or deploying.
