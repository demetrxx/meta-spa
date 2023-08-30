import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LS_KEY } from 'shared/consts/localStorage';
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
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      const user = localStorage.getItem(USER_LS_KEY);
      if (user) {
        state.authData = undefined;
        localStorage.removeItem(USER_LS_KEY);
      }
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
