import { memo } from 'react';
import { classNames } from 'shared/lib/func';
import { useTheme } from 'app/providers/theme';
import { Button } from 'shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props;

  const { toggleTheme } = useTheme();

  return <Button className={classNames('', [className])} onClick={toggleTheme}></Button>;
});
