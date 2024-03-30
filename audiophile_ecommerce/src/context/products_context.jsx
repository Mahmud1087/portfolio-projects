import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import {
  TOGGLE_SIDEBAR,
  DECREASE_COUNT,
  INCREASE_COUNT,
  ADD_TO_CART,
  SHOW_CART,
  HIDE_CART,
} from '../actions';

const ProductsContext = React.createContext();

const initialStates = {
  isSideBarOpen: false,
  isCartOpen: false,
  cartList: [],
  count: 1,
  cartItems: 0,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const decreaseCount = () => {
    dispatch({ type: DECREASE_COUNT });
  };

  const increaseCount = () => {
    dispatch({ type: INCREASE_COUNT });
  };

  const addToCart = (items) => {
    dispatch({ type: ADD_TO_CART, payload: items });
  };

  const showCart = () => {
    dispatch({ type: SHOW_CART });
  };

  const hideCart = () => {
    dispatch({ type: HIDE_CART });
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContex = () => {
  return useContext(ProductsContext);
};
