import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginModal } from 'features/AuthByUsername'
import cls from './Navbar.module.scss'

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: INavbarProps) => {
    const { t } = useTranslation('navbar')
    const [isAuthModal, setIsAuthModal] = React.useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('sign-in')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    )
}
