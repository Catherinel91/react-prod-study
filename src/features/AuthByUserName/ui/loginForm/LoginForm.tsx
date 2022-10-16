import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormPrors {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormPrors) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus placeholder={t('Введите username')} type="text" className="mb15" />
            <Input placeholder={t('Введите пароль')} type="text" className="mb15" />
            <Button>{t('Войти')}</Button>
        </form>
    );
};
