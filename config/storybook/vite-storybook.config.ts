import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  root: path.resolve(__dirname, '..', '..'),
  cacheDir: path.resolve(__dirname, '..', '..', 'node_modules', '.cache', 'storybook'),
  define: {
    __PROJECT__: JSON.stringify('storybook'),
    __IS_DEV__: true,
  },
};

export default config;
