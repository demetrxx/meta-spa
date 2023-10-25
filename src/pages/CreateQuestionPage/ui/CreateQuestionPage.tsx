import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { CreateQuestion } from 'features/manageQuestions';
import cls from './CreateQuestionPage.module.scss';

const CreateQuestionPage = memo(() => (
  <Page className={classNames(cls.authPage)}>
    <CreateQuestion />
  </Page>
));

export default CreateQuestionPage;
