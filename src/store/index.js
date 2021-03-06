import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middleware = [thunk];

const useReduxDevTools = () => {
  return window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;
};
let createStoreWithMiddleware;

createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  useReduxDevTools()
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
