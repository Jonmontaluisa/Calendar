import {
    CREATE_REMINDER,
    DELETE_REMINDER,
    UPDATE_REMINDER_DATE,
    UPDATE_REMINDER_TIME,
    UPDATE_REMINDER_COLOR,
    UPDATE_REMINDER_CITY,
    REMOVE_REMINDER_FROM_DAY,
    ADD_REMINDER_TO_DAY
}from '../actions/actions'

const reminders = (state = {} , action) => {
    switch(action.type){
        case CREATE_REMINDER:
            const newReminderObject = {
                [action.reminder.id]:{
                    ...action.reminder,
                    status: 'created'
                }
            }
            return Object.assign({}, {...state},  newReminderObject)
        default:
            return state
    }
}

export default reminders;
