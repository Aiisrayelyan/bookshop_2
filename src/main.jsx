import React from 'react';
import { createRoot } from 'react-dom/client';
import { BasketProvider } from './BasketContext'; // Ensure the path is correct
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
