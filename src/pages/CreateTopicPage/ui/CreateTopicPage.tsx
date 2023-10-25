import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { CreateTopic } from 'features/manageTopics';
import cls from './CreateTopicPage.module.scss';

const CreateTopicPage = memo(() => (
  <Page className={classNames(cls.authPage)}>
    <CreateTopic />
  </Page>
));

export default CreateTopicPage;
