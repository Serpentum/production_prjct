import { classNames } from 'shared/lib/helpers/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'

interface IPageLoaderProps {
  className?: string
}

export const PageLoader = ({ className }: IPageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
