import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { memo } from 'react'
import { Text, TextAlign } from 'shared/ui/Text/Text'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface IArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({
    className = '',
    block
}: IArticleImageBlockComponentProps) => {
    const { t } = useTranslation()
    return (
        <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
        >
            <img src={block.src} className={cls.img} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    )
})
