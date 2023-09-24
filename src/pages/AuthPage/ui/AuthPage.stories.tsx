import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import AuthPage from './AuthPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: AuthPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
