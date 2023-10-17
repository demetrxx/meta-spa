import { memo } from 'react';
import { classNames } from 'shared/lib/func';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { NavBarItem } from '../NavBarItem/NavBarItem';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = memo((props: NavBarProps) => {
  const { className } = props;
  const sidebarItemsList = useSelector(getSidebarItems);

  const navigate = useNavigate();

  const handleNavItemClick = (path: string) => {
    navigate(path);
  };

  const items = sidebarItemsList.map((i) => (
    <NavBarItem key={i.name} item={i} onClick={handleNavItemClick} />
  ));

  return (
    <div className={classNames(cls.navBarWrapper, [className])}>
      <nav className={cls.navBar}>
        <div className={cls.linkList}>{items}</div>
      </nav>
    </div>
  );
});
