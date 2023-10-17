import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import CreateTopicPage from './CreateTopicPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: CreateTopicPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof CreateTopicPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
