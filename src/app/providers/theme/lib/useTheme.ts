import { useContext } from 'react';
import { THEME_LS_KEY } from 'shared/consts/localStorage';
import { ThemeContext, Theme } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    localStorage.setItem(THEME_LS_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
