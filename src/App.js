import React, { Component } from 'react';
import NavBar from './layout/navbar'
import Products from './components/products'

import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import './App.css';

const order = {
  subtotal: 52.00,
  get igv() {
    return this.subtotal * 0.18
  },
  get total() {
    return this.subtotal - this.igv
  }
}

const products = [
  {
  "id": 1,
  "image": "http://www.telegraph.co.uk/content/dam/food-and-drink/2017/01/04/coffeeS006G8_wwwAlamycom_Heart-shaped-coffee-art-on-a-latte_trans_NvBQzQNjv4BqEDjTm7JpzhSGR1_8ApEWQA1vLvhkMtVb21dMmpQBfEs.jpg?imwidth=450",
  "name": "Cafe Tostado",
  "price": "30.45",
  "stock": 10
  },
  {
  "id": 2,
  "image": "https://www.comedera.com/wp-content/uploads/2016/10/sopa-de-fideos.jpg",
  "name": "Fideos",
  "price": "12.45",
  "stock": 45
  },
  {
  "id": 3,
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5b4rTPOysoqAPv-9k_lQ3D4dPwOHh_JX2KRQV_oV0uhjazcEPw",
  "name": "sopa de fideos",
  "price": "56.45",
  "stock": 66
  },
  {
    "id": 4,
    "image": "http://www.seriouseats.com/recipes/images/2016/05/20160522-kuut-bi-iik-yucatan-hot-salsa-2-1500x1125.jpg",
    "name": "salsa roja",
    "price": "30.00",
    "stock": 45
    },
    {
    "id": 5,
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/02/cb/46/ca/camaroes-potiguar.jpg",
    "name": "Camarones",
    "price": "10.00",
    "stock": 34
    },
    {
    "id": 6,
    "image": "http://menuperu.pe.s3.amazonaws.com/media/receta/Alb%C3%B3ndigas+de+acelga+y+soya+con+fideos-2464.jpeg",
    "name": "Soya en fideos",
    "price": "11.25",
    "stock": 16
    },
    {
    "id": 7,
    "image": "https://www.comedera.com/wp-content/uploads/2016/10/sopa-de-fideos.jpg",
    "name": "Macarrones",
    "price": "8.25",
    "stock": 6
    },
    {
    "id": 8,
    "image": "http://elestimulo.com/bienmesabe/wp-content/uploads/sites/7/2015/06/fideos-soya-frutos-del-mar-victor-moreno-bms.jpg",
    "name": "Caballa al atun",
    "price": "43.66",
    "stock": 44
    },
    {
    "id": 9,
    "image": "https://estaticos.muyinteresante.es/media/cache/680x_thumb/uploads/images/gallery/5548e20741444aef0ed38eb0/slide-comida-animo.jpg",
    "name": "Cereales con leche",
    "price": "30.00",
    "stock": 11
    }
]

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <main className="container">
          <h1>paso 1</h1>
          <section className="row">
            <div className="col">
              <h3>Añade tus productos</h3>
              <div className="row">
                <Products value={products}/>
              </div>
            </div>
          </section>
          <section className="row">
            <div className="col">
              <h3>Ingresa tus datos</h3>
              <Form>
                <FormGroup row>
                  <Label for="name" sm={6} size="lg">Nombre</Label>
                  <div className="col-sm-6">
                    <Input type="text" name="name" id="name" />
                  </div>
                </FormGroup>
                <FormGroup row>
                  <Label for="dni" sm={6} size="lg">DNI</Label>
                  <div className="col-sm-6">
                    <Input type="text" name="dni" id="dni" />
                  </div>
                </FormGroup>
              </Form>
            </div>
          </section>
          <section className="row">
            <div className="col-2">
              <p>Subtotal</p>
              <p>IGV</p>
              <p>Total</p>
            </div>
            <div className="col-2">
              <p>s/{order.subtotal.toFixed(2)}</p>
              <p>s/{order.igv.toFixed(2)}</p>
              <p>s/{order.total.toFixed(2)}</p>
            </div>
            <div className="offset-5 col-3">
              <Button color="primary" size="lg" block>Next</Button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
