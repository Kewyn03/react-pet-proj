import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
    getProfileReadonly,
    profileAction,
    updateProfileData
} from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './ProfilePageHeader.module.scss'

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className = '' }: IProfilePageHeaderProps) => {
    const { t } = useTranslation()

    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
        dispatch(profileAction.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileAction.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('profile')} />
            {readonly ? (
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={cls.editBtn}
                    onClick={onEdit}
                >
                    {t('edit')}
                </Button>
            ) : (
                <div className={classNames(cls.buttons, {}, [className])}>
                    <Button
                        theme={ButtonTheme.OUTLINE_RED}
                        className={cls.cancelBtn}
                        onClick={onCancelEdit}
                    >
                        {t('cancel')}
                    </Button>
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.saveBtn}
                        onClick={onSave}
                    >
                        {t('save')}
                    </Button>
                </div>
            )}
        </div>
    )
}
