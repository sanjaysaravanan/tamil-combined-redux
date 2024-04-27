const initialState = {
  products: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_to_cart":
      return {
        ...state,
        products: [...state.products, action.product],
        count: state.count + 1,
      };
    case "remove_from_cart":
      return {
        ...state,
        products: state.products.filter((product) => product.id === action.id),
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
