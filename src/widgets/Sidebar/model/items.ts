import React from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/aboutIcon.svg'
import MainIcon from 'shared/assets/icons/mainIcon.svg'
import ProfileIcon from 'shared/assets/icons/profileIcon.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile'
    }
]
