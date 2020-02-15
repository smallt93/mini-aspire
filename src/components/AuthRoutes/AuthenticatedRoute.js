import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({
  authenticated, component: Component, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (authenticated) {
        return <Component {...props} authenticated />;
      }

      const toObj = {
        pathname: '/login',
        state: { from: props.location },
      };
      return <Redirect to={toObj} />;
    }}
  />
);

AuthenticatedRoute.propTypes = {
  component: PropTypes.func,
  authenticated: PropTypes.bool,
  location: PropTypes.any,
};

AuthenticatedRoute.defaultProps = {
  component: () => null,
};

export default AuthenticatedRoute;
