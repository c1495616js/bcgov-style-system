import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;
