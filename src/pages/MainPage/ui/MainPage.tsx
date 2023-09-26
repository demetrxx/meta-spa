import { memo } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { usePingMutation } from 'entities/User/api/userApi.ts';
import cls from './MainPage.module.scss';

const line = '"I treat every day like a Monday mornin`, I treat every month like a January..."';

const MainPage = memo(() => {
  const [ping] = usePingMutation();

  return (
    <Page className={classNames(cls.mainPage)}>
      {line}
      <br />
      <br />
      One Up - Central Cee
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => ping}>auth</button>
    </Page>
  );
});

export default MainPage;
