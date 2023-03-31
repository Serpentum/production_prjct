import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames";
import {THEME} from "shared/theme/ThemeContext";
import {AppRouter} from "app/providers/Router";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <button onClick={toggleTheme}>
        {theme === THEME.DEFAULT ? THEME.DARK : THEME.DEFAULT}
      </button>
      <AppRouter />
    </div>
  );
};

export default App;
