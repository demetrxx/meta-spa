import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ManageQuestionsPage from './ManageQuestionsPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: ManageQuestionsPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ManageQuestionsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
