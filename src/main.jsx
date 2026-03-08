import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.css';
import Mstudy from "./sections/Mstudy";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Mstudy />
  </React.StrictMode>
);
