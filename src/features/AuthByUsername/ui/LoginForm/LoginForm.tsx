import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import {
    DynamicModuleLoader,
    ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { loginAction, loginReducer } from '../../model/slice/loginSlice'
import {
    getLoginState
} from '../../model/selectors/getLoginState/getLoginState'
import {
    loginByUsername
} from '../../model/services/loginByUsername/loginByUsername'
import cls from './LoginForm.module.scss'

export interface ILoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({
    className = '',
    onSuccess
}: ILoginFormProps) => {
    const { t } = useTranslation('modal')
    const dispatch = useAppDispatch()

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

    const onSignInClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({
            username,
            password
        }) as any)
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, password, username])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
