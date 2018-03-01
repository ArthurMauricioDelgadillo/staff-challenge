import { ADD_TO_ORDER } from '../actions'

export const order = (state = [], action) => {
     switch(action.type) {
        case ADD_TO_ORDER:
            const { quantity, productId } = action.payload
            return [...state, {quantity, productId}]
        default:
            return state
    }
}