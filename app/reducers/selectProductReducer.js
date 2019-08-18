import * as actions from '../actions/actions';
import * as t from '../types/types';

const initialState = {};

// const initialState = {
//   title: 'Product 2',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   price: '128',
//   id: '15'
// };

const selectProductReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default selectProductReducer;
