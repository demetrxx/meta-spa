import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const Box = () => <div style={{ width: 30, height: 30, borderRadius: 4, background: '#AAAAAA' }} />;
const items = Array(7).fill(<Box />);

const meta = {
  title: 'shared/List',
  component: List,
  tags: ['autodocs'],
  args: { items },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};
