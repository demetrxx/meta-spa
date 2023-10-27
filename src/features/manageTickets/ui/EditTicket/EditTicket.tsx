import { FormEvent, memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, List, Select, Text } from 'shared/ui';
import { Ticket, useGetTicketByIdQuery, useUpdateTicketMutation } from 'entities/Ticket';
import { useParams } from 'react-router-dom';
import cls from './EditTicket.module.scss';

interface CreateTopicProps {
  className?: string;
}

const types: { value: Ticket['type']; label: string }[] = [
  { value: 'MAIN', label: 'Основна' },
  { value: 'TEST', label: 'Тестова' },
  { value: 'ADDITIONAL', label: 'Додаткова' },
];

export const EditTicket = memo((props: CreateTopicProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { data: serverTicket } = useGetTicketByIdQuery(Number(id!));
  const [ticket, setTicket] = useState<Ticket | undefined>(undefined);
  const [question, setQuestion] = useState<string>('');

  const [updateTicket] = useUpdateTicketMutation();

  useEffect(() => {
    setTicket(serverTicket);
  }, [serverTicket]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ticket) return;
    if (!window.confirm('Are you sure?')) return;
    updateTicket(ticket);
  };

  const handleChange = (name: keyof Ticket) => (value: any) => {
    setTicket((prev) => ({ ...prev!, [name]: value }));
  };

  const handleRemoveQuestion = (id: number) => () => {
    setTicket((prev) => ({ ...prev!, questions: prev!.questions.filter((q) => q.id !== id) }));
  };

  const handleAddQuestion = () => {
    if (!question) return;
    setQuestion('');

    if (ticket!.questions.find((q) => q.id === Number(question))) return;
    setTicket((prev) => ({ ...prev!, questions: [...prev!.questions, { id: Number(question) }] }));
  };

  if (!ticket) return null;

  return (
    <div className={classNames(cls.createTicket, [className])} style={{ width: 500 }}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Рік</Text>
        <Input value={ticket.year} onChange={(val) => handleChange('year')(Number(val))} />

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
          Update Ticket
        </Button>
      </form>
    </div>
  );
});
