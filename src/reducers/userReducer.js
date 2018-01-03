import { types } from '../actions';

const initialState = {
  users: []
};

export default function userReducer(state = initialState, action) {
  switch(action.type) {
    case types.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
