import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';
import { ResetStyle, GlobalStyle } from './GlobalStyles';

export function AppProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetStyle />
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
}
