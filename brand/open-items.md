# Open items and future wishes

Things that are decided "later". Read this at the start of every brand or site session.

## Future wishes
- **Notion as the writing tool (someday).** Robbe wants to write posts in a Notion template and have them appear on the site. Plan when it's time: a Notion database with the same fields as a post (title, date, tags, language, cover, body) -> a scheduled GitHub Action that exports new/changed pages to Markdown in `_posts/` and commits them. Keep the post front matter Notion-friendly from day one so this stays possible.

## Decisions made (brand session, Oct 2026)
- Content workflow: Jekyll on GitHub Pages (Markdown posts with tags, images and videos). No local install, GitHub builds it.
- Site purpose: personal log, "go to my website" instead of "go to my Instagram". Universal audience.
- Logo: monogram (RF).
- Direction: B "Liquid Aero" (frosted glass over a wave field), with the triple-line RF monogram from sketch A.
- Palette: warm only. Ember #FF5A1F added for depth (waves, glows, gradients), never as text. Aqua tested and rejected.
- Wave motion: slow constant drift, faster while scrolling, lines part around the cursor. Pause button + reduced-motion fallback. 20 lines on phones.
- Post model: one Category per post (= menu item, max 6-7), free Subtags (= filter buttons on the category page, generated from the posts). Same slug across languages links translations.
- Notion: page "🌐 website" under Robbe, with a Posts database (Title, Status, Date, Category, Subtags, Language, Slug, Summary, Cover, Featured, Live URL) and one example post. ✏️ callouts = private notes, not published.

- Categories confirmed: Projects, School, Travel, Repair, Career, Music.
- Sync publishes straight to the live site: setting "Ready to publish" in Notion is the approval. No PR per post.
- Cursor effect toned down (round 3.1): gentle bend, not a lens/zoom.
- YouTube embeds use a click-to-load thumbnail (youtube-nocookie), so YouTube only loads after a visitor clicks (GDPR-friendly).

- Body font: Manrope (OFL), self-hosted. Clash Display stays the display font.
- Light theme exists as a secondary theme (tokens + toggle). Dark is default.
- Brand deliverables done (Oct 2026): tokens.css, waves.js, brand-guide.md, logo-rules.md + logo files, style-tile.html, CLAUDE.md.

## To do (Robbe)
- [ ] **GitHub Student Developer Pack** (unlocks GitHub Pro for free, needed for the Clash Display fix below)
  - [x] Delete the old separate school GitHub account (done, frees up the school email)
  - [ ] Add the KdG school email to the primary GitHub account (Settings → Emails) and verify it
  - [ ] Apply at education.github.com/pack with that email + proof of enrollment (student card or enrollment certificate). Approval can take a few days.
  - [ ] Once GitHub Pro is active: make the repo private (Settings → General → Danger Zone), then check Settings → Pages still shows the site as live
  - [ ] Then (coding session): remove the `ClashDisplay-*` line from `.gitignore` and commit the font
  - ⚠️ Order matters: making the repo private **before** Pro is active takes the live site offline.

## Still open
- **Clash Display + public repo.** The ITF license forbids distributing the font files through a public repository, so `ClashDisplay-*` is gitignored. Until fixed, the live site shows the fallback font for headings. Fix: make the repo private (needs GitHub Pro: free with the GitHub Student Developer Pack), then commit the font. Alternative: Fontshare API (sends visitor IPs to ITF, GDPR note needed).
- **Deploy workflow.** `.github/workflows/static.yml` uploads the repo without running Jekyll. Coding session 1 switches it to a Jekyll build.
- Sync: start with "ask Claude to sync" (Notion connector), later a GitHub Action (needs NOTION_TOKEN + NOTION_DATABASE_ID secrets).
- Light theme: built and contrast-checked, but not yet reviewed by Robbe.
