import React from 'react'
import Item from './item'

export default ({ products, addToOrder }) => (
    <div className="products" >
        {products.map(product =>
            <Item key={product.id} {...product} addToOrder={addToOrder}/>)}
    </div>
)