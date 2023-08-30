import { ReactNode, useEffect, useMemo, useState } from 'react';
import { getDefaultTheme } from 'app/providers/theme/lib/getDefaultTheme';
import { Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme = getDefaultTheme();
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme: Theme.LIGHT, setTheme }), []);

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
