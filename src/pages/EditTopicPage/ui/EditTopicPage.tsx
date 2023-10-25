import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { EditTopic } from 'features/manageTopics';
import cls from './EditTopicPage.module.scss';

const EditTopicPage = memo(() => (
  <Page className={classNames(cls.authPage)}>
    <EditTopic />
  </Page>
));

export default EditTopicPage;
