import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { loginAction } from '../../model/slice/loginSlice'
import {
    getLoginState
} from '../../model/selectors/getLoginState/getLoginState'
import {
    loginByUsername
} from '../../model/services/loginByUsername/loginByUsername'
import cls from './LoginForm.module.scss'

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className = '' }: ILoginFormProps) => {
    const { t } = useTranslation('modal')
    const dispatch = useDispatch()
    const {
        username,
        password,
        error,
        isLoading
    } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value))
    }, [dispatch])

    const onSignInClick = useCallback(() => {
        dispatch(loginByUsername({
            username,
            password
        }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('title')} />
            {error && <Text text={t('errorAuth')} theme={TextTheme.ERROR} />}
            <Input
                type='text'
                placeholder={t('username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type='text'
                placeholder={t('password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onSignInClick}
                disabled={isLoading}
            >
                {t('sign')}
            </Button>
        </div>
    )
})
