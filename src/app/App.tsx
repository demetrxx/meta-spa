import { Suspense, useEffect } from 'react';
import { PageLoader } from 'widgets/PageLoader';
import { getUserInitialized, initAuthData } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { NavBar } from 'widgets/NavBar';
import { AppRouter } from './providers/router';

export default function App() {
  const dispatch = useAppDispatch();
  const initialized = useSelector(getUserInitialized);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!initialized) return <PageLoader />;

  return (
    <div className="app">
      <NavBar className="navbar" />
      <Suspense fallback={<PageLoader />}>
        <div className="page-content">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
