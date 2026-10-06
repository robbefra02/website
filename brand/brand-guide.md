# Brand guide - robbefransen.be

The rules for how the site looks, moves and sounds. Values live in `tokens.css`; the visual reference is `style-tile.html`; logo rules are in `logo-rules.md`. If this guide and a page disagree, the guide wins - or update the guide on purpose.

---

## 1. Brand idea

**A personal signal.** The site is a log of everything Robbe builds, fixes, studies and visits, the link he gives people instead of an Instagram handle. Visually it's a warm signal in a dark room: frosted glass floating over glowing "resonation" waves that react to you. Calm when you read, alive when you move.

Three words: **warm, curious, alive.**

---

## 2. Color

### The palette

| Swatch | Name | Hex | Token(s) | Job |
|---|---|---|---|---|
| ⬛ | Carbon Black | `#1E1E1E` | `--carbon-800` | Brand black. Text on orange and on light backgrounds. Glass tint. |
| ⬛ | Carbon 900 | `#161616` | `--color-bg` (dark) | Page background in dark mode, a step deeper than brand black. |
| 🟧 | Apricot Cream | `#FFD9AA` | `--color-text` (dark) | All main text in dark mode. Back lines of the waves. |
| 🟫 | Cream 500 | `#D4C2A8` | `--color-text-muted` (dark) | Dates, meta, captions, secondary text. |
| 🟠 | Dark Orange | `#FF8D00` | `--color-accent` | Buttons, active nav item, active filter, glows. Large heading accent. |
| 🟠 | Orange 200 | `#FFBE6B` | `--color-text-accent` (dark) | Small orange text on dark: links, tags, labels. |
| 🔴 | Ember | `#FF5A1F` | `--ember-500`, `--wave-to` | Depth only: front wave lines, glows, bottom of gradients. **Never text.** |
| ⬜ | Cream 100 | `#FBF3E8` | `--color-bg` (light) | Page background in light mode. |
| 🟤 | Orange 800 | `#9A4300` | `--color-text-accent` (light) | Orange text in light mode. |

**Proportions (dark mode):** about 58% carbon + glass, 25% wave field, 12% orange, 5% ember. Orange is the spark, not the paint.

### Allowed text pairs - dark mode

Contrast measured with the WCAG 2.x formula. "Glass worst" = a 62% glass panel with densely bunched waves behind it, the hardest real case on the site.

| Text | On page `#161616` | On glass (typical) | On glass (worst) | Use for |
|---|---|---|---|---|
| Apricot `#FFD9AA` | 13.6:1 | 8.4:1 | 7.0:1 | Everything |
| Muted `#D4C2A8` | 10.4:1 | 6.5:1 | 5.4:1 | Secondary text (not inside tag pills: 4.46:1) |
| Orange 200 `#FFBE6B` | 11.1:1 | 6.9:1 | 5.7:1 | Small orange text, tag text (4.74:1 in the pill) |
| Dark Orange `#FF8D00` | 7.8:1 | 4.9:1 | 4.0:1 | **Large text only** (24px+): one highlighted word in a heading |
| Carbon `#1E1E1E` on orange gradient | - | - | 6.0-9.2:1 | Button text, active chip, active nav |

### Allowed text pairs - light mode (secondary theme)

| Text | On page `#FBF3E8` | On glass (worst) |
|---|---|---|
| Carbon `#1E1E1E` | 15.2:1 | 14.3:1 |
| Muted `#5C4F43` | 7.2:1 | 6.5:1 |
| Orange 800 `#9A4300` | 6.0:1 | 5.4:1 |
| Carbon on orange buttons | 6.0-9.2:1 | - |

### Forbidden pairs

| Pair | Ratio | Why |
|---|---|---|
| White or cream text on orange | 2.3:1 / 1.7:1 | Fails. Orange buttons always get carbon text. |
| Ember as text, anywhere | 3.0:1 on glass | Fails for normal text. Ember is a light, not ink. |
| Dark Orange `#FF8D00` as small text on glass | 4.0:1 | Use Orange 200 instead. |
| Dark Orange as text in light mode | 2.1:1 | Use Orange 800 `#9A4300`. |
| Muted text inside a tag pill | 4.46:1 | Tags use Orange 200. |
| Anything on a photo without a solid or glass panel behind it | unpredictable | Photos change; contrast can't be guaranteed. |

### Non-text contrast (WCAG 1.4.11, 3:1)

- Focus ring: Apricot on dark (13.6:1), Carbon on light (15.2:1).
- Borders that must be seen (form fields, checkboxes): `--color-border-ui` = `#A39887`, 3.3:1 even on the worst glass. In light mode `#8A7F74`, 3.6:1.
- Glass edges and dividers (`--color-border`) are decorative and don't need 3:1. Never use them as the only sign that something is clickable.
- Links in running text are underlined (color alone is not enough, WCAG 1.4.1).

---

## 3. Typography

### Fonts

| Role | Font | Weights used | Token |
|---|---|---|---|
| Display: headings, card titles, name in the nav | **Clash Display** (ITF, Fontshare) | 500, 600 | `--font-display` |
| Body: text, buttons, labels, everything else | **Manrope** (OFL, Google Fonts) | 400, 600, 700 | `--font-body` |

Why Manrope: its rounded, open shapes match the friendly glass/aero mood, and it's calm next to Clash Display's wide, sharp capitals. It replaces Helvetica, which isn't a free web font.

Both are self-hosted from `/brand/fonts/` (no Google or Fontshare servers, so no visitor IPs leave the site).

### Scale

| Token | Size | Font / weight / line height | Use |
|---|---|---|---|
| `--text-hero` | 36 → 68px | Clash 600 / 1.05 / -0.02em | Home page greeting only |
| `--text-h1` | 34 → 58px | Clash 600 / 1.05 / -0.02em | Page and post titles (one per page) |
| `--text-h2` | 24 → 32px | Clash 600 / 1.25 | Sections inside a post |
| `--text-h3` | 19 → 22px | Clash 500 / 1.25 | Card titles, list titles |
| `--text-lead` | 19px | Manrope 400 / 1.65 | Intro line under a title |
| `--text-body` | 17px | Manrope 400 / 1.65 | Running text |
| `--text-small` | 14px | Manrope 400-600 | Dates, meta, nav |
| `--text-caption` | 12.5px | Manrope 700, UPPERCASE, +0.12em | Labels, tags, section kickers |

Sizes marked "→" grow smoothly with screen width (`clamp()`).

### Rules

- **Line length:** running text max `--width-prose` (42rem, about 65-75 characters). Never full-width paragraphs.
- **One h1 per page**, headings in order (h1 → h2 → h3, no skipping).
- **Clash Display never for body text** or anything under 18px: its wide letters get tiring fast.
- **Highlight one word, not a sentence:** a single orange word with `--glow-text` in a hero heading is the maximum.
- **No ALL CAPS sentences.** Uppercase is for short labels (1-3 words) only.
- **No text glow on body text.** Glow blurs letter edges.

---

## 4. Motif: the resonation waves

### What it is

A stack of thin flowing lines, cream at the back → orange → ember at the front, back lines thin and front lines thicker (fake depth). Drawn live in SVG by `/brand/waves.js`.

### Where it's allowed

| Place | Allowed? |
|---|---|
| One full-page **wave field**, fixed behind the content | Yes - max **one per page** |
| Inside cards, buttons, tags, nav | **No** |
| Behind a photo | **No** |
| As a divider between sections | No - the glass panels already separate content |
| Monogram | It's already in the logo's triple line, don't add more |
| Print, slides, social images | Yes, as a static image, max one per layout |

### Behavior

| State | What the waves do | Setting in HTML |
|---|---|---|
| Idle | Slow constant drift | `data-motion="ambient"` |
| Scrolling | Speed up and swell slightly, then ease back by themselves | `data-scroll` |
| Mouse | Lines bend gently away from the pointer, glide back when it leaves | `data-cursor` |
| Phones (< 700px wide) | 20 lines instead of 34, no cursor effect | `data-lines-small="20"` |
| Pause button pressed | Everything freezes; the choice is remembered on the next page | `data-motion-toggle` on the button (labels from `data-label-pause` / `data-label-play`) |
| OS "reduce motion" on | Static waves, no scroll or cursor effect | automatic |
| OS "reduce transparency" on | Glass becomes solid | automatic (tokens.css) |

**Standard wave field:**

```html
<svg class="wave-field" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true"
     data-waves data-lines="34" data-lines-small="20" data-amp="70" data-freq=".8" data-spread=".09"
     data-depth="1.3" data-motion="ambient" data-scroll data-cursor></svg>
```

### Animation rules

- **Always a visible Pause button** when waves move (WCAG 2.2.2: anything moving for more than 5 seconds needs one). It lives in the nav.
- Nothing flashes, nothing moves faster than a slow drift on its own.
- The waves are decoration: `aria-hidden="true"`, never carry information.
- Don't tune the cursor effect up. It was deliberately toned down to a gentle bend.

---

## 5. Glass, spacing and layout

### Glass panels

The surface for all content: `--color-surface` (62% carbon tint) + `backdrop-filter: blur(var(--glass-blur))` + `--glass-gloss` on top + 1px `--color-border` with a brighter `--color-border-rim` on the top edge + `--shadow-card` + `--radius-lg`.

- All text sits on glass or on the plain page background, **never directly on the wave field**.
- Don't stack glass on glass more than 2 levels deep (e.g. card on a panel is fine, a third level is not).
- Keep glass at 62% or more opacity. More see-through = contrast numbers above are no longer valid.

### Spacing

Use the spacing scale only (`--space-1` 4px … `--space-9` 80px). Rough guide:

| Between | Token |
|---|---|
| Label and its value, icon and text | `--space-1` / `--space-2` |
| Elements inside a card | `--space-3` / `--space-4` |
| Cards in a grid, card padding | `--space-5` |
| Panel padding | `--space-6` / `--space-7` |
| Major page sections | `--space-8` / `--space-9` |

### Layout

- Content max width `--width-content` (72rem), centered, at least `--gutter` (16px) on the sides.
- Post lists: masonry feed of glass cards on the home page; compact list rows (thumbnail + title + meta) on category pages.
- Must work at 320px wide with no sideways scrolling (WCAG 1.4.10).
- Tap targets at least 44×44px for buttons, never smaller than 24×24px (WCAG 2.5.8).

---

## 6. Components (summary - see style-tile.html)

| Component | Recipe |
|---|---|
| **Primary button** | Pill, `--color-accent-gradient`, carbon text, Manrope 700, `--inner-shine` + `--glow-accent`. Hover: `--glow-accent-hover`. One per view. |
| **Secondary button** | Pill, faint cream fill, `--color-border`. Hover: inner glow + tight halo (`--glow-halo`), border brightens. Used for "About me", "Pause waves". |
| **Nav** | Sticky glass pill. Monogram + name left, categories right, active category = orange pill. Pause button at the end. |
| **Tag** | Small pill, uppercase caption, Orange 200 text on `--color-tag-bg` with `--color-tag-border`. |
| **Filter chip** | Like a secondary button; pressed = orange gradient pill with carbon text, `aria-pressed="true"`. |
| **Card** | Glass, cover image on top, tag, title (Clash 500), date. Hover: lifts 3px, orange border, ember glow below. |
| **Focus** | 2px solid `--color-focus`, 3px offset, on everything focusable. Never `outline: none` without a replacement. |
| **Video** | Thumbnail + orange play button; YouTube (nocookie) only loads after a click. |

---

## 7. Imagery

- **Real photos over stock.** Your own photos of projects, places and repairs. Stock only as a temporary placeholder.
- **Covers:** landscape 3:2 (cards) or 16:9 (post headers), at least 1600px wide. Subject in the middle third so cropping is safe.
- **Format:** JPG or WebP, under ~400 KB each. Resize before uploading to Notion; phone photos are 3-5 MB.
- **No text baked into images.** Text goes in HTML, where it can be translated and read by screen readers.
- **Alt text:** describe what's in the photo and why it matters ("Charge controller with a cold solder joint, circled"). Decorative images: empty `alt=""`. In Notion: the image caption becomes the alt text.
- **No filters or orange overlays** on photos. The interface carries the brand colors; photos stay honest.
- **No waves over photos.**

---

## 8. Tone of voice

The site talks like Robbe explaining something to a friend at the bar: relaxed, direct, a bit nerdy, happy to help.

### Trait 1 - Straight talk
Say it plainly. Short sentences. No corporate filler, no humble-bragging.

| | We say | We don't say |
|---|---|---|
| EN | "Fixed the charging port. It was pocket lint." | "Leveraging extensive expertise in device restoration, I resolved a connectivity issue." |
| NL | "Laadpoort gefixt. Het was gewoon zakpluis." | "Dankzij mijn uitgebreide expertise in herstellingen heb ik een connectiviteitsprobleem opgelost." |
| FR | "Port de charge réparé. C'était juste de la peluche de poche." | "Grâce à mon expertise approfondie, j'ai résolu un problème de connectivité." |

### Trait 2 - Curious tinkerer
Show how things work, including the nerdy details, but explain them so anyone can follow. Analogies welcome.

| | We say | We don't say |
|---|---|---|
| EN | "A cold solder joint is like a loose plug: it looks connected, but the current can't get through." | "Cold joint, reflowed, done." (to a general audience) |
| NL | "Een koude soldeerverbinding is zoals een stekker die half uitzit: ziet er vast uit, maar er gaat geen stroom door." | "Koude las, gereflowd, klaar." |
| FR | "Une soudure froide, c'est comme une prise mal branchée : elle a l'air connectée, mais le courant ne passe pas." | "Soudure froide, refusionnée, fini." |

### Trait 3 - Warm and inclusive
Write for everyone, from a recruiter to your grandma. Invite people in, never talk down.

| | We say | We don't say |
|---|---|---|
| EN | "Stuck with the same problem? Send me a message, happy to take a look." | "Obviously, anyone who knows anything about electronics would have spotted this." |
| NL | "Zit je met hetzelfde probleem? Stuur me een berichtje, ik kijk graag mee." | "Iedereen die een beetje verstand heeft van elektronica had dit meteen gezien." |
| FR | "Vous avez le même problème ? Envoyez-moi un message, je regarde volontiers." | "N'importe qui s'y connaissant un peu aurait vu ça tout de suite." |

### Trait 4 - Light humor, never at someone's expense
A dry joke about yourself or the situation, yes. Mocking people, no.

| | We say | We don't say |
|---|---|---|
| EN | "It now plays a ringtone every time it boots. I'm calling it a feature." | "The previous repair shop clearly had no idea what they were doing." |
| NL | "Hij speelt nu een ringtone bij het opstarten. Ik noem het een feature." | "De vorige herstelzaak had duidelijk geen idee waar ze mee bezig waren." |
| FR | "Il joue maintenant une sonnerie au démarrage. J'appelle ça une fonctionnalité." | "L'atelier précédent ne savait clairement pas ce qu'il faisait." |

### Writing conventions

| | NL | EN | FR |
|---|---|---|---|
| Address the reader | **je / jij** (informal, Flemish standard) | **you** | **vous** (neutral; "tu" can read as too familiar to some French readers) |
| Dates | 5 okt 2026 | 5 Oct 2026 | 5 oct. 2026 |
| Spelling | Standard Dutch, Flemish words are fine | American English | Standard French, space before `: ; ? !` |
| Titles | Sentence case: "Laadpoort gefixt met zakpluis" | Sentence case | Sentence case |

- Titles say what happened, not how great it was: "Fixed a portal gun with a Nokia charger", not "My amazing repair journey".
- Post summaries: 1-2 sentences, max ~160 characters (they double as the search-engine description).
- Emoji: fine in Notion, use sparingly on the site (max one per post, never in titles).

---

## 9. Do / don't

| Do | Don't |
|---|---|
| Carbon text on orange buttons | White text on orange (2.3:1) |
| One wave field per page, behind glass | Waves inside cards, behind photos, or as dividers |
| Orange 200 for small orange text on dark | Dark Orange or Ember for small text |
| One orange highlighted word in a hero heading | Whole orange headings or orange paragraphs |
| Glass at 62%+ opacity | More see-through glass "because it looks cool" |
| Visible Pause button whenever waves move | Hide the motion controls |
| Underlined links in running text | Links shown by color alone |
| Own photos, landscape, no overlays | Stock photos with orange filters |
| Clash Display for headings only | Clash Display for paragraphs or small labels |
| Spacing and color tokens from tokens.css | Hard-coded `#FF8D00`, `16px`, `margin: 13px` |
| Short, plain sentences with a dry joke | Corporate buzzwords, mocking people |
| Self-hosted fonts | Google Fonts / Fontshare links in the page |

---

## 10. Content model (Notion → site)

| Field | Rule |
|---|---|
| Category | Exactly one: Projects, School, Travel, Audio/Video/Foto (`media`), Career, Music. Adding a category = a small site change (menu item). |
| Subtags | Free, lowercase-with-dashes (`3d-printing`, `hong-kong`). Reuse existing ones. They become filter chips on the category page automatically. |
| Slug | lowercase-with-dashes, same for every language version of a post. |
| Language | NL first. EN and FR versions are separate rows with the same slug. |
| Status | Draft → **Ready to publish** (= approval, sync publishes it live) → Published (set by the sync). |
| ✏️ callouts | Private notes, never published. |

Full posting guide: Notion → Robbe → 🌐 website.
