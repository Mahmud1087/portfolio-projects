import React, { useContext, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { TOGGLE_SIDEBAR, DECREASE_COUNT, INCREASE_COUNT } from '../actions';

const ProductsContext = React.createContext();

const initialStates = {
  isSideBarOpen: false,
  count: 1,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates);

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const decreaseCount = (id) => {
    dispatch({ type: DECREASE_COUNT });
  };

  const increaseCount = (id) => {
    dispatch({ type: INCREASE_COUNT });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, toggleSideBar, increaseCount, decreaseCount }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContex = () => {
  return useContext(ProductsContext);
};
