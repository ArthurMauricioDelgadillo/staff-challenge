import React from 'react';
import { Button } from 'reactstrap'
import './index.css'

export default ({ image, name, stock, quantity, increment, decrement }) => (
  <div className="product card">
    <img className="card-img-top" src={image} alt={name} />
    <div className="card-body">
      <div className="quantity">
        <Button {...{ disabled: quantity < 0 }} onClick={increment} >-</Button>
        <input type="text" value={quantity} />
        <Button {...{ disabled: quantity >= stock }} onClick={decrement}>+</Button>
      </div>
      <Button block color="primary">ADD</Button>
    </div>
  </div>
)