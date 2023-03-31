import {FC} from "react";
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/helpers/classNames";

export enum AppLinkTheme {
  DEFAULT = 'default',
}

interface IAppLinkProps extends LinkProps{
  className?: string
  theme?: AppLinkTheme
  underline?: boolean
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {children, className, underline = false, theme = AppLinkTheme.DEFAULT, ...otherProps} = props
  return (
    <Link
      className={classNames(
        cls.link,
        {[cls.underline]: underline},
        [cls[theme], className]
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
