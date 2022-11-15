import React from 'react';
import { ThemeContextType, Theme } from '../../@types/theme';
import { ThemeContext } from '../../context/themeContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../styles/themes';
import { Stars } from 'styled-icons/bootstrap';

export default function ThemeToggler() {
  const { toggleTheme } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <button onClick={() => toggleTheme()}>
      <Stars width={22.5} height={22.5} color={'#1DA1F2'} />
    </button>
  );
}
