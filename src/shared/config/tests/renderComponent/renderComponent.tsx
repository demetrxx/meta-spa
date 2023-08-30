import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/store';

export interface RenderComponentOptions {
  route?: string;
  initialStore?: DeepPartial<StateSchema>;
}
export function renderComponent(component: ReactNode, options: RenderComponentOptions = {}) {
  const { route = '/', initialStore } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialStore as StateSchema}>{component}</StoreProvider>
    </MemoryRouter>
  );
}
