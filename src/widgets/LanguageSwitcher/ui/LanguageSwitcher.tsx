import {classNames} from "shared/lib/helpers/classNames";
import cls from './LanguageSwitcher.module.scss'
import LocalisationIco from "shared/assets/icons/localisation.svg"
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";
import {useTranslation} from "react-i18next";

export enum SupportLang {
  RU = "ru",
  EN = "en",
}

interface IThemeSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({className}: IThemeSwitcherProps) => {
  const {t, i18n} = useTranslation()

  const toggleLang = () => {
    i18n.language === SupportLang.RU
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('ru')
  }
  return (
    <div className={classNames(cls.LanguageSwitcher, {}, [className])}>
      <Button
        className={cls.switcher}
        onClick={toggleLang}
        theme={ThemeButton.CLEAR}
      >
        <p className={cls.lang}>{t("currentLang")}</p>
        <LocalisationIco className={cls.ico} />
      </Button>
    </div>
  );
};
