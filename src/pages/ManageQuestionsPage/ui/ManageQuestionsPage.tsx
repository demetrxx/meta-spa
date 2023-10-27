import { memo, useEffect, useState } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { Button, Input, Loader, Text } from 'shared/ui';
import { useLocation } from 'react-router-dom';
import { useManageContent } from 'shared/lib/hooks';
import { Question, useDeleteQuestionMutation, useGetQuestionsManyQuery } from 'entities/Question';
import { routes } from 'app/providers/router';
import cls from './ManageQuestionsPage.module.scss';

const ManageQuestionsPage = memo(() => {
  const { search } = useLocation();
  const [topicId, setTopicId] = useState<number | undefined>(undefined);
  const [ticketId, setTicketId] = useState<number | undefined>(undefined);
  const [questionText, setQuestionText] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(search);
    const topicId = params.get('topicId');
    const ticketId = params.get('ticketId');

    if (topicId) {
      setTopicId(Number(topicId));
    }
    if (ticketId) {
      setTicketId(Number(ticketId));
    }
  }, [search]);

  const {
    data: questions,
    isLoading,
    onEdit,
    onDelete,
    onAdd,
  } = useManageContent<Question>({
    deleteFn: useDeleteQuestionMutation,
    queryFn: useGetQuestionsManyQuery,
    queryFnArgs: [{ topicId, ticketId, text: questionText || undefined }],
    createPathGetter: () => `${routes.getCreateQuestion()}`,
    editPathGetter: routes.getEditQuestion,
  });

  if (isLoading) return <Loader />;
  if (!questions) return null;

  return (
    <Page className={classNames(cls.authPage)}>
      <Button className={cls.newBtn} onClick={onAdd}>
        + Add Question
      </Button>

      <Input
        value={questionText}
        onChange={setQuestionText}
        className={cls.search}
        placeholder="Search questions"
      />

      {questions.map(({ name, id }) => (
        <div key={id} className={cls.topic}>
          <Text type="subtitle-1">{name}</Text>

          <div className={cls.actions}>
            <Button onClick={() => onEdit(id)}>Edit</Button>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </div>
        </div>
      ))}
    </Page>
  );
});

export default ManageQuestionsPage;
