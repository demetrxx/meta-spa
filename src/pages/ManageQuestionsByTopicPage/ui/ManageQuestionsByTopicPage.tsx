import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { Button, Loader, Text } from 'shared/ui';
import {
  useGetQuestionsByTopicQuery,
  useDeleteQuestionMutation,
  Question,
} from 'entities/Question';
import { useManageContent } from 'shared/lib/hooks';
import { useParams } from 'react-router-dom';
import { routes } from 'app/providers/router';
import cls from './ManageQuestionsByTopicPage.module.scss';

const ManageQuestionsByTopicPage = memo(() => {
  const { topicId } = useParams();

  const {
    data: questions,
    isLoading,
    onEdit,
    onDelete,
    onAdd,
  } = useManageContent<Question>({
    deleteFn: useDeleteQuestionMutation,
    queryFn: useGetQuestionsByTopicQuery,
    queryFnArgs: [Number(topicId)],
    createPathGetter: () => `${routes.getCreateQuestion()}?topicId=${topicId}`,
    editPathGetter: routes.getEditQuestion,
  });

  if (isLoading) return <Loader />;
  if (!questions) return null;

  return (
    <Page className={classNames(cls.authPage)}>
      <Button className={cls.newBtn} onClick={onAdd}>
        + Add Question
      </Button>

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

export default ManageQuestionsByTopicPage;
