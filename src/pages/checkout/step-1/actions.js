import axios from 'axios'

export const ADD_CLIENT = 'ADD_CLIENT'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const ADD_TO_ORDER = 'ADD_TO_ORDER'

export const addClient = (name, dni) => ({
  type: ADD_CLIENT,
  client: {  
    name,
    dni
  }
})

export const fetchProducts = uri => ({
  type: FETCH_PRODUCTS,
  payload: axios(uri)
})

export const addToOrder = (quantity, productId) => ({
  type: ADD_TO_ORDER,
  payload: {
    quantity,
    productId
  }
})
