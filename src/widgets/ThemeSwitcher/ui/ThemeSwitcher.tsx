import {classNames} from "shared/lib/helpers/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import ThemeDarkIco from "shared/assets/icons/theme-dark.svg"
import ThemeDefaultIco from "shared/assets/icons/theme-light.svg"
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";


interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
      <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
        {theme === Theme.DEFAULT ? <ThemeDarkIco className={cls.ico} /> : <ThemeDefaultIco className={cls.ico} />}
      </Button>
    </div>
  );
};
