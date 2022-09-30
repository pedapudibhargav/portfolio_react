import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export  const ThemeContext = React.createContext();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContext.Provider value='dark'>
      <App />
    </ThemeContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
