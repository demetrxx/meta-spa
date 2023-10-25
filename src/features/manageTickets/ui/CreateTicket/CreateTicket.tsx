import { FormEvent, memo, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, Text } from 'shared/ui';
import { Ticket, useCreateTicketMutation } from 'entities/Ticket';
import cls from './CreateTicket.module.scss';

interface CreateTicketProps {
  className?: string;
}

const initialTicket: CreateData<Ticket> = {
  year: 2021,
  type: 'MAIN',
  questions: [],
};

export const CreateTicket = memo((props: CreateTicketProps) => {
  const { className } = props;
  const [ticket, setTicket] = useState<CreateData<Ticket>>(initialTicket);

  const [createTicket] = useCreateTicketMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTicket(ticket);
  };

  const handleChange = (name: keyof Ticket) => (value: any) => {
    setTicket((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classNames(cls.createTicket, [className])}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Year</Text>
        <Input value={ticket.year} onChange={handleChange('year')} />

        <Text type="subtitle-3">Type</Text>
        <Input value={ticket.type} onChange={handleChange('type')} />

        {/* <Text type="subtitle-3">Order</Text> */}
        {/* <Input value={ticket.questions} type="number" onChange={handleChange('order')} /> */}

        <Button type="submit">Create Ticket</Button>
      </form>
    </div>
  );
});
