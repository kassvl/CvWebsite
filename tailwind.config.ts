import type { Config } from 'tailwindcss'

// Tailwind v4 reads design tokens from `@theme` in src/index.css.
// This config only declares content sources for the engine.
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class'],
}

export default config
