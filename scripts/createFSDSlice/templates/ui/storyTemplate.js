export default (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta = {
  title: "${layer}/${componentName}",
  component: ${componentName},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};`;
