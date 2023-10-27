import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { Ticket, useDeleteTicketMutation, useGetAllTicketsQuery } from 'entities/Ticket';
import { Button, Text } from 'shared/ui';
import { useManageContent } from 'shared/lib/hooks';
import { Link } from 'react-router-dom';
import { routes } from 'app/providers/router';
import cls from './ManageTicketsPage.module.scss';

const ManageTicketsPage = memo(() => {
  const {
    onEdit,
    onAdd,
    onDelete,
    isLoading,
    data: tickets,
  } = useManageContent<Ticket>({
    deleteFn: useDeleteTicketMutation,
    queryFn: useGetAllTicketsQuery,
    createPathGetter: routes.getCreateTicket,
    editPathGetter: routes.getEditTicket,
  });

  if (isLoading) return <>Loading...</>;

  if (!tickets) return null;

  return (
    <Page className={classNames(cls.authPage)}>
      <Button className={cls.newBtn} onClick={onAdd}>
        + Add Ticket
      </Button>

      {tickets.map(({ year, id, type }) => (
        <div key={id} className={cls.ticket}>
          <Link to={`${routes.getManageQuestions()}?ticketId=${id}`}>
            <Text type="subtitle-1">
              {type}. {year}
            </Text>
          </Link>

          <div className={cls.actions}>
            <Button onClick={() => onEdit(id)}>Edit</Button>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </div>
        </div>
      ))}
    </Page>
  );
});

export default ManageTicketsPage;
