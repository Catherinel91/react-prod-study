import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../loginForm/LoginForm.async';
// import cls from './LoginModal.module.scss';

interface LoginModalPrors {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalPrors) => (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
        <LoginFormAsync onSuccess={onClose} />
    </Modal>
);
