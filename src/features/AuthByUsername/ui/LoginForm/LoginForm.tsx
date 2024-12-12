import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = ({ className = '' }: ILoginFormProps) => {
    const { t } = useTranslation('modal')
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type='text'
                placeholder={t('username')}
                className={cls.input}
            />
            <Input
                type='text'
                placeholder={t('password')}
                className={cls.input}
            />
            <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
                {t('sign')}
            </Button>
        </div>
    )
}
