/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('user') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/404' />
            )
        }
    />
)

export default PrivateRoute
