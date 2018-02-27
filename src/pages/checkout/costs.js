import React from 'react'
import { soles } from './money'

const order = {
    subtotal: 52.00,
    get igv() {
      return this.subtotal * 0.18
    },
    get total() {
      return this.subtotal - this.igv
    }
  }

export default ({children}) => 
    <div className="row">
        <div className="col-3">
            <p>Subtotal</p>
            <p>IGV</p>
            <p>Total</p>
        </div>
        <div className="col-3">
            <p>{soles(order.subtotal)}</p>
            <p>{soles(order.igv)}</p>
            <p>{soles(order.total)}</p>
        </div>
        <div className="offset-3 col-3">
            {children}
        </div>
    </div>