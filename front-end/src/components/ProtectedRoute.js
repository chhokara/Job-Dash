import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useContextValue from '../context';

const ProtectedRoute = ({
  component: Component,
  routeProps,
  componentProps,
}) => {
  const value = useContextValue();
  const accessToken = value?.authenticatedUser?.accessToken;
  // const {
  //   authenticatedUser: { accessToken },
  // } = useContextValue();
  const isAuthenticated = !!accessToken;

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...componentProps} {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
