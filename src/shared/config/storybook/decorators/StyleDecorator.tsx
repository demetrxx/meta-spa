import 'shared/styles/index.scss';
import { StoryFn, StoryContext } from '@storybook/react';
import { ReactNode } from 'react';
import { Theme } from 'app/providers/theme';

interface FlexProps {
  children: ReactNode;
  className: Theme;
}
const Flex = ({ children, className }: FlexProps) => (
  <div
    className={className}
    style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0 2rem' }}
  >
    {children}
  </div>
);

export const StyleDecorator = (StoryComponent: StoryFn, { globals }: StoryContext) => {
  const { scheme } = globals as { scheme: 'light' | 'dark' | 'both' };

  if (scheme === 'light') {
    return (
      <Flex className={Theme.LIGHT}>
        <StoryComponent />
      </Flex>
    );
  }

  if (scheme === 'dark') {
    return (
      <Flex className={Theme.DARK}>
        <StoryComponent />
      </Flex>
    );
  }

  return (
    <>
      <Flex className={Theme.LIGHT}>
        <StoryComponent />
      </Flex>
      <Flex className={Theme.DARK}>
        <StoryComponent />
      </Flex>
    </>
  );
};
