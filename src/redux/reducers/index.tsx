import { combineReducers } from 'redux';
import counter from './couter';
import sidebar from './sidebar';
import lists from './lists';

// 对应的state的字段名称
export default combineReducers({
  sidebar,
  counter,
  lists
})
