import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import { Code } from 'shared/ui/Code/Code'
import { ArticleCodeBlock } from '../../model/types/article'
import cls from './ArticleCodeBlockComponent.module.scss'

interface IArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({
    className = '',
    block
}: IArticleCodeBlockComponentProps) => {
    const { t } = useTranslation()
    return (
        <div
            className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
        >
            <Code text={block.code} />
        </div>
    )
})
