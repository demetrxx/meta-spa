import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import cls from './MainPage.module.scss';

const line = '"I treat every day like a Monday mornin`, I treat every month like a January..."';

const MainPage = memo(() => (
  <Page className={classNames(cls.mainPage)}>
    {line}
    <br />
    <br />
    One Up - Central Cee
  </Page>
));

export default MainPage;
