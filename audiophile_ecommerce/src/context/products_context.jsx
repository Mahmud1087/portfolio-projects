import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import {
  TOGGLE_SIDEBAR,
  DECREASE_COUNT,
  INCREASE_COUNT,
  ADD_TO_CART,
  SHOW_CART,
  HIDE_CART,
  CLEAR_CART,
  CART_TOTAL,
  TOTAL_CART_ITEM,
  VAT_SHIPPING_FEES,
  SHOW_THANK_YOU_MODAL,
  HIDE_THANK_YOU_MODAL,
} from '../actions';
import { products } from '../data';

const ProductsContext = React.createContext();

const initialStates = {
  isSideBarOpen: false,
  isCartOpen: false,
  isModalOpen: false,
  cartList: [],
  products: products,
  cartItems: 0,
  cartTotal: 0,
  vatFee: 0,
  shippingFee: 0,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const decreaseCount = (data) => {
    dispatch({ type: DECREASE_COUNT, payload: data });
  };

  const increaseCount = (data) => {
    dispatch({ type: INCREASE_COUNT, payload: data });
  };

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showCart = () => {
    dispatch({ type: SHOW_CART });
  };

  const hideCart = () => {
    dispatch({ type: HIDE_CART });
  };
  const showModal = () => {
    dispatch({ type: SHOW_THANK_YOU_MODAL });
  };

  const hideModal = () => {
    dispatch({ type: HIDE_THANK_YOU_MODAL });
  };

  const clearCartItems = () => {
    dispatch({ type: CLEAR_CART });
  };

  const totalAmount = () => {
    dispatch({ type: CART_TOTAL });
  };

  const totalCartItem = () => {
    dispatch({ type: TOTAL_CART_ITEM });
  };

  const vatAndShippingFee = () => {
    dispatch({ type: VAT_SHIPPING_FEES });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        toggleSideBar,
        increaseCount,
        decreaseCount,
        addToCart,
        showCart,
        hideCart,
        clearCartItems,
        totalAmount,
        totalCartItem,
        vatAndShippingFee,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContex = () => {
  return useContext(ProductsContext);
};
