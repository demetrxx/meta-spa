import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { CreateTicket } from 'features/manageTickets';
import cls from './CreateTicketPage.module.scss';

const CreateTicketPage = memo(() => (
  <Page className={classNames(cls.authPage)}>
    <CreateTicket />
  </Page>
));

export default CreateTicketPage;
