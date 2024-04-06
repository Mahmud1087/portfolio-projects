import {
  TOGGLE_SIDEBAR,
  INCREASE_COUNT,
  DECREASE_COUNT,
  ADD_TO_CART,
  // SHOW_CART,
  // HIDE_CART,
  CLEAR_CART,
  CART_TOTAL,
  TOTAL_CART_ITEM,
  VAT_SHIPPING_FEES,
  SHOW_THANK_YOU_MODAL,
  HIDE_THANK_YOU_MODAL,
  TOGGLE_CART,
  CLOSE_SIDEBAR,
} from '../actions';

const products_reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen };

    case CLOSE_SIDEBAR:
      return { ...state, isSideBarOpen: false };

    case INCREASE_COUNT:
      const incAmount = state.products.map((prod) =>
        prod.id === action.payload.id
          ? { ...prod, amount: action.payload.amount + 1 }
          : prod
      );
      const incCartAmount = state.cartList.map((prod) =>
        prod.id === action.payload.id
          ? { ...prod, amount: action.payload.amount + 1 }
          : prod
      );
      return {
        ...state,
        products: incAmount,
        cartList: incCartAmount,
      };

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
      const decCartAmount = state.cartList.map((prod) =>
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
        cartList: decCartAmount,
      };

    case ADD_TO_CART:
      const findObj = state.cartList.find(
        (item) => item.shortName === action.payload.shortName
      );
      return {
        ...state,
        cartList: [...new Set([...state.cartList, findObj || action.payload])],
      };

    // case SHOW_CART:
    //   return { ...state, isCartOpen: true };

    // case HIDE_CART:
    //   return { ...state, isCartOpen: false };

    case TOGGLE_CART:
      return { ...state, isCartOpen: !state.isCartOpen };

    case CLEAR_CART:
      return { ...state, cartItems: 0, cartList: [], cartTotal: 0 };

    case CART_TOTAL:
      const totalAmount = state.cartList.reduce((total, prod) => {
        total += prod.amount * prod.price;
        return total;
      }, 0);
      return { ...state, cartTotal: totalAmount };

    case TOTAL_CART_ITEM:
      return { ...state, cartItems: state.cartList.length };

    case VAT_SHIPPING_FEES:
      const vat = state.cartList.reduce((totalVat, item) => {
        totalVat += item.vat;
        return totalVat;
      }, 0);
      const shipping = state.cartList.reduce((totalShipping, item) => {
        totalShipping += item.shipping;
        return totalShipping;
      }, 0);

      return {
        ...state,
        vatFee: vat,
        shippingFee: shipping,
      };

    case SHOW_THANK_YOU_MODAL:
      return { ...state, isModalOpen: true };

    case HIDE_THANK_YOU_MODAL:
      return { ...state, isModalOpen: false, cartList: [], cartItems: 0 };

    default:
      throw new Error('No matching type');
  }
};

export default products_reducer;
