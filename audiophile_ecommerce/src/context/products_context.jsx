import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import {
  TOGGLE_SIDEBAR,
  DECREASE_COUNT,
  INCREASE_COUNT,
  ADD_TO_CART,
} from '../actions';

const ProductsContext = React.createContext();

const initialStates = {
  isSideBarOpen: false,
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

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        toggleSideBar,
        increaseCount,
        decreaseCount,
        addToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContex = () => {
  return useContext(ProductsContext);
};
