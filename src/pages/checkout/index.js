import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import Step1 from './step-1'
import Step2 from './step-2'

import NavBar from '../../layout/navbar'

export default ({ match }) => 
    <div>
        <NavBar></NavBar>
        <main className="container">
            <Route path={`${match.path}/step-1`} component={Step1} />
            <Route path={`${match.path}/step-2`} component={Step2} />
            <Route exact path={match.path}
                render={() => <Redirect to={`${match.path}/step-1`} />} />
        </main>
    </div>