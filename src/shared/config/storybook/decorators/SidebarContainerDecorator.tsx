import { StoryFn } from '@storybook/react';

export const SidebarContainerDecorator = (StoryComponent: StoryFn) => (
  <div style={{ width: 600 }}>
    <StoryComponent />
  </div>
);
