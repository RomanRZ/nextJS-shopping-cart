import * as actions from '../actions/actions';
import * as t from '../types/types';


const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case t.PRODUCTS_LOADING_SUCCESS:
      const products = Object.keys(action.payload).map(i => action.payload[i])
      console.log(products)
      return products;
      
    default:
      return state;
  }
};

export default productsReducer;
