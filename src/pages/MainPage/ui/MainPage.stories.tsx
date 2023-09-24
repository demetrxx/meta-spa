import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import MainPage from './MainPage';

const meta = {
  title: 'pages/AuthPage',
  component: MainPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};

export const ChatInitializedScreen: Story = {
  decorators: [
    StoreDecorator({
      mainPage: { isInitialScreen: false },
    }),
  ],
};

export const WithSidebar: Story = {
  decorators: [
    StoreDecorator({
      mainPage: { isInitialScreen: false },
    }),
  ],
};
