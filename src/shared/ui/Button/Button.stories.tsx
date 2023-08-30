import type { Meta, StoryObj } from '@storybook/react';
import InfoIcon from 'shared/assets/icons/info-alt.svg';
import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me!',
  },
};

export const Icon: Story = {
  args: {
    icon: InfoIcon,
  },
};
