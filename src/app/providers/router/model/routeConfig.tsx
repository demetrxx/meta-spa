import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AuthPage } from 'pages/AuthPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

const appRoutes = {
  MAIN: 'main',
  AUTH: 'auth',
  // last
  NOT_FOUND: 'not_found',
} as const;
type AppRoutes = ValueOf<typeof appRoutes>;

export const routes = {
  getMain: () => '/',
  getAuth: () => '/auth/:provider?',
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
  // last
  [appRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
