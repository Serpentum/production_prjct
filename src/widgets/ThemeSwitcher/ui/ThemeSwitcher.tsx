import { Button, ThemeButton } from 'shared/ui/Button/ui/Button'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import ThemeDarkIco from 'shared/assets/icons/theme-dark.svg'
import ThemeDefaultIco from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/helpers/classNames'
import cls from './ThemeSwitcher.module.scss'


interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
      <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
        <div className={classNames(cls.switcherBackPlate, { [cls.checked]: theme !== Theme.DEFAULT })}>
          {theme === Theme.DEFAULT ? <ThemeDarkIco className={cls.ico} /> : <ThemeDefaultIco className={cls.ico} />}
        </div>
      </div>
    </Button>
  )
}
