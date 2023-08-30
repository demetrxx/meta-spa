import { Middleware } from '@reduxjs/toolkit';
import { rtkAPI } from 'shared/api/rtkAPI';
import { StateSchema } from './StateSchema';

const interceptorMiddleware: Middleware<{}, StateSchema> = () => (next) => (action) => {
  if (__PROJECT__ === 'storybook' && action.type?.includes('fetch')) {
    return undefined;
  }

  return next(action);
};

export const middlewares = [interceptorMiddleware, rtkAPI.middleware];
