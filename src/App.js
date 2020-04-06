import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import store from './store';
import renderRoutes from './utils/renderRoutes';
import routes from './routes';

const App = () => (
  <Provider store={store}>
    <HashRouter>{renderRoutes(routes)}</HashRouter>
  </Provider>
);
export default hot(App);
