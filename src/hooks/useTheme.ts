import { useCallback, useEffect, useState } from 'react'

type Theme = 'serenity' | 'nebula'

const THEME_STORAGE_KEY = 'kem-theme'

const prefersDarkMode = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'serenity'
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
  if (stored === 'serenity' || stored === 'nebula') {
    return stored
  }

  return prefersDarkMode() ? 'nebula' : 'serenity'
}

const applyThemeToDocument = (theme: Theme) => {
  if (typeof document === 'undefined') {
    return
  }
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme === 'nebula' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', theme === 'nebula')
}

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyThemeToDocument(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'serenity' ? 'nebula' : 'serenity'))
  }, [])

  return [theme, toggleTheme]
}


