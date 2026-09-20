# Kadirhan Emre — Portfolio Design System

Aesthetic: **"Workshop at night"**. The palette and type come from his own client work rather
than from a developer-portfolio template: LOOMR's vermilion and cinematic scroll, Kulama's warm
paper and editorial serif. Rewritten 2026-09-20, replacing the earlier "Cloud Console" system.

## 1. Positioning

| Axis | Decision | Why |
|---|---|---|
| Mood | Warm, cinematic, hand-built | The work itself is visual; the site should prove the craft |
| Proof | Client sites run inside the page | An intern candidate who ships beats one who lists skills |
| Movement | Scroll-scrubbed hero film, quiet reveals elsewhere | Signature moment, then get out of the way |
| Mobile | Film collapses to a poster | Recruiters open links on a phone |
| Reference points | His own LOOMR and Kulama builds | Consistency with what he actually shipped |

## 2. Color tokens

`R G B` triplets so opacity works through `rgb(var(--x) / <alpha>)`.

```
--rgb-bg:        12 10 9     /* #0C0A09 warm near-black */
--rgb-surface:   23 19 16
--rgb-surface-2: 32 26 22
--rgb-border:    58 47 40

--rgb-ink-50:    244 236 226  /* #F4ECE2, the Kulama paper tone */
--rgb-ink-200:   209 195 180
--rgb-ink-400:   150 135 121
--rgb-ink-600:   105 92 81

--rgb-brand-primary: 199 51 30   /* #C7331E, LOOMR vermilion */
--rgb-brand-accent:  217 164 65  /* #D9A441, Kulama gold */
```

## 3. Type

- Display: **Fraunces** (`font-display`). Use the utility, not `font-[var(--font-display)]`:
  Tailwind v4 does not emit a family from that arbitrary value, which silently left every
  heading in Inter until 2026-09-20.
- Body: **Inter**. Mono: **JetBrains Mono** for labels, captions and the `.kbd` chip.

## 4. Signature elements

- **Hero**: typographic, no imagery. The earlier scroll-scrubbed film was removed 2026-09-20.
  MeshMedic demo, scrubbed by scroll across a 320vh sticky section, captioned per chapter.
  Rebuild with `node scripts/capture-hero.mjs` whenever those sites change.
- **Live embeds**: client projects load inside a browser-chrome frame on click, rendered at
  1280px and scaled down so the site shows its desktop layout, not its phone layout.
- **Film grain**: fixed SVG noise overlay at 5% opacity, disabled under `prefers-reduced-motion`.

## 5. Rules

- Every fact on the page must match `~/cv/cv-data.yml`.
- No phone number on the public site.
- Private repos say so instead of linking to a 404.
