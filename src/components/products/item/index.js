import React from 'react';
import { Button} from 'reactstrap'
import './index.css'

export default (item) => (
    <div className="product card" key={item.id}>
      <img className="card-img-top" src={item.image} alt={item.name} />
      <div className="card-body">
        <div className="quantity">
          <Button>-</Button>
          <input type="text" value={0}/>
          <Button>+</Button>
        </div>
        <Button block color="primary">ADD</Button>
      </div>
    </div>
  )