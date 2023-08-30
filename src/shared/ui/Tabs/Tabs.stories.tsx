import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabItem } from './Tabs';

const meta = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: TabItem[] = [
  { key: '1', label: 'Tab 1', children: 'Content 1' },
  { key: '2', label: 'Tab 2', children: 'Content 2' },
  { key: '3', label: 'Tab 3', children: 'Content 3' },
];

export const Primary: Story = {
  args: {
    items,
  },
};

export const WithDefaultActive: Story = {
  args: {
    items,
    defaultActive: '2',
  },
};
