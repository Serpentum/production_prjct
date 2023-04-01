import React, {FC, PropsWithChildren, useMemo, useState} from 'react';
import ThemeContext, {LOCAL_STORAGE_THEME_KEY, Theme} from 'shared/theme/ThemeContext';

const defaultTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DEFAULT

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
