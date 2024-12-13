import { classNames } from 'shared/lib/classNames/classNames'

import React, { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface ISidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: ISidebarProps) => {
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
            <Button
                data-testid='sidebar-toggle'
                type='button'
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    )
})
