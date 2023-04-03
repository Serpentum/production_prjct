import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider";
import {classNames} from "shared/lib/helpers/classNames";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
  const {theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className={'layout_wrapper'}>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
