import { createContext } from 'react'

export enum Theme {
  DEFAULT = 'default',
  DARK = 'dark',
}

export interface IThemeContext {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export default ThemeContext
