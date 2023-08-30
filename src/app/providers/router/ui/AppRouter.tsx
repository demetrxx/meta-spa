import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '../model/routeConfig';

const renderWithWrapper = (routeProps: AppRoutesProps) => (
  <Route key={routeProps.path} path={routeProps.path} element={routeProps.element} />
);

const routes = Object.values(routeConfig).map(renderWithWrapper);

export const AppRouter = memo(() => <Routes>{routes}</Routes>);
