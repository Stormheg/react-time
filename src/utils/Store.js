import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import homeReducer from '../reducers/home';

let store = null;
export const configureStore = () => {
  const middleware = [promiseMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middleware.unshift(createLogger({
      collapsed: true,
      predicate: (getState, action) => !action.type.startsWith('@') && !(action.payload instanceof Promise),
    }));
  }

  const rootReducer = combineReducers({
    home: homeReducer,
  });

  store = createStore(rootReducer, {}, applyMiddleware(...middleware));
  return store;
};

export const getStore = () => store;
