import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { routes } from 'app/providers/router';
import { INavBarItem } from '../types/NavBar';

export const getSidebarItems = createSelector(getUserAuthData, (userAuthData) => {
  const sidebarItemsList: INavBarItem[] = [
    {
      name: 'main',
      path: routes.getMain(),
    },
    {
      name: 'topics',
      path: routes.getManageTopics(),
    },
    {
      name: 'auth',
      path: routes.getAuth(),
    },
  ];

  if (userAuthData) {
    sidebarItemsList.push();
  }

  return sidebarItemsList;
});
