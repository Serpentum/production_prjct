import {useContext} from "react";
import ThemeContext, {LOCAL_STORAGE_THEME_KEY, THEME} from "shared/theme/ThemeContext";

export interface IUseThemeResult {
  theme: THEME,
  toggleTheme: () => void
}

export function useTheme (): IUseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === THEME.DEFAULT ? THEME.DARK : THEME.DEFAULT
    setTheme(newTheme)
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
