import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";
import {classNames} from "shared/lib/helpers/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
  DEFAULT = "default",
  CLEAR = "clear"
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton
}

export const Button: FC<PropsWithChildren & IButtonProps> = (props) => {
  const {
    className,
    theme = ThemeButton.DEFAULT,
    children,
    ...otherProps
  } = props
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
