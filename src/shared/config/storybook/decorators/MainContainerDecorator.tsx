import { StoryFn } from '@storybook/react';

export const MainContainerDecorator = (StoryComponent: StoryFn) => (
  <div style={{ width: 755 }}>
    <StoryComponent />
  </div>
);
