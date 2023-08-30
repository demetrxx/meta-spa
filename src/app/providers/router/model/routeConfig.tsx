import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

const appRoutes = {
  MAIN: 'main',
  // last
  NOT_FOUND: 'not_found',
} as const;
type AppRoutes = ValueOf<typeof appRoutes>;

export const routes = {
  getMain: () => '/',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [appRoutes.MAIN]: {
    path: routes.getMain(),
    element: <MainPage />,
  },
  // last
  [appRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
