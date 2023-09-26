import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store';
// import { USER_LS_KEY } from 'shared/consts/localStorage';
import { User } from '../types/UserSchema';
import { getNewUserTokenQuery } from '../../api/userApi.ts';

export const initAuthData = createAsyncThunk<User | undefined, void, ThunkConfig<string>>(
  'user/initAuthData',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue, dispatch }) => {
    // const refreshToken = localStorage.getItem(USER_LS_KEY);

    try {
      if (false) {
        const { accessToken } = await dispatch(getNewUserTokenQuery()).unwrap();
        // localStorage.setItem(USER_LS_KEY, accessToken);

        return {
          id: '1',
          username: 'test',
          accessToken,
        };
      }
    } catch {
      return rejectWithValue('error');
    }

    // const jsonSettings = JSON.parse(localStorage.getItem('json-settings') || JSON.stringify({}));
  }
);
