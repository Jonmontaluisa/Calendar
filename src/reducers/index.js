import { combineReducers } from 'redux'
import reminders from './reminders'
import month from "./month";
import modal from "./modal";
export default combineReducers({
    reminders,
    month,
    modal
})
