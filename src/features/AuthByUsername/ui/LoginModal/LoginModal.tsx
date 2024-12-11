import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'

import { Modal } from 'shared/ui/Modal/Modal'
import cls from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({
    className = '',
    isOpen,
    onClose
}: ILoginModalProps) => (
    <Modal
        lazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(cls.LoginModal, {}, [className])}
    >
        <LoginForm />
    </Modal>
)
