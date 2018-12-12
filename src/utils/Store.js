import { applyMiddleware, combineReducers, createStore } from 'redux'
import { handleActions } from 'redux-actions'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise'

let store = null

const rootReducer = combineReducers({
  dummy: handleActions({}, {})
})

export const configureStore = () => {
  let middleware = [promiseMiddleware]

  if (process.env.NODE_ENV === 'development') {
    middleware.unshift(createLogger({
      collapsed: true,
      predicate: (getState, action) => !action.type.startsWith('@') && !(action.payload instanceof Promise)
    }))
  }

  store = createStore(rootReducer, {}, applyMiddleware(...middleware))
  return store
}

export const getStore = () => store
