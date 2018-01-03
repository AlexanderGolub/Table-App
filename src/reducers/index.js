import { combineReducers } from 'redux';
import usersInfo from './userReducer';
import tableInfo from './tableReducer';

export default combineReducers({
  usersInfo,
  tableInfo
});
 