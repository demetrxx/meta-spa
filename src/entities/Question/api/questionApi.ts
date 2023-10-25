import { rtkAPI } from 'shared/api/rtkAPI.ts';
import { idUrl } from 'shared/lib/func';
import { Question } from '../model/types/question.ts';

const url = '/content/questions';

const chatAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getManyByTopic: build.query<Question[], Id>({
      query: (topicId) => ({ url, params: { topicId } }),
      forceRefetch: () => true,
      providesTags: ['Questions'],
    }),
    getById: build.query<Question, Id>({
      query: (id) => ({ url: idUrl(url, id) }),
      forceRefetch: () => true,
      providesTags: ['Questions'],
    }),
    updateQuestion: build.mutation<IdObject, UpdateData<Question>>({
      query: (body) => ({
        url: idUrl(url, body.id),
        body,
        method: 'PATCH',
      }),
      invalidatesTags: ['Questions'],
    }),
    createQuestion: build.mutation<void, CreateData<Question>>({
      query: (body) => ({
        url,
        body,
        method: 'POST',
      }),
      invalidatesTags: ['Questions'],
    }),
    deleteQuestion: build.mutation<void, Id>({
      query: (id) => ({
        url: idUrl(url, id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Questions'],
    }),
  }),
});

export const useGetQuestionsByTopicQuery = chatAPI.endpoints.getManyByTopic.useQuery;
export const useGetQuestionByIdQuery = chatAPI.endpoints.getById.useQuery;
export const useUpdateQuestionMutation = chatAPI.endpoints.updateQuestion.useMutation;
export const useCreateQuestionMutation = chatAPI.endpoints.createQuestion.useMutation;
export const useDeleteQuestionMutation = chatAPI.endpoints.deleteQuestion.useMutation;
