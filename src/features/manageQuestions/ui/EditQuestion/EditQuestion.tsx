import { FormEvent, memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, Select, Text } from 'shared/ui';
import { Question, useGetQuestionByIdQuery, useUpdateQuestionMutation } from 'entities/Question';
import { useParams } from 'react-router-dom';
import { useGetAllTopicsQuery } from 'entities/Topic';
import cls from './EditQuestion.module.scss';

interface CreateQuestionProps {
  className?: string;
}

const types: { value: Question['type']; label: string }[] = [
  { value: 'SINGLE', label: 'Одиночний вибір' },
  { value: 'ORDER', label: 'Хронологічна послідовніть' },
  { value: 'MATCH', label: 'Відповідність' },
  { value: 'SELECT', label: 'Вибір 3 відповідей з 7' },
];

export const EditQuestion = memo((props: CreateQuestionProps) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();
  const { data: serverQuestion } = useGetQuestionByIdQuery(Number(id));
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const { data: topics } = useGetAllTopicsQuery();

  const topicOptions = topics?.map(({ id, name }) => ({ value: id, label: name }));

  useEffect(() => {
    setQuestion(serverQuestion);
  }, [serverQuestion]);

  const [updateQuestion] = useUpdateQuestionMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question) return;
    if (!window.confirm('Are you sure?')) return;
    updateQuestion(question);
  };

  const handleChange = (name: keyof Question) => (value: any) => {
    setQuestion((prev) => ({ ...((prev as Question) || {}), [name]: value }));
  };

  if (!question || !topicOptions) return null;

  return (
    <div className={classNames(cls.editQuestion, [className])}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Name</Text>
        <Input value={question.name} onChange={handleChange('name')} />

        <Text type="subtitle-3">Description</Text>
        <Input value={question.desc} onChange={handleChange('desc')} />

        <Text type="subtitle-3">Type</Text>
        <Select value={question.type} options={types} onChange={handleChange('type')} />

        <Text type="subtitle-3">Topic</Text>
        <Select
          value={String(question.topicId)}
          options={topicOptions}
          onChange={(val) => handleChange('topicId')(Number(val))}
        />

        <Text type="subtitle-3">Advice</Text>
        <Input value={question.advice} onChange={handleChange('advice')} />

        <Button type="submit" className={cls.btn}>
          Update Question
        </Button>
      </form>
    </div>
  );
});
