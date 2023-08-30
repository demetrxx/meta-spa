import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'The same text. Different semantics and styles.',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Body1: Story = {
  args: {
    type: 'body-1',
  },
};
export const Body2: Story = {
  args: {
    type: 'body-2',
  },
};
export const Body3: Story = {
  args: {
    type: 'body-3',
  },
};
export const Body4: Story = {
  args: {
    type: 'body-4',
  },
};
export const Subtitle1: Story = {
  args: {
    type: 'subtitle-1',
  },
};
export const Subtitle2: Story = {
  args: {
    type: 'subtitle-2',
  },
};
export const Subtitle3: Story = {
  args: {
    type: 'subtitle-3',
  },
};
export const Subtitle4: Story = {
  args: {
    type: 'subtitle-4',
  },
};

export const Heading1: Story = {
  args: {
    type: 'heading-1',
  },
};
export const Heading2: Story = {
  args: {
    type: 'heading-2',
  },
};
export const Heading3: Story = {
  args: {
    type: 'heading-3',
  },
};
export const Heading4: Story = {
  args: {
    type: 'heading-4',
  },
};
export const Heading5: Story = {
  args: {
    type: 'heading-5',
  },
};

export const Link1: Story = {
  args: {
    type: 'link-1',
  },
};
export const Link2: Story = {
  args: {
    type: 'link-2',
  },
};
export const Link3: Story = {
  args: {
    type: 'link-3',
  },
};
