import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';

import MainLayout from './MainLayout';
import store, { history } from './store';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainLayout />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;