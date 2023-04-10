import { classNames } from 'shared/lib/helpers/classNames'
import './Loader.scss'

interface ILoaderProps {
  className?: string
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={classNames('lds-grid', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
)
