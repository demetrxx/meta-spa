import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ManageTicketsPage from './ManageTicketsPage.tsx';

const meta = {
  title: 'pages/AuthPage',
  component: ManageTicketsPage,
  args: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof ManageTicketsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitialScreen: Story = {};
