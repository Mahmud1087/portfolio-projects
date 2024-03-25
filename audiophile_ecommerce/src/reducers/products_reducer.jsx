import { TOGGLE_SIDEBAR, PRODUCT_COUNT } from '../actions';

const products_reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen };

    case PRODUCT_COUNT:
      const incDec = action.payload === 'inc' ? state.count++ : state.count--;
      console.log(incDec);
      return { ...state, incDec };
  }
};

export default products_reducer;
