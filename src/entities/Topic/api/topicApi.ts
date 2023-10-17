import { rtkAPI } from 'shared/api/rtkAPI.ts';
import { idUrl } from 'shared/lib/func';
import { Topic } from '../model/types/topic.ts';

const url = '/content/topics';

const chatAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllTopics: build.query<Topic[], void>({
      query: () => ({ url }),
      forceRefetch: () => true,
      providesTags: ['Topics'],
    }),
    updateTopic: build.mutation<IdObject, UpdateData<Topic>>({
      query: (body) => ({
        url: idUrl(url, body.id),
        body,
        method: 'PATCH',
      }),
      invalidatesTags: ['Topics'],
    }),
    createTopic: build.mutation<void, CreateData<Topic>>({
      query: (body) => ({
        url,
        body,
        method: 'POST',
      }),
      invalidatesTags: ['Topics'],
    }),
    deleteTopic: build.mutation<void, Id>({
      query: (id) => ({
        url: idUrl(url, id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Topics'],
    }),
  }),
});

export const useGetAllTopicsQuery = chatAPI.endpoints.getAllTopics.useQuery;
export const useUpdateTopicMutation = chatAPI.endpoints.updateTopic.useMutation;
export const useCreateTopicMutation = chatAPI.endpoints.createTopic.useMutation;
export const useDeleteTopicMutation = chatAPI.endpoints.deleteTopic.useMutation;
