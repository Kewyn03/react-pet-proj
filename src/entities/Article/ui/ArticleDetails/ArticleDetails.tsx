import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import {
    DynamicModuleLoader,
    ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { memo, useCallback, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eyeIcon.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import {
    ArticleCodeBlockComponent
} from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {
    ArticleImageBlockComponent
} from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import {
    ArticleTextBlockComponent
} from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import {
    getArticleDetailsData,
    getArticleError,
    getArticleIsLoading
} from '../../model/selectors/articleDetails'
import {
    fetchArticleById
} from '../../model/services/fetchArticleById/fetchArticleById'
import cls from './ArticleDetails.module.scss'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'

interface IArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({
    className = '',
    id
}: IArticleDetailsProps) => {
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleError)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            )
        default:
            return null
        }
    }, [])

    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border='50%'
                />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width='100%' height={200} />
                <Skeleton className={cls.skeleton} width='100%' height={200} />
            </div>
        )
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('error')} />
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
