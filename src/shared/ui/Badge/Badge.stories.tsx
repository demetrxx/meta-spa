import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'shared/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    bg: { control: { type: 'color' } },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: '+ 15',
    bg: '#fff',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000', padding: 12 }}>
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    content: '33:03',
    bg: '#000',
    isDark: true,
  },
};
