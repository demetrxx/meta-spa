import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [RouterDecorator, StyleDecorator],
};

export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select light or dark theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark', 'both'],
      dynamicTitle: true,
    },
  },
};
export default preview;
