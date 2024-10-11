import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // CSS dosyanız, opsiyonel
import App from './App'; // Ana bileşeninizin yolu


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // public/index.html içindeki <div id="root"></div>'a render eder
);


