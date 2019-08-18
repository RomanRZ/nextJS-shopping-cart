import * as t from '../types/types';

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
