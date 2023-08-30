import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      {
        value: 'all',
        label: 'Cuisine',
      },
      {
        value: 'mexican',
        label: 'mexican',
      },
      {
        value: 'italian',
        label: 'italian',
      },
    ],
  },
};
