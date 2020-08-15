import React from 'react';

import { AppProvider } from './components/common/AppProvider';

import { Button } from './components/button/Button';

function App() {
  return (
    <AppProvider>
      <div>App</div>
      <Button variant="primary">HIII</Button>
    </AppProvider>
  );
}

export default App;
