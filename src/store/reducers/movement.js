const initialState = { top: 100, left: 100 };

const movementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "up":
      if (state.top !== 0) {
        return {
          ...state,
          top: state.top - 100,
        };
      }
      return state;
    case "down":
      if (state.top !== 200) {
        return {
          ...state,
          top: state.top + 100,
        };
      }
      return state;
    case "left":
      if (state.left !== 0) {
        return {
          ...state,
          left: state.left - 100,
        };
      }
      return state;
    case "right":
      if (state.left !== 200) {
        return {
          ...state,
          left: state.left + 100,
        };
      }
      return state;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default movementReducer;
