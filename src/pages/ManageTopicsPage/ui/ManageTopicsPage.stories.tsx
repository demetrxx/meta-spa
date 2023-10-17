import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ManageTopicsPage from './ManageTopicsPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: ManageTopicsPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ManageTopicsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
