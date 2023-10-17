import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { useDeleteTopicMutation, useGetAllTopicsQuery } from 'entities/Topic';
import { Button, Text } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import cls from './ManageTopicsPage.module.scss';

const ManageTopicsPage = memo(() => {
  const { data: topics, isLoading } = useGetAllTopicsQuery();
  const [deleteTopic] = useDeleteTopicMutation();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    if (!window.confirm('Are you sure?')) return;

    deleteTopic(id);
  };

  const handleEdit = (id: number) => {
    navigate(`${id}/edit`);
  };
  const handleAdd = () => {
    navigate(`new`);
  };

  if (isLoading) return <>Loading...</>;

  if (!topics) return null;

  return (
    <Page className={classNames(cls.authPage)}>
      <Button className={cls.newBtn} onClick={handleAdd}>
        + Add Topic
      </Button>

      {topics.map(({ name, id, order }) => (
        <div key={id} className={cls.topic}>
          <Text type="subtitle-1">
            {order}. {name}
          </Text>

          <div className={cls.actions}>
            <Button onClick={() => handleEdit(id)}>Edit</Button>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
          </div>
        </div>
      ))}
    </Page>
  );
});

export default ManageTopicsPage;
