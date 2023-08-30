import { StateSchema } from 'app/providers/store';

export const getUserInitialized = (state: StateSchema) => state.user._initialized;
