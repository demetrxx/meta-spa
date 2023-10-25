import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { EditTicket } from 'features/manageTickets';
import cls from './EditTicketPage.module.scss';

const EditTicketPage = memo(() => (
  <Page className={classNames(cls.authPage)}>
    <EditTicket />
  </Page>
));

export default EditTicketPage;
