import * as types from './types';
import getUsers from '../services/user';

export function getUsersAction() {
  return (dispatch) => {
    getUsers().then(users => {
      dispatch({
        type: types.SET_USERS,
        payload: users
      });
    });
  };
}
