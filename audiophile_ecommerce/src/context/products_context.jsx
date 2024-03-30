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
} from '../actions';
import { products } from '../data';

const ProductsContext = React.createContext();

const initialStates = {
  isSideBarOpen: false,
  isCartOpen: false,
  cartList: [],
  products: products,
  cartItems: 0,
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

  const clearCartItems = () => {
    dispatch({ type: CLEAR_CART });
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContex = () => {
  return useContext(ProductsContext);
};
