import {FC} from "react";
import {classNames} from "shared/lib/helpers/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {useLocation} from "react-router-dom";
import {RouteLinks} from "shared/config/routerConfig/routerConfig";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";

interface INavbarProps {
  className?: string
}

export const Navbar: FC<INavbarProps> = ({className}) => {
  const {pathname} = useLocation()

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <div className={cls.linksWrapper}>
        {
          Object.values(RouteLinks)
            .map(({path, name}) =>
              <AppLink
                key={path}
                to={path}
                underline={path === pathname}
              >
                {name}
              </AppLink>
            )
        }
      </div>
    </div>
  );
};
