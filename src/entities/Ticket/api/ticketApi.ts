import { rtkAPI } from 'shared/api/rtkAPI.ts';
import { idUrl } from 'shared/lib/func';
import { Ticket } from '../model/types/ticket';

const url = '/content/tickets';

const chatAPI = rtkAPI.injectEndpoints({
  endpoints: (build) => ({
    getById: build.query<Ticket, Id>({
      query: (id) => ({ url: idUrl(url, id) }),
      forceRefetch: () => true,
      providesTags: ['Tickets'],
    }),
    getAllTickets: build.query<Ticket[], void>({
      query: () => ({ url }),
      forceRefetch: () => true,
      providesTags: ['Tickets'],
    }),
    updateTicket: build.mutation<IdObject, UpdateData<Ticket>>({
      query: (body) => ({
        url: idUrl(url, body.id),
        body,
        method: 'PATCH',
      }),
      invalidatesTags: ['Tickets'],
    }),
    createTicket: build.mutation<void, CreateData<Ticket>>({
      query: (body) => ({
        url,
        body,
        method: 'POST',
      }),
      invalidatesTags: ['Tickets'],
    }),
    deleteTicket: build.mutation<void, Id>({
      query: (id) => ({
        url: idUrl(url, id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Tickets'],
    }),
  }),
});

export const useGetTicketByIdQuery = chatAPI.endpoints.getById.useQuery;

export const useGetAllTicketsQuery = chatAPI.endpoints.getAllTickets.useQuery;
export const useUpdateTicketMutation = chatAPI.endpoints.updateTicket.useMutation;
export const useCreateTicketMutation = chatAPI.endpoints.createTicket.useMutation;
export const useDeleteTicketMutation = chatAPI.endpoints.deleteTicket.useMutation;
