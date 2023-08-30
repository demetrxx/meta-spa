// import { THEME_LS_KEY } from 'shared/consts/localStorage';
import { Theme } from './ThemeContext';

export function getDefaultTheme() {
  // const lsTheme = localStorage.getItem(THEME_LS_KEY) as Theme;
  // if (lsTheme) {
  //   return lsTheme;
  // }

  // const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // if (isSystemDark) {
  //   return Theme.DARK;
  // }

  return Theme.LIGHT;
}
