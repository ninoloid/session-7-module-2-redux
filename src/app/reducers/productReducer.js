import reducerKeys from "./reducerKeys";

const initialState = {
  products: [],
};

// MANUAL REDUCER SETUP
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case reducerKeys.product.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case reducerKeys.product.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productReducer;
