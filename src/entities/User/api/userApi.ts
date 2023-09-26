import { rtkAPI } from 'shared/api/rtkAPI';
// import { JsonSettings } from '../model/types/jsonSettings';

// interface SetJsonSettingsArgs {
//   userId: string;
//   jsonSettings: JsonSettings;
// }

interface GetUserTokenResponse {
  accessToken: string;
}

const userAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getNewUserToken: build.mutation<GetUserTokenResponse, void>({
      query: () => ({
        url: '/auth/user',
        method: 'POST',
      }),
    }),
    ping: build.mutation<GetUserTokenResponse, void>({
      query: () => ({
        url: '/ping',
        method: 'POST',
        headers: {},
      }),
    }),
    refreshAccess: build.mutation<{ accessToken: string }, { refreshToken: string }>({
      query: (body) => ({
        url: '/auth/token',
        method: 'POST',
        body,
      }),
    }),
    // setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
    //   query: ({ userId, jsonSettings }) => ({
    //     url: `/users/${userId}`,
    //     method: 'PATCH',
    //     body: { jsonSettings },
    //   }),
    // }),
    // getUserDataById: build.query<User, string>({
    //   query: (userId) => ({
    //     url: `/users/${userId}`,
    //     method: 'GET',
    //   }
    //   ),
    // }),
  }),
});

export const refreshAccessMutation = userAPI.endpoints.refreshAccess.initiate;
export const getNewUserTokenQuery = userAPI.endpoints.getNewUserToken.initiate;
export const usePingMutation = userAPI.endpoints.ping.useMutation;
