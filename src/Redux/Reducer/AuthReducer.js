import * as types from "../Action/actionTypes";
let initialState = {
  user: null,
  basket: [],
  loading: false,
  error: null,
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.Addtobasket:
      const newCart = [...state.basket, action.payload];
      return {
        ...state,
        basket: newCart,
      };
    case types.RemoveFromCart:
      let updatedCart = [...state.basket];
      const index = state.basket.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        updatedCart.splice(index, 1);
      }
      return {
        ...state,
        basket: updatedCart,
      };

    case types.SET_BASKET_EMPTY:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
