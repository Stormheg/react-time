import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureApi from '../../utils/Api';
import { configureStore } from '../../utils/Store';

import Home from '../../routes/Home';

const store = configureStore();

configureApi(store);


export default ({ path = '' }) => (
  <Provider store={store}>
    <Router basename={path}>
      <div className="App">
        <Route exact path={window.location.pathname} component={Home} />
      </div>
    </Router>
  </Provider>
);
