import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks';
import { useMemo } from 'react';

export const useActionCreators = (actions: ActionCreatorsMapObject) => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
