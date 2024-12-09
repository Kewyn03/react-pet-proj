import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface INotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className = '' }: INotFoundPageProps) => {
    const { t } = useTranslation('translation')
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('translation:pageNotFound')}
        </div>
    )
}
