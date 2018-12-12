import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { configureApi } from '../../utils/Api'
import { configureStore, getStore } from '../../utils/Store'

const store = configureStore()

configureApi(store)

const Page = () => (
  <div>Pagina</div>
)

export default ({ path = '' }) => (
  <Provider store={store}>
    <Router basename={path}>
      <div className="App">
        <Route exact path="/" component={Page} />
      </div>
    </Router>
  </Provider>
)
