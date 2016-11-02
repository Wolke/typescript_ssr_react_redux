import {DO} from "./../constants"


export const mainReducer = (state = {}, action) => {
    switch(action.type) {
        case DO.SPEAK:
            return state;

        case DO.LISTEN:
            
            return state;
        default:
            return state;
    }
}