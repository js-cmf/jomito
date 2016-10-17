// index.js
import { combineReducers } from 'redux';
import postReducer from './postReducer';

const reducers = combineReducers({
  // if you have multiple reducers you can add them below todo
  // don't modify this
  post: postReducer,
});

export default reducers;
