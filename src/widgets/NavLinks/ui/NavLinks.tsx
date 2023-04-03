import {classNames} from "shared/lib/helpers/classNames";
import cls from './NavLinks.module.scss'
import {RouteLinks} from "shared/config/routerConfig/routerConfig";
import {AppLink} from "shared/ui/AppLink";
import {useLocation} from "react-router-dom";

interface INavLinksProps {
  className?: string
}

export const NavLinks = ({className}: INavLinksProps) => {
  const {pathname} = useLocation()

  return (
    <div className={classNames(cls.linksWrapper, {}, [className])}>
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
  );
};
