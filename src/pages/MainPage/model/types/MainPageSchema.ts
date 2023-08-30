export type Panel = 'history' | 'sidebar' | 'saved' | 'info' | 'more';

export interface MainPageSchema {
  isInitialScreen: boolean;
  withInitialAnimation: boolean;
  panels: Record<Panel, { opened: boolean }>;
}
