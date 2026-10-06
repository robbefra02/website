# Example: from Notion to the website

`2026-10-05-portal-gun-nokia-charger.md` is what the example post in Notion
(Robbe → 🌐 website → Posts → "Fixed a portal gun with a Nokia charger") turns into after a sync.

## What the sync does with each Notion block

| In Notion | On the site |
|---|---|
| Fields (Title, Date, Category, Subtags, Language, Slug, Summary, Cover, Featured) | Front matter at the top of the file |
| Text, headings, lists, quotes | Normal Markdown |
| Image (uploaded) | Downloaded to `/assets/posts/<slug>/01.jpg, 02.jpg...` (Notion image links expire after ~1 hour) |
| Image caption | Alt text (for screen readers) and visible caption |
| YouTube video block or YouTube link on its own line | `{% include video.html youtube="..." %}` - a privacy-friendly embed (youtube-nocookie) |
| Uploaded video file (small) | Downloaded to `/assets/posts/<slug>/` and shown with a `<video>` player |
| Callout with the ✏️ icon | **Skipped** - private notes to yourself, never published |

## Where files will live once the Jekyll site exists

```
nl/_posts/2026-10-05-portal-gun-nokia-charger.md   ← becomes /nl/projects/portal-gun-nokia-charger/
en/_posts/2026-10-05-portal-gun-nokia-charger.md   ← becomes /en/projects/portal-gun-nokia-charger/
assets/posts/portal-gun-nokia-charger/
  01.jpg
nl/
  index.html          ← home: all posts, newest first
  projects/index.html ← category page: posts with category "projects" + subtag filter buttons
en/ ...
```

The category pages and menu are generated from the post files: add a post with a new subtag
and its filter button appears by itself. A new *category* is the one thing that needs a small
site change (a new menu item), on purpose, so the menu stays short.
