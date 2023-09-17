import React from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from './context/contextAPI';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
