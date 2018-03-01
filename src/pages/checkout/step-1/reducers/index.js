import { client } from './client'
import { products } from './products'
import { combineReducers } from 'redux'

const combinedReducer = combineReducers({
    client: client,
    products: products
})

export default combinedReducer