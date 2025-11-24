import type { Config } from 'tailwindcss'

const withOpacity =
  (variable: string) =>
  ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}) / 1)`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'ui-sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace'],
      },
      colors: {
        'ink-900': 'var(--color-ink-900)',
        'ink-800': 'var(--color-ink-800)',
        'ink-700': 'var(--color-ink-700)',
        'ink-600': 'var(--color-ink-600)',
        'ink-500': 'var(--color-ink-500)',
        'ink-400': 'var(--color-ink-400)',
        'ink-300': 'var(--color-ink-300)',
        'ink-200': withOpacity('--rgb-ink-200'),
        'brand-primary': withOpacity('--rgb-brand-primary'),
        'brand-accent': withOpacity('--rgb-brand-accent'),
        surface: 'var(--color-surface)',
        'surface-strong': 'var(--color-surface-strong)',
      },
      boxShadow: {
        deluxe: '0 32px 80px rgba(14, 23, 38, 0.25)',
        soft: '0 24px 60px rgba(14, 23, 38, 0.14)',
      },
      borderRadius: {
        '3xl': '32px',
        '4xl': '40px',
      },
      backdropBlur: {
        md: '24px',
        xl: '28px',
        '2xl': '36px',
      },
    },
  },
  plugins: [],
}

export default config

