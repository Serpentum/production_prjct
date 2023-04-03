import { useContext } from 'react'
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from 'shared/theme/ThemeContext'

export interface IUseThemeResult {
  theme: Theme,
  toggleTheme: () => void
}

export function useTheme (): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT
    setTheme(newTheme)
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
