/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SideBarItemType } from '../../model/items';

import cls from './SideBarItem.module.scss';

interface SidebarItemProps {
    item?: SideBarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.link, { [cls.collapsed]: collapsed })}>
            <item.Icon className={cls.icon} />
            <span className={cls.linkText}>{t(item.text)}</span>
        </AppLink>
    );
});
