import { FormEvent, memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, Text } from 'shared/ui';
import { Topic, useGetAllTopicsQuery, useUpdateTopicMutation } from 'entities/Topic';
import { useParams } from 'react-router-dom';
import cls from './EditTicket.module.scss';

interface CreateTopicProps {
  className?: string;
}

export const EditTicket = memo((props: CreateTopicProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const topics = useGetAllTopicsQuery();
  const initTopic = topics.data?.find((t) => t.id === Number(id));
  const [topic, setTopic] = useState<Topic | undefined>(undefined);

  useEffect(() => {
    setTopic(initTopic);
  }, [initTopic]);

  const [updateTopic] = useUpdateTopicMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic) return;
    if (!window.confirm('Are you sure?')) return;
    updateTopic(topic);
  };

  const handleChange = (name: keyof Topic) => (value: any) => {
    setTopic((prev) => ({ ...((prev as Topic) || {}), [name]: value }));
  };

  if (!topic) return null;

  return (
    <div className={classNames(cls.editTopic, [className])}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Name</Text>
        <Input value={topic.name} onChange={handleChange('name')} />

        <Text type="subtitle-3">Description</Text>
        <Input value={topic.desc} onChange={handleChange('desc')} />

        <Text type="subtitle-3">Order</Text>
        <Input value={topic.order} type="number" onChange={handleChange('order')} />

        <Button type="submit">Update Topic</Button>
      </form>
    </div>
  );
});
