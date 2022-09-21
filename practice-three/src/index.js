import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Listado from "./components/Listado";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Listado />
  </React.StrictMode>
);