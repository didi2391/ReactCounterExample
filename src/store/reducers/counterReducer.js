import * as actions from "../actions/actionTypes";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return {
        // ...state,
        counter: state.counter + 1
      };
    case actions.DECREMENT_COUNTER:
      return {
        // ...state,
        counter: state.counter - 1
      };
    default:
      return {
        ...state,
        counter: 0
      };
  }
};

export default counterReducer;
