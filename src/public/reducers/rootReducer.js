import { combineReducers } from "redux";
import emailAction from './emailReducer'

export default combineReducers({
    email:emailAction
});