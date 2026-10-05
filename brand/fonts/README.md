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

**Fix before launch (pick one):**
1. **Make the repo private** (recommended). GitHub Pages on a private repo needs GitHub Pro,
   which is free for students via the GitHub Student Developer Pack (education.github.com/pack).
   Then remove the `ClashDisplay-*` line from `.gitignore` and commit the font.
2. Load Clash Display from the Fontshare API instead. This needs no files, but every visitor's IP
   address is sent to ITF's servers (a GDPR point to mention in a privacy note), and ITF does
   not guarantee the API stays up.

Until then the site falls back to the next font in `--font-display` when the file is missing.
