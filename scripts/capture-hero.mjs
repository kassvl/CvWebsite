#!/usr/bin/env node
/**
 * Build the hero film: frames of real, shipped work, scrubbed by scroll on the home page.
 *
 *   node scripts/capture-hero.mjs
 *
 * Scene 1: loomr.net, dark and cinematic, as the opening of the film.
 * Scene 2: braidss.xyz's booking flow, the part he actually built.
 * Scene 3: MeshMedic, from its recorded demo (Grafana incident to merged pull request).
 *
 * Deliberately no client brand photography: the film opens on work, not on someone else's
 * marketing shot.
 *
 * Output: public/hero/f01.webp ... fNN.webp, 1280x720, plus poster.webp for mobile and
 * social previews. Re-run whenever those sites change.
 */
import { mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { chromium } from 'playwright';

const OUT = 'public/hero';
const RAW = '/tmp/hero-raw';
const W = 1600, H = 900;
const MESHMEDIC_MP4 = join(homedir(), 'meshmedic/demo/video/meshmedic-demo.mp4');

const SCENES = [
  { url: 'https://loomr.net', shots: 6, step: 700, wait: 6500 },
  { url: 'https://braidss.xyz/rezervasyon', shots: 4, step: 480, wait: 3500 },
];

rmSync(RAW, { recursive: true, force: true });
mkdirSync(RAW, { recursive: true });
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome', headless: true });
let n = 0;
for (const scene of SCENES) {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto(scene.url, { waitUntil: 'networkidle', timeout: 90000 }).catch(() => {});
  await page.waitForTimeout(scene.wait);
  for (let i = 0; i < scene.shots; i++) {
    await page.screenshot({ path: join(RAW, `${String(++n).padStart(3, '0')}.png`) });
    await page.mouse.wheel(0, scene.step);
    await page.waitForTimeout(1200);
  }
  await page.close();
  console.log(`${scene.url}: ${scene.shots} frames`);
}
await browser.close();

// MeshMedic: pull frames from the recorded demo, cropped to the content strip so the
// empty lower half of that recording never reaches the film.
if (existsSync(MESHMEDIC_MP4)) {
  const stamps = ['00:00:26', '00:00:34', '00:00:44', '00:01:06'];
  for (const ss of stamps) {
    const out = join(RAW, `${String(++n).padStart(3, '0')}.png`);
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', ss, '-i', MESHMEDIC_MP4, '-frames:v', '1',
      '-vf', `crop=iw:ih*0.62:0:0,scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}`, out]);
  }
  console.log(`meshmedic: ${stamps.length} frames`);
} else {
  console.log('meshmedic demo mp4 not found, skipping that scene');
}

// ffmpeg here has no libwebp, so scale with ffmpeg and encode with cwebp (brew).
execFileSync('bash', ['-c',
  `set -e; i=0; for f in ${RAW}/*.png; do i=$((i+1)); ` +
  `ffmpeg -v error -y -i "$f" -vf "scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}" /tmp/hero-frame.png; ` +
  `cwebp -quiet -q 64 /tmp/hero-frame.png -o "${OUT}/f$(printf %02d $i).webp"; done`]);
execFileSync('bash', ['-c', `cp ${OUT}/f01.webp ${OUT}/poster.webp`]);
console.log(`wrote ${n} frames to ${OUT}`);
