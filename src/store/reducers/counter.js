const initialState = {
  count: 199,
};

// Reducer same as simple reducers but treat action { type: '' , data} as a object
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc_counter":
      return {
        ...state,
        count: state.count + 1,
      };
    case "dec_counter":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset_counter":
      return initialState;
    default:
      return state;
  }
};

export default countReducer;
