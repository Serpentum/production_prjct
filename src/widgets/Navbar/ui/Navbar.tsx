import { FC } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/helpers/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { NavLinks } from 'widgets/NavLinks'

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.rightSide}>
        <NavLinks />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
