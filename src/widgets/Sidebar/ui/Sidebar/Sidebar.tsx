import { classNames } from 'shared/lib/classNames/classNames'

import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import MainIcon from 'shared/assets/icons/mainIcon.svg'
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
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('main')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('about')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    )
}
