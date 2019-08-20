import * as t from '../types/types';
import axios from 'axios';

export const productsIsLoading = (bool) => {
  return {
    type: t.PRODUCTS_IS_LOADING,
    payload: bool
  };
};
export const productsLoadingError = (bool) => {
  return {
    type: t.PRODUCTS_LOADING_ERROR,
    payload: bool
  };
};
export const productsLoadingSuccess = products => {
  return {
    type: t.PRODUCTS_LOADING_SUCCESS,
    payload: products
  };
};

export const fetchProducts = (url) => dispatch => {
  dispatch(productsIsLoading(true));
  return axios.get(url)
  .catch(err => {
    dispatch(productsIsLoading(false));
    dispatch(productsLoadingError(err.message));
    dispatch(productsLoadingSuccess([]))
  })
  .then(data => {
      dispatch(productsIsLoading(false));
      dispatch(productsLoadingSuccess(data.data))
    })
};

export const addProduct = product => {
  return {
    type: t.ADD_PRODUCT,
    payload: product
  };
};

export const incrementProduct = id => {
  return {
    type: t.INCREMENT_PRODUCT,
    payload: id
  };
};
export const subtractProduct = id => {
  return {
    type: t.SUBTRACT_PRODUCT,
    payload: id
  };
};
export const deleteProduct = id => {
  return {
    type: t.DELETE_PRODUCT,
    payload: id
  };
};
export const selectProduct = product => {
  return {
    type: t.SELECT_PRODUCT,
    payload: product
  };
};
