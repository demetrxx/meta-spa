import { FormEvent, memo, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, Text } from 'shared/ui';
import { Topic, useCreateTopicMutation } from 'entities/Topic';
import cls from './CreateTopic.module.scss';

interface CreateTopicProps {
  className?: string;
}

const initialTopic: CreateData<Topic> = {
  name: '',
  desc: '',
  order: 0,
};

export const CreateTopic = memo((props: CreateTopicProps) => {
  const { className } = props;
  const [topic, setTopic] = useState<CreateData<Topic>>(initialTopic);

  const [createTopic] = useCreateTopicMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTopic(topic);
  };

  const handleChange = (name: keyof Topic) => (value: any) => {
    setTopic((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classNames(cls.createTopic, [className])}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Name</Text>
        <Input value={topic.name} onChange={handleChange('name')} />

        <Text type="subtitle-3">Description</Text>
        <Input value={topic.desc} onChange={handleChange('desc')} />

        <Text type="subtitle-3">Order</Text>
        <Input value={topic.order} type="number" onChange={handleChange('order')} />

        <Button type="submit">Create Topic</Button>
      </form>
    </div>
  );
});
