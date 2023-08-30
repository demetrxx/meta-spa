import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import viteStorybookConfig from './vite-storybook.config';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: (config) => mergeConfig(config, viteStorybookConfig),
};
export default config;
