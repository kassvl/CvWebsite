import { createContext } from 'react'

export type Theme = 'serenity' | 'nebula'

export type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)


