import React, {createContext} from 'react';

export enum THEME {
  DEFAULT = "default",
  DARK = "dark",
}

export interface IThemeContext {
  theme?: THEME
  setTheme?: (theme: THEME) => void
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export default ThemeContext;
