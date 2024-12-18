import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { CSSProperties, memo } from 'react'

import cls from './Skeleton.module.scss'

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string
}

export const Skeleton = memo((props: ISkeletonProps) => {
    const {
        border,
        height,
        width,
        className
    } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    )
})
