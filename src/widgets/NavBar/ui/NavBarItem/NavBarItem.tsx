import { memo } from 'react';
import { Button } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { INavBarItem } from '../../model/types/NavBar';
import cls from './NavBarItem.module.scss';

interface NavBarItemProps {
  item: INavBarItem;
  onClick: (path: string) => void;
}

export const NavBarItem = memo((props: NavBarItemProps) => {
  const {
    onClick,
    item: { name, authOnly, path },
  } = props;

  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && authOnly) {
    return null;
  }

  return (
    <Button className={cls.btn} onClick={() => onClick(path)}>
      {name}
    </Button>
  );
});
