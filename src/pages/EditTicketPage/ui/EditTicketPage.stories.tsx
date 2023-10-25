import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import EditTicketPage from './EditTicketPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: EditTicketPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof EditTicketPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
