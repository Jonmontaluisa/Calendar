import { combineReducers } from 'redux'
import reminders from './reminders'
import month from "./month";
export default combineReducers({
    reminders,
    month
})
