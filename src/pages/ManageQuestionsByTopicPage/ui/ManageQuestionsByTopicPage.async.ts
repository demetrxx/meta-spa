import { lazy } from 'react';

export const ManageQuestionsByTopicPageAsync = lazy(
  () => import('./ManageQuestionsByTopicPage.tsx')
);
