import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames, TMods } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import cls from './Text.module.scss'

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export const enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export const enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({
    className = '',
    text,
    theme = TextTheme.PRIMARY,
    title,
    align = TextAlign.LEFT,
    size = TextSize.M
}: ITextProps) => {
    const { t } = useTranslation()

    const mods: TMods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true
    }

    return (
        <div
            className={classNames(cls.Text, mods, [className])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
