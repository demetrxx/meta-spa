import { memo, useEffect } from 'react';
import { Page } from 'widgets/Page';
import { classNames } from 'shared/lib/func';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks';
import cls from './AuthPage.module.scss';

const GOOGLE_AUTH_URL = `${__API_URL__}/auth/google`;

const AuthPage = memo(() => {
  const { provider } = useParams();
  const { search } = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (provider === 'google') {
      const params = new URLSearchParams(search);
      const isSuccess = params.get('success') === 'true';

      if (!isSuccess) {
        // TODO: show error msg
        const errMsg = params.get('errMsg');
        console.error(errMsg);
        return;
      }

      // TODO: save tokens
      const accessToken = params.get('accessToken');
      const refreshToken = params.get('refreshToken');

      if (!accessToken || !refreshToken) {
        console.error('No access or refresh token');
        return;
      }

      dispatch(userActions.setTokens({ accessToken, refreshToken }));

      const type = params.get('type');

      if (type === 'login') {
        // TODO: login flow
      }

      if (type === 'register') {
        // TODO: register flow
      }

      navigate('/');
    }
  }, [dispatch, navigate, provider, search]);

  return (
    <Page className={classNames(cls.authPage)}>
      <a href={GOOGLE_AUTH_URL}>Continue with Google</a>
    </Page>
  );
});

export default AuthPage;
