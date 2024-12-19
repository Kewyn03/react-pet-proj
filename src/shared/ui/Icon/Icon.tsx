import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

import cls from './Icon.module.scss'

interface IIconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo(({
    className = '',
    Svg
}: IIconProps) => (
    <Svg className={classNames(cls.Icon, {}, [className])} />
))
