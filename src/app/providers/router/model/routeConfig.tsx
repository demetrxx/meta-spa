import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { AuthPage } from 'pages/AuthPage';
import { ManageTopicsPage } from 'pages/ManageTopicsPage';
import { EditTopicPage } from 'pages/EditTopicPage';
import { CreateTopicPage } from 'pages/CreateTopicPage';
import { ManageQuestionsPage } from 'pages/ManageQuestionsPage';
import { EditQuestionPage } from 'pages/EditQuestionPage';
import { CreateQuestionPage } from 'pages/CreateQuestionPage';
import { ManageTicketsPage } from 'pages/ManageTicketsPage';
import { CreateTicketPage } from 'pages/CreateTicketPage';
import { EditTicketPage } from 'pages/EditTicketPage';
import { PaymentsPage } from 'pages/PaymentsPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

const appRoutes = {
  MAIN: 'MAIN',
  AUTH: 'AUTH',
  PAYMENTS: 'PAYMENTS',

  // admin
  MANAGE_TOPICS: 'MANAGE_TOPICS',
  EDIT_TOPIC: 'EDIT_TOPIC',
  CREATE_TOPIC: 'CREATE_TOPIC',
  MANAGE_TICKETS: 'MANAGE_TICKETS',
  EDIT_TICKET: 'EDIT_TICKET',
  CREATE_TICKET: 'CREATE_TICKET',
  MANAGE_QUESTIONS: 'MANAGE_QUESTIONS',
  EDIT_QUESTION: 'EDIT_QUESTION',
  CREATE_QUESTION: 'CREATE_QUESTION',
  // last
  NOT_FOUND: 'NOT_FOUND',
} as const;
type AppRoutes = ValueOf<typeof appRoutes>;

function optParamPath(path: string, param?: string) {
  return param ? `${path}/${param}` : path;
}

export const routes = {
  getMain: () => '/',
  getAuth: (provider?: string) => optParamPath('/auth', provider),
  getPayments: (status?: string) => optParamPath('/payments', status),
  // admin

  // Topics
  getEditTopic: (id = ':id') => `/admin/content/topics/${id}/edit`,
  getCreateTopic: () => '/admin/content/topics/new',
  getManageTopics: () => '/admin/content/topics',

  // Tickets
  getEditTicket: (id = ':id') => `/admin/content/tickets/${id}/edit`,
  getCreateTicket: () => '/admin/content/tickets/new',
  getManageTickets: () => '/admin/content/tickets',

  // Questions
  getEditQuestion: (id = ':id') => `/admin/content/questions/${id}/edit`,
  getCreateQuestion: () => '/admin/content/questions/new',
  getManageQuestions: () => `/admin/content/questions`,
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [appRoutes.MAIN]: {
    path: routes.getMain(),
    element: <MainPage />,
  },
  [appRoutes.AUTH]: {
    path: routes.getAuth(':provider?'),
    element: <AuthPage />,
  },
  [appRoutes.PAYMENTS]: {
    path: routes.getPayments(':status?'),
    element: <PaymentsPage />,
  },
  // --- admin ---
  // Topics
  [appRoutes.MANAGE_TOPICS]: {
    path: routes.getManageTopics(),
    element: <ManageTopicsPage />,
  },
  [appRoutes.CREATE_TOPIC]: {
    path: routes.getCreateTopic(),
    element: <CreateTopicPage />,
  },
  [appRoutes.EDIT_TOPIC]: {
    path: routes.getEditTopic(),
    element: <EditTopicPage />,
  },
  // Tickets
  [appRoutes.MANAGE_TICKETS]: {
    path: routes.getManageTickets(),
    element: <ManageTicketsPage />,
  },
  [appRoutes.CREATE_TICKET]: {
    path: routes.getCreateTicket(),
    element: <CreateTicketPage />,
  },
  [appRoutes.EDIT_TICKET]: {
    path: routes.getEditTicket(),
    element: <EditTicketPage />,
  },
  // Questions
  [appRoutes.MANAGE_QUESTIONS]: {
    path: routes.getManageQuestions(),
    element: <ManageQuestionsPage />,
  },
  [appRoutes.CREATE_QUESTION]: {
    path: routes.getCreateQuestion(),
    element: <CreateQuestionPage />,
  },
  [appRoutes.EDIT_QUESTION]: {
    path: routes.getEditQuestion(),
    element: <EditQuestionPage />,
  },
  // last
  [appRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
