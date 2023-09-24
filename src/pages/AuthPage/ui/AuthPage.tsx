import { memo, useEffect } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { useLocation, useParams } from 'react-router-dom';
import cls from './AuthPage.module.scss';

const GOOGLE_AUTH_URL = 'http://localhost:8000/auth/google';

const AuthPage = memo(() => {
  const { provider } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    if (provider === 'google') {
      const params = new URLSearchParams(search);
      const isSuccess = params.get('success');

      if (!isSuccess) {
        // TODO: show error msg
        const errMsg = params.get('errMsg');
        console.log(errMsg);
        return;
      }

      // TODO: save tokens
      const accessToken = params.get('accessToken');
      const refreshToken = params.get('refreshToken');
      console.log(accessToken, refreshToken);

      const type = params.get('type');

      if (type === 'login') {
        // TODO: login flow
      }

      if (type === 'register') {
        // TODO: register flow
      }

      console.log(type);
    }
  }, [provider, search]);

  return (
    <Page className={classNames(cls.authPage)}>
      <a href={GOOGLE_AUTH_URL}>Continue with Google</a>
    </Page>
  );
});

export default AuthPage;
