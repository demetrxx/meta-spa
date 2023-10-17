import { ButtonHTMLAttributes, FC, memo, ReactNode, SVGProps } from 'react';
import { classNames } from 'shared/lib/func';
import { Icon } from 'shared/ui';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children?: ReactNode;
  variant?: 'clear' | 'outlined';
  iconSize?: number;
}

export const Button = memo((props: ButtonProps) => {
  const { className, icon, iconSize, variant = 'outlined', children, ...otherProps } = props;

  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(cls.button, [className, cls[variant]], { [cls.icon]: !!icon })}
    >
      {icon ? <Icon Svg={icon} size={iconSize} /> : children}
    </button>
  );
});
