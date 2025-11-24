import { motion } from 'framer-motion'
import { useThemeContext } from '../../hooks/useThemeContext'
import { Icon } from './Icon'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-12 w-24 items-center rounded-full border border-ink-200 bg-white/10 px-1 transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-primary/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/80 dark:border-white/10 dark:bg-white/[0.04]"
      aria-label="Tema değiştir"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="absolute inset-y-1 flex w-11 items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg"
        style={{ left: theme === 'serenity' ? '4px' : 'calc(100% - 4px)', transform: theme === 'serenity' ? 'none' : 'translateX(-100%)' }}
      >
        <Icon name={theme === 'serenity' ? 'sun' : 'moon'} size={22} />
      </motion.span>
      <span className="flex w-full items-center justify-between px-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-200">
        <span>Light</span>
        <span>Dark</span>
      </span>
    </button>
  )
}


