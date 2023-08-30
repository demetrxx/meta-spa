import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store';
import { ReducersMap } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersMap = {};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersMap) => (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
