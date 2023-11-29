import type { Meta, StoryObj } from '@storybook/react';
import { PaymentsPage } from './PaymentsPage';

const meta = {
  title: 'pages/PaymentsPage/PaymentsPage',
  component: PaymentsPage,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof PaymentsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
