import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DummyService from './services/DummyService';
import { ServiceContextProvider } from './ServiceContext';

const dummyService = new DummyService();

ReactDOM.render(
  <React.StrictMode>
    <ServiceContextProvider service={dummyService}>
      <App />
    </ServiceContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
