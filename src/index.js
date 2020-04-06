import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import 'normalize.css';
import './index.css';
import App from './App';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContainer>,
    document.getElementById('root'),
  );
});
