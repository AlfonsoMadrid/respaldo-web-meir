import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
  } from "react-router-dom";

import { Dashboard } from '../components/dashboard/Dashboard';
import { Home } from '../components/spa/Home';
//import { Loader } from '../components/ui/Loader';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

    // if (true) {
    //     return (
    //         <Loader />
    //     )
    // }


    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path= '/auth'
                        component={AuthRouter}
                    />
                    <Route 
                        exact
                        path= '/'
                        component={Home}
                    />
                    <Route 
                        path='/dashboard'
                        component={Dashboard}
                    />
                    <Redirect to='/' />
                </Switch>
            </div>
        </Router>
    )
}
