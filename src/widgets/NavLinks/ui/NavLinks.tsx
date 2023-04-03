import cls from './NavLinks.module.scss'
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/routerConfig/routerConfig";
import {classNames} from "shared/lib/helpers/classNames";
import {AppLink} from "shared/ui/AppLink";

interface INavLinksProps {
  className?: string
}

export const NavLinks = ({className}: INavLinksProps) => {
  const {pathname} = useLocation()
  const {t} = useTranslation("common")

  return (
    <div className={classNames(cls.linksWrapper, {}, [className])}>
      {
        Object.values(RoutePath)
          .map(path =>
            <AppLink
              key={path}
              to={path}
              underline={path === pathname}
            >
              {t(`navigationLinks.${path}`)}
            </AppLink>
          )
      }
    </div>
  );
};
