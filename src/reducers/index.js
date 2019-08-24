import { combineReducers } from 'redux';
import List from './list'
import useReducer from './User_reducer'
const allReducers =combineReducers({
     users:List,
     useReducer
})
export default allReducers;