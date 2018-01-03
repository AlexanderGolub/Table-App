import { types } from '../actions';

const initialState = {
  activePage: 0,
  pageSize: 5
};

export default function tableReducer(state = initialState, action) {
  switch(action.type) {
    case types.NEXT_PAGE:
      return {...state, activePage: state.activePage + 1};
    case types.PREV_PAGE:
      return {...state, activePage: state.activePage - 1};
    default:
      return state;
  }
}
