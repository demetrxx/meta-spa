import { FormEvent, memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, Text } from 'shared/ui';
import { Question, useGetQuestionByIdQuery, useUpdateQuestionMutation } from 'entities/Question';
import { useParams } from 'react-router-dom';
import cls from './EditQuestion.module.scss';

interface CreateQuestionProps {
  className?: string;
}

export const EditQuestion = memo((props: CreateQuestionProps) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();
  const { data: serverQuestion } = useGetQuestionByIdQuery(Number(id));
  const [question, setQuestion] = useState<Question | undefined>(undefined);

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

  if (!question) return null;

  return (
    <div className={classNames(cls.editQuestion, [className])}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Name</Text>
        <Input value={question.name} onChange={handleChange('name')} />

        <Text type="subtitle-3">Description</Text>
        <Input value={question.desc} onChange={handleChange('desc')} />

        {/* <Text type="subtitle-3">Order</Text> */}
        {/* <Input value={question.order} type="number" onChange={handleChange('order')} /> */}

        <Button type="submit" className={cls.btn}>
          Update Question
        </Button>
      </form>
    </div>
  );
});
