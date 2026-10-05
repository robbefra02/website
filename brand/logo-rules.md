# Logo rules - RF monogram

The monogram is **R** and **F** drawn as a triple line: two outer lines with a see-through channel and a thin center line. It echoes the resonation waves without adding a wave. Files live in `/brand/logo/`.

## Versions

| File | Version | Use it for |
|---|---|---|
| `rf-mark-orange.svg` | Triple line, Dark Orange | **Default.** Nav, footer, hero, anything on dark backgrounds. |
| `rf-mark-cream.svg` | Triple line, Apricot Cream | On dark backgrounds where orange is already busy (e.g. next to an orange button). |
| `rf-mark-carbon.svg` | Triple line, Carbon Black | On light backgrounds (light theme, cream paper) and on solid orange. |
| `rf-solid-orange.svg` | Single solid line, Dark Orange | Anything smaller than 40px tall, where the triple line turns to mush. |
| `favicon.svg` | Solid orange on a rounded carbon square | Browser tab icon (modern browsers). |
| `favicon-16.png`, `favicon-32.png` | Same, as PNG | Browser tab fallback. |
| `apple-touch-icon.png` (180×180) | Solid orange on full carbon square | iPhone/iPad home screen. iOS rounds the corners itself. |
| `icon-512.png` (512×512) | Same, with extra margin | Android home screen / web app manifest (safe for circular masks). |

In page HTML, the nav uses the mark inline (an SVG `<symbol>` with `stroke="currentColor"`), so its color follows CSS. The name next to it is **live text** in Clash Display 600, not part of the logo file.

**Favicon HTML** (in `<head>` of every page):

```html
<link rel="icon" href="/brand/logo/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/brand/logo/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/brand/logo/favicon-16.png" sizes="16x16" type="image/png">
<link rel="apple-touch-icon" href="/brand/logo/apple-touch-icon.png">
```

## Clear space

Keep empty space around the mark of at least **half the mark's height** on every side. At 34px tall in the nav that's 17px. No text, edges or other graphics inside that zone. The name "Robbe Fransen" next to the mark is the one exception: gap = ¼ of the mark height (`--space-2` at nav size).

## Minimum size

| Version | Minimum height |
|---|---|
| Triple line (`rf-mark-*`) | **40px** on screen, 12mm in print |
| Solid (`rf-solid-orange.svg`, favicons) | **16px** |

## Colors and backgrounds

| Background | Mark color |
|---|---|
| Carbon / dark page / dark glass | Orange (default) or Cream |
| Cream / light page / light glass | Carbon |
| Solid Dark Orange | Carbon |
| Photo | Only on a glass or solid panel, never straight on the photo |
| Wave field | Only on a glass panel (the nav), never floating over the waves |

Orange on a light background is not allowed: 2.1:1, too faint to read as a mark.

**Glow:** a soft orange `drop-shadow` glow is allowed on hover and in the hero only, never as the resting state everywhere.

## Don'ts

- Don't stretch, squash, rotate or slant it.
- Don't recolor it outside the palette (no white, no ember, no gradients across the letters).
- Don't fill the see-through channel with a color. It must show the background.
- Don't add effects: no bevels, outlines, 3D, extra shadows, or animation on the letters.
- Don't add waves to it, put it inside a circle or badge, or redraw the letters.
- Don't use the campaign's glowing "O" with arcs. That's not Robbe's logo.
- Don't place it on busy photos or directly on the wave field.
- Don't use the triple line below 40px. Switch to the solid version.
