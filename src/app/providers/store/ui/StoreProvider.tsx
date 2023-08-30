import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>);

  return <Provider store={store}>{children}</Provider>;
};
