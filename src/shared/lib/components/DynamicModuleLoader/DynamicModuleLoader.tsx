import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/store';
import { StateSchemaKey } from 'app/providers/store/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersMap = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

// type ReducersMapEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersMap;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props;

  const store = useStore() as ReduxStoreWithManager; // temporary
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);

      if (!mountedReducers[name as StateSchemaKey]) {
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      Object.entries(reducers).forEach(([name]) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        }
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};
