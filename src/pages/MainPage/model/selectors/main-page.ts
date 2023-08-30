import { StateSchema } from 'app/providers/store';
import { createSelector } from '@reduxjs/toolkit';

export const getIsInitialScreen = (state: StateSchema) => state.mainPage.isInitialScreen;
export const getMainPageWithInitialAnimation = (state: StateSchema) =>
  state.mainPage.withInitialAnimation;
export const getIsSidebarOpened = (state: StateSchema) => state.mainPage.panels.sidebar.opened;

export const getChatHistoryOpened = (state: StateSchema) => state.mainPage.panels.history.opened;

export const getIsPanelOpened = createSelector(
  getChatHistoryOpened,
  (historyOpened) => historyOpened
);
