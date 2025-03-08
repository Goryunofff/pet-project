import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLinks.module.scss'
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinksProps extends LinkProps {
   className?: string;
   theme?: AppLinksTheme;
}

export const AppLinks: FC<AppLinksProps>  = (props) => {
    const {to, className, children, theme = AppLinksTheme.PRIMARY} = props; 
   return (
       <Link to={to} className={classNames(cls.AppLinks, {}, [className, cls[theme]])}>
        {children}
       </Link>
   );
};