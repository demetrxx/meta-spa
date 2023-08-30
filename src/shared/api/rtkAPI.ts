import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LS_KEY } from 'shared/consts/localStorage';

export const rtkAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LS_KEY);
      if (token) {
        headers.set('Authorization', token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
