import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = {
  usersInfo: []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_USERS:
      return { ...state, usersInfo: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
 