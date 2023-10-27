import { FormEvent, memo, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { Button, Input, Text } from 'shared/ui';
import { Question, useCreateQuestionMutation } from 'entities/Question';
import { useLocation } from 'react-router-dom';
import cls from './CreateQuestion.module.scss';

interface CreateQuestionProps {
  className?: string;
}

const initialQuestion: CreateData<Question> = {
  name: '',
  desc: '',
  type: 'SINGLE',
  topicId: 1,
  options: [],
  correct: 'A',
};

export const CreateQuestion = memo((props: CreateQuestionProps) => {
  const { className } = props;
  const [question, setQuestion] = useState<CreateData<Question>>(initialQuestion);
  const { search } = useLocation();
  const [createQuestion] = useCreateQuestionMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createQuestion(question);
  };

  const handleChange = (name: keyof Question) => (value: any) => {
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!search) return;
    const params = new URLSearchParams(search);
    const topicId = params.get('topic');
    if (!topicId) return;

    setQuestion((prev) => ({ ...((prev as Question) || {}), topicId: Number(topicId) }));
  }, [search]);

  return (
    <div className={classNames(cls.createQuestion, [className])}>
      <form onSubmit={handleSubmit}>
        <Text type="subtitle-3">Name</Text>
        <Input value={question.name} onChange={handleChange('name')} />

        <Text type="subtitle-3">Description</Text>
        <Input value={question.desc} onChange={handleChange('desc')} />

        {/* <Text type="subtitle-3">Order</Text> */}
        {/* <Input value={question.order} type="number" onChange={handleChange('order')} /> */}

        <Button type="submit" className={cls.btn}>
          Create Question
        </Button>
      </form>
    </div>
  );
});
