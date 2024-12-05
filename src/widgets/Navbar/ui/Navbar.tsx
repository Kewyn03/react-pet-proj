import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: INavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.mainLink}
                >
                    {t('main')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    {t('about')}
                </AppLink>
            </div>
        </div>
    )
}
