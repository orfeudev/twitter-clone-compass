import React from 'react';
import { ThemeContextType, Theme } from '../../@types/theme';
import { ThemeContext } from '../../context/themeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/themes';

interface Props {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;
  console.log(theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
export default ThemeWrapper;
