import { classNames } from 'shared/lib/classNames/classNames'

import { Link, LinkProps } from 'react-router-dom'
import { FC, memo, ReactNode } from 'react'
import cls from './AppLink.module.scss'

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface IAppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

export const AppLink = memo((props: IAppLinkProps) => {
    const {
        to,
        className = '',
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
