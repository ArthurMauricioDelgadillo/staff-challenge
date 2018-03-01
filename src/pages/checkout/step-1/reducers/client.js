import { ADD_CLIENT } from '../actions'

export const client = (state = {}, action) => {
    switch(action.type) {
        case ADD_CLIENT: 
            return {...state, client: action.client}
        default:
            return state
    }
}