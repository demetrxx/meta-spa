import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/func';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <Link className={classNames(cls.appLink, [className])} {...otherProps}>
      {children}
    </Link>
  );
});
