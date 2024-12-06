import { classNames } from 'shared/lib/classNames/classNames'

import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface IPageErrorProps {
    className?: string
}

export const PageError = ({ className = '' }: IPageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('sww')}
            <Button onClick={reloadPage}>{t('reload')}</Button>
        </div>
    )
}
