import React, { Component } from 'react';
import Products from '../../../components/products'

import { Button, Form, Input } from 'reactstrap'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import Client from '../client'
import Costs from '../costs'
import { addClient, fetchProducts } from './actions'

import './index.css';

class Step1 extends Component {
  componentDidMount() {
    this.props.dispatch(
      fetchProducts("https://my-project-fzpynewkef.now.sh/")
    )
  }

  render() {
    const { dispatch, error, loading, products } = this.props
    let nameRef, dniRef

    return (
      <div>
        <h1>paso 1</h1>
        <section className="row">
          <div className="col">
            <h3>Añade tus productos</h3>
            <div className="row">
              {
                error? <div>Error: {error}</div>:
                loading? <div>Loading...</div>:
                  <Products products={products}/>
              }
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col">
            <h3>Ingresa tus datos</h3>
            <Form>
              <Client
                name={
                  <Input type="text" name="name" id="name"  
                    innerRef={node => { nameRef = node}}/>
                }
                dni={
                  <Input type="text" name="dni" id="dni" 
                    innerRef={node => { dniRef = node}}/>
                }
              />
            </Form>
          </div>
        </section>
        <section>
          <Costs>
            <Button tag={Link} to="step-2" 
              color="primary" size="lg" block
              onClick={() => {
                const name = nameRef.value.trim()
                const dni = dniRef.value.trim()
                
                dispatch(addClient(name, dni))
              }}>Next</Button>
          </Costs>
        </section>
      </div>
      )
    }
}

const mapStateToProps = state => ({
  ...state.products
})

export default connect(mapStateToProps)(Step1)