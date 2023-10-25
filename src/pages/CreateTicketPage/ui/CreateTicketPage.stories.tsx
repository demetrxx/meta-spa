import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import CreateTicketPage from './CreateTicketPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: CreateTicketPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof CreateTicketPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
