import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../themes';

enum ThemeName {
  LIGHT, DARK
}

interface ThemeContextData {
  themeName: ThemeName;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

interface AppThemeProviderProps {
  children: React.ReactNode
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(ThemeName.DARK);

  const isDark = themeName === ThemeName.DARK;

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === ThemeName.LIGHT ? ThemeName.DARK : ThemeName.LIGHT);
  }, []);

  const theme = useMemo(() => {
    if (themeName === ThemeName.LIGHT) return LightTheme;
    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};