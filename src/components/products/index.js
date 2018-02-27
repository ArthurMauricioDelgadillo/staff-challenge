import React from 'react'
import Item from './item'

export default ({value}) => (
    <div className="products" >
        {value.map(Item)}
    </div>
)