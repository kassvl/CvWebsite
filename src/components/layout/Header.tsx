import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '../ui/Icon'
import { sections, type SectionId } from '../../constants/sections'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { clsx } from 'clsx'

const scrollToSection = (id: SectionId) => {
  const element = document.getElementById(id)
  if (!element) return

  const offset = 88
  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useScrollSpy(sections.map((section) => section.id) as SectionId[])

  const handleNavigate = (id: SectionId) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1020]/85 text-white backdrop-blur-md transition-colors">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-xl font-semibold uppercase tracking-[0.18em]"
          onClick={(event) => {
            event.preventDefault()
          handleNavigate('home')
          }}
        >
          BabyTherapy
        </a>
        <nav className="hidden items-center gap-3 md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleNavigate(section.id)}
              className={clsx(
                'neon-pill px-4 py-2 transition-transform',
                activeSection === section.id
                  ? ''
                  : 'bg-white/5 text-white/80 shadow-none !text-[0.75rem] !tracking-[0.28em] border border-white/15 backdrop-blur-sm hover:bg-white/10',
              )}
            >
              {section.label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Menüyü aç"
        >
          <span className="sr-only">Menü</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={clsx(
                'block h-0.5 w-6 bg-current transition-transform',
                isMenuOpen ? 'translate-y-1.5 rotate-45' : '',
              )}
            />
            <span className={clsx('block h-0.5 w-6 bg-current transition-opacity', isMenuOpen ? 'opacity-0' : '')} />
            <span
              className={clsx(
                'block h-0.5 w-6 bg-current transition-transform',
                isMenuOpen ? '-translate-y-1.5 -rotate-45' : '',
              )}
            />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 rounded-2xl border border-white/15 bg-[#0b1020]/95 p-6 text-white md:hidden"
          >
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNavigate(section.id)}
                  className={clsx(
                    'flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.14em] transition-colors',
                    activeSection === section.id ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white',
                  )}
                >
                  {section.label}
                  <Icon name="arrow-right" size={18} className="text-white" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}


