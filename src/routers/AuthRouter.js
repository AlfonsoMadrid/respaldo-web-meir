import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { Login } from '../components/auth/Login';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route 
                    path='/auth'
                    component={Login}
                />
                <Redirect 
                    to='/'
                />
            </Switch>
        </div>
    )
}
