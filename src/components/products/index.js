import React from 'react'
import Item from './item'


let quantity = 0;

export default ({ products }) => (
    <div className="products" >
        {products.map(product =>
            <Item key={product.id} {...product} quantity={quantity}
                // increment={() => store.dispatch({ type: INCREMENT, product })}
                // decrement={() => store.dispatch({ type: DECREMENT, product })} 
            />)}
    </div>
)