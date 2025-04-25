import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import React from 'react';
import Cards from './components/Card.component';

function App() {
  return (
    
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
