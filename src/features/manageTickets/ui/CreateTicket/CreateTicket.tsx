import { FormEvent, memo, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, List, Select, Text } from 'shared/ui';
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

const types: { value: Ticket['type']; label: string }[] = [
  { value: 'MAIN', label: 'Основна' },
  { value: 'TEST', label: 'Тестова' },
  { value: 'ADDITIONAL', label: 'Додаткова' },
];

export const CreateTicket = memo((props: CreateTicketProps) => {
  const { className } = props;
  const [ticket, setTicket] = useState<CreateData<Ticket>>(initialTicket);
  const [question, setQuestion] = useState<string>('');

  const [createTicket] = useCreateTicketMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTicket(ticket);
  };

  const handleChange = (name: keyof Ticket) => (value: any) => {
    setTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveQuestion = (id: number) => () => {
    setTicket((prev) => ({ ...prev, questions: prev.questions.filter((q) => q.id !== id) }));
  };

  const handleAddQuestion = () => {
    if (!question) return;
    setQuestion('');

    if (ticket.questions.find((q) => q.id === Number(question))) return;
    setTicket((prev) => ({ ...prev, questions: [...prev.questions, { id: Number(question) }] }));
  };

  return (
    <div className={classNames(cls.createTicket, [className])} style={{ width: 500 }}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Рік</Text>
        <Input value={ticket.year} onChange={handleChange('year')} />

        <Text type="subtitle-3">Сесія</Text>
        <Select options={types} onChange={handleChange('type')} />

        <Text type="subtitle-3">Питання</Text>
        <div style={{ display: 'flex' }}>
          <Input value={question} type="number" onChange={setQuestion} />
          <Button onClick={handleAddQuestion} disabled={!question}>
            +
          </Button>
        </div>

        <List
          items={ticket.questions.map((i) => (
            <div style={{ display: 'flex', gap: 4, alignItems: 'center', marginTop: 10 }}>
              <Text type="subtitle-3">{i.id}</Text>
              <Button onClick={handleRemoveQuestion(i.id)}>X</Button>
            </div>
          ))}
        />

        <Button className={cls.btn} type="submit">
          Create Ticket
        </Button>
      </form>
    </div>
  );
});
