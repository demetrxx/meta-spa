import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainPageSchema, Panel } from '../types/MainPageSchema';

const initialState: MainPageSchema = {
  isInitialScreen: true,
  withInitialAnimation: true,
  panels: {
    history: {
      opened: false,
    },
    sidebar: {
      opened: false,
    },
    saved: {
      opened: false,
    },
    info: {
      opened: false,
    },
    more: {
      opened: false,
    },
  },
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    initChat: (state, action: PayloadAction<{ withAnimation: boolean }>) => {
      state.isInitialScreen = false;
      state.withInitialAnimation = action.payload.withAnimation;
    },
    openChatHistory: (state) => {
      state.panels = { ...initialState.panels, history: { opened: true } };
    },
    closeChatHistory: (state) => {
      state.panels.history.opened = false;
    },
    openSidebar: (state) => {
      state.panels = { ...initialState.panels, sidebar: { opened: true } };
    },
    closeSidebar: (state) => {
      state.panels.sidebar.opened = false;
    },
    openPanel: (state, action: PayloadAction<Panel>) => {
      state.panels = { ...initialState.panels, [action.payload]: { opened: true } };
    },
    resetChat: (state) => {
      state.isInitialScreen = true;
    },
    changeConversationId: () => {},
  },
});

export const { actions: mainPageActions, reducer: mainPageReducer } = mainPageSlice;
