import * as actions from '../actions/actions';
import * as t from '../types/types';

const selectProductReducer = (state = {}, action) => {
  switch (action.type) {
    case t.SELECT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default selectProductReducer;
