import type { Meta, StoryObj } from '@storybook/react';
import { CopySnack } from './CopySnack';

const meta = {
  title: 'shared/CopySnack',
  component: CopySnack,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CopySnack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
