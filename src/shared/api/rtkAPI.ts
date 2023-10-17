import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN_LS_KEY, REFRESH_TOKEN_LS_KEY } from 'shared/consts/localStorage';
import { userActions } from 'entities/User';
import { errMsg } from 'shared/consts/errMsg.ts';

const baseQuery = fetchBaseQuery({
  baseUrl: __API_URL__,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN_LS_KEY);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

interface RefreshResponse {
  data?: { accessToken?: string };
}

const baseQueryWithReAuth: typeof baseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // @ts-ignore
  const isTokenExpired = result?.error?.data?.message === errMsg.expiredAccessToken;

  async function refreshAccessToken() {
    function logout() {
      api.dispatch(userActions.logout());
    }

    const refreshToken = localStorage.getItem(REFRESH_TOKEN_LS_KEY);

    if (!refreshToken) {
      logout();
      return;
    }

    const refreshResponse = (await baseQuery(
      { url: '/auth/token', method: 'POST', body: { refreshToken } },
      api,
      extraOptions
    )) as RefreshResponse;

    if (!refreshResponse?.data?.accessToken) {
      logout();
      return;
    }

    localStorage.setItem(ACCESS_TOKEN_LS_KEY, refreshResponse?.data.accessToken);
    result = await baseQuery(args, api, extraOptions);
  }

  if (isTokenExpired) {
    await refreshAccessToken();
  }

  return result;
};

export const rtkAPI = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  tagTypes: ['Topics'],
});
