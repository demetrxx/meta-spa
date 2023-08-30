import { memo } from 'react';
import { Page } from 'widgets/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = memo(() => <Page className={cls.notFoundPage}>Page not found</Page>);
