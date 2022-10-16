import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../loginForm/LoginForm';
// import cls from './LoginModal.module.scss';

interface LoginModalPrors {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalPrors) => (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
        <LoginForm />
    </Modal>
);
