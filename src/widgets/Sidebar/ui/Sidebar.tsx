import { classNames } from 'shared/lib/helpers/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'

interface ISidebarProps {
  className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => setCollapsed(prevState => !prevState)
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>CLICK</button>
    </div>
  )
}
