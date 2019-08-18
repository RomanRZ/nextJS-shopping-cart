import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';

export function initializeStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
}
