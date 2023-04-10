import { classNames } from 'shared/lib/helpers/classNames'
import cls from './ErrorFallback.module.scss'
import { useTranslation } from 'react-i18next'

interface IErrorFallbackProps {
  className?: string
}

export const ErrorFallback = ({ className }: IErrorFallbackProps) => {
  const { t } = useTranslation()

  const refresh = () => location.reload()

  return (
    <div className={classNames(cls.ErrorFallback, {}, [className])}>
      <p>{t('Something went wrong')}</p>
      <button onClick={refresh}>
        {t('Update page')}
      </button>
    </div>
  )
}
