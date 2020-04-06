import * as actionTypes from './types';

const counter = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return state + 1;
    case actionTypes.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
