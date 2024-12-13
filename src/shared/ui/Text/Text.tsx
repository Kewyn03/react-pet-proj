import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import cls from './Text.module.scss'

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = memo(({
    className = '',
    text,
    theme = TextTheme.PRIMARY,
    title
}: ITextProps) => {
    const { t } = useTranslation()
    return (
        <div
            className={classNames(cls.Text, { [cls[theme]]: true }, [className])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
