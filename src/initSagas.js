import * as sagas from './sagas';

export const initSagas = sagaMiddleware => {
  Object.keys(sagas).map(k => sagas[k]).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}