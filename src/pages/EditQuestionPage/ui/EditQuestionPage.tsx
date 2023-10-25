import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { EditQuestion } from 'features/manageQuestions';
import cls from './EditQuestionPage.module.scss';

const EditQuestionPage = memo(() => (
  <Page className={classNames(cls.authPage)}>
    <EditQuestion />
  </Page>
));

export default EditQuestionPage;
