import * as t from '../types/types';

export const addProduct = product => {
  product.quantity = 1;
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
export const deleteProduct = product => {
  return {
    type: t.DELETE_PRODUCT,
    payload: product
  };
};
export const selectProduct = id => {
  return {
    type: t.SELECT_PRODUCT,
    payload: id
  };
};
