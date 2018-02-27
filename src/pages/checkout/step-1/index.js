import React, { Component } from 'react';
import Products from '../../../components/products'

import { Button, Form, Input} from 'reactstrap'
import { Link } from "react-router-dom";
import Client from '../client'
import Costs from '../costs'
import './index.css';

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
                <Client 
                  name={<Input type="text" name="name" id="name" />}
                  dni={<Input type="text" name="dni" id="dni" />}
                />
              </Form>
            </div>
          </section>
          <section>
            <Costs>
              <Button tag={Link} to="step-2" color="primary" size="lg" block>Next</Button>
            </Costs>
          </section>
        </div>
      )
    }
  }
}

export default Step1;