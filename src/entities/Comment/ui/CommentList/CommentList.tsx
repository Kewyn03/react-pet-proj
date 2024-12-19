import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { Comment } from '../../model/types/Comment'
import cls from './CommentList.module.scss'

interface ICommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: ICommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard isLoading={isLoading} comment={comment} />
            )) : <Text text={t('no-comments')} />}
        </div>
    )
})
