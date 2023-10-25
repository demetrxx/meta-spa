import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import EditQuestionPage from './EditQuestionPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: EditQuestionPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditQuestionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
