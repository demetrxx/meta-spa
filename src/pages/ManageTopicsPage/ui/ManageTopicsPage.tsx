import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { Topic, useDeleteTopicMutation, useGetAllTopicsQuery } from 'entities/Topic';
import { Button, Text } from 'shared/ui';
import { useManageContent } from 'shared/lib/hooks';
import { Link } from 'react-router-dom';
import { routes } from 'app/providers/router';
import cls from './ManageTopicsPage.module.scss';

const ManageTopicsPage = memo(() => {
  const {
    onEdit,
    onAdd,
    onDelete,
    isLoading,
    data: topics,
  } = useManageContent<Topic>({
    deleteFn: useDeleteTopicMutation,
    queryFn: useGetAllTopicsQuery,
    createPathGetter: routes.getCreateTopic,
    editPathGetter: routes.getEditTopic,
  });

  if (isLoading) return <>Loading...</>;

  if (!topics) return null;

  return (
    <Page className={classNames(cls.authPage)}>
      <Button className={cls.newBtn} onClick={onAdd}>
        + Add Topic
      </Button>

      {topics.map(({ name, id, order }) => (
        <div key={id} className={cls.topic}>
          <Link to={`${routes.getManageQuestions()}?topicId=${id}`}>
            <Text type="subtitle-1">
              {order}. {name}
            </Text>
          </Link>

          <div className={cls.actions}>
            <Button onClick={() => onEdit(id)}>Edit</Button>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </div>
        </div>
      ))}
    </Page>
  );
});

export default ManageTopicsPage;
