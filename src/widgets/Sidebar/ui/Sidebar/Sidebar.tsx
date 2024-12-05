import { classNames } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface ISidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: ISidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => setCollapsed((prev) => !prev)

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}> toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  )
}
