import {
    INCREASE_MONTH,
    DECREASE_MONTH
}from '../actions/actions'

const month = (state = 4 , action) => {
    switch(action.type){
        case INCREASE_MONTH:
            return state + 1;
        case DECREASE_MONTH:
            const previousMonth = state - 1;
            return previousMonth
        default:
            return state
    }
}

export default month;
