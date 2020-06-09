import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyPolyfills, defineCustomElements } from 'web-components/loader';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements();
});