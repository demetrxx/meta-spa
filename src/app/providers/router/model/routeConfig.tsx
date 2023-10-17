import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AuthPage } from 'pages/AuthPage';
import { ManageTopicsPage } from 'pages/ManageTopicsPage';
import EditTopicPage from 'pages/EditTopicPage/ui/EditTopicPage.tsx';
import CreateTopicPage from 'pages/CreateTopicPage/ui/CreateTopicPage.tsx';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

const appRoutes = {
  MAIN: 'MAIN',
  AUTH: 'AUTH',
  MANAGE_TOPICS: 'MANAGE_TOPICS',
  EDIT_TOPIC: 'EDIT_TOPIC',
  CREATE_TOPIC: 'CREATE_TOPIC',
  // last
  NOT_FOUND: 'NOT_FOUND',
} as const;
type AppRoutes = ValueOf<typeof appRoutes>;

export const routes = {
  getMain: () => '/',
  getAuth: () => '/auth/:provider?',
  // admin
  getEditTopic: () => '/admin/content/topics/:id/edit',
  getCreateTopic: () => '/admin/content/topics/new',
  getManageTopics: () => '/admin/content/topics',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [appRoutes.MAIN]: {
    path: routes.getMain(),
    element: <MainPage />,
  },
  [appRoutes.AUTH]: {
    path: routes.getAuth(),
    element: <AuthPage />,
  },
  // admin
  [appRoutes.MANAGE_TOPICS]: {
    path: routes.getManageTopics(),
    element: <ManageTopicsPage />,
  },
  [appRoutes.CREATE_TOPIC]: {
    path: routes.getCreateTopic(),
    element: <CreateTopicPage />,
  },
  [appRoutes.EDIT_TOPIC]: {
    path: routes.getEditTopic(),
    element: <EditTopicPage />,
  },
  // last
  [appRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
