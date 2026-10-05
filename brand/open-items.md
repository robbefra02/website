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

## Still open
- Sync: start with "ask Claude to sync" (Notion connector), later a GitHub Action (needs NOTION_TOKEN + NOTION_DATABASE_ID secrets).
- Clash Display font files: download from fontshare.com and place in `/brand/fonts/` (the build container can't reach Fontshare).
