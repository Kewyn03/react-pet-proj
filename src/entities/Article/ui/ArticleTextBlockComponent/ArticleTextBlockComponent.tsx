import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleTextBlockComponent.module.scss'

interface IArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({
    className = '',
    block
}: IArticleTextBlockComponentProps) => {
    const { t } = useTranslation()
    return (
        <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
        >
            {block.title && (<Text text={block.title} className={cls.title} />)}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}
        </div>
    )
})
