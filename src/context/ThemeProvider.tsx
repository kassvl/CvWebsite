import type { PropsWithChildren } from 'react'
import { useMemo } from 'react'
import { useTheme } from '../hooks/useTheme'
import { ThemeContext } from './theme-context'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, toggleTheme] = useTheme()

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}


