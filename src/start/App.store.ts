import createSagaMiddleware from 'redux-saga'
import { compose, createStore, applyMiddleware } from 'redux';

import finalReducer from './App.reducer';
import appSaga from './App.sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

const reduxStore = createStore(
  finalReducer,
  componseEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(appSaga);

export default reduxStore;