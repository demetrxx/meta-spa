import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import type { UserConfig } from 'vite';
import { BuildOptions } from './types/config';

export const buildViteConfig = ({ env, command, port, fsdPaths }: BuildOptions): UserConfig => ({
  resolve: {
    alias: fsdPaths,
  },
  cacheDir: 'node_modules/.cache/.vite',
  plugins: [svgr({ exportAsDefault: true }), react()],
  server: {
    port,
    proxy: {
      '/api': {
        target: env.API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, ''),
      },
    },
  },
  define: {
    __API_URL__: command === 'serve' ? JSON.stringify('/api') : JSON.stringify(env.API_URL),
    __IS_DEV__: command === 'serve',
    __PROJECT__: JSON.stringify('frontend'),
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
