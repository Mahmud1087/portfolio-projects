import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { TOGGLE_SIDEBAR } from '../actions'

const ProductsContext = React.createContext()

const initialStates = {
  isSideBarOpen: false,
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  return (
    <ProductsContext.Provider value={{ ...state, toggleSideBar }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContex = () => {
  return useContext(ProductsContext)
}
