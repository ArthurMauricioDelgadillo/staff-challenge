import React from 'react'
import './index.css'

import Client from '../client'
import Costs from '../costs'
import { soles } from '../money'

const order = {
    client: {
        name: 'Arthur Mauricio Delgadillo',
        dni: '73646447'
    },
    lines: [
        {
            product: {    
                "id": 1,
                "image": "http://www.telegraph.co.uk/content/dam/food-and-drink/2017/01/04/coffeeS006G8_wwwAlamycom_Heart-shaped-coffee-art-on-a-latte_trans_NvBQzQNjv4BqEDjTm7JpzhSGR1_8ApEWQA1vLvhkMtVb21dMmpQBfEs.jpg?imwidth=450",
                "name": "Cafe Tostado",
                "price": "30.45",
            },
            quantity: 2
        },
        {
            product: {         
                "id": 2,
                "image": "https://www.comedera.com/wp-content/uploads/2016/10/sopa-de-fideos.jpg",
                "name": "Fideos",
                "price": "12.45",
            },
            quantity: 3
        }
    ],
}

const subTotal = line => line.quantity * line.product.price

export default () => 
    <div>
        <h1>paso 2</h1>
        <section className="client row">
            <div className="col">
                <h3>Resumen</h3>
                {order.lines.map(line => 
                    <div className="product row" key={line.product.id}>
                        <div className="col-9 media">
                            <img className="mr-3" src={line.product.image} alt={line.product.name}/>
                            <div className="media-body pt-2">
                                <h5>{line.product.name}</h5>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin.
                                Cras purus odio, vestibulum in vulputate at.
                            </div>
                        </div>
                        <div className="col-3">
                            <p>Cant: {line.quantity}</p>
                            <p>Sub Total: {soles(subTotal(line))}</p>
                        </div>
                    </div>)}
            </div>
        </section>
        <section className="client row">
            <div className="col">
                <h3>Datos del cliente</h3>
                <Client gray
                    name={<p>{order.client.name}</p>}
                    dni={<p>{order.client.dni}</p>}
                />
            </div>
        </section>
        <section>
            <Costs />
        </section>
    </div>