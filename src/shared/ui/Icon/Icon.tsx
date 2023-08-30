import React, { memo } from 'react';
import { classNames } from 'shared/lib/func';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  size?: number;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, height, width, size } = props;

  if (!Svg) return <div style={{ width: width || size, height: height || size }} />;

  return (
    <Svg
      style={{ width: width || size, height: height || size }}
      className={classNames(cls.icon, [className])}
    />
  );
});
