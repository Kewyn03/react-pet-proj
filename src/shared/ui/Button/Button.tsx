import { classNames } from 'shared/lib/classNames/classNames'

import {
    ButtonHTMLAttributes, FC, memo, ReactNode
} from 'react'
import { ButtonProps } from '@storybook/components'
import cls from './Button.module.scss'

export const enum ButtonTheme {
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
    disabled?: boolean
    children: ReactNode
}

export const Button = memo((props: IButtonProps) => {
    const {
        className = '',
        children,
        square = false,
        size = ButtonSize.M,
        theme = ButtonTheme.CLEAR,
        disabled = false,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button
            type='button'
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
