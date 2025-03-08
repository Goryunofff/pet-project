import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLinks/AppLinks';

import cls from './NavBar.module.scss'

interface NavBarProps {
    className?: string; 
}
 
 export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [])}> 
          <div className={cls.links}>
          <AppLinks theme={AppLinksTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLinks>
          <AppLinks theme={AppLinksTheme.SECONDARY} to={'/about'}>О Сайте</AppLinks>
          </div>
        </div> 
    );
 };
 