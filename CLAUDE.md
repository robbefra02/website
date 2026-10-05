# CLAUDE.md - robbefransen.be

Rules for every coding session on this repo. Read this first, then `/brand/brand-guide.md` and `/brand/open-items.md`.

## What this is

Robbe Fransen's personal site: a **personal log** (projects, school, travel, repairs, career, music) he links people to instead of his Instagram. Live at https://www.robbefransen.be, hosted on GitHub Pages from `main`. Languages: Dutch first (`/nl/`), English (`/en/`) and French (`/fr/`) later.

**The owner is learning HTML, CSS and JS.** He must be able to read and understand every line. Optimize for clarity over cleverness, always.

## Stack - hard constraints

- **Plain HTML, CSS and vanilla JavaScript.** No frameworks (React, Vue, Tailwind, Bootstrap, jQuery...).
- **Jekyll, as run by GitHub Pages** - for layouts, includes and Markdown posts. Only plugins on the GitHub Pages whitelist. Nothing to install locally: GitHub builds it.
- **No npm, no bundlers, no build tools, no `package.json`** in the site. (Tooling like the Notion sync may run in a GitHub Action, but it never adds a build step to the site itself.)
- No external CDNs for fonts, CSS or JS. Everything self-hosted.
- Deploy: `.github/workflows/pages.yml` builds with Jekyll (`actions/jekyll-build-pages`). On a pull request it only builds (a red check = broken build); on `main` it also publishes. GitHub's default theme is switched off (`theme: null` in `_config.yml`).
- Site structure: `_layouts/base.html` (frame of every page), `_includes/` (head, icons, header), `_data/i18n.yml` (interface text per language), `assets/css/site.css`, `assets/js/`. Pages per language in `/nl/`, `/en/`, `/fr/`.

## Design rules

- **All visual values come from `/brand/tokens.css`.** Use semantic tokens only (`var(--color-text)`, `var(--space-4)`, `var(--radius-lg)`). Never hard-code colors, font names, font sizes, spacing, radii, shadows or durations. Missing a token? Add it to `tokens.css` (primitive + semantic) with a comment, in the same PR.
- Follow `/brand/brand-guide.md` (colors, contrast, type, motif, tone of voice) and `/brand/logo-rules.md`.
- `/brand/style-tile.html` is the visual reference. Components on the site should look and behave like the ones there; its CSS is the reference implementation.
- The wave motif comes only from `/brand/waves.js` via `data-` attributes. Max **one wave field per page**, always with a visible Pause button.
- Dark theme is the default; light theme is secondary but must keep working (tokens handle it). The theme toggle sets `data-theme` on `<html>` and dispatches a `themechange` event.

## JavaScript rules

- Only when HTML/CSS can't do it. Every page must work without JS (content readable, links work).
- **Comment every line or small block, explaining why**, in plain language a beginner understands.
- No libraries. Modern vanilla JS (`const`, `addEventListener`, `querySelectorAll`) is fine.
- Wrap `localStorage` in `try/catch`.
- Respect `prefers-reduced-motion` (waves.js already does).

## CSS rules

- Order inside files: tokens are separate; per-component sections with a header comment.
- Class names: simple and descriptive (`.card`, `.nav`, `.btn-2`), no BEM gymnastics, no utility-class soup.
- Mobile-first, works at 320px wide without sideways scrolling.
- Comment anything non-obvious (why `:root:root:root`, why a magic number).

## Content and copy

- **Never write personal facts about Robbe.** If a page needs text, use clearly fake placeholder copy in a Rick and Morty theme, and list in the PR description exactly which files and lines he must replace.
- Placeholder images: `https://picsum.photos/seed/<word>/<w>/<h>` until real photos exist.
- Tone of voice: see brand guide section 8 (straight talk, curious tinkerer, warm, light humor). NL uses "je", FR uses "vous", EN is American English.
- In docs, PR text and comments: plain language, short sentences, use "-" instead of em dashes.

## Content model (Notion → site)

Posts are written in Notion (Robbe → 🌐 website → Posts database) and synced into the repo.

- Post files: `_posts/<lang>/YYYY-MM-DD-<slug>.md` with front matter: `title, date, lang, slug, category, tags, summary, cover, featured, notion_id`. Example: `/brand/examples/`.
- Images: `assets/posts/<slug>/01.jpg, 02.jpg...` (download them - Notion links expire after about an hour).
- **Categories** (menu items, exactly one per post): projects, school, travel, repair, career, music. Adding one is a deliberate site change.
- **Subtags** (`tags`): free, lowercase-with-dashes. Category pages show filter chips built from the tags their posts use.
- Same `slug` across languages = translations of each other (link them with `hreflang`).
- YouTube: use the click-to-load include (`youtube-nocookie.com`, thumbnail first). Never a plain iframe.
- Notion callouts with the ✏️ icon are private notes: skip them.
- **Sync publishing:** status "Ready to publish" in Notion is the owner's approval. Sync commits that only touch `_posts/` and `assets/posts/` may go straight to `main`, then set the Notion status to "Published" and fill "Live URL". This is the only exception to the git rule below.

## Multilingual

- Separate static pages per language: `/nl/...`, `/en/...`, `/fr/...`. No JS text swapping.
- Correct `lang` on `<html>`, plus `lang` on any passage in another language.
- `<link rel="alternate" hreflang="nl|en|fr|x-default" href="...">` between versions.
- Dates formatted per language: "5 okt 2026" / "5 Oct 2026" / "5 oct. 2026".
- Launch with Dutch only; don't block on EN/FR.

## Git workflow

- Work on a branch. **Never push to `main`** (except the Notion sync, see above).
- **One change per PR** (e.g. "add tokens and fonts", "rebuild nav"), with a plain-language explanation: what changed, why, and how Robbe can check it.
- Before opening a PR: check the page at 320px and 1280px, keyboard-only (Tab through everything), dark and light theme, and reduced motion.

## Fonts and licensing

- Manrope (OFL) is committed in `/brand/fonts/`.
- **Clash Display (ITF Free Font License) is gitignored**: the license forbids distributing the files through a public repository. The deploy workflow writes it into `brand/fonts/` from the `CLASH_DISPLAY_WOFF2_BASE64` repo secret during the build (see `brand/fonts/README.md`). Don't commit `ClashDisplay-*` files while the repo is public. Never subset or convert the font files (license forbids modifying them).

## Accessibility - WCAG 2.2 AA (target for every PR)

Context: EN 301 549 (the EU standard behind the Web Accessibility Directive and the European Accessibility Act) v4.1.1 adopts WCAG 2.2 AA.

**Color and contrast**
- 1.4.3 Text contrast: 4.5:1 normal text, 3:1 large text (24px+, or 18.66px+ bold). Use the allowed pairs in the brand guide; glass is tested at worst case.
- 1.4.11 Non-text contrast: 3:1 for UI boundaries, meaningful icons and focus indicators.
- 1.4.1 Never color alone: links in body text are underlined.

**Text and layout**
- 1.4.4 Text resizes to 200% without loss of content.
- 1.4.10 Reflow: no horizontal scroll at 320px CSS width.
- 1.4.12 Layout survives increased line height, letter and word spacing.
- 3.1.1 / 3.1.2 Correct `lang` on `<html>` and on passages in another language.

**Interaction**
- 2.1.1 Everything works with keyboard only.
- 2.4.1 Skip link to main content on every page.
- 2.4.7 Focus always visible: `--color-focus`, 2px, 3px offset. Never `outline: none` without a replacement.
- 2.4.11 Focused element not hidden behind the sticky nav (use `scroll-margin-top`).
- 2.5.8 Targets at least 24×24px (we aim for 44px on buttons).
- 2.5.7 Anything draggable also works with a single click/tap.
- 3.2.6 Contact/help links in the same place on every page.

**Motion**
- 2.2.2 Moving content over 5 seconds needs a pause control: the "Pause waves" button in the nav.
- 2.3.1 Nothing flashes more than 3 times per second.
- `prefers-reduced-motion: reduce` → static waves, instant transitions (tokens + waves.js handle it).

**Content**
- 1.1.1 Meaningful images have alt text (Notion caption = alt); decorative graphics `alt=""` or `aria-hidden="true"`. The wave field is always `aria-hidden="true"`.
- One `h1` per page, headings in order.

**User preferences**
- Respect `prefers-color-scheme`, `prefers-reduced-motion`, `prefers-reduced-transparency`. The manual theme toggle overrides the system and is keyboard accessible.

## Where things are

| Path | What |
|---|---|
| `/brand/tokens.css` | All design tokens + font loading |
| `/brand/waves.js` | Wave motif script |
| `/brand/brand-guide.md` | Brand rules, contrast tables, tone of voice |
| `/brand/logo-rules.md` + `/brand/logo/` | Monogram files, favicons, rules |
| `/brand/style-tile.html` | Visual reference of every component |
| `/brand/examples/` | Example post: Notion → Markdown |
| `/brand/sketches/` | Design history (round 1-3), not used by the site |
| `/brand/open-items.md` | Decisions made and still open |
