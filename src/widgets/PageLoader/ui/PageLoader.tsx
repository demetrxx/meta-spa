import { FC } from 'react';
import { classNames } from 'shared/lib/func';
import { Loader } from 'shared/ui';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.pageLoader, [className])}>
      <Loader />
    </div>
  );
};
