import { TOGGLE_SIDEBAR } from '../actions'

const products_reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, isSideBarOpen: !state.isSideBarOpen }
  }
}

export default products_reducer
