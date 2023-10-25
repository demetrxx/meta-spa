import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import CreateQuestionPage from './CreateQuestionPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: CreateQuestionPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof CreateQuestionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
