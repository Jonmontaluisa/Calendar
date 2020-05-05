export const CREATE_REMINDER = 'CREATE_REMINDER'
export const DELETE_REMINDER = 'DELETE_REMINDER'
export const UPDATE_REMINDER_DATE = 'UPDATE_REMINDER_DATE'
export const UPDATE_REMINDER_TIME = 'UPDATE_REMINDER_TIME'
export const UPDATE_REMINDER_COLOR = 'UPDATE_REMINDER_COLOR'
export const UPDATE_REMINDER_CITY = 'UPDATE_REMINDER_CITY'
export const REMOVE_REMINDER_FROM_DAY = 'REMOVE_REMINDER_FROM_DAY'
export const ADD_REMINDER_TO_DAY = 'ADD_REMINDER_TO_DAY'
export const INCREASE_MONTH = 'INCREASE_MONTH'
export const DECREASE_MONTH = 'DECREASE_MONTH'

export function createReminder(reminder) {
    return { type: CREATE_REMINDER , reminder}
}

export function deleteReminder(reminder) {
    return { type: DELETE_REMINDER , reminder}
}

export function updateReminderDate(reminder) {
    return { type: UPDATE_REMINDER_DATE , reminder}
}

export function updateReminderTime(reminder) {
    return { type: UPDATE_REMINDER_TIME , reminder}
}

export function updateReminderColor(reminder) {
    return { type: UPDATE_REMINDER_COLOR , reminder}
}

export function updateReminderCity(reminder) {
    return { type: UPDATE_REMINDER_CITY , reminder}
}

export function removeReminderFromDay(reminder) {
    return { type: REMOVE_REMINDER_FROM_DAY , reminder}
}

export function addReminderToDay(reminder) {
    return { type: ADD_REMINDER_TO_DAY , reminder}
}

export function increaseMonth() {
    return { type: INCREASE_MONTH}
}

export function decreaseMonth() {
    return { type: DECREASE_MONTH}
}
