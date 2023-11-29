import { rtkAPI } from 'shared/api/rtkAPI.ts';

const url = '/payments';

const chatAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation<{ paymentUrl: string }, { paymentOption: Id }>({
      query: (body) => ({
        url,
        body,
        method: 'POST',
      }),
    }),

    // getAllTopics: build.query<Topic[], void>({
    //   query: () => ({ url }),
    //   forceRefetch: () => true,
    //   providesTags: ['Topics'],
    // }),
    // updateTopic: build.mutation<IdObject, UpdateData<Topic>>({
    //   query: (body) => ({
    //     url: idUrl(url, body.id),
    //     body,
    //     method: 'PATCH',
    //   }),
    //   invalidatesTags: ['Topics'],
    // }),
    // deleteTopic: build.mutation<void, Id>({
    //   query: (id) => ({
    //     url: idUrl(url, id),
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Topics'],
    // }),
  }),
});

export const useCreatePaymentMutation = chatAPI.endpoints.createPayment.useMutation;
