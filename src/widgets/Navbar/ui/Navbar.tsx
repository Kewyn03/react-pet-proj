import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className = '' }: INavbarProps) => {
    const { t } = useTranslation('navbar')
    const [isAuthModal, setIsAuthModal] = React.useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('sign-in')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('content')}
            </Modal>
        </div>
    )
}
