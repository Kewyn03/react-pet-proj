import React from 'react'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {classNames} from 'shared/lib/classNames'

import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink'

interface INavbarProps {
	className?: string;
}

export const Navbar = ({className = ''}: INavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.mainLink}>main</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>about</AppLink>
			</div>
		</div>
	)
}

