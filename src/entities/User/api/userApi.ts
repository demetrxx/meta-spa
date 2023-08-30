import { rtkAPI } from 'shared/api/rtkAPI';
// import { JsonSettings } from '../model/types/jsonSettings';

// interface SetJsonSettingsArgs {
//   userId: string;
//   jsonSettings: JsonSettings;
// }

interface GetUserTokenResponse {
  token: string;
}

const userAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getNewUserToken: build.mutation<GetUserTokenResponse, void>({
      query: () => ({
        url: '/signin/anon',
        method: 'POST',
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

export const getNewUserTokenQuery = userAPI.endpoints.getNewUserToken.initiate;
// export const setJsonSettingsMutation = userAPI.endpoints.setJsonSettings.initiate;
// export const getUserDataByIdQuery = userAPI.endpoints.getUserDataById.initiate;
