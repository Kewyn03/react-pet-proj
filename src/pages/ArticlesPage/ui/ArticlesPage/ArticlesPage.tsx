import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import cls from './ArticlesPage.module.scss'

interface IArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className = '' }: IArticlesPageProps) => {
    const { t } = useTranslation('article')
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('articles-page')}
        </div>
    )
}

export default memo(ArticlesPage)
