import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import React, { memo } from 'react'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import cls from './SidebarItem.module.scss'

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = memo(({
    item,
    collapsed
}: ISidebarItemProps) => {
    const { t } = useTranslation()
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    )
})
