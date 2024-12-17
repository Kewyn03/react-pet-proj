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

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(({
    className = '',
    text,
    theme = TextTheme.PRIMARY,
    title,
    align = TextAlign.LEFT
}: ITextProps) => {
    const { t } = useTranslation()

    const mods: TMods = {
        [cls[theme]]: true,
        [cls[align]]: true
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
