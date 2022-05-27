import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
