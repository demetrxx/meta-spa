import { ButtonHTMLAttributes, FC, memo, ReactNode, SVGProps } from 'react';
import { classNames } from 'shared/lib/func';
import { Icon } from 'shared/ui';
import cls from './Button.module.scss';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children?: ReactNode;
  type?: 'clear' | 'outlined';
  iconSize?: number;
}

export const Button = memo((props: ButtonProps) => {
  const { className, icon, iconSize, children, type = 'outlined', ...otherProps } = props;

  return (
    <button
      type="button"
      {...otherProps}
      className={classNames(cls.button, [className, cls[type]], { [cls.icon]: !!icon })}
    >
      {icon ? <Icon Svg={icon} size={iconSize} /> : children}
    </button>
  );
});
