import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { REFRESH_TOKEN_LS_KEY, ACCESS_TOKEN_LS_KEY } from 'shared/consts/localStorage';
import type { UserSchema } from '../types/UserSchema';
import { User } from '../types/UserSchema';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokens: (
      _,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      localStorage.setItem(ACCESS_TOKEN_LS_KEY, action.payload.accessToken);
      localStorage.setItem(REFRESH_TOKEN_LS_KEY, action.payload.refreshToken);
    },
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(ACCESS_TOKEN_LS_KEY);
      localStorage.removeItem(REFRESH_TOKEN_LS_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, action) => {
        if (!state.authData) return;

        state.authData.jsonSettings = action.payload;
      })
      .addCase(initAuthData.fulfilled, (state, action) => {
        state.authData = action.payload;
        state._initialized = true;
      })
      .addCase(initAuthData.rejected, (state) => {
        state._initialized = true;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
