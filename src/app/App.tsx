import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames";
import {THEME} from "shared/theme/ThemeContext";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />

      <button onClick={toggleTheme}>
        {theme === THEME.DEFAULT ? THEME.DARK : THEME.DEFAULT}
      </button>
    </div>
  );
};

export default App;
