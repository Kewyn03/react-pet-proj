import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router'

interface IArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = ({ className = '' }: IArticleDetailsPageProps) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div
                className={classNames('', {}, [className])}
            >
                {t('article-not-found')}
            </div>
        )
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    )
}

export default memo(ArticleDetailsPage)