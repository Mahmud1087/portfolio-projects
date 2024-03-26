import { TOGGLE_SIDEBAR, INCREASE_COUNT, DECREASE_COUNT } from '../actions';

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
  }
};

export default products_reducer;
