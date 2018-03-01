import React, { Component } from 'react';
import { Button } from 'reactstrap'
import './index.css'

export default class Item extends Component {
  state = {
    quantity: 0
  }
  
  increment = () => {
    this.setState(
      (prevState, props) => ({quantity: prevState.quantity + 1})
    )
  }
  
  decrement = () => {
    this.setState(
      (prevState, props) => ({quantity: prevState.quantity - 1})  
    )
  }
  
  addToOrder = () => {
    const { quantity } = this.state
    const { id, name } = this.props
    alert(`Se ha agregado ${quantity} ${name} a su carrito :)`)
    this.props.addToOrder(quantity, id) 
  }
  
  render() {
    const { image, name, stock } = this.props 
    return (
      <div className="product card">
        <img className="card-img-top" src={image} alt={name} />
        <div className="card-body">
          <div className="quantity">
            <Button {...{ disabled: this.state.quantity <= 0 }} 
              onClick={this.decrement} >-</Button>
            <input disabled type="text" value={this.state.quantity} />
            <Button {...{ disabled: this.state.quantity >= stock }} 
              onClick={this.increment}>+</Button>
          </div>
          <Button block {...{ disabled: this.state.quantity === 0 }}
            color="primary" onClick={this.addToOrder}>ADD</Button>
        </div>
      </div>
    )
  }
}

