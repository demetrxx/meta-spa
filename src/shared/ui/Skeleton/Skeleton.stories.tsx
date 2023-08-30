import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton.tsx';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: 300,
    height: 30,
  },
};
