/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>{t('Войти')}</Button>
      <Modal isOpen={isOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates officia id cumque quibusdam tenetur qui. Praesentium inventore totam natus dignissimos qui. At hic eligendi animi qui laborum autem magnam repellat!
      </Modal>
    </div>
  );
};
