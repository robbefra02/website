# Fonts

| File | Font | License | In git? |
|---|---|---|---|
| `manrope-latin-wght-normal.woff2` | Manrope (variable, 200-800), Latin | SIL Open Font License 1.1 - `Manrope-OFL.txt` | Yes, OFL allows redistribution |
| `manrope-latin-ext-wght-normal.woff2` | Manrope, extra Latin characters | same | Yes |
| `ClashDisplay-Variable.woff2` | Clash Display (variable, 200-700) | ITF Free Font License 2.0 - `ClashDisplay-FFL.txt` | **No** (see below) |

Source: Manrope from the Fontsource npm package (`@fontsource-variable/manrope`), Clash Display from fontshare.com.

## Why Clash Display is not in git

The ITF license allows self-hosting on your own website, but forbids making the font files
available through a repository or other publicly accessible download service. This repo is
public, so anyone could download the files from GitHub. `.gitignore` keeps them out.

It also forbids modifying the files, which includes subsetting and converting formats. Use the
official `.woff2` exactly as downloaded.

**How the live site still gets it:** the font is stored as an encrypted GitHub secret, not as a file
in the repo. The deploy workflow (`.github/workflows/pages.yml`) decodes it into this folder during
each build, so the website serves it (allowed: self-hosting) while the repo never contains it (not allowed).

One-time setup:
1. Turn the font into text: `base64 -w0 ClashDisplay-Variable.woff2 > clash.txt` (Mac: `base64 -i ClashDisplay-Variable.woff2 -o clash.txt`)
2. GitHub → repo → Settings → Secrets and variables → Actions → **New repository secret**
3. Name: `CLASH_DISPLAY_WOFF2_BASE64`, value: the full contents of `clash.txt` → Add secret
4. Delete `clash.txt`. The next build picks the font up.

No secret? The build still works, headings just use the fallback font.
For working locally, keep your own copy of the file in this folder: `.gitignore` keeps it out of commits.

If the repo ever becomes private (GitHub Pro via the Student Developer Pack), the font may be committed normally instead.
