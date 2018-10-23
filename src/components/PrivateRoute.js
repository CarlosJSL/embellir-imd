import React from 'react'

import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  authenticated,
  ...props
}) => (
  <Route
    {...props}
    render={(props) => (
      authenticated === true
      ? <Component {...props} />
      : <Redirect to="/" />
    )}
  />
)

export default PrivateRoute