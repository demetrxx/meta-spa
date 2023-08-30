import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { userReducer } from 'entities/User';
import { mainPageReducer } from 'pages/MainPage';
import { rtkAPI } from 'shared/api/rtkAPI';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';
import { middlewares } from './middlewares';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    mainPage: mainPageReducer,
    [rtkAPI.reducerPath]: rtkAPI.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      const defaultMiddleware = getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      });

      return [...middlewares, ...defaultMiddleware] as typeof defaultMiddleware;
    },
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
