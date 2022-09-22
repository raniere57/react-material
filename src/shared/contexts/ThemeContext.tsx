import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../../shared/themes';



interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: IThemeProviderProps) => {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default} >
        <ThemeProvider theme={theme} >
          {children}
        </ThemeProvider>
      </Box>
    </ThemeContext.Provider>
  );
};

