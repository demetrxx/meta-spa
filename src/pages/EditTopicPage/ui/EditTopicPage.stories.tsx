import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import EditTopicPage from './EditTopicPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: EditTopicPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditTopicPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
