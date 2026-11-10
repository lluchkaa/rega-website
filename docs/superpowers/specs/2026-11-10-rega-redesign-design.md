# REGA redesign

Status: approved with the owner's correction to use REGA orange as the main color.

## Intent

Rebuild REGA’s public website with a fresh design that helps people choose driving
or motorcycle training, explore gift certificates, and contact the school. Use the
original school’s factual content while rewriting and restructuring it for clarity.

## Existing foundation and constraints

The repository already provides Next.js static export, Ukrainian and English
locales, Tailwind, and shadcn Base UI Nova with a button primitive. Keep these.
Generate every supported locale route at build time. Use localized Next navigation
and Next Image, and follow the README’s component and module conventions.
No deployment, request-time API, payment system, or message submission backend is
part of this work. Contact and gift ordering should offer real contact methods;
never simulate successful submissions.

## Approaches

1. Shared foundation followed by page-family implementation (recommended).
   Establish tokens, primitives, navigation, footer, and one representative course
   page before delegation. This makes pages consistent and gives agents a concrete
   example without forcing all content into one layout.
2. Design and build pages independently. Faster initial parallel work, but creates
   inconsistent navigation, themes, spacing, and repeated components.
3. Reproduce the original templates with cosmetic changes. Lower restructuring
   effort, but preserves the dense navigation and dated content presentation.

The owner selected an orange primary color and delegated remaining design choices.

## Visual direction

Confident, welcoming, practical driving school rather than a racing-only brand.
Use generous space, large clear headings, restrained rounded corners, simple
wayfinding, and authentic training photography where suitable assets are available.
Avoid invented instructors, reviews, credentials, results, or numerical claims.

Proposed light palette: warm ivory #F7F7F2 background, white cards, graphite
#182321 text, burnt orange #B74412 primary, orange #F58220 accent.
Proposed dark palette: #111B19 background, #1A2925 cards, #EFF5F1 text,
#FF9A5C primary, #F58220 accent. Validate text, controls, focus, and hover contrast
before settling final semantic tokens. Bright orange is decorative unless contrast permits.

Use semantic CSS tokens for both themes, system preference by default, and an
accessible explicit theme switch. Any remembered preference follows the existing
browser-storage boundary. Keep initial static content usable without JavaScript.
Use a system font stack with good Ukrainian support to avoid external font fetches.

## Foundation scope

Keep shadcn configuration and generated declaration style. Add only used
primitives under src/components/uikit and export them through the barrel.
Likely first consumers need buttons, cards, badges, accordion, and mobile
navigation controls. Shared application components own header, footer, section
headings, course summaries, and contact calls to action; UIKit stays domain-free.
Provide a reviewable component showcase in both themes, plus responsive navigation,
locale switching, focus states, reduced-motion treatment, and mobile layouts.
Use /[locale]/uikit as a public, noindex showcase during development. Keep the
existing static language chooser at /. The representative course is the beginner
course at /[locale]/initial_course. CSS system preference supplies both themes when
JavaScript is unavailable; an explicit client choice overrides it when available.

## Content and page structure

Primary navigation: training, gifts, about REGA, contacts. Homepage leads with
choosing a course or a free trial, followed by training groups and school context.
Course pages explain audience, skills, format, duration, price and contact action.
Gift certificates become part of the same visual experience. School information,
fleet, reviews, gallery, and news retain layouts appropriate to their content.

Preserve useful existing URL paths where practical. Record intentional route
changes for future static-host redirects rather than introducing runtime redirects.
Retain Ukrainian and English support. Polish expansion is outside this foundation.

Do not automatically publish the old road-rules archive, polls, search, or obsolete
administrative information. Inventory them separately for an editorial decision.
The sitemap includes a blank location and duplicate reviews URL; deduplicate them.
News and gallery archives need a separate pagination/detail inventory before anyone
claims complete migration. Sitemap coverage alone is not full-site coverage.

## Reference handling

Fetched HTML, extracted text, and the URL manifest stay only in gitignored
.ignore/original-rega/. Never import these files, parse them at build time, fetch
the old site at runtime, or reuse its scripts/templates. Author reviewed copy in
normal locale messages or purpose-specific content modules. Move only deliberately
selected production images into public assets after review. Prices and promotions
are dated source facts and require rechecking before publication.

## Delegation and validation

First complete and verify the shared foundation and representative page. Then
assign agents disjoint page files or page families, with the design, route list,
reference manifest, UIKit API and content rules included in each brief. The primary
agent owns shared tokens, navigation, UIKit, and locale integration to avoid clashes.
Agents supply page-specific translation additions in their handoff; the primary
agent integrates the shared message files. Reserve Shell and UIKit translation
namespaces for the foundation and assign a distinct namespace to each page family.
Each agent must read the relevant saved sources, author fresh copy, and identify
uncertain or outdated facts. Review their pages for consistency before integration.

Run pnpm check, pnpm build, relevant Playwright browser tests, and the README’s
flake validation. Browser coverage should include both locales, static HTML without
JavaScript, mobile navigation, keyboard interaction, theme switching and reload,
image loading, and missing routes.
