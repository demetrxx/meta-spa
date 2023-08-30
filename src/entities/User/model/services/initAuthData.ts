import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
import { USER_LS_KEY } from 'shared/consts/localStorage';
import { User } from '../types/UserSchema';
import { getNewUserTokenQuery } from '../../api/userApi.ts';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, { rejectWithValue, dispatch }) => {
    const userToken = localStorage.getItem(USER_LS_KEY);

    try {
      if (!userToken) {
        const { token } = await dispatch(getNewUserTokenQuery()).unwrap();
        localStorage.setItem(USER_LS_KEY, token);
      }
    } catch {
      return rejectWithValue('error');
    }

    const jsonSettings = JSON.parse(localStorage.getItem('json-settings') || JSON.stringify({}));

    return {
      id: '1',
      username: 'test',
      jsonSettings,
    };
  }
);
