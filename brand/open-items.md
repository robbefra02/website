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

## Still open
- Sync: start with "ask Claude to sync" (Notion connector), later a GitHub Action (needs NOTION_TOKEN + NOTION_DATABASE_ID secrets).
- Does the sync publish straight to main, or open a PR per post? (Recommendation: straight to main - setting "Ready to publish" is the approval.)
- Final category list (currently Projects, School, Travel, Repair, Career, Music).
- Clash Display font files: download from fontshare.com and place in `/brand/fonts/` (the build container can't reach Fontshare).
