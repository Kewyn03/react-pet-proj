import { classNames } from 'shared/lib/classNames/classNames'

import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    square?: boolean
    size?: string
    theme?: ButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className = '',
        children,
        square = false,
        size = ButtonSize.M,
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true
    }

    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
