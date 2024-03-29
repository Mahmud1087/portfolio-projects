import {
  TOGGLE_SIDEBAR,
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_TO_CART,
  SHOW_CART,
  HIDE_CART,
} from '../actions';

const products_reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen };

    case INCREASE_COUNT:
      return { ...state, count: state.count++ };

    case DECREASE_COUNT:
      // state.count <= 0 && state.count = 1
      return {
        ...state,
        count: state.count <= 0 ? (state.count = 1) : state.count--,
      };

    case ADD_TO_CART:
      console.log(state.cartList);
      return {
        ...state,
        cartItems: state.count,
        cartList: [...state.cartList, action.payload],
        // count: (state.count = 1),
      };

    case SHOW_CART:
      return { ...state, isCartOpen: true };

    case HIDE_CART:
      return { ...state, isCartOpen: false };
  }
};

export default products_reducer;
