import type { ConfigEnv } from 'vite';

type FSDFolders = 'app' | 'pages' | 'widgets' | 'features' | 'entities' | 'shared';
export interface BuildOptions {
  env: Record<string, string>;
  command: ConfigEnv['command'];
  port: number;
  fsdPaths: Record<FSDFolders, string>;
}
