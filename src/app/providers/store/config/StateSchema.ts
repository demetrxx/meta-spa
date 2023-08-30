import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { UserSchema } from 'entities/User';
import type { MainPageSchema } from 'pages/MainPage';
import { rtkAPI } from 'shared/api/rtkAPI';

export interface StateSchema {
  user: UserSchema;
  mainPage: MainPageSchema;
  [rtkAPI.reducerPath]: ReturnType<typeof rtkAPI.reducer>;
  // Async Reducers
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
