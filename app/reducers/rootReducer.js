import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import productsReducer from './productsReducer';
import selectProductReducer from './selectProductReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  selectedProduct: selectProductReducer
});
