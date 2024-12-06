import { classNames } from 'shared/lib/classNames/classNames'

import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className = '' }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()
    const onToggle = () => setCollapsed((prev) => !prev)

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className
            ])}
        >
            <button
                data-testid='sidebar-toggle'
                type='button'
                onClick={onToggle}
            >
                {t('toggle')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
