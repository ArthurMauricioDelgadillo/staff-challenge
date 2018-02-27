import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'

import Checkout from './pages/checkout'

export default () =>
    <Router>
        <div>
            <Route exact path="/" 
                render={() => <Redirect to="/checkout" />} />
            <Route path="/checkout" component={Checkout} />
        </div>
    </Router>