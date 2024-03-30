import {
  TOGGLE_SIDEBAR,
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_TO_CART,
  SHOW_CART,
  HIDE_CART,
  CLEAR_CART,
} from '../actions';

const products_reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen };

    case INCREASE_COUNT:
      const incAmount = state.products.map((prod) =>
        prod.id === action.payload.id
          ? { ...prod, amount: action.payload.amount + 1 }
          : prod
      );
      return { ...state, products: incAmount };

    case DECREASE_COUNT:
      const decAmount = state.products.map((prod) =>
        prod.id === action.payload.id
          ? {
              ...prod,
              amount:
                action.payload.amount <= 1
                  ? (action.payload.amount = 1)
                  : action.payload.amount - 1,
            }
          : prod
      );
      return {
        ...state,
        products: decAmount,
      };

    case ADD_TO_CART:
      const findObj = state.cartList.find(
        (item) => item.shortName === action.payload.shortName
      );
      return {
        ...state,
        cartList: [...new Set([...state.cartList, findObj || action.payload])],
        cartItems: state.cartList.length + 1,
        // count: (state.count = 1),
      };

    case SHOW_CART:
      return { ...state, isCartOpen: true };

    case HIDE_CART:
      return { ...state, isCartOpen: false };

    case CLEAR_CART:
      return { ...state, cartItems: 0, cartList: [] };

    default:
      throw new Error('No matching type');
  }
};

export default products_reducer;
