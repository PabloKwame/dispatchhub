import React from 'react';
import { redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <redirectedirect to="/login" /> // Redirect to the login page if not authenticated
      )
    }
  />
);

export default PrivateRoute;
