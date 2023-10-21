// reducers/index.js
import { combineReducers } from 'redux';
import yourReducer from './yourReducer'; // you will create this file next

const rootReducer = combineReducers({
  yourReducer, // add other reducers here
});

export default rootReducer;
