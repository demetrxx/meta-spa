import { defineConfig, loadEnv } from 'vite';
import dns from 'dns';
import path from 'path';
import { buildViteConfig } from './config/build/buildViteConfig';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = 3000;

  const fsdPaths = {
    app: path.resolve(__dirname, 'src', 'app'),
    pages: path.resolve(__dirname, 'src', 'pages'),
    widgets: path.resolve(__dirname, 'src', 'widgets'),
    features: path.resolve(__dirname, 'src', 'features'),
    entities: path.resolve(__dirname, 'src', 'entities'),
    shared: path.resolve(__dirname, 'src', 'shared'),
  };

  return buildViteConfig({
    env,
    command,
    port,
    fsdPaths,
  });
});

dns.setDefaultResultOrder('verbatim');
