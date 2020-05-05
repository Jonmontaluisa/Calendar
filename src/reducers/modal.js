import {
    SHOW_MODAL
}from '../actions/actions'

const modal = (state = false , action) => {
    switch(action.type){
        case SHOW_MODAL:
            return !state;
        default:
            return state
    }
}

export default modal;
