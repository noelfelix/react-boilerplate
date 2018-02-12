import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { createLogger } from 'redux-logger'; //TODO verify added value alongside redux-devtools
import { Iterable } from 'immutable'

import { getQuery } from './utility'
import { reducer } from './combineReducers';
import { defaultState } from './defaultState'
import createSagaMiddleWare from 'redux-saga';
import { initSagas } from './initSagas';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const logger = createLogger({
  stateTransformer,
});

export const getStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();

  const middleWares = [sagaMiddleWare];
  if (getQuery()['logger'] && process.env.NODE_ENV === `development`) {
    middleWares.push(logger)
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composables = [applyMiddleware(...middleWares)]
  const enhancer = composeEnhancers(
    ...composables
  );
  const store = createStore(
    reducer,
    defaultState,
    enhancer
  );

  initSagas(sagaMiddleWare);
  return store;
};