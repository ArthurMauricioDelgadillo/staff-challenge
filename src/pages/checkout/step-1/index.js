import React, { Component } from 'react';
import Products from '../../../components/products'

import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { Link } from "react-router-dom";

import './index.css';


const order = {
  subtotal: 52.00,
  get igv() {
    return this.subtotal * 0.18
  },
  get total() {
    return this.subtotal - this.igv
  }
}

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://my-project-fzpynewkef.now.sh/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>paso 1</h1>
          <section className="row">
            <div className="col">
              <h3>Añade tus productos</h3>
              <div className="row">
                <Products value={items}/>
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
              <Button tag={Link} to="step-2" color="primary" size="lg" block>Next</Button>
            </div>
          </section>
        </div>
      )
    }
  }
}

export default Step1;
