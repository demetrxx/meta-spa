import { FC } from 'react';
import { classNames } from 'shared/lib/func';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ldsRipple, [className])}>
      <div />
      <div />
    </div>
  );
};
